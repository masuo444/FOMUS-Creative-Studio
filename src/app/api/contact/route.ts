import { NextResponse } from 'next/server'
import { allowContact, classifyInquiry, getClientIp, isBot } from '@/lib/inquiry-filter'

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  })
  const data = await res.json()
  if (!res.ok) {
    console.error('Resend error:', JSON.stringify(data))
  }
  return { ok: res.ok, data }
}

export async function POST(request: Request) {
  try {
    const { name, email, company, phone, type, message, website } = await request.json()

    // ボット（おとり欄に入力あり）は何もせず成功を返す
    if (isBot(website)) {
      return NextResponse.json({ success: true })
    }
    if (!allowContact(getClientIp(request))) {
      return NextResponse.json({ error: '送信回数の上限に達しました。時間をおいて再度お試しください。' }, { status: 429 })
    }

    if (!name || !email || !type) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || 'info@fomus.jp'
    const FROM = process.env.EMAIL_FROM || 'FOMUS Creative Studio <noreply@fomus.jp>'

    if (!RESEND_API_KEY || RESEND_API_KEY === 'your_resend_api_key') {
      return NextResponse.json({ error: 'Mail service not configured' }, { status: 500 })
    }

    // 売り込み・営業と判定したものは通知も自動返信も送らない（送信者には成功を返す）
    const verdict = await classifyInquiry({ 会社名: company, お名前: name, メール: email, 種類: type, 内容: message })
    if (verdict === 'sales') {
      console.warn('Contact blocked as sales:', JSON.stringify({ name, email, company, phone, type, message }))
      return NextResponse.json({ success: true })
    }

    // 管理者への通知メール
    const r1 = await sendEmail(RESEND_API_KEY, {
      from: FROM,
      to: [ADMIN_EMAIL],
      subject: `【お問い合わせ】${type}: ${name}${company ? ` (${company})` : ''}`,
      html: `
        <h2>新しいお問い合わせ</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#888;width:120px;">お名前</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#888;">メール</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${email}</td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#888;">会社名</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${company || '未記入'}</td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#888;">電話番号</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${phone || '未記入'}</td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#888;">種類</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${type}</td></tr>
          <tr><td style="padding:8px 12px;color:#888;vertical-align:top;">内容</td><td style="padding:8px 12px;">${message ? message.replace(/\n/g, '<br>') : '未記入'}</td></tr>
        </table>
      `,
    })

    // お客様への自動返信メール
    const r2 = await sendEmail(RESEND_API_KEY, {
      from: FROM,
      to: [email],
      subject: '【FOMUS Creative Studio】お問い合わせを受け付けました',
      html: `
        <p>${name} 様</p>
        <p>お問い合わせいただきありがとうございます。<br>以下の内容で受け付けました。</p>
        <hr style="border:none;border-top:1px solid #eee;margin:20px 0;">
        <p><strong>お問い合わせ種類:</strong> ${type}</p>
        ${message ? `<p><strong>お問い合わせ内容:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
        <hr style="border:none;border-top:1px solid #eee;margin:20px 0;">
        <p>内容を確認の上、1営業日以内にご連絡いたします。</p>
        <p style="color:#888;font-size:13px;margin-top:30px;">
          合同会社FOMUS<br>
          FOMUS Creative Studio<br>
          info@fomus.jp
        </p>
      `,
    })

    return NextResponse.json({ success: r1.ok && r2.ok })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

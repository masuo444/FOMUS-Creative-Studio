import { NextResponse } from 'next/server'

const RESOURCE_URL = 'https://studio.fomus.jp/resources/ai-checklist'

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
    const { name, email, company, phone } = await request.json()

    if (!name || !email || !company) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || 'info@fomus.jp'
    const FROM = process.env.EMAIL_FROM || 'FOMUS Creative Studio <noreply@fomus.jp>'

    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: 'Mail service not configured' }, { status: 500 })
    }

    // お客様に資料リンクを送信
    await sendEmail(RESEND_API_KEY, {
      from: FROM,
      to: [email],
      subject: '【FOMUS Creative Studio】AI導入チェックリストをお届けします',
      html: `
        <p>${name} 様</p>
        <p>資料をご請求いただきありがとうございます。</p>
        <p>以下のリンクから「AI導入チェックリスト」をご覧いただけます。<br>
        ページを開いた後、「印刷 / PDF保存」ボタンからPDFとして保存も可能です。</p>
        <p style="margin:24px 0;">
          <a href="${RESOURCE_URL}" style="display:inline-block;background:#059669;color:#fff;padding:12px 32px;border-radius:9999px;text-decoration:none;font-weight:bold;font-size:15px;">
            チェックリストを見る
          </a>
        </p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0;">
        <p style="font-size:14px;color:#666;">
          チェックリストの結果をもとに、御社に最適なAI活用方法を無料でご提案しています。<br>
          お気軽にご相談ください。
        </p>
        <p style="color:#888;font-size:13px;margin-top:24px;">
          合同会社FOMUS<br>
          FOMUS Creative Studio<br>
          info@fomus.jp<br>
          <a href="https://studio.fomus.jp" style="color:#059669;">studio.fomus.jp</a>
        </p>
      `,
    })

    // 管理者にリード通知
    await sendEmail(RESEND_API_KEY, {
      from: FROM,
      to: [ADMIN_EMAIL],
      subject: `【資料請求】${name}${company ? ` (${company})` : ''}`,
      html: `
        <h2>新しい資料請求</h2>
        <p>AI導入チェックリストの資料請求がありました。</p>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#888;width:100px;">お名前</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#888;">メール</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${email}</td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#888;">会社名</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${company}</td></tr>
          <tr><td style="padding:8px 12px;color:#888;">電話番号</td><td style="padding:8px 12px;">${phone || '未記入'}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Download form error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

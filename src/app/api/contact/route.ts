import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, company, phone, type, message } = await request.json()

    if (!name || !email || !type) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || 'info@fomus.jp'

    if (RESEND_API_KEY) {
      // 管理者への通知メール
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'FOMUS Creative Studio <noreply@fomus.jp>',
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
        }),
      })

      // お客様への自動返信メール
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'FOMUS Creative Studio <noreply@fomus.jp>',
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
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })
    }

    // Send notification email via Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || 'masuo@fomus.co.jp'

    if (RESEND_API_KEY) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'FOMUS <noreply@fomus.co.jp>',
          to: [ADMIN_EMAIL],
          subject: `【FOMUS】新しいお問い合わせ: ${name}${company ? ` (${company})` : ''}`,
          html: `
            <h2>新しいお問い合わせ</h2>
            <p><strong>お名前:</strong> ${name}</p>
            <p><strong>メール:</strong> ${email}</p>
            <p><strong>会社名:</strong> ${company || '未記入'}</p>
            <p><strong>ご相談内容:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
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

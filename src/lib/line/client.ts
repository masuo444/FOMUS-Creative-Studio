import crypto from 'crypto'

export interface LineMessage {
  type: 'text'
  text: string
}

export interface LineEvent {
  type: string
  replyToken: string
  source: {
    type: string
    userId: string
    groupId?: string
  }
  message?: {
    type: string
    id: string
    text?: string
  }
  timestamp: number
}

export interface LineWebhookBody {
  destination: string
  events: LineEvent[]
}

export function verifyLineSignature(
  body: string,
  signature: string,
  channelSecret: string
): boolean {
  const hash = crypto
    .createHmac('SHA256', channelSecret)
    .update(body)
    .digest('base64')
  return hash === signature
}

export async function replyMessage(
  replyToken: string,
  messages: LineMessage[],
  channelAccessToken: string
): Promise<void> {
  await fetch('https://api.line.me/v2/bot/message/reply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${channelAccessToken}`,
    },
    body: JSON.stringify({
      replyToken,
      messages,
    }),
  })
}

export async function pushMessage(
  to: string,
  messages: LineMessage[],
  channelAccessToken: string
): Promise<void> {
  await fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${channelAccessToken}`,
    },
    body: JSON.stringify({
      to,
      messages,
    }),
  })
}

export async function getLineProfile(
  userId: string,
  channelAccessToken: string
): Promise<{ displayName: string; userId: string; pictureUrl?: string } | null> {
  try {
    const res = await fetch(`https://api.line.me/v2/bot/profile/${userId}`, {
      headers: { 'Authorization': `Bearer ${channelAccessToken}` },
    })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

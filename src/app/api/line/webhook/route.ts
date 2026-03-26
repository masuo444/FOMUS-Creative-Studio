import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createAdminClient } from '@/lib/supabase/admin'
import { verifyLineSignature, replyMessage, getLineProfile, type LineWebhookBody } from '@/lib/line/client'
import { detectLanguageFast, type SupportedLanguage } from '@/lib/ai/language-detect'
import { classifyIntent } from '@/lib/ai/intent-classifier'
import { generateResponse } from '@/lib/ai/response-generator'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY || '' })

export async function POST(request: Request) {
  const body = await request.text()
  const signature = request.headers.get('x-line-signature') || ''

  // We need to find which facility this webhook belongs to
  // For now, use a default channel secret for signature verification
  // In production, each facility has its own LINE channel
  const defaultSecret = process.env.LINE_CHANNEL_SECRET
  if (!defaultSecret) {
    return NextResponse.json({ error: 'LINE not configured' }, { status: 500 })
  }

  if (!verifyLineSignature(body, signature, defaultSecret)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  const webhookBody: LineWebhookBody = JSON.parse(body)
  const supabase = createAdminClient()

  for (const event of webhookBody.events) {
    if (event.type !== 'message' || event.message?.type !== 'text') continue

    const userMessage = event.message.text || ''
    const lineUserId = event.source.userId

    // Find facility by LINE channel (for multi-tenant, match by destination)
    // For MVP, use the first active facility with LINE configured
    const { data: facility } = await supabase
      .from('facilities')
      .select('*')
      .eq('line_bot_active', true)
      .limit(1)
      .single()

    if (!facility) {
      await replyMessage(event.replyToken, [{ type: 'text', text: 'サービスは現在準備中です。' }], process.env.LINE_CHANNEL_ACCESS_TOKEN!)
      continue
    }

    try {
      // 1. Detect language
      const detectedLang = (detectLanguageFast(userMessage) || 'en') as SupportedLanguage

      // 2. Classify intent
      const intent = await classifyIntent(anthropic, userMessage)

      // 3. Get conversation history
      const { data: history } = await supabase
        .from('ai_conversations')
        .select('role, content')
        .eq('facility_id', facility.id)
        .eq('channel_user_id', lineUserId)
        .order('created_at', { ascending: false })
        .limit(6)

      const conversationHistory = (history || []).reverse().map(h => ({
        role: h.role as 'user' | 'assistant',
        content: h.content,
      }))

      // 4. Get knowledge base context
      const { data: knowledge } = await supabase
        .from('knowledge_base')
        .select('title, content_ja, content_en, category')
        .eq('facility_id', facility.id)
        .eq('is_active', true)
        .limit(20)

      const knowledgeContext = (knowledge || [])
        .map(k => `[${k.category}] ${k.title}: ${k.content_ja}`)
        .join('\n')

      // 5. Get system prompt
      const { data: promptConfig } = await supabase
        .from('ai_prompt_configs')
        .select('content_ja')
        .eq('industry_type_id', facility.industry_type_id)
        .is('facility_id', null)
        .eq('prompt_type', 'system')
        .single()

      // Check for facility-specific override
      const { data: facilityPrompt } = await supabase
        .from('ai_prompt_configs')
        .select('content_ja')
        .eq('facility_id', facility.id)
        .eq('prompt_type', 'system')
        .single()

      const systemPrompt = facilityPrompt?.content_ja || promptConfig?.content_ja ||
        'You are a helpful AI concierge. Respond in the guest language.'

      // 6. Generate response
      const { response: aiResponse, tokensUsed } = await generateResponse(anthropic, {
        facilityName: facility.name,
        industryType: facility.industry_type_id,
        systemPrompt,
        knowledgeContext,
        conversationHistory,
        userMessage,
        userLanguage: detectedLang,
        intent,
        aiTone: facility.ai_tone,
      })

      // 7. Get user profile
      const profile = await getLineProfile(lineUserId, facility.line_channel_access_token || process.env.LINE_CHANNEL_ACCESS_TOKEN!)

      // 8. Save conversation (user message + AI response)
      await supabase.from('ai_conversations').insert([
        {
          facility_id: facility.id,
          channel: 'line',
          channel_user_id: lineUserId,
          channel_user_name: profile?.displayName,
          detected_language: detectedLang,
          role: 'user',
          content: userMessage,
          intent,
        },
        {
          facility_id: facility.id,
          channel: 'line',
          channel_user_id: lineUserId,
          channel_user_name: profile?.displayName,
          detected_language: detectedLang,
          role: 'assistant',
          content: aiResponse,
          prompt_tokens: tokensUsed.prompt,
          completion_tokens: tokensUsed.completion,
          model_used: 'claude-sonnet-4-6',
          intent,
          is_escalated: intent === 'escalation' || intent === 'complaint',
        },
      ])

      // 9. Reply via LINE
      await replyMessage(
        event.replyToken,
        [{ type: 'text', text: aiResponse }],
        facility.line_channel_access_token || process.env.LINE_CHANNEL_ACCESS_TOKEN!
      )

    } catch (error) {
      console.error('LINE webhook error:', error)
      const errorMessages: Record<string, string> = {
        ja: '申し訳ございません。エラーが発生しました。しばらくしてからお試しください。',
        en: 'Sorry, an error occurred. Please try again later.',
        zh: '很抱歉，发生了错误。请稍后再试。',
        ko: '죄송합니다. 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
      }
      await replyMessage(
        event.replyToken,
        [{ type: 'text', text: errorMessages.ja }],
        process.env.LINE_CHANNEL_ACCESS_TOKEN!
      )
    }
  }

  return NextResponse.json({ status: 'ok' })
}

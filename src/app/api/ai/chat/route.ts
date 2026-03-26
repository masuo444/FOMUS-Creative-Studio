import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { detectLanguageFast, type SupportedLanguage } from '@/lib/ai/language-detect'
import { classifyIntent } from '@/lib/ai/intent-classifier'
import { generateResponse } from '@/lib/ai/response-generator'
import { rateLimit } from '@/lib/rate-limit'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY || '' })

export async function POST(request: Request) {
  // Auth check
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Rate limit
  const { success } = rateLimit(`chat:${user.id}`, 30, 60000)
  if (!success) {
    return NextResponse.json({ error: 'Rate limited' }, { status: 429 })
  }

  try {
    const { facilityId, message, channelUserId } = await request.json()
    if (!facilityId || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const admin = createAdminClient()

    // Verify user has access to facility
    const { data: facility } = await admin
      .from('facilities')
      .select('*')
      .eq('id', facilityId)
      .single()

    if (!facility) {
      return NextResponse.json({ error: 'Facility not found' }, { status: 404 })
    }

    const detectedLang = (detectLanguageFast(message) || 'ja') as SupportedLanguage
    const intent = await classifyIntent(anthropic, message)

    const { data: history } = await admin
      .from('ai_conversations')
      .select('role, content')
      .eq('facility_id', facilityId)
      .eq('channel_user_id', channelUserId || `web:${user.id}`)
      .order('created_at', { ascending: false })
      .limit(6)

    const { data: knowledge } = await admin
      .from('knowledge_base')
      .select('title, content_ja, category')
      .eq('facility_id', facilityId)
      .eq('is_active', true)
      .limit(20)

    const knowledgeContext = (knowledge || [])
      .map(k => `[${k.category}] ${k.title}: ${k.content_ja}`)
      .join('\n')

    const { data: promptConfig } = await admin
      .from('ai_prompt_configs')
      .select('content_ja')
      .eq('industry_type_id', facility.industry_type_id)
      .is('facility_id', null)
      .eq('prompt_type', 'system')
      .single()

    const { response: aiResponse, tokensUsed } = await generateResponse(anthropic, {
      facilityName: facility.name,
      industryType: facility.industry_type_id,
      systemPrompt: promptConfig?.content_ja || 'You are a helpful AI concierge.',
      knowledgeContext,
      conversationHistory: (history || []).reverse().map(h => ({
        role: h.role as 'user' | 'assistant',
        content: h.content,
      })),
      userMessage: message,
      userLanguage: detectedLang,
      intent,
      aiTone: facility.ai_tone,
    })

    // Save
    await admin.from('ai_conversations').insert([
      {
        facility_id: facilityId,
        channel: 'web',
        channel_user_id: channelUserId || `web:${user.id}`,
        detected_language: detectedLang,
        role: 'user',
        content: message,
        intent,
      },
      {
        facility_id: facilityId,
        channel: 'web',
        channel_user_id: channelUserId || `web:${user.id}`,
        detected_language: detectedLang,
        role: 'assistant',
        content: aiResponse,
        prompt_tokens: tokensUsed.prompt,
        completion_tokens: tokensUsed.completion,
        model_used: 'claude-sonnet-4-6',
        intent,
      },
    ])

    return NextResponse.json({ message: aiResponse, language: detectedLang, intent })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

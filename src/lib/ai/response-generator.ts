import Anthropic from '@anthropic-ai/sdk'
import { SupportedLanguage, SUPPORTED_LANGUAGES } from './language-detect'
import { Intent } from './intent-classifier'

interface GenerateResponseParams {
  facilityName: string
  industryType: string
  systemPrompt: string
  knowledgeContext: string
  conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }>
  userMessage: string
  userLanguage: SupportedLanguage
  intent: Intent
  aiTone?: string
}

export async function generateResponse(
  anthropic: Anthropic,
  params: GenerateResponseParams
): Promise<{ response: string; tokensUsed: { prompt: number; completion: number } }> {
  const {
    facilityName,
    industryType,
    systemPrompt,
    knowledgeContext,
    conversationHistory,
    userMessage,
    userLanguage,
    intent,
    aiTone = 'polite',
  } = params

  const languageName = SUPPORTED_LANGUAGES[userLanguage] || 'English'

  const fullSystemPrompt = `${systemPrompt.replace(/{facility_name}/g, facilityName)}

## Response Rules
- ALWAYS respond in ${languageName} (${userLanguage})
- Keep responses concise (2-4 sentences max)
- Be ${aiTone === 'casual' ? 'friendly and casual' : 'polite and professional'}
- If you don't know something, say "I'll check with our staff" in the guest's language
- For emergencies or complaints, indicate that you're connecting them with staff
- Never make up information not in the knowledge base below
${intent === 'escalation' ? '- The guest wants to speak with a human. Acknowledge this and let them know staff will be notified.' : ''}

## Facility Knowledge Base
${knowledgeContext || 'No specific knowledge base configured yet. Answer generally based on the industry type: ' + industryType}

## Current Context
- Industry: ${industryType}
- Guest Language: ${languageName}
- Detected Intent: ${intent}`

  const messages = [
    ...conversationHistory.slice(-6).map(m => ({
      role: m.role as 'user' | 'assistant',
      content: m.content,
    })),
    { role: 'user' as const, content: userMessage },
  ]

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 500,
    system: fullSystemPrompt,
    messages,
  })

  const text = response.content[0].type === 'text' ? response.content[0].text : ''

  return {
    response: text,
    tokensUsed: {
      prompt: response.usage.input_tokens,
      completion: response.usage.output_tokens,
    },
  }
}

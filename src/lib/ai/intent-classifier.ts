import Anthropic from '@anthropic-ai/sdk'

export type Intent =
  | 'greeting'
  | 'reservation'
  | 'inquiry'
  | 'complaint'
  | 'review_response'
  | 'faq'
  | 'menu'
  | 'directions'
  | 'hours'
  | 'escalation'
  | 'farewell'
  | 'other'

const INTENT_PROMPT = `Classify the user message intent into exactly one of these categories:
- greeting: Hello, hi, good morning, etc.
- reservation: Booking, changing, cancelling reservations
- inquiry: General questions about the facility
- complaint: Negative feedback, problems, issues
- faq: Common questions (wifi, parking, checkout time, etc.)
- menu: Questions about menu, treatments, services offered
- directions: How to get there, address, transportation
- hours: Business hours, check-in/out times
- escalation: Requests to speak to a human/manager
- farewell: Goodbye, thank you, etc.
- other: Anything else

Respond with ONLY the category name, nothing else.`

export async function classifyIntent(
  anthropic: Anthropic,
  message: string
): Promise<Intent> {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 20,
      system: INTENT_PROMPT,
      messages: [{ role: 'user', content: message }],
    })

    const text = response.content[0].type === 'text'
      ? response.content[0].text.trim().toLowerCase()
      : 'other'

    const validIntents: Intent[] = [
      'greeting', 'reservation', 'inquiry', 'complaint',
      'faq', 'menu', 'directions', 'hours', 'escalation', 'farewell', 'other'
    ]

    return validIntents.includes(text as Intent) ? (text as Intent) : 'other'
  } catch {
    return 'other'
  }
}

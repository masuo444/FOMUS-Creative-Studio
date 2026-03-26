import Anthropic from '@anthropic-ai/sdk'

interface GenerateReviewReplyParams {
  facilityName: string
  industryType: string
  reviewerName: string
  rating: number
  reviewBody: string
  reviewLanguage: string
  aiTone?: string
}

export async function generateReviewReply(
  anthropic: Anthropic,
  params: GenerateReviewReplyParams
): Promise<string> {
  const { facilityName, industryType, reviewerName, rating, reviewBody, reviewLanguage, aiTone = 'polite' } = params

  const systemPrompt = `You are writing a review reply on behalf of ${facilityName} (${industryType}).

## Rules
- Reply in the SAME language as the review (${reviewLanguage})
- Be ${aiTone === 'casual' ? 'warm and casual' : 'professional and gracious'}
- Thank the reviewer by name if available
- If rating >= 4: Express gratitude, highlight what they enjoyed, invite them back
- If rating 3: Thank them, acknowledge feedback, mention improvements
- If rating <= 2: Sincerely apologize, address specific concerns, offer to make it right
- Keep reply concise (3-5 sentences)
- Never be defensive or argue with the reviewer
- Do not use generic/templated language - be specific to what they mentioned`

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 300,
    system: systemPrompt,
    messages: [{
      role: 'user',
      content: `Review by ${reviewerName || 'Guest'} (${rating}/5 stars):\n\n${reviewBody}`,
    }],
  })

  return response.content[0].type === 'text' ? response.content[0].text : ''
}

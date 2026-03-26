import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { generateReviewReply } from '@/lib/ai/review-reply-generator'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY || '' })

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { reviewId } = await request.json()
    if (!reviewId) {
      return NextResponse.json({ error: 'Missing reviewId' }, { status: 400 })
    }

    const admin = createAdminClient()

    const { data: review } = await admin
      .from('reviews')
      .select('*, facility:facilities(name, industry_type_id, ai_tone)')
      .eq('id', reviewId)
      .single()

    if (!review || !review.facility) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 })
    }

    const reply = await generateReviewReply(anthropic, {
      facilityName: review.facility.name,
      industryType: review.facility.industry_type_id,
      reviewerName: review.reviewer_name || '',
      rating: review.rating || 3,
      reviewBody: review.body || '',
      reviewLanguage: review.original_language || 'ja',
      aiTone: review.facility.ai_tone,
    })

    // Save draft reply
    const { data: savedReply } = await admin
      .from('review_replies')
      .insert({
        review_id: reviewId,
        draft_content: reply,
        language: review.original_language || 'ja',
        status: 'draft',
        model_used: 'claude-sonnet-4-6',
      })
      .select()
      .single()

    // Update review status
    await admin
      .from('reviews')
      .update({ reply_status: 'ai_drafted' })
      .eq('id', reviewId)

    return NextResponse.json({ reply: savedReply })
  } catch (error) {
    console.error('Review reply error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

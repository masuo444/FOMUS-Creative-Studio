// ============================================================
// OMOTE-AI Type Definitions
// ============================================================

export type IndustryType = 'hotel' | 'restaurant' | 'salon' | 'clinic' | 'retail'

export type Plan = 'free' | 'light' | 'standard' | 'premium'

export type Channel = 'line' | 'whatsapp' | 'web' | 'google_bm'

export type ConversationRole = 'user' | 'assistant' | 'system'

export type Intent =
  | 'greeting' | 'reservation' | 'inquiry' | 'complaint'
  | 'faq' | 'menu' | 'directions' | 'hours'
  | 'escalation' | 'farewell' | 'other'

export type Sentiment = 'positive' | 'neutral' | 'negative' | 'mixed'

export type ReviewReplyStatus = 'pending' | 'ai_drafted' | 'approved' | 'published' | 'skipped'

export type BookingStatus = 'pending' | 'confirmed' | 'checked_in' | 'completed' | 'no_show' | 'cancelled'

export interface Facility {
  id: string
  owner_id: string
  industry_type_id: IndustryType
  name: string
  slug: string
  description: string | null
  timezone: string
  default_language: string
  supported_languages: string[]
  address: string | null
  phone: string | null
  website_url: string | null
  logo_url: string | null
  business_hours: Record<string, unknown>
  line_channel_secret: string | null
  line_channel_access_token: string | null
  line_bot_active: boolean
  stripe_customer_id: string | null
  stripe_subscription_id: string | null
  plan: Plan
  plan_expires_at: string | null
  ai_tone: string | null
  ai_greeting_ja: string | null
  ai_greeting_en: string | null
  settings: Record<string, unknown>
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface FacilityMember {
  id: string
  facility_id: string
  user_id: string
  role: 'owner' | 'admin' | 'manager' | 'staff'
  is_active: boolean
  created_at: string
}

export interface KnowledgeItem {
  id: string
  facility_id: string
  category: string
  title: string
  content_ja: string
  content_en: string | null
  content_zh: string | null
  content_ko: string | null
  metadata: Record<string, unknown>
  tags: string[]
  sort_order: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Conversation {
  id: string
  facility_id: string
  channel: Channel
  channel_user_id: string
  channel_user_name: string | null
  detected_language: string
  role: ConversationRole
  content: string
  translated_content: string | null
  prompt_tokens: number | null
  completion_tokens: number | null
  model_used: string | null
  intent: string | null
  sentiment: Sentiment | null
  is_escalated: boolean
  created_at: string
}

export interface Review {
  id: string
  facility_id: string
  connection_id: string
  platform_review_id: string
  reviewer_name: string | null
  rating: number | null
  body: string | null
  original_language: string | null
  translated_body_ja: string | null
  sentiment: Sentiment | null
  ai_summary: string | null
  ai_tags: string[] | null
  reply_status: ReviewReplyStatus
  reviewed_at: string
  created_at: string
}

export interface ReviewReply {
  id: string
  review_id: string
  draft_content: string
  edited_content: string | null
  published_content: string | null
  language: string
  status: string
  approved_by: string | null
  approved_at: string | null
  published_at: string | null
  model_used: string | null
  created_at: string
  updated_at: string
}

export interface Booking {
  id: string
  facility_id: string
  external_booking_id: string | null
  external_system: string | null
  guest_name: string
  guest_email: string | null
  guest_phone: string | null
  guest_language: string
  guest_count: number
  channel_user_id: string | null
  booking_type: string
  details: Record<string, unknown>
  check_in_at: string
  check_out_at: string | null
  total_amount: number | null
  currency: string
  status: BookingStatus
  internal_note: string | null
  created_at: string
  updated_at: string
}

export const INDUSTRY_INFO: Record<IndustryType, { label: string; icon: string; color: string }> = {
  hotel:      { label: '旅館・ホテル', icon: '🏨', color: 'bg-blue-50 text-blue-700' },
  restaurant: { label: '飲食店',       icon: '🍽️', color: 'bg-orange-50 text-orange-700' },
  salon:      { label: '美容・サロン', icon: '💇', color: 'bg-pink-50 text-pink-700' },
  clinic:     { label: 'クリニック',   icon: '🏥', color: 'bg-green-50 text-green-700' },
  retail:     { label: '小売',         icon: '🛍️', color: 'bg-purple-50 text-purple-700' },
}

export const PLAN_INFO: Record<Plan, { label: string; price: number; color: string }> = {
  free:     { label: 'Free',     price: 0,     color: 'bg-gray-100 text-gray-600' },
  light:    { label: 'Light',    price: 9800,  color: 'bg-blue-100 text-blue-700' },
  standard: { label: 'Standard', price: 29800, color: 'bg-indigo-100 text-indigo-700' },
  premium:  { label: 'Premium',  price: 59800, color: 'bg-amber-100 text-amber-700' },
}

export const CHANNEL_INFO: Record<Channel, { label: string; icon: string }> = {
  line:      { label: 'LINE',     icon: '💬' },
  whatsapp:  { label: 'WhatsApp', icon: '📱' },
  web:       { label: 'Web',      icon: '🌐' },
  google_bm: { label: 'Google',   icon: '📧' },
}

-- ============================================================
-- OMOTE-AI: 接客業向けAI多言語コンシェルジュ
-- Migration 100: Core Schema
-- ============================================================

-- 業種マスター
CREATE TABLE IF NOT EXISTS industry_types (
  id TEXT PRIMARY KEY,
  name_ja TEXT NOT NULL,
  name_en TEXT NOT NULL,
  icon TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO industry_types (id, name_ja, name_en, sort_order) VALUES
  ('hotel',      '旅館・ホテル', 'Hotel / Ryokan', 1),
  ('restaurant', '飲食店',       'Restaurant',      2),
  ('salon',      '美容・サロン', 'Beauty Salon',    3),
  ('clinic',     'クリニック',   'Clinic',          4),
  ('retail',     '小売',         'Retail',          5)
ON CONFLICT (id) DO NOTHING;

-- 施設（マルチテナントの基本単位）
CREATE TABLE IF NOT EXISTS facilities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  industry_type_id TEXT NOT NULL REFERENCES industry_types(id),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  timezone TEXT NOT NULL DEFAULT 'Asia/Tokyo',
  default_language TEXT NOT NULL DEFAULT 'ja',
  supported_languages TEXT[] NOT NULL DEFAULT '{ja,en}',
  address TEXT,
  phone TEXT,
  website_url TEXT,
  logo_url TEXT,
  business_hours JSONB DEFAULT '{}',
  -- LINE連携
  line_channel_secret TEXT,
  line_channel_access_token TEXT,
  line_bot_active BOOLEAN NOT NULL DEFAULT false,
  -- Stripe
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  plan TEXT NOT NULL DEFAULT 'free' CHECK (plan IN ('free', 'light', 'standard', 'premium')),
  plan_expires_at TIMESTAMPTZ,
  -- AI設定
  ai_tone TEXT DEFAULT 'polite',
  ai_greeting_ja TEXT,
  ai_greeting_en TEXT,
  -- メタ
  settings JSONB NOT NULL DEFAULT '{}',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_facilities_owner ON facilities(owner_id);
CREATE INDEX idx_facilities_industry ON facilities(industry_type_id);
CREATE INDEX idx_facilities_slug ON facilities(slug);

-- 施設メンバー
CREATE TABLE IF NOT EXISTS facility_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  facility_id UUID NOT NULL REFERENCES facilities(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'staff' CHECK (role IN ('owner', 'admin', 'manager', 'staff')),
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(facility_id, user_id)
);

CREATE INDEX idx_facility_members_user ON facility_members(user_id);

-- テンプレートカテゴリ
CREATE TABLE IF NOT EXISTS template_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  industry_type_id TEXT NOT NULL REFERENCES industry_types(id),
  slug TEXT NOT NULL,
  name_ja TEXT NOT NULL,
  name_en TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(industry_type_id, slug)
);

-- Insert all industry template categories
-- Hotel categories
INSERT INTO template_categories (industry_type_id, slug, name_ja, name_en, sort_order) VALUES
  ('hotel', 'checkin', 'チェックイン案内', 'Check-in Guide', 1),
  ('hotel', 'checkout', 'チェックアウト案内', 'Check-out Guide', 2),
  ('hotel', 'facility', '館内施設案内', 'Facility Guide', 3),
  ('hotel', 'meal', 'お食事案内', 'Dining Guide', 4),
  ('hotel', 'onsen', '温泉・大浴場案内', 'Onsen Guide', 5),
  ('hotel', 'amenity', 'アメニティ案内', 'Amenity Info', 6),
  ('hotel', 'nearby', '周辺観光案内', 'Nearby Attractions', 7),
  ('hotel', 'transport', '交通アクセス', 'Transportation', 8),
  ('hotel', 'emergency', '緊急時対応', 'Emergency', 9),
  -- Restaurant
  ('restaurant', 'menu', 'メニュー説明', 'Menu Info', 1),
  ('restaurant', 'allergy', 'アレルギー対応', 'Allergy Info', 2),
  ('restaurant', 'booking', '予約確認', 'Reservation', 3),
  ('restaurant', 'wait', '待ち時間案内', 'Wait Time', 4),
  ('restaurant', 'recommend', 'おすすめ案内', 'Recommendations', 5),
  ('restaurant', 'payment', 'お支払い案内', 'Payment Info', 6),
  ('restaurant', 'takeout', 'テイクアウト案内', 'Takeout Info', 7),
  -- Salon
  ('salon', 'treatment', '施術メニュー説明', 'Treatment Menu', 1),
  ('salon', 'booking', '予約リマインド', 'Booking Reminder', 2),
  ('salon', 'aftercare', 'アフターケア案内', 'Aftercare Guide', 3),
  ('salon', 'stylist', 'スタイリスト紹介', 'Stylist Intro', 4),
  ('salon', 'campaign', 'キャンペーン案内', 'Campaign Info', 5),
  ('salon', 'cancel', 'キャンセルポリシー', 'Cancel Policy', 6),
  -- Clinic
  ('clinic', 'department', '診療科案内', 'Department Info', 1),
  ('clinic', 'insurance', '保険説明', 'Insurance Info', 2),
  ('clinic', 'appointment', '予約確認', 'Appointment Confirm', 3),
  ('clinic', 'medication', '服薬リマインド', 'Medication Reminder', 4),
  ('clinic', 'preparation', '来院前準備', 'Pre-visit Prep', 5),
  -- Retail
  ('retail', 'product', '商品案内', 'Product Info', 1),
  ('retail', 'stock', '在庫確認', 'Stock Check', 2),
  ('retail', 'reserve', '取り置き案内', 'Product Reserve', 3),
  ('retail', 'delivery', '配送案内', 'Delivery Info', 4),
  ('retail', 'return', '返品・交換案内', 'Return Policy', 5)
ON CONFLICT (industry_type_id, slug) DO NOTHING;

-- ナレッジベース
CREATE TABLE IF NOT EXISTS knowledge_base (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  facility_id UUID NOT NULL REFERENCES facilities(id) ON DELETE CASCADE,
  category TEXT NOT NULL CHECK (category IN (
    'facility_info', 'faq', 'menu', 'access', 'policy',
    'amenity', 'nearby', 'event', 'custom'
  )),
  title TEXT NOT NULL,
  content_ja TEXT NOT NULL DEFAULT '',
  content_en TEXT,
  content_zh TEXT,
  content_ko TEXT,
  metadata JSONB NOT NULL DEFAULT '{}',
  tags TEXT[] DEFAULT '{}',
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_knowledge_facility ON knowledge_base(facility_id);
CREATE INDEX idx_knowledge_category ON knowledge_base(facility_id, category);

-- AI会話ログ
CREATE TABLE IF NOT EXISTS ai_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  facility_id UUID NOT NULL REFERENCES facilities(id) ON DELETE CASCADE,
  channel TEXT NOT NULL DEFAULT 'line' CHECK (channel IN ('line', 'whatsapp', 'web', 'google_bm')),
  channel_user_id TEXT NOT NULL,
  channel_user_name TEXT,
  detected_language TEXT NOT NULL DEFAULT 'ja',
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  translated_content TEXT,
  prompt_tokens INTEGER,
  completion_tokens INTEGER,
  model_used TEXT,
  intent TEXT,
  sentiment TEXT CHECK (sentiment IN ('positive', 'neutral', 'negative')),
  is_escalated BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_conversations_facility ON ai_conversations(facility_id);
CREATE INDEX idx_conversations_channel_user ON ai_conversations(channel_user_id);
CREATE INDEX idx_conversations_created ON ai_conversations(created_at DESC);

-- レビュープラットフォームマスター
CREATE TABLE IF NOT EXISTS review_platforms (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  name_ja TEXT NOT NULL,
  api_available BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO review_platforms (id, name, name_ja, api_available) VALUES
  ('google', 'Google', 'Google', true),
  ('booking_com', 'Booking.com', 'Booking.com', true),
  ('tripadvisor', 'TripAdvisor', 'TripAdvisor', true),
  ('jalan', 'Jalan', 'じゃらん', false),
  ('rakuten_travel', 'Rakuten Travel', '楽天トラベル', false),
  ('tabelog', 'Tabelog', '食べログ', false),
  ('hotpepper', 'Hot Pepper', 'ホットペッパー', false),
  ('hotpepper_beauty', 'Hot Pepper Beauty', 'ホットペッパービューティー', false),
  ('minimo', 'minimo', 'minimo', false),
  ('epark', 'EPARK', 'EPARK', false)
ON CONFLICT (id) DO NOTHING;

-- 業種×レビュープラットフォーム対応表
CREATE TABLE IF NOT EXISTS industry_review_platforms (
  industry_type_id TEXT NOT NULL REFERENCES industry_types(id),
  review_platform_id TEXT NOT NULL REFERENCES review_platforms(id),
  is_primary BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (industry_type_id, review_platform_id)
);

INSERT INTO industry_review_platforms (industry_type_id, review_platform_id, is_primary, sort_order) VALUES
  ('hotel', 'google', true, 1), ('hotel', 'booking_com', false, 2),
  ('hotel', 'tripadvisor', false, 3), ('hotel', 'jalan', false, 4),
  ('hotel', 'rakuten_travel', false, 5),
  ('restaurant', 'google', true, 1), ('restaurant', 'tabelog', false, 2),
  ('restaurant', 'hotpepper', false, 3),
  ('salon', 'google', true, 1), ('salon', 'hotpepper_beauty', false, 2),
  ('salon', 'minimo', false, 3),
  ('clinic', 'google', true, 1), ('clinic', 'epark', false, 2),
  ('retail', 'google', true, 1)
ON CONFLICT DO NOTHING;

-- 施設×レビュー接続
CREATE TABLE IF NOT EXISTS facility_review_connections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  facility_id UUID NOT NULL REFERENCES facilities(id) ON DELETE CASCADE,
  review_platform_id TEXT NOT NULL REFERENCES review_platforms(id),
  external_place_id TEXT,
  external_url TEXT,
  api_credentials JSONB DEFAULT '{}',
  sync_enabled BOOLEAN NOT NULL DEFAULT true,
  last_synced_at TIMESTAMPTZ,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'paused', 'error', 'disconnected')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(facility_id, review_platform_id)
);

-- レビュー
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  facility_id UUID NOT NULL REFERENCES facilities(id) ON DELETE CASCADE,
  connection_id UUID NOT NULL REFERENCES facility_review_connections(id) ON DELETE CASCADE,
  platform_review_id TEXT NOT NULL,
  reviewer_name TEXT,
  rating NUMERIC(2,1),
  body TEXT,
  original_language TEXT,
  translated_body_ja TEXT,
  sentiment TEXT CHECK (sentiment IN ('positive', 'neutral', 'negative', 'mixed')),
  ai_summary TEXT,
  ai_tags TEXT[],
  reply_status TEXT NOT NULL DEFAULT 'pending'
    CHECK (reply_status IN ('pending', 'ai_drafted', 'approved', 'published', 'skipped')),
  reviewed_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(connection_id, platform_review_id)
);

CREATE INDEX idx_reviews_facility ON reviews(facility_id);
CREATE INDEX idx_reviews_status ON reviews(reply_status);

-- レビュー返信
CREATE TABLE IF NOT EXISTS review_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  review_id UUID NOT NULL REFERENCES reviews(id) ON DELETE CASCADE,
  draft_content TEXT NOT NULL,
  edited_content TEXT,
  published_content TEXT,
  language TEXT NOT NULL DEFAULT 'ja',
  status TEXT NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft', 'pending_approval', 'approved', 'published', 'rejected')),
  approved_by UUID REFERENCES auth.users(id),
  approved_at TIMESTAMPTZ,
  published_at TIMESTAMPTZ,
  model_used TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 予約（統一モデル）
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  facility_id UUID NOT NULL REFERENCES facilities(id) ON DELETE CASCADE,
  external_booking_id TEXT,
  external_system TEXT,
  guest_name TEXT NOT NULL,
  guest_email TEXT,
  guest_phone TEXT,
  guest_language TEXT DEFAULT 'ja',
  guest_count INTEGER NOT NULL DEFAULT 1,
  channel_user_id TEXT,
  booking_type TEXT NOT NULL DEFAULT 'standard'
    CHECK (booking_type IN ('standard', 'room', 'table', 'treatment', 'appointment')),
  details JSONB NOT NULL DEFAULT '{}',
  check_in_at TIMESTAMPTZ NOT NULL,
  check_out_at TIMESTAMPTZ,
  total_amount INTEGER,
  currency TEXT DEFAULT 'JPY',
  status TEXT NOT NULL DEFAULT 'confirmed'
    CHECK (status IN ('pending', 'confirmed', 'checked_in', 'completed', 'no_show', 'cancelled')),
  internal_note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_bookings_facility ON bookings(facility_id);
CREATE INDEX idx_bookings_checkin ON bookings(check_in_at);
CREATE INDEX idx_bookings_status ON bookings(status);

-- AI プロンプト設定
CREATE TABLE IF NOT EXISTS ai_prompt_configs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  industry_type_id TEXT NOT NULL REFERENCES industry_types(id),
  facility_id UUID REFERENCES facilities(id) ON DELETE CASCADE,
  prompt_type TEXT NOT NULL DEFAULT 'system'
    CHECK (prompt_type IN ('system', 'greeting', 'faq', 'booking', 'review_reply', 'escalation')),
  content_ja TEXT NOT NULL DEFAULT '',
  content_en TEXT,
  model TEXT NOT NULL DEFAULT 'claude-sonnet-4-6',
  temperature NUMERIC(3,2) NOT NULL DEFAULT 0.7,
  max_tokens INTEGER NOT NULL DEFAULT 500,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(industry_type_id, facility_id, prompt_type)
);

-- Insert default system prompts for each industry
INSERT INTO ai_prompt_configs (industry_type_id, prompt_type, content_ja, content_en) VALUES
  ('hotel', 'system',
   'あなたは{facility_name}のAIコンシェルジュです。ゲストの言語を自動検出し、その言語で応答してください。おもてなしの精神で丁寧に対応し、チェックイン・チェックアウト時刻、温泉マナー、食事時間などを正確に案内してください。不確実な情報は「確認いたします」と答え、緊急事態はスタッフにエスカレーションしてください。',
   'You are an AI concierge for {facility_name}. Auto-detect the guest language and respond in that language. Provide warm hospitality, accurately guide check-in/out times, onsen etiquette, dining hours. Say "let me confirm" for uncertain info. Escalate emergencies to staff.'),
  ('restaurant', 'system',
   'あなたは{facility_name}のAIアシスタントです。ゲストの言語を自動検出し、その言語で応答してください。メニュー説明、アレルギー対応、予約確認、待ち時間案内を丁寧に行ってください。アレルギーの問い合わせは必ずスタッフにもエスカレーションしてください。',
   'You are an AI assistant for {facility_name}. Auto-detect guest language. Help with menu explanations, allergy info, reservations, wait times. Always escalate allergy inquiries to staff.'),
  ('salon', 'system',
   'あなたは{facility_name}のAIアシスタントです。ゲストの言語を自動検出し、その言語で応答してください。施術メニューの説明、予約確認・変更、アフターケアの案内を行ってください。施術に関する専門的な質問はスタイリストに確認するよう案内してください。',
   'You are an AI assistant for {facility_name}. Auto-detect guest language. Help with treatment menu, booking changes, aftercare advice. Direct technical questions to stylists.'),
  ('clinic', 'system',
   'あなたは{facility_name}のAI受付アシスタントです。ゲストの言語を自動検出し、その言語で応答してください。診療案内、予約確認、保険説明を行ってください。医療相談には応じず、必ず医師の診察を案内してください。個人の健康情報は取り扱わないでください。',
   'You are an AI reception assistant for {facility_name}. Auto-detect patient language. Help with clinic info, appointments, insurance. Never provide medical advice - always refer to doctors. Do not handle personal health information.'),
  ('retail', 'system',
   'あなたは{facility_name}のAIショップアシスタントです。ゲストの言語を自動検出し、その言語で応答してください。商品案内、在庫確認、取り置き、配送について案内してください。免税対応についても説明できるようにしてください。',
   'You are an AI shop assistant for {facility_name}. Auto-detect customer language. Help with product info, stock checks, reservations, delivery. Be ready to explain tax-free shopping procedures.')
ON CONFLICT DO NOTHING;

-- ============================================================
-- RLS Policies
-- ============================================================

ALTER TABLE facilities ENABLE ROW LEVEL SECURITY;
ALTER TABLE facility_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE knowledge_base ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE review_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE facility_review_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_prompt_configs ENABLE ROW LEVEL SECURITY;

-- Helper function
CREATE OR REPLACE FUNCTION get_user_facility_ids()
RETURNS SETOF UUID AS $$
  SELECT facility_id FROM facility_members
  WHERE user_id = auth.uid() AND is_active = true
  UNION
  SELECT id FROM facilities
  WHERE owner_id = auth.uid()
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- Facilities: owner or member can read, only owner/admin can write
CREATE POLICY "facilities_read" ON facilities
  FOR SELECT USING (id IN (SELECT get_user_facility_ids()));
CREATE POLICY "facilities_insert" ON facilities
  FOR INSERT WITH CHECK (owner_id = auth.uid());
CREATE POLICY "facilities_update" ON facilities
  FOR UPDATE USING (owner_id = auth.uid() OR id IN (
    SELECT facility_id FROM facility_members
    WHERE user_id = auth.uid() AND role IN ('owner', 'admin') AND is_active = true
  ));
CREATE POLICY "facilities_delete" ON facilities
  FOR DELETE USING (owner_id = auth.uid());

-- Facility members
CREATE POLICY "members_read" ON facility_members
  FOR SELECT USING (facility_id IN (SELECT get_user_facility_ids()));
CREATE POLICY "members_write" ON facility_members
  FOR ALL USING (facility_id IN (
    SELECT facility_id FROM facility_members
    WHERE user_id = auth.uid() AND role IN ('owner', 'admin') AND is_active = true
  ) OR facility_id IN (SELECT id FROM facilities WHERE owner_id = auth.uid()));

-- Knowledge base
CREATE POLICY "kb_read" ON knowledge_base
  FOR SELECT USING (facility_id IN (SELECT get_user_facility_ids()));
CREATE POLICY "kb_write" ON knowledge_base
  FOR ALL USING (facility_id IN (SELECT get_user_facility_ids()));

-- AI conversations
CREATE POLICY "conv_read" ON ai_conversations
  FOR SELECT USING (facility_id IN (SELECT get_user_facility_ids()));

-- Reviews
CREATE POLICY "reviews_read" ON reviews
  FOR SELECT USING (facility_id IN (SELECT get_user_facility_ids()));

-- Review replies
CREATE POLICY "replies_read" ON review_replies
  FOR SELECT USING (review_id IN (
    SELECT id FROM reviews WHERE facility_id IN (SELECT get_user_facility_ids())
  ));
CREATE POLICY "replies_write" ON review_replies
  FOR ALL USING (review_id IN (
    SELECT id FROM reviews WHERE facility_id IN (SELECT get_user_facility_ids())
  ));

-- Bookings
CREATE POLICY "bookings_read" ON bookings
  FOR SELECT USING (facility_id IN (SELECT get_user_facility_ids()));
CREATE POLICY "bookings_write" ON bookings
  FOR ALL USING (facility_id IN (SELECT get_user_facility_ids()));

-- Review connections
CREATE POLICY "connections_read" ON facility_review_connections
  FOR SELECT USING (facility_id IN (SELECT get_user_facility_ids()));
CREATE POLICY "connections_write" ON facility_review_connections
  FOR ALL USING (facility_id IN (SELECT get_user_facility_ids()));

-- AI prompts: master prompts (facility_id IS NULL) readable by all authenticated, facility-specific by members
CREATE POLICY "prompts_master_read" ON ai_prompt_configs
  FOR SELECT USING (facility_id IS NULL);
CREATE POLICY "prompts_facility_read" ON ai_prompt_configs
  FOR SELECT USING (facility_id IN (SELECT get_user_facility_ids()));
CREATE POLICY "prompts_facility_write" ON ai_prompt_configs
  FOR ALL USING (facility_id IS NOT NULL AND facility_id IN (SELECT get_user_facility_ids()));

-- Service role bypass for API routes (LINE webhook etc.)
-- These are handled by using createAdminClient() which bypasses RLS

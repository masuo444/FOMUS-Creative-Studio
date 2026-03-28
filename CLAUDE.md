# FOMUS Creative Studio — Claude Code 開発ルール

## プロジェクト概要

**合同会社FOMUS**が運営するクリエイティブスタジオのWebサイト + AIプラットフォーム。
中小企業向けに、AI導入・Web制作・漫画制作・DXコンサル・AI研修・保守運用を提供。

## 技術スタック

- **フレームワーク**: Next.js 16.1.6 + React 19.2.3
- **スタイル**: Tailwind CSS v4（`@import "tailwindcss"` 方式）
- **DB**: Supabase (PostgreSQL + RLS)
- **決済**: Stripe
- **AI**: Claude API (@anthropic-ai/sdk)
- **LINE**: @line/bot-sdk
- **メール**: Resend
- **デプロイ**: Vercel
- **フォント**: Noto Sans JP (400/500/700) + Instrument Serif (italic)

## ディレクトリ構造

```
src/
├── app/
│   ├── page.tsx              # トップページ（LP）
│   ├── layout.tsx            # ルートレイアウト
│   ├── globals.css           # グローバルCSS
│   ├── services/             # サービス一覧 + 6個別ページ
│   │   ├── page.tsx
│   │   ├── ai/page.tsx
│   │   ├── web/page.tsx
│   │   ├── dx/page.tsx
│   │   ├── manga/page.tsx
│   │   ├── training/page.tsx
│   │   └── maintenance/page.tsx
│   ├── work/page.tsx         # 実績（8プロジェクト）
│   ├── company/page.tsx      # 会社概要
│   ├── contact/page.tsx      # お問い合わせフォーム
│   ├── privacy/page.tsx      # プライバシーポリシー
│   ├── auth/                 # 認証（ダッシュボード用）
│   ├── (dashboard)/          # 管理ダッシュボード
│   └── api/                  # APIルート
│       ├── line/webhook/     # LINE Webhook
│       ├── ai/chat/          # AIチャットAPI
│       ├── ai/review-reply/  # レビュー返信AI
│       ├── facilities/       # 施設CRUD
│       ├── stripe/           # 決済
│       └── contact/          # お問い合わせ送信
├── components/
│   ├── layout/SiteNav.tsx    # 共通ナビ
│   ├── layout/SiteFooter.tsx # 共通フッター
│   ├── ui/ScrollReveal.tsx   # スクロールアニメーション
│   ├── ui/FAQ.tsx            # FAQアコーディオン
│   ├── ui/MobileMenu.tsx     # モバイルメニュー
│   └── ui/MobileCTABar.tsx   # モバイル固定CTA
└── lib/
    ├── ai/                   # AIレイヤー（言語検出、意図分類、応答生成）
    ├── line/                 # LINE APIクライアント
    ├── supabase/             # Supabaseクライアント
    ├── stripe.ts
    ├── rate-limit.ts
    ├── constants.ts
    └── types.ts
```

## デザインルール

### カラーパレット（グリーン系）
- Primary: `#059669`（エメラルド）
- Primary dark: `#065F46`（ダークグリーン）
- Emerald: `#10B981`
- Primary light: `#D1FAE5`
- Background: `#FFFFFF`
- Alt bg: `#F0FDF4`（ライトグリーン）
- Text: `#1F2937`
- Text sub: `#6B7280`
- Border: `#E5E7EB`

### DigiRise風デザイン原則
1. **白ベース**で明るく読みやすい
2. **ピル型ボタン**（rounded-full / 9999px）をすべてに
3. **ソフトカード**（rounded-2xl、soft shadow）をすべてに
4. **キーワード強調タイポグラフィ**: 重要語を2-3倍大きく＋緑色
   - 例: 「AI活用を」(36px) →「成果」(80px, 緑) →「に変える」(42px)
5. **装飾SVGカーブライン**をヒーロー背景に
6. **緑のブロブ**（blur、低opacity）で深みを出す
7. ダークセクションは最小限（CTA + フッターのみ`#065F46`）

### フォントサイズ階層
- ヒーロー見出し: clamp(48px, 8vw, 80px) ← キーワード部分
- セクション見出し: clamp(36px, 5vw, 48px) ← キーワード部分
- 通常見出し: 24-28px
- 本文: 15-17px
- ラベル: 12-13px, uppercase, tracking-[0.15em]
- モバイル最小: 14px（iOS自動ズーム防止のため16px推奨）

### CSSクラス
- `.soft-card` — 白カード、rounded-20px、soft shadow、hover lift
- `.glass-card-green` — ダーク背景用ガラスカード
- `.btn-pill` — ピル型ボタン
- `.dot-grid` — ドットグリッドパターン（ライト用）
- `.dot-grid-dark` — ドットグリッド（ダーク用）

## ビジネスモデル

### 売るもの（3つのアプローチ）
1. **Discover（課題を見つける）** — 業務診断、ヒアリング、ROI設計
2. **Create（仕組みをつくる）** — AI/Web/漫画/何でも構築
3. **Grow（成果を伸ばし続ける）** — 月額ITパートナー契約

### サービスライン（6つ、裏側の手段）
- AI導入支援
- Web制作・リニューアル
- DXコンサルティング
- 漫画・クリエイティブ制作
- 法人向けAI研修
- 保守・運用サポート

### 価格ルール
- **サイトに価格は一切載せない**
- 「ヒアリング後にお見積もり」で統一
- 価格は対話の中で価値ベースで提示

## コンテンツルール

### コピーのトーン
- B2Bとして信頼される文章
- 断定形（「〜できます」ではなく「〜します」）
- 数字・事実ベース
- 形容詞は最小限
- 1文40字以内目安
- ポエム調NG（「困った」「聞かせてください」等のカジュアル表現は避ける）

### 表記ルール
- 会社名: **FOMUS**（FOOMUSではない）
- スタジオ名: **FOMUS Creative Studio**
- 代表: 増尾 圭亮
- 法人名: 合同会社FOMUS

### 実績（実プロジェクト）
1. Terroir HUB SAKE — 1,500蔵の酒蔵ポータル
2. Terroir HUB SHOCHU — 970蒸留所の焼酎ポータル
3. 佐木島アートギャラリー — Web制作
4. FOMUS Manga Studio — AI漫画制作サービス
5. SAQT — Web制作サービス（saqt-ai.com）
6. FOMUS AI Training — 法人AI研修（ai-training.fomus.jp）
7. FOMUS SHOP — EC（shop.fomus.jp）
8. FOMUS Creative Studio — AIプラットフォーム

## 既存サービスサイト（外部リンク）
- `saqt-ai.com` — SAQT Web制作サービス
- `creative-manga.fomusglobal.com` — FOMUS Manga Studio
- `ai-training.fomus.jp` — FOMUS AI Training
- `shop.fomus.jp` — FOMUS SHOP

## Supabase
- プロジェクト: `spirryexwiqjpuufakhy`
- マイグレーション: `supabase/migrations/100_omote_ai_core.sql`
- 13テーブル + RLS + 業種別シードデータ
- **まだSQLは未投入**（SQL Editorで実行が必要）

## デプロイ
- **まだ未デプロイ**
- Vercelにデプロイ予定
- ドメイン未定

## 開発時の注意
- `npm run dev` で http://localhost:3000
- ビルドテスト: `npm run build` を変更後に必ず実行
- 画像: `/public/images/` に配置
- 全ページにSiteNav + SiteFooterを含める
- モバイル: min-height 44pxのタップターゲット
- フォーム: input font-size 16px（iOS自動ズーム防止）
- CTAは3スクロール以内に1つ配置
- 全CTAは `/contact` にリンク

## やるべきこと（Next Actions）
1. 知人5人にLINEで営業連絡
2. Vercelにデプロイ
3. SupabaseにSQL投入
4. Xで「作ってみた」投稿
5. ai-training.fomus.jp と相互リンク
6. Googleビジネスプロフィール登録

import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'
import FAQ from '@/components/ui/FAQ'
import FaqSchema from '@/components/seo/FaqSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'AI導入支援 | KANADE AI・AIチャットボット・IT導入補助金対応',
  description: '自社開発AI SaaS「KANADE AI」で接客・予約・決済・インボイスを自動化。8言語対応AIチャットボット。IT導入補助金で最大4/5補助。設計から運用まで一貫構築。',
  alternates: { canonical: '/services/ai' },
}

const painPoints = [
  { title: '問い合わせ対応が24時間体制にできない', desc: '営業時間外の問い合わせを取りこぼし、競合に顧客が流れている。' },
  { title: '多言語対応に人員を割けない', desc: '訪日客・海外バイヤーからの問い合わせに対応できず、機会損失が発生している。' },
  { title: '毎日同じ質問に同じ回答をしている', desc: '営業時間、料金、予約方法。スタッフの時間が定型対応に消えている。' },
]

const solutions = [
  { en: 'Chatbot', title: 'AIチャットボット', desc: 'LINE・Web・WhatsAppに対応。問い合わせ対応を24時間365日、自動化します。' },
  { en: 'Multilingual', title: '多言語AI対応', desc: '英語・中国語・韓国語をはじめ、あらゆる言語に自動対応。翻訳スタッフ不要。' },
  { en: 'Review AI', title: 'レビュー自動返信', desc: 'Googleレビューや予約サイトの口コミに、トーンを合わせてAIが自動返信。' },
  { en: 'FAQ Auto', title: 'FAQ自動応答', desc: 'ナレッジベースから最適な回答を即時返答。回答精度は運用で継続改善。' },
  { en: 'Analytics', title: 'データ分析', desc: '売上・予約・アクセスデータをAIで分析し、経営判断に直結するレポートを自動生成。' },
  { en: 'Booking', title: '予約管理の自動化', desc: 'LINE・電話・Webからの予約を一元管理。空き状況の自動応答・リマインド通知。' },
]

const impacts = [
  { metric: '-80%', label: '問い合わせ対応工数', before: '月120時間', after: '月24時間' },
  { metric: '24h', label: '自動対応', before: '営業時間内のみ', after: '365日24時間' },
  { metric: '全言語', label: '多言語対応', before: '日本語のみ', after: 'あらゆる言語に自動対応' },
]

const flow = [
  { step: '01', title: 'ヒアリング', desc: '現在の業務フローと課題を整理します。AIで自動化すべき業務を特定します。', note: 'オンライン / 無料' },
  { step: '02', title: 'プロトタイプ', desc: '最短2週間で実際に動くプロトタイプを構築。実物を見てから導入を判断できます。', note: '最短2週間' },
  { step: '03', title: '導入・運用', desc: '本番環境にデプロイし、運用開始。月次レポートで効果を測定し、継続改善します。', note: '月次レポート付き' },
]

const faqItems = [
  { q: 'AIの知識がなくても導入できますか？', a: 'はい。「何をすればいいか分からない」状態から対応します。ヒアリングで課題を整理し、最適なAI活用方法をご提案します。' },
  { q: '既存のシステムと連携できますか？', a: 'LINE、Googleビジネスプロフィール、予約サイト、会計ソフトなど主要なサービスとの連携に対応しています。' },
  { q: '導入後のサポートはありますか？', a: '月額保守契約で、障害対応・機能改善・月次レポートによる効果測定を継続的にサポートします。' },
  { q: '費用感を教えてください。', a: 'ヒアリング後に、必要な範囲だけお見積もりします。プロトタイプで効果を確認してから本導入を判断できます。' },
]

export default function ServiceAIPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />
      <Breadcrumb items={[{ name: 'ホーム', href: '/' }, { name: 'サービス', href: '/services' }, { name: 'AI導入支援', href: '/services/ai' }]} />

      {/* ===== Hero ===== */}
      <section className="relative pt-0 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 60%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] -right-[20%] w-[70%] h-[120%] opacity-[0.06]" viewBox="0 0 800 800" fill="none">
            <rect x="100" y="50" width="600" height="700" rx="300" stroke="url(#sg-ai)" strokeWidth="2" />
            <rect x="200" y="150" width="500" height="550" rx="250" stroke="url(#sg-ai)" strokeWidth="1.5" />
            <defs><linearGradient id="sg-ai" x1="0" y1="0" x2="800" y2="800"><stop stopColor="#059669" /><stop offset="1" stopColor="#10B981" /></linearGradient></defs>
          </svg>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#10B981] opacity-[0.06] blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">AI Solutions</p>
            <h1 className="font-bold tracking-tight mb-6 text-[#1F2937]">
              <span className="text-[24px] md:text-[28px]">人がやらなくていい仕事を、</span>
              <br />
              <span className="text-[48px] md:text-[64px] text-[#059669]">AIに任せる。</span>
            </h1>
            <p className="text-[#6B7280] text-[16px] leading-[2] max-w-[560px]">
              問い合わせ対応、レビュー返信、予約管理、データ分析。<br />
              毎日繰り返す作業をAIで自動化し、経営に集中する時間を取り戻します。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 課題 ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Challenges</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">こんな課題を抱えていませんか？</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {painPoints.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-start gap-5 bg-[#F9FAFB] rounded-2xl p-6 md:p-8 border border-[#E5E7EB]">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FEE2E2] text-[#DC2626] text-[14px] font-bold flex-shrink-0 mt-0.5">!</span>
                  <div>
                    <h3 className="text-[17px] font-bold text-[#1F2937] mb-2">{item.title}</h3>
                    <p className="text-[14px] text-[#6B7280] leading-[1.9]">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 解決策 ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Solutions</p>
            <h2 className="font-bold tracking-tight text-[#1F2937] mb-4">
              <span className="text-[24px] md:text-[28px]">AIで</span>
              <span className="text-[36px] md:text-[48px] text-[#059669]">仕組み化</span>
              <span className="text-[24px] md:text-[28px]">します</span>
            </h2>
            <p className="text-[#6B7280] text-[15px] leading-[2] max-w-[560px] mb-12">御社の業務に最適なAIを、設計から運用まで一貫して構築します。</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 h-full">
                  <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] mb-3">{item.en}</p>
                  <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-[2]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 導入効果（Before/After） ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Impact</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">導入効果</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {impacts.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 text-center">
                  <p className="text-[48px] md:text-[56px] font-bold text-[#059669] leading-none mb-4">{item.metric}</p>
                  <p className="text-[15px] font-bold text-[#1F2937] mb-4">{item.label}</p>
                  <div className="flex items-center justify-center gap-3 text-[14px]">
                    <span className="text-[#9CA3AF] line-through">{item.before}</span>
                    <span className="text-[#9CA3AF]">→</span>
                    <span className="text-[#1F2937] font-bold">{item.after}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 中間CTA ===== */}
      <ScrollReveal>
        <div className="bg-gradient-to-r from-[#059669] to-[#10B981] py-12 px-6 text-center">
          <p className="text-white text-[18px] md:text-[22px] font-bold mb-4">御社の業務、どこまで自動化できるか確認しませんか？</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#059669] px-8 py-3 rounded-full text-[15px] font-bold hover:bg-white/90 transition-colors min-h-[48px]">
            無料で相談する
          </Link>
        </div>
      </ScrollReveal>

      {/* ===== 導入パターン ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Plans</p>
            <h2 className="font-bold tracking-tight text-[#1F2937] mb-4">
              <span className="text-[24px] md:text-[28px]">御社に合った</span>
              <span className="text-[36px] md:text-[48px] text-[#059669]">導入パターン</span>
            </h2>
            <p className="text-[#6B7280] text-[15px] leading-[2] max-w-[600px] mb-12">
              規模・予算・業務内容に応じて、最適なAI導入プランをご提案します。<br />
              すべてヒアリング後にお見積もり。不要な施策は勧めません。
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {/* パターン1: 既存ツール活用 */}
            <ScrollReveal>
              <div className="bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] p-8 h-full flex flex-col">
                <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] mb-3">PATTERN 01</p>
                <h3 className="text-[20px] font-bold text-[#1F2937] mb-2">既存ツール活用</h3>
                <p className="text-[14px] text-[#059669] font-bold mb-4">月数万円〜</p>
                <p className="text-[14px] text-[#6B7280] leading-[2] mb-6 flex-1">
                  ChatGPT・Gemini・LINE公式アカウント等の既存ツールを組み合わせて業務を自動化。大きな初期投資なしで効果を実感できます。
                </p>
                <div className="space-y-2 mb-6">
                  {['FAQ自動応答の構築', 'LINE×AI自動返信', 'レビュー返信の自動化', '業務フローの整理・設計'].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[13px] text-[#4B5563]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669] flex-shrink-0 mt-1.5" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-[12px] text-[#9CA3AF]">小規模事業者・まず試したい方向け</p>
              </div>
            </ScrollReveal>

            {/* パターン2: KANADE AI */}
            <ScrollReveal delay={80}>
              <div className="bg-[#065F46] rounded-2xl p-8 h-full flex flex-col text-white relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="text-[11px] font-bold bg-[#34D399] text-[#065F46] px-3 py-1 rounded-full">補助金対応</span>
                </div>
                <p className="text-[#34D399] text-[12px] font-bold tracking-[0.15em] mb-3">PATTERN 02</p>
                <h3 className="text-[20px] font-bold mb-1">KANADE AI 導入</h3>
                <p className="text-[13px] text-white/50 mb-2">自社開発 AI SaaS</p>
                <p className="text-[14px] text-[#34D399] font-bold mb-4">月5万円〜 / IT導入補助金で最大4/5補助</p>
                <p className="text-[14px] text-white/70 leading-[2] mb-6 flex-1">
                  接客業向け多言語AIコンシェルジュ。チャットボット・予約・決済・インボイスを1つに統合。8言語対応、即日導入可能。
                </p>
                <div className="space-y-2 mb-6">
                  {['8言語AIチャットボット', '業種別予約管理（7業種対応）', 'Stripe決済・適格請求書自動発行', 'EC機能・レビューAI返信', '売上分析レポート'].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[13px] text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] flex-shrink-0 mt-1.5" />
                      {item}
                    </div>
                  ))}
                </div>
                <a
                  href="https://kanade-ai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-[#065F46] px-6 py-3 rounded-full text-[14px] font-bold hover:bg-[#D1FAE5] transition-colors min-h-[44px]"
                >
                  KANADE AI の詳細 &#8599;
                </a>
              </div>
            </ScrollReveal>

            {/* パターン3: フルカスタム */}
            <ScrollReveal delay={160}>
              <div className="bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] p-8 h-full flex flex-col">
                <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] mb-3">PATTERN 03</p>
                <h3 className="text-[20px] font-bold text-[#1F2937] mb-2">フルカスタム開発</h3>
                <p className="text-[14px] text-[#059669] font-bold mb-4">要見積もり / 補助金活用可能</p>
                <p className="text-[14px] text-[#6B7280] leading-[2] mb-6 flex-1">
                  御社の業務に完全に合わせたAIシステムをゼロから設計・開発。社内データと連携した独自のAI基盤を構築します。
                </p>
                <div className="space-y-2 mb-6">
                  {['業務特化型AIアプリ開発', '社内データ×AI分析基盤', '基幹システム連携', '独自チャットボット開発', 'AI研修・社内定着支援'].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[13px] text-[#4B5563]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669] flex-shrink-0 mt-1.5" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-[12px] text-[#9CA3AF]">独自要件がある企業・大規模導入向け</p>
              </div>
            </ScrollReveal>
          </div>

          {/* 補助金の補足 */}
          <ScrollReveal delay={200}>
            <div className="mt-10 bg-[#F0FDF4] rounded-2xl border border-[#D1FAE5] p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex-1">
                  <p className="text-[15px] font-bold text-[#1F2937] mb-1">IT導入補助金・ものづくり補助金が活用できます</p>
                  <p className="text-[13px] text-[#6B7280] leading-[1.8]">パターン②③は国の補助金対象。小規模事業者枠で最大4/5（補助上限350万円）。申請準備もFOMUSがサポートします。</p>
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#059669] text-white px-6 py-3 rounded-full text-[14px] font-bold hover:bg-[#047857] transition-colors min-h-[44px] whitespace-nowrap">
                  補助金について相談する
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== KANADE AI 詳細 ===== */}
      <section className="bg-[#065F46] py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#10B981] opacity-[0.08] blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#34D399] text-[13px] font-bold tracking-[0.25em] uppercase mb-4">Self-developed AI SaaS</p>
            <h2 className="text-white font-bold tracking-tight mb-4">
              <span className="text-[36px] md:text-[52px] leading-none">KANADE AI</span>
            </h2>
            <p className="text-white/50 text-[16px] leading-[2] max-w-[640px] mb-6">
              接客業・サービス業に特化した、多言語AIコンシェルジュプラットフォーム。<br />
              外国人観光客の「言葉の壁」を解消し、予約・決済・顧客対応を24時間自動化します。
            </p>
            <p className="text-white/40 text-[14px] leading-[2] max-w-[640px] mb-8">
              日本を訪れる外国人観光客は年間4,200万人超。しかし多くの店舗は多言語対応ができず、目の前の売上を逃しています。KANADE AIは、1行のコードを既存サイトに貼るだけで、8言語対応のAIコンシェルジュを即日導入できます。AIが店舗の情報を学習し、メニュー案内・空き状況の回答・予約受付・決済・レシート発行まで自動で対応します。
            </p>
          </ScrollReveal>

          {/* 2カラム: 機能リスト + IT導入補助金 */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ScrollReveal>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 h-full">
                <h3 className="text-[17px] font-bold text-white mb-6">KANADE AIでできること</h3>
                <div className="space-y-4">
                  {[
                    { label: 'AIチャットボット', desc: '8言語対応。店舗の情報を学習し、24時間自動接客。' },
                    { label: '予約管理', desc: '業種別フォーム（飲食・宿泊・美容・体験）。多言語で自動通知。' },
                    { label: '決済・インボイス', desc: 'Stripe連携。適格請求書を自動発行。' },
                    { label: 'EC機能', desc: 'お土産・物販を多言語で販売。在庫管理付き。' },
                    { label: 'レビュー管理', desc: 'Google・TripAdvisorのレビューにAIが多言語で自動返信。' },
                    { label: '売上分析', desc: 'インバウンド比率・言語別売上・月次トレンドを自動レポート。' },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] flex-shrink-0 mt-2" />
                      <div>
                        <span className="text-[14px] font-bold text-white">{item.label}</span>
                        <span className="text-[14px] text-white/60 ml-2">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 h-full">
                <h3 className="text-[17px] font-bold text-white mb-6">IT導入補助金で最大4/5補助</h3>
                <p className="text-white/60 text-[14px] leading-[2] mb-6">
                  KANADE AIは「IT導入補助金」の対象5プロセス（顧客対応・決済・在庫・会計・自動化）をカバー。小規模事業者枠で最大4/5の補助率が適用されます。
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/70 text-[14px]">補助上限額</span>
                    <span className="text-[18px] font-bold text-white">350万円</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/70 text-[14px]">補助率（小規模事業者）</span>
                    <span className="text-[18px] font-bold text-[#34D399]">4/5</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-white/70 text-[14px]">御社の実質負担（目安）</span>
                    <span className="text-[24px] font-bold text-[#34D399]">89万円〜</span>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#34D399] text-[#065F46] px-6 py-3 rounded-full text-[14px] font-bold hover:bg-[#6EE7B7] transition-colors min-h-[44px] w-full">
                  補助金の活用方法を相談する
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={120}>
            <div className="text-center">
              <a
                href="https://kanade-ai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-[#065F46] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-[#D1FAE5] transition-colors min-h-[52px]"
              >
                KANADE AI 公式サイト &#8599;
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 導入の流れ ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Flow</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">導入の流れ</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {flow.map((item) => (
              <ScrollReveal key={item.step}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 h-full">
                  <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] mb-3">STEP {item.step}</p>
                  <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-[2] mb-4">{item.desc}</p>
                  <p className="text-[13px] text-[#059669] font-medium">{item.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">FAQ</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">よくある質問</h2>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#065F46] py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-[24px] md:text-[30px] font-bold tracking-tight mb-4">まずは無料でご相談ください</h2>
            <p className="text-white/60 text-[15px] leading-[2] mb-8">
              御社の業務に最適なAI活用方法を、ヒアリング後にご提案します。<br />
              プロトタイプで効果を確認してから導入を判断できます。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#065F46] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-white/90 transition-colors min-h-[52px]">
              無料で相談する
            </Link>
                      </ScrollReveal>
        </div>
      </section>

      <FaqSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: 'ホーム', href: '/' },
        { name: 'サービス', href: '/services' },
        { name: 'AI導入支援', href: '/services/ai' },
      ]} />
      <SiteFooter />
    </div>
  )
}

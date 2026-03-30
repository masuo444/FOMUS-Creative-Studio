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
  title: '旅館・ホテルのAI導入・多言語対応・予約システム | OTA手数料を削減',
  description: '旅館・ホテルの多言語AI対応、予約管理自動化、OTA手数料削減、レビュー返信自動化。多言語AIチャットボットで訪日客対応を自動化。予約数+180%の実績。',
  alternates: { canonical: '/industries/hotel' },
  keywords: ['旅館 AI', 'ホテル 多言語対応', 'OTA手数料 削減', '旅館 予約管理', 'ホテル DX', '宿泊業 AI導入'],
}

const painPoints = [
  { title: '訪日客の問い合わせに対応できない', desc: '英語・中国語の問い合わせが増えているが、対応できるスタッフがいない。返信が遅れて予約が他に流れている。' },
  { title: 'OTA手数料が利益を圧迫している', desc: '自社サイトからの直接予約が少なく、OTA経由の予約ばかり。手数料15-20%が利益を食い潰す。' },
  { title: 'レビュー対応に手が回らない', desc: 'Booking.com、Google、じゃらんのレビューが放置状態。低評価への未対応が新規客の予約判断に悪影響。' },
]

const solutions = [
  { en: 'Multilingual AI', title: '多言語AIチャットボット', desc: '英語・中国語・韓国語をはじめ、あらゆる言語で24時間自動対応。宿泊プラン案内、空室確認、アクセス案内まで。', href: '/services/ai' },
  { en: 'Direct Booking', title: '自社予約システム構築', desc: 'OTAに頼らない直接予約サイトを構築。SEO対策込みで「地域名 + 旅館」検索に強い設計。手数料ゼロ。', href: '/services/web' },
  { en: 'Review AI', title: 'レビュー自動返信', desc: 'Booking.com・Google・じゃらんのレビューに、トーンと言語を合わせてAIが自動返信。24時間以内に100%返信。', href: '/services/ai' },
  { en: 'Manga', title: '採用漫画・PR漫画', desc: '旅館の魅力を漫画で伝える。採用難の解消、SNSでの拡散、海外向けPRに。MangaXに無料掲載。', href: '/services/manga' },
]

const impacts = [
  { metric: '+180%', label: '直接予約数', before: '月30件', after: '月84件' },
  { metric: '-200万', label: 'OTA手数料/年', before: '年間400万円', after: '年間200万円' },
  { metric: '全言語', label: '多言語対応', before: '日本語のみ', after: 'あらゆる言語に自動対応' },
]

const faqItems = [
  { q: '小規模な旅館でもAIは導入できますか？', a: 'はい。客室数10室以下の旅館でも導入実績があります。少人数運営だからこそ、AIによる自動化の効果が大きく出ます。' },
  { q: 'OTA手数料の削減はどの程度できますか？', a: '自社予約サイトの構築とSEO対策により、直接予約比率を高めます。OTA手数料を年間200万円以上削減した事例があります。' },
  { q: '多言語対応は何言語に対応していますか？', a: '英語・中国語（簡体字・繁体字）・韓国語・フランス語・スペイン語をはじめ、あらゆる言語に対応可能です。AI翻訳により、言語の制限なく自動対応できます。' },
  { q: '既存の予約システムと連携できますか？', a: 'はい。既存のPMSや予約システムとの連携を含めた最適な構成をご提案します。まずは現在の運用状況をヒアリングさせてください。' },
]

export default function IndustryHotelPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />
      <Breadcrumb items={[{ name: 'ホーム', href: '/' }, { name: '業種別', href: '/services' }, { name: '宿泊施設', href: '/industries/hotel' }]} />

      <section className="relative pt-0 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 60%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] -right-[20%] w-[70%] h-[120%] opacity-[0.06]" viewBox="0 0 800 800" fill="none">
            <rect x="100" y="50" width="600" height="700" rx="300" stroke="url(#sg-htl)" strokeWidth="2" />
            <rect x="200" y="150" width="500" height="550" rx="250" stroke="url(#sg-htl)" strokeWidth="1.5" />
            <defs><linearGradient id="sg-htl" x1="0" y1="0" x2="800" y2="800"><stop stopColor="#059669" /><stop offset="1" stopColor="#10B981" /></linearGradient></defs>
          </svg>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#10B981] opacity-[0.06] blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">For Hotels & Ryokan</p>
            <h1 className="font-bold tracking-tight mb-6 text-[#1F2937]">
              <span className="text-[24px] md:text-[28px]">旅館・ホテルの</span>
              <br />
              <span className="text-[48px] md:text-[64px] text-[#059669]">インバウンド対応</span>
              <br />
              <span className="text-[24px] md:text-[28px]">をAIで自動化する。</span>
            </h1>
            <p className="text-[#6B7280] text-[16px] leading-[2] max-w-[560px]">
              多言語AIチャットボットで訪日客対応を自動化。<br />
              自社予約サイトでOTA手数料を大幅削減。レビュー返信も24時間自動。
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal><p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Challenges</p><h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">宿泊業が抱える課題</h2></ScrollReveal>
          <div className="space-y-4">
            {painPoints.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-start gap-5 bg-[#F9FAFB] rounded-2xl p-6 md:p-8 border border-[#E5E7EB]">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FEE2E2] text-[#DC2626] text-[14px] font-bold flex-shrink-0 mt-0.5">!</span>
                  <div><h3 className="text-[17px] font-bold text-[#1F2937] mb-2">{item.title}</h3><p className="text-[14px] text-[#6B7280] leading-[1.9]">{item.desc}</p></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal><p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Solutions</p><h2 className="font-bold tracking-tight text-[#1F2937] mb-4"><span className="text-[24px] md:text-[28px]">宿泊業に最適な</span><span className="text-[36px] md:text-[48px] text-[#059669]">仕組み</span><span className="text-[24px] md:text-[28px]">を構築します</span></h2><p className="text-[#6B7280] text-[15px] leading-[2] max-w-[560px] mb-12">多言語AI、自社予約システム、レビュー対応を組み合わせて、OTA依存から脱却。</p></ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <Link href={item.href} className="block h-full group">
                  <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 h-full hover:shadow-lg transition-shadow">
                    <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] mb-3">{item.en}</p>
                    <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                    <p className="text-[14px] text-[#6B7280] leading-[2]">{item.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal><p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Impact</p><h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">導入効果</h2></ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {impacts.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 text-center">
                  <p className="text-[48px] md:text-[56px] font-bold text-[#059669] leading-none mb-4">{item.metric}</p>
                  <p className="text-[15px] font-bold text-[#1F2937] mb-4">{item.label}</p>
                  <div className="flex items-center justify-center gap-3 text-[14px]"><span className="text-[#9CA3AF] line-through">{item.before}</span><span className="text-[#9CA3AF]">→</span><span className="text-[#1F2937] font-bold">{item.after}</span></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal><div className="bg-gradient-to-r from-[#059669] to-[#10B981] py-12 px-6 text-center"><p className="text-white text-[18px] md:text-[22px] font-bold mb-4">OTA手数料、年間いくら払っていますか？</p><Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#059669] px-8 py-3 rounded-full text-[15px] font-bold hover:bg-white/90 transition-colors min-h-[48px]">無料で相談する</Link></div></ScrollReveal>

      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6"><div className="max-w-[800px] mx-auto"><ScrollReveal><p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">FAQ</p><h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">よくある質問</h2></ScrollReveal><ScrollReveal><FAQ items={faqItems} /></ScrollReveal></div></section>

      <FaqSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: 'ホーム', href: '/' },
        { name: '業種別', href: '/services' },
        { name: '宿泊施設', href: '/industries/hotel' },
      ]} />
      <SiteFooter />
    </div>
  )
}

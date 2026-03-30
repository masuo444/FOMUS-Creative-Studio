import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: '導入事例 | AI導入・Web制作・AI研修の成果',
  description: 'FOMUS Creative Studioの導入事例。AI検索ポータル構築、多言語チャットボット、法人AI研修など、実際のプロジェクトのBefore/Afterと成果を紹介。',
  alternates: { canonical: '/case-studies' },
}

/* ── Case Study data ── */

type Metric = { value: string; label: string }
type BeforeAfter = { item: string; before: string; after: string }

type CaseStudy = {
  id: number
  category: string
  title: string
  challenge: string
  measures: string[]
  metrics: Metric[]
  beforeAfter: BeforeAfter[]
  tech: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    category: 'AI導入 / Web制作',
    title: '全国1,500蔵の日本酒ポータル構築',
    challenge:
      '日本酒に興味のある訪日外国人・海外バイヤーが、信頼できる酒蔵情報にアクセスする手段がなかった。',
    measures: [
      'AI検索（自然言語で酒蔵を探せる）',
      '32言語対応（AIによる多言語チャット）',
      '全蔵元の構造化データベース構築',
      '蔵元ページの自動生成システム',
    ],
    metrics: [
      { value: '1,500+', label: '蔵 データベース化' },
      { value: '32', label: '言語 AI対応' },
      { value: '47', label: '都道府県 完全網羅' },
    ],
    beforeAfter: [
      { item: '情報アクセス', before: '散在・日本語のみ', after: '1サイトで全蔵網羅・32言語' },
      { item: '検索方法', before: '手動検索のみ', after: 'AI自然言語検索' },
      { item: '更新', before: '手動更新', after: '自動生成' },
    ],
    tech: ['Next.js', 'Supabase', 'Claude AI', 'Vercel'],
  },
  {
    id: 2,
    category: 'AI導入 / Web制作',
    title: '全国970蒸留所の焼酎・泡盛ポータル構築',
    challenge:
      '焼酎・泡盛の蒸留所情報が構造化されておらず、世界に発信する手段がなかった。',
    measures: [
      '世界初の焼酎蒸留所構造化データベース',
      'AIコンシェルジュ「クロ」による検索',
      '琥珀色デザインで焼酎のブランドイメージ確立',
      '5段階検索で小規模蒸留所も網羅',
    ],
    metrics: [
      { value: '970+', label: '蒸留所 データベース化' },
      { value: '世界初', label: '構造化DB' },
      { value: '40+', label: '言語 AI対応' },
    ],
    beforeAfter: [
      { item: '情報アクセス', before: '未構造化・散在', after: '世界初の構造化DB' },
      { item: '検索方法', before: '手動検索のみ', after: 'AIコンシェルジュ「クロ」' },
      { item: 'ブランド', before: '統一イメージなし', after: '琥珀色の世界観確立' },
    ],
    tech: ['Next.js', 'Supabase', 'Claude AI', 'Vercel'],
  },
  {
    id: 3,
    category: 'AI研修 / リスキリング',
    title: '法人向け実務特化型AI研修プログラム',
    challenge:
      '既存のAI研修は汎用的すぎて、受講後に業務で活用できない。',
    measures: [
      '御社の業務データを題材にしたカリキュラム設計',
      'ChatGPT/Gemini/Claudeの使い分け指導',
      '10時間完結プログラム（基礎→実践→定着）',
      '人材開発支援助成金の申請サポート',
    ],
    metrics: [
      { value: '10時間', label: 'で業務実装レベル' },
      { value: '実質80%', label: 'OFF（助成金活用）' },
      { value: '翌日から', label: '即実践可能' },
    ],
    beforeAfter: [
      { item: '研修内容', before: '汎用的な座学', after: '自社業務データで実践' },
      { item: '定着率', before: '受講後に使えない', after: '翌日から即実践' },
      { item: '費用', before: '全額自己負担', after: '助成金で実質80%OFF' },
    ],
    tech: ['ChatGPT', 'Gemini', 'Claude', 'Midjourney', 'NotebookLM'],
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />
      <Breadcrumb items={[{ name: 'ホーム', href: '/' }, { name: '導入事例', href: '/case-studies' }]} />

      {/* ===== Hero ===== */}
      <section className="relative pt-0 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 60%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] -right-[20%] w-[70%] h-[120%] opacity-[0.06]" viewBox="0 0 800 800" fill="none">
            <rect x="100" y="50" width="600" height="700" rx="300" stroke="url(#sg-cs)" strokeWidth="2" />
            <rect x="200" y="150" width="500" height="550" rx="250" stroke="url(#sg-cs)" strokeWidth="1.5" />
            <defs><linearGradient id="sg-cs" x1="0" y1="0" x2="800" y2="800"><stop stopColor="#059669" /><stop offset="1" stopColor="#10B981" /></linearGradient></defs>
          </svg>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#10B981] opacity-[0.06] blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Case Studies</p>
            <h1 className="font-bold tracking-tight mb-6 text-[#1F2937]">
              <span className="text-[24px] md:text-[28px]">自社の事業で</span>
              <br />
              <span className="text-[48px] md:text-[64px] text-[#059669]">実証済み。</span>
            </h1>
            <p className="text-[#6B7280] text-[16px] leading-[2] max-w-[600px]">
              FOMUSは「教える会社」ではなく「自分でやっている会社」。<br />
              以下はすべて自社プロジェクトの実績です。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Case Studies ===== */}
      {caseStudies.map((cs, idx) => (
        <section
          key={cs.id}
          className={`${idx % 2 === 0 ? 'bg-white' : 'bg-[#F0FDF4]'} py-20 md:py-28 px-6`}
        >
          <div className="max-w-[1200px] mx-auto">
            {/* Header */}
            <ScrollReveal>
              <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">
                Case {String(idx + 1).padStart(2, '0')} — {cs.category}
              </p>
              <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-[#1F2937] mb-12">
                {cs.title}
              </h2>
            </ScrollReveal>

            {/* 2-column: Left = Challenge + Measures, Right = Metrics */}
            <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 mb-16`}>
              {/* Left column */}
              <div className="flex-1">
                <ScrollReveal>
                  <div className="mb-10">
                    <h3 className="text-[13px] font-bold tracking-[0.15em] uppercase text-[#DC2626] mb-3">課題</h3>
                    <p className="text-[15px] text-[#1F2937] leading-[2]">{cs.challenge}</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={60}>
                  <div>
                    <h3 className="text-[13px] font-bold tracking-[0.15em] uppercase text-[#059669] mb-4">施策</h3>
                    <ul className="space-y-3">
                      {cs.measures.map((m, i) => (
                        <li key={i} className="flex items-start gap-3 text-[15px] text-[#1F2937] leading-[1.9]">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#D1FAE5] text-[#059669] text-[12px] font-bold flex-shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right column — Metrics */}
              <div className="flex-1">
                <ScrollReveal delay={120}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {cs.metrics.map((metric, i) => (
                      <div key={i} className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 text-center">
                        <p className="text-[36px] md:text-[44px] font-bold text-[#059669] leading-none mb-2">{metric.value}</p>
                        <p className="text-[14px] text-[#6B7280]">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Before / After Table */}
            <ScrollReveal delay={180}>
              <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="grid grid-cols-3 bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <div className="p-4 md:p-6 text-[13px] font-bold tracking-[0.15em] uppercase text-[#6B7280]">項目</div>
                  <div className="p-4 md:p-6 text-[13px] font-bold tracking-[0.15em] uppercase text-[#9CA3AF]">Before</div>
                  <div className="p-4 md:p-6 text-[13px] font-bold tracking-[0.15em] uppercase text-[#059669]">After</div>
                </div>
                {cs.beforeAfter.map((row, i) => (
                  <div key={i} className={`grid grid-cols-3 ${i < cs.beforeAfter.length - 1 ? 'border-b border-[#E5E7EB]' : ''}`}>
                    <div className="p-4 md:p-6 text-[14px] font-bold text-[#1F2937]">{row.item}</div>
                    <div className="p-4 md:p-6 text-[14px] text-[#9CA3AF] line-through">{row.before}</div>
                    <div className="p-4 md:p-6 text-[14px] text-[#1F2937] font-bold">{row.after}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Tech Stack */}
            <ScrollReveal delay={240}>
              <div className="flex flex-wrap items-center gap-2 mt-8">
                <span className="text-[13px] font-bold text-[#6B7280] mr-2">Tech:</span>
                {cs.tech.map((t, i) => (
                  <span key={i} className="inline-block bg-[#F0FDF4] text-[#059669] text-[13px] font-medium px-4 py-1.5 rounded-full border border-[#D1FAE5]">
                    {t}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* ===== CTA ===== */}
      <section className="bg-[#065F46] py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-[24px] md:text-[30px] font-bold tracking-tight mb-4">
              御社でも同じ仕組みを導入しませんか？
            </h2>
            <p className="text-white/60 text-[15px] leading-[2] mb-8">
              自社で実証済みの仕組みを、御社の業務に合わせてカスタマイズします。<br />
              まずはヒアリングで、最適な活用方法をご提案します。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#065F46] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-white/90 transition-colors min-h-[52px]">
              無料で相談する
            </Link>
                      </ScrollReveal>
        </div>
      </section>

      <BreadcrumbSchema items={[
        { name: 'ホーム', href: '/' },
        { name: '導入事例', href: '/case-studies' },
      ]} />
      <SiteFooter />
    </div>
  )
}

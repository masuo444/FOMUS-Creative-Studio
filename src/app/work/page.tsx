import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'

export const metadata: Metadata = {
  title: '実績紹介 | Terroir HUB・MangaX・SAQT・AI研修',
  description: '1,500蔵の酒蔵ポータル、970蒸留所の焼酎ポータル、漫画プラットフォームMangaX、Web制作サービスSAQTなど、FOMUSが構築した8つのプロジェクト。',
  alternates: { canonical: '/work' },
}

/* ── Project data ── */

type Project = {
  id: number
  category: string
  title: string
  subtitle: string
  description: string
  tech: string[]
  metrics: string[]
  image: string
  url?: string
  urlLabel?: string
}

const featured: Project[] = [
  {
    id: 1,
    category: 'Web Platform / AI',
    title: 'Terroir HUB SAKE',
    subtitle: '全国1,500蔵の酒蔵情報ポータル',
    description:
      '日本全国の酒蔵1,500蔵の情報を構造化データベースとして構築。AIコンシェルジュ「サクラ」による自然言語検索、多言語対応（32言語）。嘘をつかない情報設計を徹底し、データがない項目は非表示にする信頼性重視のアーキテクチャ。',
    tech: ['Next.js', 'Supabase', 'Claude AI', 'Vercel'],
    metrics: ['1,500蔵を網羅', 'AI検索搭載', '32言語対応'],
    image: '/images/work-web.png',
    url: 'https://terroir-hub.com',
    urlLabel: 'Terroir HUBとして公開中',
  },
  {
    id: 2,
    category: 'Web Platform / AI',
    title: 'Terroir HUB SHOCHU',
    subtitle: '全国970蒸留所の焼酎・泡盛ポータル',
    description:
      '世界初の焼酎・泡盛蒸留所の構造化データベース。AIクロによるコンシェルジュ検索、琥珀色のデザインで酒蔵版との差別化。SAKE版と共通のアーキテクチャで効率的に構築。',
    tech: ['Next.js', 'Supabase', 'Claude AI', 'Vercel'],
    metrics: ['970蒸留所', '世界初の構造化DB', 'AI検索搭載'],
    image: '/images/demo-desktop.png',
  },
  {
    id: 4,
    category: 'Web制作 / サービス構築',
    title: 'FOMUS Manga Studio',
    subtitle: '漫画制作 + 掲載プラットフォーム「MangaX」',
    description:
      'AI×クリエイティブディレクションによる漫画制作サービスと、制作した漫画を無料で掲載できるプラットフォーム「MangaX」を構築。制作から公開まで一気通貫で対応する、他社にはない独自の仕組み。',
    tech: ['Next.js', 'Supabase', 'Vercel'],
    metrics: ['40言語対応', '最短1週間納品', 'MangaX掲載無料'],
    image: '/images/work-manga.jpg',
    url: 'https://creative-manga.fomusglobal.com',
    urlLabel: 'creative-manga.fomusglobal.com',
  },
  {
    id: 5,
    category: 'Web制作 / サービス構築',
    title: 'SAQT（サクッと）',
    subtitle: 'Web制作サービスのブランドサイト構築',
    description:
      '「古いサイトを最短3日でリニューアル」をコンセプトとしたWeb制作サービスのLP。SEO対策、チャットボット連携、自治体向けページも含む包括的なサービスサイト。',
    tech: ['HTML/CSS/JS', 'SEO最適化', 'チャットボット'],
    metrics: ['最短3日納品', 'SEO最適化', 'チャットボット搭載'],
    image: '/images/hero-laptop.jpg',
    url: 'https://saqt-ai.com',
    urlLabel: 'saqt-ai.com',
  },
  {
    id: 8,
    category: 'SaaS / Webアプリ',
    title: 'FOMUS Creative Studio',
    subtitle: 'AI業務効率化プラットフォームの設計・構築',
    description:
      '接客業向けAI多言語コンシェルジュSaaSを設計・構築。LINE Webhook、Claude AI統合、多言語チャット、レビュー管理、予約処理、Stripe課金、施設管理ダッシュボードを含むフルスタックアプリケーション。',
    tech: ['Next.js 16', 'Supabase', 'Claude AI', 'Stripe', 'LINE API'],
    metrics: ['9言語対応', '13テーブルDB', '21APIルート'],
    image: '/images/hero-laptop.jpg',
  },
]

const gridProjects: Project[] = [
  {
    id: 3,
    category: 'Web制作',
    title: '佐木島アートギャラリー',
    subtitle: '瀬戸内海の離島アートギャラリーのサイト構築',
    description:
      '広島県・佐木島に誕生したコンテナ型・参加型アートギャラリーの公式サイトを制作。枡ウォール、レンタルスペース、アート展示の予約導線を構築。',
    tech: ['Web制作', 'UI/UX'],
    metrics: ['サイト構築', '予約導線設計'],
    image: '/images/work-web.png',
  },
  {
    id: 6,
    category: 'Web制作 / サービス構築',
    title: 'FOMUS AI Training',
    subtitle: '法人向けAI研修サービスのLP構築',
    description:
      '業務活用特化型AI研修サービスのランディングページ。助成金活用シミュレーション、研修フロー、FAQ、お問い合わせフォームを含むリード獲得型のLP。',
    tech: ['レスポンシブ', 'フォーム連携'],
    metrics: ['助成金対応', 'リード獲得型LP'],
    image: '/images/demo-desktop.png',
    url: 'https://ai-training.fomus.jp',
    urlLabel: 'ai-training.fomus.jp',
  },
  {
    id: 7,
    category: 'EC構築',
    title: 'FOMUS SHOP',
    subtitle: '伝統工芸「枡」のECサイト構築',
    description:
      '日本の伝統工芸「枡」を販売するECサイト。Stripe決済、会員管理、ポイントシステム、デジタルアイテム販売、多通貨対応（JPY/EUR）を実装した本格的なEC基盤。',
    tech: ['Next.js 16', 'Supabase', 'Stripe', 'Resend'],
    metrics: ['Stripe決済連携', '会員制度', '多通貨対応'],
    image: '/images/work-silva.png',
    url: 'https://shop.fomus.jp',
    urlLabel: 'shop.fomus.jp',
  },
]

/* ── Featured Card (full-width, alternating layout) ── */

function FeaturedCard({ project, flip }: { project: Project; flip?: boolean }) {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className={`relative flex flex-col ${flip ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
            {/* Image */}
            <div className="w-full md:w-[55%] shrink-0">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="w-full md:w-[45%]">
              <span className="inline-block text-[var(--gold)] text-[11px] font-bold tracking-[0.12em] uppercase bg-[var(--gold)]/10 px-3 py-1.5 rounded-full mb-4">
                {project.category}
              </span>
              <h2 className="text-[#1A1A1A] text-[26px] md:text-[32px] font-bold tracking-tight leading-[1.3] mb-2">
                {project.title}
              </h2>
              <p className="text-[#1A1A1A]/60 text-[15px] font-medium mb-4">
                {project.subtitle}
              </p>
              <p className="text-[#1A1A1A]/50 text-[14px] leading-[1.9] mb-6">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.metrics.map((m) => (
                  <span
                    key={m}
                    className="text-[13px] font-medium text-[#1A1A1A]/70 bg-[#1A1A1A]/5 px-3 py-1.5 rounded-md"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] text-[var(--gold)] bg-[var(--gold)]/10 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--gold)] text-[14px] font-medium hover:opacity-80 transition-opacity"
                >
                  <span>{project.urlLabel || 'サイトを見る'}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                </a>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ── Grid Card (smaller, image on top) ── */

function GridCard({ project }: { project: Project }) {
  return (
    <ScrollReveal>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[16/10] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6 md:p-8 flex-1 flex flex-col">
          <span className="inline-block self-start text-[var(--gold)] text-[11px] font-bold tracking-[0.12em] uppercase bg-[var(--gold)]/10 px-3 py-1.5 rounded-full mb-4">
            {project.category}
          </span>
          <h3 className="text-[#1A1A1A] text-[20px] md:text-[22px] font-bold tracking-tight leading-[1.3] mb-1">
            {project.title}
          </h3>
          <p className="text-[#1A1A1A]/60 text-[14px] font-medium mb-3">
            {project.subtitle}
          </p>
          <p className="text-[#1A1A1A]/50 text-[13px] leading-[1.9] mb-5 flex-1">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.metrics.map((m) => (
              <span
                key={m}
                className="text-[12px] font-medium text-[#1A1A1A]/70 bg-[#1A1A1A]/5 px-2.5 py-1 rounded-md"
              >
                {m}
              </span>
            ))}
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] text-[var(--gold)] bg-[var(--gold)]/10 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Link */}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--gold)] text-[13px] font-medium hover:opacity-80 transition-opacity mt-auto"
            >
              <span>{project.urlLabel || 'サイトを見る'}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  )
}

/* ── Grid Row (2-up) ── */

function GridRow({ projects }: { projects: Project[] }) {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <GridCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}

/* ── Dark separator ── */

function Separator() {
  return <div className="h-px bg-[#1A1A1A]/8 max-w-[1200px] mx-auto" />
}

/* ── Page ── */

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <SiteNav />
      <div className="h-[72px]" />

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#1a4a3a] opacity-15 blur-[120px]" />
          <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-[#3a2a1a] opacity-10 blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1100px] mx-auto">
          <ScrollReveal>
            <span className="inline-block text-[var(--gold)] text-[12px] font-bold tracking-[0.2em] uppercase mb-4">
              Our Work
            </span>
            <h1 className="text-white text-[clamp(32px,5vw,52px)] font-bold tracking-tight mb-4">
              実績
            </h1>
            <p className="text-[16px] text-white/40 leading-[2] max-w-[600px]">
              Webプラットフォーム、AI導入、EC構築、サービスLP。<br />
              すべて自社で設計・実装した実案件です。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Project sections on light background */}
      <div className="bg-[#FAFAF8]">

        {/* 1. Featured: Terroir HUB SAKE */}
        <FeaturedCard project={featured[0]} />

        <Separator />

        {/* 2. Featured: Terroir HUB SHOCHU (flipped) */}
        <FeaturedCard project={featured[1]} flip />

        <Separator />

        {/* 3. Grid: 佐木島 + FOMUS Manga Studio */}
        <GridRow projects={[gridProjects[0], featured[2]]} />

        <Separator />

        {/* 4. Featured: SAQT */}
        <FeaturedCard project={featured[3]} />

        <Separator />

        {/* 5. Grid: AI Training + FOMUS SHOP */}
        <GridRow projects={[gridProjects[1], gridProjects[2]]} />

        <Separator />

        {/* 6. Featured: FOMUS Creative Studio (flipped) */}
        <FeaturedCard project={featured[4]} flip />
      </div>

      {/* CTA */}
      <section className="bg-[#0D1F1F] text-white py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <div className="gold-line w-12 mx-auto mb-8" />
            <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight mb-4">
              次のプロジェクトについて、お話しませんか。
            </h2>
            <p className="text-white/50 text-[15px] leading-[2] mb-8">
              Webサイト、AI導入、EC構築。まずはお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[var(--gold)] text-[#1A1A1A] px-10 py-4 rounded-lg text-[15px] font-bold hover:opacity-90 transition-opacity min-h-[52px]"
              >
                無料で相談する
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 rounded-lg text-[15px] font-medium hover:border-white/40 transition-colors min-h-[52px]"
              >
                サービス一覧を見る
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-white/40 text-[13px]">
              <span>相談無料</span>
              <span>営業電話なし</span>
              <span>契約の義務なし</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

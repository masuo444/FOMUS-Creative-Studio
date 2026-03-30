import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'

export const metadata: Metadata = {
  title: '実績紹介 | Terroir HUB・MangaX・GPSランナー・SILVA',
  description: '日本酒ポータル、漫画プラットフォーム、アスリートブランディング、カードゲーム、アートギャラリー。FOMUSが構築したプロジェクトを紹介。',
  alternates: { canonical: '/work' },
}

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

const projects: Project[] = [
  {
    id: 1,
    category: 'Web Platform / AI',
    title: 'Terroir HUB SAKE',
    subtitle: '全国1,500蔵の酒蔵情報ポータル',
    description:
      '日本全国の酒蔵1,500蔵の情報を構造化データベースとして構築。AIコンシェルジュ「サクラ」による自然言語検索、32言語対応。嘘をつかない情報設計を徹底。',
    tech: ['Next.js', 'Supabase', 'Claude AI', 'Vercel'],
    metrics: ['1,500蔵を網羅', 'AI検索搭載', '32言語対応'],
    image: '/images/work-terroir-sake.jpg',
    url: 'https://terroir-hub.com',
    urlLabel: 'terroir-hub.com',
  },
  {
    id: 2,
    category: '漫画制作 / プラットフォーム',
    title: 'MangaX',
    subtitle: '漫画制作 + 掲載プラットフォーム',
    description:
      'AI×クリエイティブディレクションによる漫画制作サービスと、制作した漫画を無料で掲載できるプラットフォーム。制作から公開まで一気通貫で対応。',
    tech: ['Next.js', 'Supabase', 'Vercel'],
    metrics: ['40言語対応', '最短1週間納品', '掲載無料'],
    image: '/images/work-manga.jpg',
    url: 'https://creative-manga.fomusglobal.com',
    urlLabel: 'creative-manga.fomusglobal.com',
  },
  {
    id: 3,
    category: 'ブランディング / Web制作',
    title: 'GPSランナー 清水直樹',
    subtitle: 'アスリートの公式サイト・ブランディング',
    description:
      'GPSアートで世界記録を持つランナー・清水直樹氏の公式サイトを制作。走った軌跡で絵を描くGPSアートの魅力を伝えるビジュアル設計と、メディア掲載・イベント情報の発信基盤を構築。',
    tech: ['Web制作', 'UI/UX', 'ブランディング'],
    metrics: ['公式サイト構築', 'ブランド設計'],
    image: '/images/work-gps-runner.jpg',
  },
  {
    id: 4,
    category: 'ゲーム / クリエイティブ',
    title: 'カードゲーム SILVA',
    subtitle: 'オリジナルカードゲームの企画・制作',
    description:
      '森をテーマにしたオリジナルカードゲーム「SILVA」の企画・デザイン・制作。ゲームデザイン、カードイラスト、パッケージ、ルールブックまでをトータルでプロデュース。',
    tech: ['ゲームデザイン', 'イラスト', 'プロダクト制作'],
    metrics: ['企画からプロダクトまで', 'トータルプロデュース'],
    image: '/images/work-silva.png',
  },
  {
    id: 5,
    category: 'Web制作',
    title: '佐木島アートギャラリー',
    subtitle: '瀬戸内海の離島アートギャラリーのサイト構築',
    description:
      '広島県・佐木島に誕生したコンテナ型・参加型アートギャラリーの公式サイトを制作。枡ウォール、レンタルスペース、アート展示の情報発信基盤を構築。',
    tech: ['Web制作', 'UI/UX'],
    metrics: ['サイト構築', '情報設計'],
    image: '/images/work-web.png',
  },
]

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
              Webプラットフォーム、AI導入、ブランディング、クリエイティブ。<br />
              すべて自社で企画・設計・実装した実案件です。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects */}
      <div className="bg-[#FAFAF8]">
        {projects.map((project, i) => (
          <div key={project.id}>
            {i > 0 && <div className="h-px bg-[#1A1A1A]/8 max-w-[1200px] mx-auto" />}
            <section className="py-16 md:py-24 px-6">
              <div className="max-w-[1200px] mx-auto">
                <ScrollReveal>
                  <div className={`relative flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
                    {/* Image */}
                    <div className="w-full md:w-[55%] shrink-0">
                      <div className="rounded-xl overflow-hidden shadow-2xl">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={800}
                          height={500}
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

                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.metrics.map((m) => (
                          <span key={m} className="text-[13px] font-medium text-[#1A1A1A]/70 bg-[#1A1A1A]/5 px-3 py-1.5 rounded-md">
                            {m}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <span key={t} className="text-[11px] text-[var(--gold)] bg-[var(--gold)]/10 px-3 py-1 rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>

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
          </div>
        ))}
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
              Webサイト、AI導入、クリエイティブ制作。まずはお気軽にご相談ください。
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
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

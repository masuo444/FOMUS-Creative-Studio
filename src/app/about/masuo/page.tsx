import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'
import ScrollReveal from '@/components/ui/ScrollReveal'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: '増尾 圭亮 | 合同会社FOMUS 代表 - AI導入・Web制作の実務家',
  description: '合同会社FOMUS代表。AI導入・Web制作・漫画制作・AI研修を自ら設計・実装する技術者。日本の伝統工芸品を20カ国以上に展開、全国1,500蔵の日本酒メディアを運営。',
  alternates: { canonical: '/about/masuo' },
}

const achievements = [
  { metric: '1,500+', label: '蔵', desc: '全国の酒蔵を網羅したポータルサイトを構築' },
  { metric: '970+', label: '蒸留所', desc: '焼酎・泡盛の全蒸留所データベースを構築' },
  { metric: '20+', label: 'カ国', desc: '日本の伝統工芸品を海外に展開' },
  { metric: '32', label: '言語', desc: 'AIによる多言語対応を実装' },
]

const expertise = [
  { area: 'AI導入支援', desc: 'AIチャットボット、多言語AI対応、レビュー自動返信、FAQ自動応答の設計・実装。自社メディアで実証済み。', href: '/services/ai' },
  { area: 'Web制作', desc: 'Next.js / React / Supabase / Stripeを用いたフルスタック開発。SEO・予約・決済・多言語まで一社完結。', href: '/services/web' },
  { area: '漫画制作', desc: 'AI活用による漫画制作ワークフローの構築。採用漫画・企業PR漫画の企画から完成まで。', href: '/services/manga' },
  { area: 'AI研修・リスキリング', desc: '法人向け実務特化型AI研修。御社の業務データを題材に、10時間でAIを業務実装レベルまで。', href: '/services/training' },
  { area: 'DXコンサルティング', desc: '業務フローの分析から、最適なIT施策の設計・実装・定着支援まで。', href: '/services/dx' },
]

const projects = [
  { name: 'Terroir HUB SAKE', desc: '全国1,500蔵の酒蔵ポータル。AI検索・32言語対応。', url: 'https://sake.terroir-hub.com' },
  { name: 'Terroir HUB SHOCHU', desc: '全国970蒸留所の焼酎・泡盛ポータル。世界初の構造化DB。', url: 'https://shochu.terroir-hub.com' },
  { name: 'FOMUS Manga Studio', desc: 'AI活用の漫画制作サービス + MangaXプラットフォーム。', url: 'https://creative-manga.fomusglobal.com' },
  { name: 'FOMUS AI Training', desc: '法人向けAI研修サービス。助成金対応。', url: 'https://ai-training.fomus.jp' },
]

export default function AuthorPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="pt-[72px] bg-[#F9FAFB]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-4">
              <ScrollReveal>
                <Image
                  src="/images/founder.jpg"
                  alt="増尾 圭亮 - 合同会社FOMUS代表"
                  width={600}
                  height={800}
                  className="aspect-[3/4] rounded-3xl object-cover w-full"
                  priority
                />
              </ScrollReveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ScrollReveal delay={60}>
                <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Founder & Engineer</p>
                <h1 className="text-[28px] md:text-[36px] font-bold tracking-tight mb-2 text-[#1F2937]">増尾 圭亮</h1>
                <p className="text-[14px] text-[#9CA3AF] mb-6">合同会社FOMUS 代表</p>
                <p className="text-[15px] md:text-[16px] text-[#6B7280] leading-[2.1] mb-6">
                  AI開発、Web制作、漫画制作までを一人で設計・実装する技術者。大規模な開発チームではなく、意思決定者が直接手を動かすことで、伝言コスト・管理コストを排除します。
                </p>
                <p className="text-[15px] md:text-[16px] text-[#6B7280] leading-[2.1]">
                  日本の伝統工芸品を20カ国以上に展開する事業と、全国1,500蔵を網羅する日本酒メディアを運営。AIチャットボット、多言語AI検索、IP事業展開などを自社ビジネスに実装し、実際の売上と業務効率の改善に直結させてきました。
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 実績数字 */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="text-center p-6">
                  <div className="mb-2">
                    <span className="text-[40px] md:text-[52px] font-bold text-[#059669] leading-none">{item.metric}</span>
                    <span className="text-[16px] text-[#6B7280] ml-1">{item.label}</span>
                  </div>
                  <p className="text-[13px] text-[#9CA3AF]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 専門領域 */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Expertise</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">専門領域</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <Link href={item.href} className="group block h-full">
                  <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8 h-full hover:border-[#059669]/30 hover:shadow-lg transition-all">
                    <h3 className="text-[17px] font-bold text-[#1F2937] mb-3 group-hover:text-[#059669] transition-colors">{item.area}</h3>
                    <p className="text-[14px] text-[#6B7280] leading-[1.9]">{item.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* プロジェクト実績 */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Projects</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">主なプロジェクト</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] p-8 hover:border-[#059669]/30 hover:shadow-lg transition-all">
                    <h3 className="text-[17px] font-bold text-[#1F2937] mb-2 group-hover:text-[#059669] transition-colors">{item.name} &#8599;</h3>
                    <p className="text-[14px] text-[#6B7280] leading-[1.9]">{item.desc}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#065F46] py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-[24px] md:text-[30px] font-bold tracking-tight mb-4">ITのことで困ったら、まず相談してください</h2>
            <p className="text-white/60 text-[15px] leading-[2] mb-8">
              御社の業務をヒアリングし、最適な仕組みをご提案します。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#065F46] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-[#D1FAE5] transition-colors min-h-[52px]">
              無料で相談する
            </Link>
                      </ScrollReveal>
        </div>
      </section>

      {/* Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: '増尾 圭亮',
            url: 'https://studio.fomus.jp/about/masuo',
            image: 'https://studio.fomus.jp/images/founder.jpg',
            jobTitle: '代表',
            worksFor: {
              '@type': 'Organization',
              name: '合同会社FOMUS',
              url: 'https://studio.fomus.jp',
            },
            knowsAbout: [
              'AI導入支援',
              'AIチャットボット開発',
              'Web制作',
              'Next.js',
              'React',
              'AI研修・リスキリング',
              'DXコンサルティング',
              '漫画制作',
              '多言語AI対応',
            ],
            description: 'AI開発、Web制作、漫画制作までを一人で設計・実装する技術者。自社でAIを活用した事業運営の実績をもとに、中小企業の業務課題を解決。',
          }),
        }}
      />
      <BreadcrumbSchema items={[
        { name: 'ホーム', href: '/' },
        { name: '増尾 圭亮', href: '/about/masuo' },
      ]} />
      <SiteFooter />
    </div>
  )
}

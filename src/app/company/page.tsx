import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: '会社概要 | 合同会社FOMUS',
  description: '合同会社FOMUS。代表 増尾圭亮。日本酒メディア運営、伝統工芸品の海外展開、AI導入・Web制作・漫画制作・AI研修を提供するクリエイティブスタジオ。',
  alternates: { canonical: '/company' },
}

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <SiteNav />

      {/* Dark hero banner */}
      <section className="pt-[72px] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full bg-[#1a4a3a] opacity-15 blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <div className="gold-line w-12 mb-6" />
            <h1 className="text-white text-[clamp(28px,4vw,44px)] font-bold tracking-tight mb-4">会社概要</h1>
            <p className="text-[16px] text-white/40 leading-[2] max-w-[600px]">
              FOMUS Creative Studioを運営する合同会社FOMUSについて。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Warm cream content area */}
      <section className="bg-[#F5F3EE] py-20 md:py-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          {/* Founder */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-20">
              <div className="md:col-span-4">
                <Image src="/images/founder.jpg" alt="増尾 圭亮 - 合同会社FOMUS代表" width={600} height={800} className="aspect-[3/4] rounded-2xl object-cover w-full" />
              </div>
              <div className="md:col-span-7 md:col-start-6 flex flex-col justify-center">
                <p className="text-[var(--gold)] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Founder</p>
                <p className="text-[var(--gold)] text-[13px] font-medium mb-3">代表</p>
                <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight mb-6 text-[#1A1A18]">増尾 圭亮</h2>
                <p className="text-[15px] md:text-[16px] text-[#4A4A46] leading-[2.1]">
                  合同会社FOMUS代表。AI開発、Web制作、漫画制作までを一人で設計・実装する技術者です。大規模な開発チームではなく、意思決定者が直接手を動かすことで、伝言コスト・管理コストを排除します。
                </p>
                <p className="text-[15px] md:text-[16px] text-[#1A1A18] leading-[2.1] mt-4 font-bold">
                  ITのことで困ったら、まず私に相談してください。
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Company table */}
          <ScrollReveal delay={60}>
            <div className="lux-card rounded-xl overflow-hidden">
              <table className="w-full text-[15px]">
                <tbody>
                  {[
                    ['会社名', '合同会社FOMUS'],
                    ['英文表記', 'FOMUS LLC'],
                    ['代表社員', '増尾 圭亮'],
                    ['設立', '2024年'],
                    ['所在地', '京都府（詳細はお問い合わせください）'],
                    ['海外法人', 'FOMUS Global Inc.（Dubai, UAE）'],
                    ['事業内容', '業務診断 / 仕組みの構築（AI・Web・クリエイティブ） / ITパートナー契約'],
                    ['連絡先', 'お問い合わせフォームよりご連絡ください'],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-[#E8E6DE] last:border-b-0">
                      <td className="px-4 md:px-6 py-5 text-[#8E8D88] font-medium w-[120px] md:w-[180px] align-top text-[14px] md:text-[15px]">{label}</td>
                      <td className="px-4 md:px-6 py-5 text-[#4A4A46] text-[14px] md:text-[15px]">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={80}>
            <div className="mt-16 text-center">
              <p className="text-[16px] md:text-[18px] font-bold tracking-tight mb-3 text-[#1A1A18]">
                まずはお気軽にご相談ください
              </p>
              <p className="text-[14px] md:text-[15px] text-[#4A4A46] mb-6">
                オンライン面談で、御社の課題を整理し、最適な施策をご提案します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--gold)] text-[#1A1A1A] px-8 py-4 rounded-lg text-[15px] font-bold hover:opacity-90 transition-opacity min-h-[52px]">
                  無料で相談する
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center border-2 border-[#D8D6D0] text-[#1A1A18] px-8 py-4 rounded-lg text-[15px] font-medium hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors min-h-[52px]">
                  サービス一覧を見る
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

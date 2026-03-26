import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function CompanyPage() {
  return (
    <div className="min-h-screen"><SiteNav />
      <div className="h-[72px]" />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <div className="gold-line w-12 mb-6" />
            <h1 className="text-[clamp(28px,4vw,44px)] font-bold tracking-tight mb-4">会社概要</h1>
            <p className="text-[16px] text-[var(--text-sub)] leading-[2] max-w-[600px] mb-16">
              FOMUS Creative Studioを運営する合同会社FOMUSについて。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-20">
              <div className="md:col-span-4">
                <img src="/images/founder.jpg" alt="増尾 圭亮" className="aspect-[3/4] rounded-2xl object-cover w-full" />
              </div>
              <div className="md:col-span-7 md:col-start-6 flex flex-col justify-center">
                <p className="text-[var(--gold)] text-[13px] font-medium mb-3">代表</p>
                <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight mb-6">増尾 圭亮</h2>
                <p className="text-[15px] md:text-[16px] text-[var(--text-sub)] leading-[2.1]">
                  合同会社FOMUS代表。AI開発、Web制作、漫画制作までを一人で設計・実装する技術者です。大規模な開発チームではなく、意思決定者が直接手を動かすことで、伝言コスト・管理コストを排除します。
                </p>
                <p className="text-[15px] md:text-[16px] text-[var(--text-sub)] leading-[2.1] mt-4">
                  <strong className="text-[var(--text)]">信条は「不要なものは売らない」。</strong>御社に必要ない施策は、聞かれても断ります。
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
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
                    ['事業内容', 'AI導入支援 / Web制作 / DXコンサルティング / 漫画・クリエイティブ制作 / 請求書・決済システム / 保守・運用サポート'],
                    ['連絡先', 'お問い合わせフォームよりご連絡ください'],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-[var(--border)] last:border-b-0">
                      <td className="px-4 md:px-6 py-5 text-[var(--text-muted)] font-medium w-[120px] md:w-[180px] align-top text-[14px] md:text-[15px]">{label}</td>
                      <td className="px-4 md:px-6 py-5 text-[var(--text-sub)] text-[14px] md:text-[15px]">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={100}>
            <div className="mt-16 text-center">
              <p className="text-[16px] md:text-[18px] font-bold tracking-tight mb-3">
                まずはお気軽にご相談ください
              </p>
              <p className="text-[14px] md:text-[15px] text-[var(--text-sub)] mb-6">
                30分のオンライン面談で、御社の課題を整理し、最適な施策をご提案します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--gold)] text-[var(--bg-dark)] px-8 py-4 rounded-lg text-[15px] font-bold hover:opacity-90 transition-opacity min-h-[52px]">
                  無料で相談する
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center border-2 border-[var(--border)] text-[var(--text)] px-8 py-4 rounded-lg text-[15px] font-medium hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors min-h-[52px]">
                  サービス一覧を見る
                </Link>
              </div>
              <p className="text-[13px] text-[var(--text-muted)] mt-3">相談無料 / 営業電話なし / 契約の義務なし</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}

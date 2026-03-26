import ScrollReveal from '@/components/ui/ScrollReveal'

export default function CompanyPage() {
  return (
    <div className="min-h-screen">
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
                <p className="text-[15px] text-[var(--text-sub)] leading-[2.1]">
                  合同会社FOMUS代表。AI開発、Web制作、漫画制作までを一人で設計・実装する技術者です。大規模な開発チームではなく、意思決定者が直接手を動かすことで、伝言コスト・管理コストを排除します。
                </p>
                <p className="text-[15px] text-[var(--text-sub)] leading-[2.1] mt-4">
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
                      <td className="px-6 py-5 text-[var(--text-muted)] font-medium w-[180px] align-top">{label}</td>
                      <td className="px-6 py-5 text-[var(--text-sub)]">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

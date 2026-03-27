import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'

const scope = [
  { title: '障害対応', desc: 'サイトやシステムの障害発生時に迅速に対応。原因調査から復旧まで。' },
  { title: 'セキュリティ更新', desc: 'フレームワーク・ライブラリのアップデート、脆弱性対応を定期的に実施。' },
  { title: '機能追加・改善', desc: '運用データをもとに、UI改善や新機能の追加提案・実装を行います。' },
  { title: '月次レポート', desc: 'アクセス解析・コンバージョン・パフォーマンスの月次レポートを提出。' },
  { title: '担当者研修', desc: 'CMS操作やツールの使い方を、御社の担当者に丁寧にレクチャーします。' },
]

const features = [
  { title: '専任担当者制', desc: '御社の状況を理解した専任担当者が、一貫して対応します。引き継ぎのストレスがありません。' },
  { title: '24時間以内に回答', desc: 'お問い合わせから24時間以内に一次回答をお返しします。緊急時はさらに迅速に対応。' },
  { title: 'ITパートナー契約', desc: '月額契約で御社のIT部門として機能。都度見積もりの手間なく、継続的な改善を実現します。' },
]

export default function ServiceMaintenancePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* ===== Hero ===== */}
      <section className="relative pt-[72px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 60%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] -right-[20%] w-[70%] h-[120%] opacity-[0.06]" viewBox="0 0 800 800" fill="none">
            <rect x="100" y="50" width="600" height="700" rx="300" stroke="url(#sg-mt)" strokeWidth="2" />
            <rect x="200" y="150" width="500" height="550" rx="250" stroke="url(#sg-mt)" strokeWidth="1.5" />
            <defs><linearGradient id="sg-mt" x1="0" y1="0" x2="800" y2="800"><stop stopColor="#059669" /><stop offset="1" stopColor="#10B981" /></linearGradient></defs>
          </svg>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#10B981] opacity-[0.06] blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Maintenance</p>
            <h1 className="font-bold tracking-tight mb-6 text-[#1F2937]">
              <span className="text-[24px] md:text-[28px]">導入して</span>
              <br />
              <span className="text-[48px] md:text-[64px] text-[#059669]">終わりではない。</span>
            </h1>
            <p className="text-[#6B7280] text-[16px] leading-[2] max-w-[560px]">
              導入して終わりではなく、成果が出るまで支援し続けます。<br />
              御社のIT部門として、継続的な改善をお約束します。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 対応範囲 ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Scope</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">対応範囲</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scope.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 h-full">
                  <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-[2]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 体制・特徴 ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Features</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">サポート体制</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 h-full">
                  <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-[2]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ITパートナー契約 ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">IT Partner</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-6">ITパートナー契約</h2>
            <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 md:p-10">
              <p className="text-[14px] text-[#6B7280] leading-[2] mb-6">
                月額契約で、御社のIT部門として機能します。<br />
                システムの保守・運用だけでなく、新しい施策の企画・実装まで、ITに関わるすべてを一括でお任せいただけます。
              </p>
              <ul className="space-y-3">
                {[
                  '都度見積もり不要 - 月額内で柔軟に対応',
                  '専任担当者 - 御社の事業を深く理解',
                  '継続改善 - 月次レポートに基づく改善提案',
                  '優先対応 - 障害時の最優先サポート',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-[#6B7280] leading-[1.8]">
                    <span className="text-[#059669] flex-shrink-0 mt-0.5">--</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#065F46] py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-[24px] md:text-[30px] font-bold tracking-tight mb-4">まずは無料でご相談ください</h2>
            <p className="text-white/60 text-[15px] leading-[2] mb-8">
              現在のシステム構成や運用課題をヒアリングし、<br />
              最適なサポートプランをご提案します。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#065F46] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-white/90 transition-colors min-h-[52px]">
              無料で相談する
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

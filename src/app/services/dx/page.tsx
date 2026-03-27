import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'

const approach = [
  { step: '01', title: 'ヒアリング', desc: '経営層・現場双方から、現在の業務フローと課題をヒアリングします。' },
  { step: '02', title: '課題マップ作成', desc: '業務全体を可視化し、ボトルネックと改善ポイントを特定します。' },
  { step: '03', title: 'ROI試算', desc: '各施策の投資対効果を試算し、優先順位を明確にします。' },
  { step: '04', title: '施策ロードマップ', desc: '短期・中期・長期の施策を整理し、実行可能なロードマップを策定します。' },
  { step: '05', title: '実行支援', desc: 'ツール選定・導入・社内研修まで、実行フェーズも一貫してサポートします。' },
]

const scope = [
  { title: '業務フロー分析', desc: '現状の業務プロセスを可視化し、非効率なポイントを特定。' },
  { title: 'IT投資の優先順位設計', desc: '限られた予算で最大効果を得るための投資計画を策定。' },
  { title: 'ツール選定・導入支援', desc: '御社に最適なツールを比較検討し、導入をサポート。' },
  { title: '社内研修・定着支援', desc: 'ツール導入後の社内定着まで、研修と運用支援を提供。' },
]

export default function ServiceDXPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      {/* ===== Dark Hero ===== */}
      <section className="bg-[#1A1A1A] pt-[72px] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] rounded-full bg-[#1a4a3a] opacity-15 blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">DX Consulting</p>
            <h1 className="text-white text-[clamp(32px,5vw,52px)] font-bold tracking-tight leading-[1.2] mb-4">DXコンサルティング</h1>
            <p className="text-white/40 text-[16px] leading-[2] max-w-[560px]">
              「何から始めるべきか」を、御社と一緒に設計します。<br />
              業務フロー分析からツール導入・社内研修まで一貫対応。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 対応範囲 ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Scope</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-12">対応範囲</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {scope.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="border border-[var(--border)] rounded-lg p-8 h-full">
                  <h3 className="text-[17px] font-bold mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[var(--text-sub)] leading-[2]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== アプローチ ===== */}
      <section className="bg-[#FAFAF8] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Approach</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-12">コンサルティングの流れ</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {approach.map((item) => (
              <ScrollReveal key={item.step}>
                <div className="bg-white border border-[var(--border)] rounded-lg p-8 flex gap-6 items-start">
                  <span className="text-[var(--gold)] text-[13px] font-bold tracking-[0.15em] flex-shrink-0 pt-1">STEP {item.step}</span>
                  <div>
                    <h3 className="text-[17px] font-bold mb-2">{item.title}</h3>
                    <p className="text-[14px] text-[var(--text-sub)] leading-[2]">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 導入効果 ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Impact</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-12">導入効果</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '+60%', label: '業務効率' },
              { num: '-50%', label: 'IT投資の無駄' },
              { num: '2倍', label: '意思決定スピード' },
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <div className="text-center py-8">
                  <p className="text-[clamp(36px,5vw,48px)] font-bold text-[var(--gold)] mb-2">{item.num}</p>
                  <p className="text-[14px] text-[var(--text-sub)]">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#1A1A1A] text-white py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-4">まずは無料でご相談ください</h2>
            <p className="text-white/40 text-[15px] leading-[2] mb-8">
              御社の課題を整理し、最適なDX推進プランをご提案します。<br />
              ヒアリング後にお見積もりします。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--gold)] text-[#1A1A1A] px-10 py-4 rounded-lg text-[16px] font-bold hover:opacity-90 transition-opacity min-h-[52px]">
              無料で相談する
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

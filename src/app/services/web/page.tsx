import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'

const scope = [
  { title: 'コーポレートサイト', desc: '企業の信頼を伝えるデザインと、成果につながる導線設計。' },
  { title: 'ランディングページ', desc: '広告・キャンペーンの成果を最大化するLP制作。ABテストにも対応。' },
  { title: '予約システム', desc: 'LINE・Web・電話からの予約を一元管理。空き状況の自動応答も。' },
  { title: 'EC機能', desc: 'Stripe連携による決済機能。サブスクリプションにも対応。' },
  { title: '多言語対応', desc: '英語・中国語をはじめとした多言語サイト構築。海外展開を支援。' },
  { title: 'CMS導入', desc: 'お知らせ・ブログ・実績更新を、御社で自由に編集できる仕組みを構築。' },
]

const stack = ['Next.js 16', 'Tailwind CSS', 'Supabase', 'Vercel', 'Stripe']

export default function ServiceWebPage() {
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
            <p className="text-[var(--gold)] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Web Production</p>
            <h1 className="text-white text-[clamp(32px,5vw,52px)] font-bold tracking-tight leading-[1.2] mb-4">Web制作・リニューアル</h1>
            <p className="text-white/40 text-[16px] leading-[2] max-w-[560px]">
              御社の「顔」となるWebサイトを、戦略的に構築します。<br />
              見た目だけでなく、集客・予約・売上につながる設計を。
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* ===== 技術スタック ===== */}
      <section className="bg-[#FAFAF8] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Technology</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-12">技術スタック</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap gap-3">
              {stack.map((tech) => (
                <span key={tech} className="bg-white border border-[var(--border)] rounded-full px-5 py-2.5 text-[14px] font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 導入効果 ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Impact</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-12">導入効果</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '+180%', label: '予約数' },
              { num: '-40%', label: '直帰率' },
              { num: '2秒以内', label: '表示速度' },
              { num: '最短3日', label: '納品' },
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <div className="text-center py-8">
                  <p className="text-[clamp(32px,4vw,44px)] font-bold text-[var(--gold)] mb-2">{item.num}</p>
                  <p className="text-[14px] text-[var(--text-sub)]">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 制作の流れ ===== */}
      <section className="bg-[#FAFAF8] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Flow</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-12">制作の流れ</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'ヒアリング', desc: '目的・ターゲット・競合を整理し、サイト戦略を設計します。' },
              { step: '02', title: 'デザイン', desc: 'ワイヤーフレームからビジュアルデザインまで。御社のブランドに合わせた設計。' },
              { step: '03', title: '開発・実装', desc: 'レスポンシブ対応・SEO・高速表示を標準装備した開発。' },
              { step: '04', title: '公開・運用', desc: 'テスト・公開・GA設定まで。公開後の改善提案も継続的に行います。' },
            ].map((item) => (
              <ScrollReveal key={item.step}>
                <div className="bg-white border border-[var(--border)] rounded-lg p-8">
                  <p className="text-[var(--gold)] text-[13px] font-bold tracking-[0.15em] mb-3">STEP {item.step}</p>
                  <h3 className="text-[17px] font-bold mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[var(--text-sub)] leading-[2]">{item.desc}</p>
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
              サイトの目的と課題をヒアリングし、最適なプランをご提案します。<br />
              お見積もりも無料です。
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

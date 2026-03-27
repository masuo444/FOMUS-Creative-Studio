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
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* ===== Hero ===== */}
      <section className="relative pt-[72px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 60%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] -right-[20%] w-[70%] h-[120%] opacity-[0.06]" viewBox="0 0 800 800" fill="none">
            <rect x="100" y="50" width="600" height="700" rx="300" stroke="url(#sg-web)" strokeWidth="2" />
            <rect x="200" y="150" width="500" height="550" rx="250" stroke="url(#sg-web)" strokeWidth="1.5" />
            <defs><linearGradient id="sg-web" x1="0" y1="0" x2="800" y2="800"><stop stopColor="#059669" /><stop offset="1" stopColor="#10B981" /></linearGradient></defs>
          </svg>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#10B981] opacity-[0.06] blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Web Production</p>
            <h1 className="font-bold tracking-tight mb-6 text-[#1F2937]">
              <span className="text-[24px] md:text-[28px]">御社の</span>
              <br />
              <span className="text-[48px] md:text-[64px] text-[#059669]">Webサイト</span>
              <br />
              <span className="text-[24px] md:text-[28px]">を戦略的に構築</span>
            </h1>
            <p className="text-[#6B7280] text-[16px] leading-[2] max-w-[560px]">
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

      {/* ===== 技術スタック ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Technology</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">技術スタック</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap gap-3">
              {stack.map((tech) => (
                <span key={tech} className="bg-[#D1FAE5] text-[#059669] rounded-full px-5 py-2.5 text-[14px] font-medium">
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
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Impact</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">導入効果</h2>
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
                  <p className="text-[48px] md:text-[64px] font-bold text-[#059669] leading-none mb-2">{item.num}</p>
                  <p className="text-[14px] text-[#6B7280]">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 制作の流れ ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Flow</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">制作の流れ</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'ヒアリング', desc: '目的・ターゲット・競合を整理し、サイト戦略を設計します。' },
              { step: '02', title: 'デザイン', desc: 'ワイヤーフレームからビジュアルデザインまで。御社のブランドに合わせた設計。' },
              { step: '03', title: '開発・実装', desc: 'レスポンシブ対応・SEO・高速表示を標準装備した開発。' },
              { step: '04', title: '公開・運用', desc: 'テスト・公開・GA設定まで。公開後の改善提案も継続的に行います。' },
            ].map((item) => (
              <ScrollReveal key={item.step}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8">
                  <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] mb-3">STEP {item.step}</p>
                  <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-[2]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#065F46] py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-[24px] md:text-[30px] font-bold tracking-tight mb-4">まずは無料でご相談ください</h2>
            <p className="text-white/60 text-[15px] leading-[2] mb-8">
              サイトの目的と課題をヒアリングし、最適なプランをご提案します。<br />
              お見積もりも無料です。
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

import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'
import FAQ from '@/components/ui/FAQ'
import FaqSchema from '@/components/seo/FaqSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'DX推進・コンサルティング | 業務分析・ROI設計・ツール導入',
  description: '業務効率+60%、IT投資の無駄-50%。業務フロー分析からROI試算、ツール導入、社内定着まで。提案書だけで終わらない、実行までFOMUSが一貫対応。',
  alternates: { canonical: '/services/dx' },
}

const painPoints = [
  { title: 'AI導入が必要だと分かっているが、何から始めればいいか分からない', desc: '周りはDXだAIだと言うが、自社にどう適用するのか見えない。相談できる相手もいない。' },
  { title: 'ITツールを入れたが、現場が使いこなせていない', desc: '導入だけして放置。結局Excel手作業に戻っている。投資が回収できていない。' },
  { title: '業者に言われるまま投資して、効果が出ていない', desc: '不要な機能を入れて予算だけ消化。本当に必要な施策が後回しになっている。' },
]

const solutions = [
  { en: '01', title: '業務フロー分析', desc: '現状の業務プロセスを可視化し、非効率なポイントを特定。感覚ではなくデータで判断します。' },
  { en: '02', title: 'ROI試算・優先順位設計', desc: '各施策の投資対効果を試算し、「何から始めるか」を明確にします。限られた予算で最大効果を狙う。' },
  { en: '03', title: 'ツール選定・導入支援', desc: '御社に最適なツールを比較検討し導入をサポート。不要なツールは入れません。' },
  { en: '04', title: '社内研修・定着支援', desc: 'ツール導入後の社内定着まで支援。マニュアル整備・研修・フォローアップを含みます。' },
]

const approach = [
  { step: '01', title: 'ヒアリング', desc: '経営層・現場双方から課題をヒアリング。「何が本当の問題か」を整理します。', note: 'オンライン / 無料' },
  { step: '02', title: '課題マップ作成', desc: '業務全体を可視化し、ボトルネックと改善ポイントを特定します。', note: '1〜2週間' },
  { step: '03', title: 'ROI試算・ロードマップ', desc: '短期・中期・長期の施策を整理し、投資対効果に基づくロードマップを策定。', note: '実行可能な計画' },
  { step: '04', title: '実行支援', desc: 'ツール導入・社内研修・運用定着まで一貫してサポートします。', note: '丸投げ可能' },
]

const impacts = [
  { metric: '+60%', label: '業務効率', before: '手作業中心', after: 'ツールで自動化' },
  { metric: '-50%', label: 'IT投資の無駄', before: '効果不明の投資', after: 'ROIベースの判断' },
  { metric: '×2', label: '意思決定スピード', before: '感覚で判断', after: 'データで即判断' },
]

const faqItems = [
  { q: 'ITの知識がまったくなくても大丈夫ですか？', a: 'はい。むしろそういう方のためのサービスです。「何をすればいいか分からない」状態から、課題を整理し最適な施策をご提案します。' },
  { q: 'すでにITツールを導入済みですが、相談できますか？', a: 'はい。既存ツールの活用状況を分析し、使いこなせていない部分の改善や、より適切なツールへの移行をご提案します。' },
  { q: 'どのくらいの規模の企業が対象ですか？', a: '従業員5名〜100名程度の中小企業を中心に対応しています。大企業向けの大規模システムではなく、実務に直結する改善を得意としています。' },
  { q: 'コンサルだけで終わらず、実行もしてもらえますか？', a: 'はい。FOMUSの最大の強みは、コンサル・設計・実装・運用を一社で完結できることです。提案書だけで終わることはありません。' },
]

export default function ServiceDXPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />
      <Breadcrumb items={[{ name: 'ホーム', href: '/' }, { name: 'サービス', href: '/services' }, { name: 'DXコンサルティング', href: '/services/dx' }]} />

      {/* ===== Hero ===== */}
      <section className="relative pt-0 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 60%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] -right-[20%] w-[70%] h-[120%] opacity-[0.06]" viewBox="0 0 800 800" fill="none">
            <rect x="100" y="50" width="600" height="700" rx="300" stroke="url(#sg-dx)" strokeWidth="2" />
            <rect x="200" y="150" width="500" height="550" rx="250" stroke="url(#sg-dx)" strokeWidth="1.5" />
            <defs><linearGradient id="sg-dx" x1="0" y1="0" x2="800" y2="800"><stop stopColor="#059669" /><stop offset="1" stopColor="#10B981" /></linearGradient></defs>
          </svg>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#10B981] opacity-[0.06] blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">DX Consulting</p>
            <h1 className="font-bold tracking-tight mb-6 text-[#1F2937]">
              <span className="text-[24px] md:text-[28px]">「何から始めるか」を</span>
              <br />
              <span className="text-[48px] md:text-[64px] text-[#059669]">明確に</span>
              <span className="text-[24px] md:text-[28px]">します。</span>
            </h1>
            <p className="text-[#6B7280] text-[16px] leading-[2] max-w-[560px]">
              業務フロー分析からROI試算、ツール導入、社内定着まで。<br />
              提案書だけで終わらない。実行までFOMUSが一貫対応します。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 課題 ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Challenges</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">こんな課題を抱えていませんか？</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {painPoints.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-start gap-5 bg-[#F9FAFB] rounded-2xl p-6 md:p-8 border border-[#E5E7EB]">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FEE2E2] text-[#DC2626] text-[14px] font-bold flex-shrink-0 mt-0.5">!</span>
                  <div>
                    <h3 className="text-[17px] font-bold text-[#1F2937] mb-2">{item.title}</h3>
                    <p className="text-[14px] text-[#6B7280] leading-[1.9]">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 解決策 ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Solutions</p>
            <h2 className="font-bold tracking-tight text-[#1F2937] mb-4">
              <span className="text-[24px] md:text-[28px]">ROIベースで</span>
              <span className="text-[36px] md:text-[48px] text-[#059669]">最適解</span>
              <span className="text-[24px] md:text-[28px]">を設計します</span>
            </h2>
            <p className="text-[#6B7280] text-[15px] leading-[2] max-w-[560px] mb-12">不要なツールは入れません。投資対効果の高い施策から順に実行します。</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 h-full">
                  <span className="inline-block text-[#059669] text-[12px] font-bold tracking-[0.15em] bg-[#D1FAE5] px-4 py-1.5 rounded-full mb-4">{item.en}</span>
                  <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-[2]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 導入効果（Before/After） ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Impact</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">導入効果</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {impacts.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 text-center">
                  <p className="text-[48px] md:text-[56px] font-bold text-[#059669] leading-none mb-4">{item.metric}</p>
                  <p className="text-[15px] font-bold text-[#1F2937] mb-4">{item.label}</p>
                  <div className="flex items-center justify-center gap-3 text-[14px]">
                    <span className="text-[#9CA3AF] line-through">{item.before}</span>
                    <span className="text-[#9CA3AF]">→</span>
                    <span className="text-[#1F2937] font-bold">{item.after}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 中間CTA ===== */}
      <ScrollReveal>
        <div className="bg-gradient-to-r from-[#059669] to-[#10B981] py-12 px-6 text-center">
          <p className="text-white text-[18px] md:text-[22px] font-bold mb-4">御社の業務、どこから改善すべきか整理しませんか？</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#059669] px-8 py-3 rounded-full text-[15px] font-bold hover:bg-white/90 transition-colors min-h-[48px]">
            無料で相談する
          </Link>
        </div>
      </ScrollReveal>

      {/* ===== コンサルティングの流れ ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Approach</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">コンサルティングの流れ</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((item) => (
              <ScrollReveal key={item.step}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 h-full">
                  <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] mb-3">STEP {item.step}</p>
                  <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-[2] mb-4">{item.desc}</p>
                  <p className="text-[13px] text-[#059669] font-medium">{item.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">FAQ</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">よくある質問</h2>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#065F46] py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-[24px] md:text-[30px] font-bold tracking-tight mb-4">まずは無料でご相談ください</h2>
            <p className="text-white/60 text-[15px] leading-[2] mb-8">
              御社の課題を整理し、最適なDX推進プランをご提案します。<br />
              提案だけで終わらず、実行までFOMUSが対応します。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#065F46] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-white/90 transition-colors min-h-[52px]">
              無料で相談する
            </Link>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-white/40 text-[13px]">
              <span>相談無料</span>
              <span>営業電話なし</span>
              <span>契約の義務なし</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FaqSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: 'ホーム', href: '/' },
        { name: 'サービス', href: '/services' },
        { name: 'DXコンサルティング', href: '/services/dx' },
      ]} />
      <SiteFooter />
    </div>
  )
}

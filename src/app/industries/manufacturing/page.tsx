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
  title: '製造業のDX推進・AI導入・AI研修 | 業務効率化で生産性を上げる',
  description: '製造業の業務フロー分析からAI導入、社内AI研修まで一貫対応。業務効率+60%、IT投資の無駄-50%。助成金で研修費用最大75%OFF。',
  alternates: { canonical: '/industries/manufacturing' },
  keywords: ['製造業 DX', '製造業 AI活用', '製造 業務効率化', '製造 AI研修', '工場 自動化', '製造業 デジタル化'],
}

const painPoints = [
  { title: '紙の帳票・Excel管理から抜け出せない', desc: '生産管理、在庫管理、品質管理がExcelと紙ベース。転記ミスが発生し、情報共有にも時間がかかる。' },
  { title: 'DXが必要だと分かっているが、何から始めればいいか分からない', desc: '展示会でツールを見ても自社にどう適用するか分からない。ITに詳しい社員もいない。' },
  { title: '若手が採用できない', desc: '「製造業＝きつい」のイメージ。求人を出しても応募が来ない。会社の技術力や働く環境が求職者に伝わっていない。' },
]

const solutions = [
  { en: 'DX Strategy', title: '業務フロー分析・DX設計', desc: '現場の業務を可視化し、ROIの高い施策から優先的に実行。不要なツールは入れません。', href: '/services/dx' },
  { en: 'AI Automation', title: 'AI導入・業務自動化', desc: '受発注処理、在庫管理、品質レポートの自動化。手作業のミスと工数を削減。', href: '/services/ai' },
  { en: 'AI Training', title: 'AI研修（助成金75%OFF）', desc: '現場スタッフがAIツールを業務で活用できるように。御社の実際の業務データを題材にした実務特化型研修。', href: '/services/training' },
  { en: 'Manga PR', title: '採用漫画・PR漫画', desc: '工場の技術力、ものづくりの魅力を漫画で伝える。採用サイトやSNSで差別化。MangaXに無料掲載。', href: '/services/manga' },
]

const impacts = [
  { metric: '+60%', label: '業務効率', before: '手作業中心', after: 'ツールで自動化' },
  { metric: '-50%', label: 'IT投資の無駄', before: '効果不明の投資', after: 'ROIベースの判断' },
  { metric: '75%OFF', label: 'AI研修費用', before: '助成金活用', after: '実質1/4の負担' },
]

const faqItems = [
  { q: 'ITに詳しい社員がいなくても大丈夫ですか？', a: 'はい。「何をすればいいか分からない」状態から対応します。現場のヒアリングから始めて、最適なDX推進プランを一緒に設計します。' },
  { q: '大規模なシステム導入は必要ですか？', a: 'いいえ。いきなり大規模システムを入れるのではなく、効果の高い業務から段階的にデジタル化します。小さく始めて確実に成果を出す方針です。' },
  { q: 'AI研修の助成金はどう使えますか？', a: '人材開発支援助成金（リスキリング支援コース）を活用し、研修費用を最大75%削減できます。研修計画の策定や必要書類の案内など、申請準備をサポートします。' },
  { q: '費用感を教えてください。', a: '業務分析・DX設計のヒアリングは無料。施策の規模に応じてお見積もりします。ROIを試算した上でご判断いただけます。' },
]

export default function IndustryManufacturingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />
      <Breadcrumb items={[{ name: 'ホーム', href: '/' }, { name: '業種別', href: '/services' }, { name: '製造業', href: '/industries/manufacturing' }]} />

      {/* Hero */}
      <section className="relative pt-0 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 60%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] -right-[20%] w-[70%] h-[120%] opacity-[0.06]" viewBox="0 0 800 800" fill="none">
            <rect x="100" y="50" width="600" height="700" rx="300" stroke="url(#sg-mfg)" strokeWidth="2" />
            <rect x="200" y="150" width="500" height="550" rx="250" stroke="url(#sg-mfg)" strokeWidth="1.5" />
            <defs><linearGradient id="sg-mfg" x1="0" y1="0" x2="800" y2="800"><stop stopColor="#059669" /><stop offset="1" stopColor="#10B981" /></linearGradient></defs>
          </svg>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#10B981] opacity-[0.06] blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">For Manufacturing</p>
            <h1 className="font-bold tracking-tight mb-6 text-[#1F2937]">
              <span className="text-[24px] md:text-[28px]">製造業のDXを、</span>
              <br />
              <span className="text-[48px] md:text-[64px] text-[#059669]">現場から変える</span>
              <span className="text-[24px] md:text-[28px]">。</span>
            </h1>
            <p className="text-[#6B7280] text-[16px] leading-[2] max-w-[560px]">
              紙とExcelの管理を脱却し、業務を仕組み化。<br />
              業務分析からAI導入、社内研修まで一貫対応します。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 課題 */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Challenges</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">製造業が抱える課題</h2>
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

      {/* 解決策 */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Solutions</p>
            <h2 className="font-bold tracking-tight text-[#1F2937] mb-4">
              <span className="text-[24px] md:text-[28px]">製造業に最適な</span>
              <span className="text-[36px] md:text-[48px] text-[#059669]">仕組み</span>
              <span className="text-[24px] md:text-[28px]">を構築します</span>
            </h2>
            <p className="text-[#6B7280] text-[15px] leading-[2] max-w-[560px] mb-12">業務分析・AI・研修・漫画を組み合わせて、御社の課題に合わせた最適な仕組みを提案します。</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <Link href={item.href} className="block h-full group">
                  <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 h-full hover:shadow-lg transition-shadow">
                    <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] mb-3">{item.en}</p>
                    <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                    <p className="text-[14px] text-[#6B7280] leading-[2]">{item.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 導入効果 */}
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

      {/* 中間CTA */}
      <ScrollReveal>
        <div className="bg-gradient-to-r from-[#059669] to-[#10B981] py-12 px-6 text-center">
          <p className="text-white text-[18px] md:text-[22px] font-bold mb-4">御社の製造現場、どこからデジタル化すべきか整理しませんか？</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#059669] px-8 py-3 rounded-full text-[15px] font-bold hover:bg-white/90 transition-colors min-h-[48px]">
            無料で相談する
          </Link>
        </div>
      </ScrollReveal>

      {/* FAQ */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">FAQ</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">よくある質問</h2>
          </ScrollReveal>
          <ScrollReveal><FAQ items={faqItems} /></ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#065F46] py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-[24px] md:text-[30px] font-bold tracking-tight mb-4">まずは無料でご相談ください</h2>
            <p className="text-white/60 text-[15px] leading-[2] mb-8">
              御社の課題をヒアリングし、ROIベースのDX推進プランをご提案します。<br />
              ITの知識は不要です。「何から始めるか」からお伝えします。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#065F46] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-white/90 transition-colors min-h-[52px]">
              無料で相談する
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <FaqSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: 'ホーム', href: '/' },
        { name: '業種別', href: '/services' },
        { name: '製造業', href: '/industries/manufacturing' },
      ]} />
      <SiteFooter />
    </div>
  )
}

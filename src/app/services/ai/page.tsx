import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'

const scope = [
  { title: 'チャットボット構築', desc: 'LINE・Web・WhatsAppに対応したAIチャットボットを構築。問い合わせ対応を自動化します。' },
  { title: 'FAQ自動応答', desc: '過去の問い合わせデータやナレッジベースをもとに、AIが最適な回答を即時返答。' },
  { title: '多言語対応AI（9言語）', desc: '英語・中国語・韓国語・フランス語・スペイン語・タイ語・ベトナム語・インドネシア語・日本語に対応。' },
  { title: 'レビュー自動返信', desc: 'Googleレビューや予約サイトの口コミに、AIがトーンを合わせて自動返信。' },
  { title: 'データ分析・可視化', desc: '売上・予約・アクセスデータをAIで分析し、経営判断に役立つダッシュボードを構築。' },
  { title: '予約管理の自動化', desc: 'LINE・電話・Webからの予約を一元管理。空き状況の自動応答やリマインド通知にも対応。' },
]

const stack = ['Claude AI', 'LINE Messaging API', 'WhatsApp Business API', 'Supabase', 'Next.js']

const flow = [
  { step: '01', title: 'ヒアリング', desc: '現在の業務フローと課題を整理します。' },
  { step: '02', title: 'プロトタイプ（2週間）', desc: '実際の業務データで動くプロトタイプを構築し、効果を検証します。' },
  { step: '03', title: '導入・運用', desc: '本番環境にデプロイし、運用開始。継続的な改善をサポートします。' },
]

export default function ServiceAIPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* ===== Hero ===== */}
      <section className="relative pt-[72px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 60%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] -right-[20%] w-[70%] h-[120%] opacity-[0.06]" viewBox="0 0 800 800" fill="none">
            <rect x="100" y="50" width="600" height="700" rx="300" stroke="url(#sg-ai)" strokeWidth="2" />
            <rect x="200" y="150" width="500" height="550" rx="250" stroke="url(#sg-ai)" strokeWidth="1.5" />
            <defs><linearGradient id="sg-ai" x1="0" y1="0" x2="800" y2="800"><stop stopColor="#059669" /><stop offset="1" stopColor="#10B981" /></linearGradient></defs>
          </svg>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#10B981] opacity-[0.06] blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">AI Solutions</p>
            <h1 className="font-bold tracking-tight mb-6 text-[#1F2937]">
              <span className="text-[24px] md:text-[28px]">業務の</span>
              <br />
              <span className="text-[48px] md:text-[64px] text-[#059669]">自動化</span>
              <span className="text-[24px] md:text-[28px]">をAIで実現</span>
            </h1>
            <p className="text-[#6B7280] text-[16px] leading-[2] max-w-[560px]">
              業務自動化・チャットボット・データ分析の設計と実装。<br />
              御社の業務に最適なAIを、設計から運用まで一貫して構築します。
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

      {/* ===== 技術基盤 ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Technology</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">技術基盤</h2>
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
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '-80%', label: '問い合わせ対応工数' },
              { num: '24h', label: '自動対応（365日）' },
              { num: '9言語', label: '多言語対応' },
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <div className="text-center py-8">
                  <p className="text-[60px] md:text-[80px] font-bold text-[#059669] leading-none mb-2">{item.num}</p>
                  <p className="text-[14px] text-[#6B7280]">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 導入の流れ ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Flow</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">導入の流れ</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {flow.map((item) => (
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
              御社の業務に最適なAI活用方法を、ヒアリング後にご提案します。<br />
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

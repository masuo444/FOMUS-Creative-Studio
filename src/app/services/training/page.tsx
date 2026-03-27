import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'
import FAQ from '@/components/ui/FAQ'

const strengths = [
  { en: 'Business-First', title: '業務起点の実務特化型', desc: 'ツール操作ではなく、御社の業務フローにAIを組み込む設計力を育てます。' },
  { en: 'Tool-Agnostic', title: 'ツールに依存しない', desc: '特定のツールに縛られず、目的に応じた最適なAIの使い分けを習得。' },
  { en: 'Subsidy', title: '助成金活用', desc: '人材開発支援助成金（リスキリング支援）の活用で、大幅に負担を軽減可能。' },
  { en: 'Practitioner', title: '実務家による指導', desc: '自社でAIを活用している実務家が、現場で使える知見を直接指導します。' },
]

const tools = ['ChatGPT', 'Gemini', 'SUNO', 'Midjourney', 'NotebookLM']

const flow = [
  { step: '01', title: '業務整理', desc: '御社の業務フローをヒアリングし、AIで効率化できるポイントを特定します。' },
  { step: '02', title: '業務活用ワーク（10時間）', desc: '実際の業務データを使いながら、AIの活用スキルを実践的に習得します。' },
  { step: '03', title: '活用定着サポート', desc: '研修後も一定期間、活用状況のフォローアップと質問対応を行います。' },
]

const faqItems = [
  { q: 'AIの知識がないメンバーでも参加できますか？', a: 'はい、問題ありません。初心者向けの内容から段階的に進めます。業務で使えるレベルまで丁寧にサポートします。' },
  { q: '研修の所要時間はどのくらいですか？', a: '基本プログラムは全10時間です。御社のスケジュールに合わせて、複数日に分割して実施することも可能です。' },
  { q: '助成金の申請もサポートしてもらえますか？', a: 'はい、人材開発支援助成金（リスキリング支援コース）の申請に必要な書類作成や手続きもサポートします。' },
  { q: 'オンラインでの受講は可能ですか？', a: 'はい、オンライン・オフラインどちらにも対応しています。御社のご希望に合わせて柔軟に実施します。' },
]

export default function ServiceTrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* ===== Hero ===== */}
      <section className="relative pt-[72px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 60%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] -right-[20%] w-[70%] h-[120%] opacity-[0.06]" viewBox="0 0 800 800" fill="none">
            <rect x="100" y="50" width="600" height="700" rx="300" stroke="url(#sg-tr)" strokeWidth="2" />
            <rect x="200" y="150" width="500" height="550" rx="250" stroke="url(#sg-tr)" strokeWidth="1.5" />
            <defs><linearGradient id="sg-tr" x1="0" y1="0" x2="800" y2="800"><stop stopColor="#059669" /><stop offset="1" stopColor="#10B981" /></linearGradient></defs>
          </svg>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#10B981] opacity-[0.06] blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">AI Training</p>
            <h1 className="font-bold tracking-tight mb-6 text-[#1F2937]">
              <span className="text-[24px] md:text-[28px]">AIを、日々の</span>
              <br />
              <span className="text-[48px] md:text-[64px] text-[#059669]">業務</span>
              <span className="text-[24px] md:text-[28px]">に組み込む</span>
            </h1>
            <p className="text-[#6B7280] text-[16px] leading-[2] max-w-[560px]">
              業務活用特化型のAI研修。<br />
              ツール操作ではなく、御社の業務にAIを組み込む設計力を育てます。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 4つの強み ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Strengths</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">4つの強み</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 h-full">
                  <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] mb-3">{item.en}</p>
                  <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-[2]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 対応ツール ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Tools</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">対応ツール</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span key={tool} className="bg-[#D1FAE5] text-[#059669] rounded-full px-5 py-2.5 text-[14px] font-medium">
                  {tool}
                </span>
              ))}
            </div>
            <p className="text-[14px] text-[#6B7280] leading-[2] mt-6">
              上記以外のツールにも対応可能です。御社の業務に合わせて最適なツールを選定します。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 研修フロー ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Flow</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">研修の流れ</h2>
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

      {/* ===== 助成金 ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Subsidy</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-6">助成金の活用</h2>
            <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 md:p-10">
              <h3 className="text-[17px] font-bold text-[#1F2937] mb-4">人材開発支援助成金（リスキリング支援コース）</h3>
              <p className="text-[14px] text-[#6B7280] leading-[2] mb-4">
                厚生労働省の人材開発支援助成金を活用することで、研修費用の大幅な負担軽減が可能です。
                助成金の申請手続きもサポートいたします。
              </p>
              <p className="text-[14px] text-[#6B7280] leading-[2]">
                詳しい助成金額や条件については、ヒアリング時にご説明します。
              </p>
            </div>
          </ScrollReveal>
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

      {/* ===== 詳細サイト ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Details</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-4">研修の詳細</h2>
            <p className="text-[14px] text-[#6B7280] leading-[2] mb-8">
              研修プログラムの詳細やカリキュラムについては、<br />
              専用サイトをご覧ください。
            </p>
            <a
              href="https://ai-training.fomus.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#059669] text-[15px] font-medium hover:opacity-70 transition-opacity"
            >
              ai-training.fomus.jp
              <span className="text-[12px]">&#8599;</span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#065F46] py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-[24px] md:text-[30px] font-bold tracking-tight mb-4">まずは無料でご相談ください</h2>
            <p className="text-white/60 text-[15px] leading-[2] mb-8">
              御社の業務内容に合わせた研修プランをご提案します。<br />
              ヒアリング後にお見積もりします。
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

import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'
import FAQ from '@/components/ui/FAQ'

const strengths = [
  { en: '1W Delivery', title: '最短1週間で納品', desc: 'AI活用による高速制作フローで、企画から納品まで最短1週間。' },
  { en: '1/3 Cost', title: 'コスト1/3', desc: '従来の漫画制作と比較して、約1/3のコストで制作可能。' },
  { en: '0 Preparation', title: '準備不要', desc: '漫画の知識や素材は一切不要。ヒアリングだけでスタートできます。' },
  { en: '40+ Languages', title: '40言語以上対応', desc: '多言語展開にも対応。海外向けPR・採用活動にも活用できます。' },
]

const usecases = [
  { tag: 'Business', title: '採用漫画', desc: '求職者に届く、御社のリアルなストーリー。採用サイトやパンフレットに。' },
  { tag: 'Personal', title: '自己紹介漫画', desc: '経営者・フリーランスの自己紹介を漫画化。SNSや名刺に活用。' },
  { tag: 'Gift', title: '記念日ギフト', desc: '結婚式・誕生日・退職祝いなど、大切な人への特別な贈り物に。' },
  { tag: 'Global', title: '海外PR', desc: '多言語対応の漫画で、海外市場への効果的なプロモーションを実現。' },
]

const flow = [
  { step: '01', title: 'お問い合わせ', desc: 'フォームまたはLINEからお気軽にご連絡ください。' },
  { step: '02', title: 'ヒアリング', desc: '伝えたい内容・用途・トーンなどを丁寧にヒアリングします。' },
  { step: '03', title: '構成・作画', desc: 'ストーリー構成を作成し、承認後に作画に入ります。' },
  { step: '04', title: '修正・確認', desc: '仕上がりを確認いただき、必要に応じて修正します。' },
  { step: '05', title: '納品', desc: '最終データを納品。印刷用・Web用など用途に合わせた形式で。' },
]

const faqItems = [
  { q: '漫画の知識がなくても依頼できますか？', a: 'はい、もちろんです。ヒアリングでお話を伺い、構成からすべてこちらで制作します。漫画の知識や素材は一切不要です。' },
  { q: 'クオリティはどの程度ですか？', a: 'プロのクリエイティブディレクションとAIを組み合わせた制作フローにより、商業レベルのクオリティを実現しています。' },
  { q: '著作権はどうなりますか？', a: '納品後の著作権は原則としてお客様に帰属します。詳細は契約時にご説明いたします。' },
  { q: '修正は何回まで可能ですか？', a: '基本的な修正回数はプランに含まれています。大幅な変更が必要な場合は事前にご相談ください。' },
]

export default function ServiceMangaPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* ===== Hero ===== */}
      <section className="relative pt-[72px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 60%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] -right-[20%] w-[70%] h-[120%] opacity-[0.06]" viewBox="0 0 800 800" fill="none">
            <rect x="100" y="50" width="600" height="700" rx="300" stroke="url(#sg-manga)" strokeWidth="2" />
            <rect x="200" y="150" width="500" height="550" rx="250" stroke="url(#sg-manga)" strokeWidth="1.5" />
            <defs><linearGradient id="sg-manga" x1="0" y1="0" x2="800" y2="800"><stop stopColor="#059669" /><stop offset="1" stopColor="#10B981" /></linearGradient></defs>
          </svg>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#10B981] opacity-[0.06] blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Manga & Creative</p>
            <h1 className="font-bold tracking-tight mb-6 text-[#1F2937]">
              <span className="text-[24px] md:text-[28px]">あなたの</span>
              <br />
              <span className="text-[48px] md:text-[64px] text-[#059669]">物語</span>
              <span className="text-[24px] md:text-[28px]">を、漫画に。</span>
            </h1>
            <p className="text-[#6B7280] text-[16px] leading-[2] max-w-[560px]">
              AI x クリエイティブディレクションで、最短1週間で納品。<br />
              採用・PR・ギフト・海外展開まで、漫画の力で届けます。
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
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 h-full text-center">
                  <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] mb-3">{item.en}</p>
                  <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-[2]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ユースケース ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Use Cases</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">活用シーン</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {usecases.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 h-full">
                  <span className="inline-block bg-[#D1FAE5] text-[#059669] text-[12px] font-bold px-3 py-1 rounded-full mb-4">{item.tag}</span>
                  <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-[2]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 制作フロー ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Flow</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">制作の流れ</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-5 gap-6">
            {flow.map((item) => (
              <ScrollReveal key={item.step}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-6 h-full">
                  <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] mb-3">STEP {item.step}</p>
                  <h3 className="text-[15px] font-bold text-[#1F2937] mb-2">{item.title}</h3>
                  <p className="text-[13px] text-[#6B7280] leading-[1.9]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
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

      {/* ===== MangaX Platform ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Platform</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-4">MangaX プラットフォーム</h2>
            <p className="text-[14px] text-[#6B7280] leading-[2] mb-8">
              漫画制作に特化した専用プラットフォームもご用意しています。<br />
              詳細はこちらからご確認ください。
            </p>
            <a
              href="https://creative-manga.fomusglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#059669] text-[15px] font-medium hover:opacity-70 transition-opacity"
            >
              creative-manga.fomusglobal.com
              <span className="text-[12px]">&#8599;</span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#065F46] py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-[24px] md:text-[30px] font-bold tracking-tight mb-4">まずはご相談ください</h2>
            <p className="text-white/60 text-[15px] leading-[2] mb-8">
              用途やご予算に合わせて、最適なプランをご提案します。<br />
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

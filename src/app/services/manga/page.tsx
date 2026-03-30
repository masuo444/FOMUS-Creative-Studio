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
  title: '漫画制作 | 採用漫画・企業PR漫画・MangaX掲載無料',
  description: '最短1週間・コスト1/3で採用漫画・企業PR漫画を制作。営業・人事・企画・CSなど部門ごとの課題に対応。自社プラットフォームMangaXに無料掲載。制作から公開まで一気通貫。',
  alternates: { canonical: '/services/manga' },
}

const strengths = [
  { en: '1W Delivery', title: '最短1週間で納品', desc: 'AI活用による高速制作フローで、企画から納品まで最短1週間。' },
  { en: '1/3 Cost', title: 'コスト1/3', desc: '従来の漫画制作と比較して、約1/3のコストで制作可能。' },
  { en: '0 Preparation', title: '準備不要', desc: '漫画の知識や素材は一切不要。ヒアリングだけでスタートできます。' },
  { en: '40+ Languages', title: '40言語以上対応', desc: '多言語展開にも対応。海外向けPR・採用活動にも活用できます。' },
  { en: 'MangaX', title: '無料で掲載可能', desc: '制作した漫画は自社プラットフォーム「MangaX」に無料で掲載。制作から公開まで一気通貫。' },
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
      <Breadcrumb items={[{ name: 'ホーム', href: '/' }, { name: 'サービス', href: '/services' }, { name: '漫画制作', href: '/services/manga' }]} />

      {/* ===== Hero ===== */}
      <section className="relative pt-0 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 60%)' }}>
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
              制作した漫画はMangaXに無料掲載。制作から公開まで一気通貫。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 4つの強み ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Strengths</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">5つの強み</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.slice(0, 4).map((item, i) => (
              <ScrollReveal key={i}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 h-full text-center">
                  <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] mb-3">{item.en}</p>
                  <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-[2]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {/* MangaX — 目立たせるカード */}
          <ScrollReveal>
            <div className="mt-8 bg-gradient-to-r from-[#059669] to-[#10B981] rounded-2xl p-8 md:p-10 text-center text-white">
              <p className="text-white/80 text-[13px] font-bold tracking-[0.15em] mb-3">MangaX Platform</p>
              <h3 className="text-[20px] md:text-[24px] font-bold mb-3">制作した漫画を、無料で掲載</h3>
              <p className="text-white/80 text-[15px] leading-[2] max-w-[600px] mx-auto">
                FOMUSで制作した漫画は、自社漫画プラットフォーム「MangaX」に無料で掲載可能。<br className="hidden md:block" />
                制作して終わりではなく、読者に届くところまでワンストップで支援します。
              </p>
            </div>
          </ScrollReveal>
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
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4 text-center">Platform</p>
            <h2 className="font-bold tracking-tight text-[#1F2937] mb-4 text-center">
              <span className="text-[24px] md:text-[28px]">漫画プラットフォーム</span>
              <br />
              <span className="text-[36px] md:text-[48px] text-[#059669]">MangaX</span>
            </h2>
            <p className="text-[14px] text-[#6B7280] leading-[2] mb-12 text-center max-w-[600px] mx-auto">
              FOMUSが運営する漫画掲載プラットフォーム。<br />
              制作した漫画を無料で公開し、より多くの読者に届けます。
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '01', title: '掲載無料', desc: 'FOMUSで制作した漫画は、MangaXへの掲載が無料。追加コストなしで公開できます。' },
              { icon: '02', title: '読者に届く', desc: 'Webで誰でも閲覧可能。SNS共有やサイト埋め込みにも対応し、拡散力を最大化します。' },
              { icon: '03', title: '制作から掲載まで一気通貫', desc: '企画・制作・掲載・運用をFOMUS一社で完結。他社では実現できないワンストップ体制です。' },
            ].map((item, i) => (
              <ScrollReveal key={item.icon} delay={i * 80}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 h-full">
                  <span className="inline-block text-[#059669] text-[12px] font-bold tracking-[0.15em] bg-[#D1FAE5] px-4 py-1.5 rounded-full mb-5">{item.icon}</span>
                  <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-[2]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={200}>
            <div className="text-center mt-10">
              <a
                href="https://creative-manga.fomusglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#059669] text-white px-8 py-4 rounded-full text-[15px] font-bold hover:bg-[#047857] transition-colors min-h-[52px]"
              >
                MangaX を見る
                <span className="text-[14px]">&#8599;</span>
              </a>
            </div>
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

      <FaqSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: 'ホーム', href: '/' },
        { name: 'サービス', href: '/services' },
        { name: '漫画制作', href: '/services/manga' },
      ]} />
      <SiteFooter />
    </div>
  )
}

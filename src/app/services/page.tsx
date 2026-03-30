import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'

export const metadata: Metadata = {
  title: 'サービス一覧 | AI導入・Web制作・漫画制作・AI研修',
  description: 'AI導入支援、Web制作、漫画制作（MangaX掲載無料）、法人向けAI研修、DX推進、保守運用。中小企業の業務課題に合わせて最適なサービスを組み合わせて提案します。',
  alternates: { canonical: '/services' },
}

const services = [
  {
    id: 'ai', en: 'AI Solutions', title: 'AI導入支援', href: '/services/ai',
    desc: '業務の自動化・効率化を、AIの力で実現します。チャットボット構築、FAQ自動応答、多言語対応AI、レビュー自動返信、データ分析・可視化、予約管理の自動化まで対応。',
    image: '/images/demo-desktop.png',
  },
  {
    id: 'web', en: 'Web Production', title: 'Web制作・リニューアル', href: '/services/web',
    desc: '御社の「顔」となるWebサイトを、戦略的に構築します。コーポレートサイト、LP、予約システム、EC機能、多言語対応、CMS導入。',
    image: '/images/work-web.png',
  },
  {
    id: 'dx', en: 'DX Consulting', title: 'DXコンサルティング', href: '/services/dx',
    desc: '「何から始めるべきか」を、御社と一緒に設計します。業務フロー分析、IT投資の優先順位設計、ツール選定・導入支援、社内研修・定着支援。',
    image: '/images/hero-laptop.jpg',
  },
  {
    id: 'creative', en: 'Manga & Creative', title: '漫画・クリエイティブ制作', href: '/services/manga',
    desc: '採用漫画・企業PR漫画・自己紹介漫画を制作し、自社プラットフォーム「MangaX」に無料掲載。制作から公開まで一気通貫で対応します。',
    image: '/images/work-manga.jpg',
  },
  {
    id: 'training', en: 'AI Training', title: '法人向けAI研修', href: '/services/training',
    desc: 'ツール操作ではなく、御社の業務を起点にAIを組み込む設計力を育てます。ChatGPT、Gemini、画像生成AI等を業務で活用する10時間の実務特化型研修。人材開発支援助成金（リスキリング支援）で最大75%OFF。',
    image: '/images/demo-desktop.png',
  },
  {
    id: 'maintenance', en: 'Maintenance', title: '保守・運用サポート', href: '/services/maintenance',
    desc: '導入して終わりではなく、成果が出るまで支援し続けます。障害対応、セキュリティ更新、機能追加・改善、月次効果測定レポート、担当者への操作研修。',
    image: '/images/work-silva.png',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* ===== HERO ===== */}
      <section className="relative pt-[72px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 60%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] -right-[20%] w-[70%] h-[120%] opacity-[0.06]" viewBox="0 0 800 800" fill="none">
            <rect x="100" y="50" width="600" height="700" rx="300" stroke="url(#sg-svc)" strokeWidth="2" />
            <rect x="200" y="150" width="500" height="550" rx="250" stroke="url(#sg-svc)" strokeWidth="1.5" />
            <defs><linearGradient id="sg-svc" x1="0" y1="0" x2="800" y2="800"><stop stopColor="#059669" /><stop offset="1" stopColor="#10B981" /></linearGradient></defs>
          </svg>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#10B981] opacity-[0.06] blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Services</p>
            <h1 className="font-bold tracking-tight mb-6 text-[#1F2937]">
              <span className="text-[48px] md:text-[64px] text-[#059669]">サービス</span>
              <span className="text-[24px] md:text-[28px]">一覧</span>
            </h1>
            <p className="text-[#6B7280] text-[16px] leading-[2] max-w-[560px]">
              御社の課題に応じて、最適な施策を組み合わせて提案します。<br />
              ヒアリング後にお見積もりします。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SERVICE CARDS ===== */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 space-y-16 md:space-y-24 py-20 md:py-28">
        {services.map((s, idx) => (
          <section key={s.id} id={s.id} className="scroll-mt-[72px]">
            <ScrollReveal>
              <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
                {/* Image */}
                <div className="md:w-[48%] flex-shrink-0">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image src={s.image} alt={s.title} width={800} height={550} className="w-full aspect-[16/11] object-cover" />
                  </div>
                </div>
                {/* Text */}
                <div className="md:w-[52%]">
                  <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-3">{s.en}</p>
                  <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-4">{s.title}</h2>
                  <p className="text-[#6B7280] text-[15px] leading-[2] mb-6 max-w-[440px]">{s.desc}</p>
                  <Link
                    href={s.href}
                    className="inline-flex items-center justify-center bg-[#059669] text-white px-8 py-3 rounded-full text-[14px] font-bold hover:bg-[#047857] transition-colors"
                  >
                    詳しく見る &rarr;
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </section>
        ))}
      </div>

      {/* ===== CTA ===== */}
      <section className="bg-[#065F46] py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-[24px] md:text-[30px] font-bold tracking-tight mb-4">
              どのサービスが最適か、一緒に考えます。
            </h2>
            <p className="text-white/60 text-[15px] leading-[2] mb-8">
              オンライン面談で、御社に必要な施策の全体像をお伝えします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#065F46] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-white/90 transition-colors min-h-[52px]">
                無料で相談する
              </Link>
              <Link href="/work" className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-full text-[15px] font-medium hover:border-white/60 transition-colors min-h-[52px]">
                導入実績を見る
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-white/40 text-[13px]">
              <span>相談無料</span>
              <span>営業電話なし</span>
              <span>契約の義務なし</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'

const services = [
  {
    id: 'ai', en: 'AI Solutions', title: 'AI導入支援',
    desc: '業務の自動化・効率化を、AIの力で実現します。チャットボット構築、FAQ自動応答、多言語対応AI、レビュー自動返信、データ分析・可視化、予約管理の自動化まで対応。',
    image: '/images/demo-desktop.png',
    specs: ['Claude AI / LINE / WhatsApp', '対応工数 -80%', '9言語対応', '月額5万円〜'],
  },
  {
    id: 'web', en: 'Web Production', title: 'Web制作・リニューアル',
    desc: '御社の「顔」となるWebサイトを、戦略的に構築します。コーポレートサイト、LP、予約システム、EC機能、多言語対応、CMS導入。',
    image: '/images/work-web.png',
    specs: ['Next.js / Tailwind / Vercel', '予約数 +180%', '表示速度 2秒以内', '7万円〜'],
  },
  {
    id: 'dx', en: 'DX Consulting', title: 'DXコンサルティング',
    desc: '「何から始めるべきか」を、御社と一緒に設計します。業務フロー分析、IT投資の優先順位設計、ツール選定・導入支援、社内研修・定着支援。',
    image: '/images/hero-laptop.png',
    specs: ['業務分析 → ROI試算', '業務効率 +60%', 'IT投資の無駄 -50%', '月額15万円〜'],
  },
  {
    id: 'creative', en: 'Manga & Creative', title: '漫画・クリエイティブ制作',
    desc: '言葉では伝わらないことを、ビジュアルで届けます。採用漫画、企業PR漫画、自己紹介漫画、ロゴデザイン、名刺、動画制作、SNS素材。',
    image: '/images/work-manga.png',
    specs: ['最短1週間', '40言語対応', '応募数 ×3', '1話 9.8万円〜'],
  },
  {
    id: 'invoice', en: 'Invoice & Payment', title: '請求書・決済システム',
    desc: '請求から入金管理まで、一気通貫で自動化します。インボイス制度対応の適格請求書自動発行、Stripe決済連携、サブスクリプション管理。',
    image: '/images/demo-mobile.png',
    specs: ['Stripe連携', '作成時間 -90%', '入金確認の自動化', '月額3万円〜'],
  },
  {
    id: 'maintenance', en: 'Maintenance', title: '保守・運用サポート',
    desc: '導入して終わりではなく、成果が出るまで伴走します。障害対応、セキュリティ更新、機能追加・改善、月次効果測定レポート、担当者への操作研修。',
    image: '/images/work-silva.png',
    specs: ['専任担当者制', '24時間以内に回答', '月次レポート', '月額1万円〜'],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0D1F1F]">
      <SiteNav />

      {/* ===== HERO ===== */}
      <section className="pt-[72px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Services</p>
            <h1 className="text-white text-[clamp(32px,5vw,52px)] font-bold tracking-tight leading-[1.2] mb-4">
              サービス一覧
            </h1>
            <p className="text-white/40 text-[16px] leading-[2] max-w-[560px]">
              御社の課題に応じて、最適な施策を組み合わせて提案します。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SERVICE CARDS (AI Lab layout) ===== */}
      {services.map((s, i) => (
        <section key={s.id} id={s.id} className="scroll-mt-[72px]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 pb-16 md:pb-24">
            <ScrollReveal>
              <div className="relative grid grid-cols-1 md:grid-cols-12 min-h-[400px] md:min-h-[480px]">
                {/* Left: dark card with text */}
                <div className={`md:col-span-7 bg-[#162D2D] rounded-2xl md:rounded-3xl p-8 md:p-12 flex flex-col justify-center relative z-10 ${i % 2 === 1 ? 'md:col-start-6 md:order-2' : ''}`}>
                  <p className="text-[var(--gold)] text-[12px] font-bold tracking-[0.2em] uppercase mb-4">{s.en}</p>
                  <h2 className="text-white text-[28px] md:text-[36px] font-bold tracking-tight leading-[1.25] mb-5">
                    {s.title}
                  </h2>
                  <p className="text-white/50 text-[15px] leading-[2] mb-8 max-w-[480px]">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {s.specs.map((spec) => (
                      <span key={spec} className="text-[12px] text-white/40 border border-white/10 px-3 py-1.5 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[14px] text-[var(--gold)] font-medium hover:opacity-80 transition-opacity self-start"
                  >
                    このサービスについて相談する
                    <span className="text-[16px]">›</span>
                  </Link>
                </div>

                {/* Right: photo that overlaps/extends */}
                <div className={`md:col-span-7 md:absolute md:top-6 md:bottom-6 rounded-2xl md:rounded-3xl overflow-hidden mt-4 md:mt-0 ${i % 2 === 1 ? 'md:left-0' : 'md:right-0'}`}>
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover min-h-[240px]" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <div className="gold-line w-12 mx-auto mb-8" />
            <h2 className="text-white text-[24px] md:text-[30px] font-bold tracking-tight mb-4">
              どのサービスが最適か、一緒に考えます。
            </h2>
            <p className="text-white/40 text-[15px] leading-[2] mb-8">
              30分のオンライン面談で、御社に必要な施策の全体像をお伝えします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--gold)] text-[#0C1220] px-10 py-4 rounded-lg text-[16px] font-bold hover:opacity-90 transition-opacity min-h-[52px]">
                無料で相談する
              </Link>
              <Link href="/work" className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 rounded-lg text-[15px] font-medium hover:border-white/40 transition-colors min-h-[52px]">
                導入実績を見る
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-white/30 text-[13px]">
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

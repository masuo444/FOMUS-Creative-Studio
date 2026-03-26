import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'

const services = [
  {
    id: 'ai', num: '01', en: 'AI Solutions', title: 'AI導入支援', subtitle: '業務の自動化・効率化を、AIの力で実現します。',
    image: '/images/demo-desktop.png',
    details: [
      { label: '対応範囲', text: 'チャットボット構築、FAQ自動応答、多言語対応AI、レビュー自動返信、データ分析・可視化、予約管理の自動化' },
      { label: '技術基盤', text: 'Claude AI（Anthropic）、LINE Messaging API、WhatsApp Business API、Supabase、Next.js' },
      { label: '導入効果の目安', text: '問い合わせ対応工数 -80%、対応言語数 9言語、24時間自動対応' },
      { label: '料金目安', text: '月額5万円〜（規模・要件により変動）' },
    ],
  },
  {
    id: 'web', num: '02', en: 'Web Production', title: 'Web制作・リニューアル', subtitle: '御社の「顔」となるWebサイトを、戦略的に構築します。',
    image: '/images/work-web.png',
    details: [
      { label: '対応範囲', text: 'コーポレートサイト、ランディングページ、予約システム、EC機能、多言語対応、CMS導入' },
      { label: '技術基盤', text: 'Next.js 16、Tailwind CSS、Supabase、Vercel、Stripe決済連携' },
      { label: '導入効果の目安', text: '予約数 +180%、直帰率 -40%、表示速度 2秒以内' },
      { label: '料金目安', text: '7万円〜（ページ数・機能により変動）' },
    ],
  },
  {
    id: 'dx', num: '03', en: 'DX Consulting', title: 'DXコンサルティング', subtitle: '「何から始めるべきか」を、御社と一緒に設計します。',
    image: '/images/hero-laptop.png',
    details: [
      { label: '対応範囲', text: '業務フロー分析、IT投資の優先順位設計、ツール選定・導入支援、社内研修・定着支援' },
      { label: 'アプローチ', text: '現場ヒアリング → 課題マップ作成 → ROI試算 → 施策ロードマップ → 実行支援' },
      { label: '導入効果の目安', text: '業務効率 +60%、IT投資の無駄 -50%、意思決定スピード 2倍' },
      { label: '料金目安', text: '月額15万円〜（スポット対応は50万円〜）' },
    ],
  },
  {
    id: 'creative', num: '04', en: 'Manga & Creative', title: '漫画・クリエイティブ制作', subtitle: '言葉では伝わらないことを、ビジュアルで届けます。',
    image: '/images/work-manga.png',
    details: [
      { label: '対応範囲', text: '採用漫画、企業PR漫画、自己紹介漫画、ロゴデザイン、名刺、動画制作、SNS素材' },
      { label: '特長', text: 'AI×クリエイティブディレクションで最短1週間。40言語対応で海外PR漫画も制作可能' },
      { label: '導入効果の目安', text: '採用応募数 ×3、ページ滞在時間 4.2倍、SNSエンゲージメント +200%' },
      { label: '料金目安', text: '1話9.8万円〜（ページ数・用途により変動）' },
    ],
  },
  {
    id: 'invoice', num: '05', en: 'Invoice & Payment', title: '請求書・決済システム', subtitle: '請求から入金管理まで、一気通貫で自動化します。',
    image: '/images/demo-mobile.png',
    details: [
      { label: '対応範囲', text: 'インボイス制度対応の適格請求書自動発行、Stripe決済連携、サブスクリプション管理、売上レポート' },
      { label: '技術基盤', text: 'Stripe Billing、FOMUS AI Invoice、Supabase、自動メール通知（Resend）' },
      { label: '導入効果の目安', text: '請求書作成時間 -90%、入金確認の自動化、未回収リスクの低減' },
      { label: '料金目安', text: '月額3万円〜' },
    ],
  },
  {
    id: 'maintenance', num: '06', en: 'Maintenance', title: '保守・運用サポート', subtitle: '導入して終わりではなく、成果が出るまで伴走します。',
    image: '/images/work-silva.png',
    details: [
      { label: '対応範囲', text: '障害対応、セキュリティ更新、機能追加・改善、月次効果測定レポート、担当者への操作研修' },
      { label: '体制', text: '専任担当者制。チャット・メールでの問い合わせに原則24時間以内に回答' },
      { label: '導入効果の目安', text: 'AIの応答精度は月次で改善、ダウンタイム 年間0.1%以下' },
      { label: '料金目安', text: '月額1万円〜（サービス内容により変動）' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      {/* ===== HERO BANNER (dark, like AI Lab) ===== */}
      <section className="relative bg-[#0D1F1F] pt-[72px]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F1F] via-[#0D1F1F] to-[#1a3a2a]" />
          {/* Subtle decorative circles */}
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-[var(--gold)]/[0.03] -translate-y-1/2 translate-x-1/3 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Services</p>
            <h1 className="text-white text-[clamp(32px,5vw,52px)] font-bold tracking-tight leading-[1.2] mb-4">
              サービス一覧
            </h1>
            <p className="text-white/50 text-[16px] leading-[2] max-w-[560px]">
              御社の課題に応じて、以下の領域から最適な施策を組み合わせて提案します。
            </p>
          </ScrollReveal>
        </div>
        {/* Bottom nav: service quick links */}
        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 overflow-x-auto">
            <div className="flex gap-0 min-w-max">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex-shrink-0 px-6 py-4 text-[13px] text-white/40 hover:text-white hover:bg-white/5 transition-colors border-r border-white/5 last:border-r-0"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE SECTIONS ===== */}
      {services.map((service, i) => (
        <section key={service.id} id={service.id} className="scroll-mt-[72px]">
          {/* Dark banner with image */}
          <div className="relative h-[280px] md:h-[360px] overflow-hidden bg-[#0D1F1F]">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F1F] via-[#0D1F1F]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 z-10">
              <div className="max-w-[1200px] mx-auto px-6 md:px-10 pb-10">
                <p className="text-[var(--gold)] text-[12px] font-bold tracking-[0.2em] uppercase mb-3">{service.en}</p>
                <h2 className="text-white text-[28px] md:text-[40px] font-bold tracking-tight">{service.title}</h2>
              </div>
            </div>
          </div>

          {/* White content area */}
          <div className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F3EE]'}>
            <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-20">
              <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20">
                  {/* Left: description + CTA */}
                  <div className="md:col-span-5">
                    <p className="text-[var(--gold)] text-[48px] md:text-[64px] font-bold leading-none mb-6 opacity-10">
                      {service.num}
                    </p>
                    <p className="text-[16px] text-[var(--text-sub)] leading-[2.1] mb-8">
                      {service.subtitle}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-[var(--gold)] text-[#0C1220] px-7 py-3.5 rounded-lg text-[14px] font-bold hover:opacity-90 transition-opacity min-h-[48px]"
                    >
                      このサービスについて相談する
                    </Link>
                  </div>

                  {/* Right: detail specs */}
                  <div className="md:col-span-6 md:col-start-7">
                    <div className="space-y-8">
                      {service.details.map((d) => (
                        <div key={d.label} className="border-b border-[var(--border)] pb-6 last:border-b-0 last:pb-0">
                          <p className="text-[13px] text-[var(--gold)] font-bold tracking-wide uppercase mb-2">{d.label}</p>
                          <p className="text-[15px] text-[var(--text-sub)] leading-[1.9]">{d.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* ===== CTA ===== */}
      <section className="bg-[#0D1F1F] text-white py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <div className="gold-line w-12 mx-auto mb-8" />
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-4">
              どのサービスが最適か、一緒に考えます。
            </h2>
            <p className="text-white/50 text-[15px] leading-[2] mb-8">
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

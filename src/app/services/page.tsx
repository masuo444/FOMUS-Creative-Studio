import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

const services = [
  {
    id: 'ai',
    title: 'AI導入支援',
    subtitle: '業務の自動化・効率化を、AIの力で実現します。',
    details: [
      { label: '対応範囲', text: 'チャットボット構築、FAQ自動応答、多言語対応AI、レビュー自動返信、データ分析・可視化、予約管理の自動化' },
      { label: '技術基盤', text: 'Claude AI（Anthropic）、LINE Messaging API、WhatsApp Business API、Supabase、Next.js' },
      { label: '導入効果の目安', text: '問い合わせ対応工数 -80%、対応言語数 9言語、24時間自動対応' },
      { label: '料金目安', text: '月額5万円〜（規模・要件により変動）' },
    ],
  },
  {
    id: 'web',
    title: 'Web制作・リニューアル',
    subtitle: '御社の「顔」となるWebサイトを、戦略的に構築します。',
    details: [
      { label: '対応範囲', text: 'コーポレートサイト、ランディングページ、予約システム、EC機能、多言語対応、CMS導入' },
      { label: '技術基盤', text: 'Next.js 16、Tailwind CSS、Supabase、Vercel、Stripe決済連携' },
      { label: '導入効果の目安', text: '予約数 +180%、直帰率 -40%、表示速度 2秒以内' },
      { label: '料金目安', text: '7万円〜（ページ数・機能により変動）' },
    ],
  },
  {
    id: 'dx',
    title: 'DXコンサルティング',
    subtitle: '「何から始めるべきか」を、御社と一緒に設計します。',
    details: [
      { label: '対応範囲', text: '業務フロー分析、IT投資の優先順位設計、ツール選定・導入支援、社内研修・定着支援' },
      { label: 'アプローチ', text: '現場ヒアリング → 課題マップ作成 → ROI試算 → 施策ロードマップ → 実行支援' },
      { label: '導入効果の目安', text: '業務効率 +60%、IT投資の無駄 -50%、意思決定スピード 2倍' },
      { label: '料金目安', text: '月額15万円〜（スポット対応は50万円〜）' },
    ],
  },
  {
    id: 'creative',
    title: '漫画・クリエイティブ制作',
    subtitle: '言葉では伝わらないことを、ビジュアルで届けます。',
    details: [
      { label: '対応範囲', text: '採用漫画、企業PR漫画、自己紹介漫画、ロゴデザイン、名刺、動画制作、SNS素材' },
      { label: '特長', text: 'AI×クリエイティブディレクションで最短1週間。40言語対応で海外PR漫画も制作可能' },
      { label: '導入効果の目安', text: '採用応募数 ×3、ページ滞在時間 4.2倍、SNSエンゲージメント +200%' },
      { label: '料金目安', text: '1話9.8万円〜（ページ数・用途により変動）' },
    ],
  },
  {
    id: 'invoice',
    title: '請求書・決済システム',
    subtitle: '請求から入金管理まで、一気通貫で自動化します。',
    details: [
      { label: '対応範囲', text: 'インボイス制度対応の適格請求書自動発行、Stripe決済連携、サブスクリプション管理、売上レポート' },
      { label: '技術基盤', text: 'Stripe Billing、FOMUS AI Invoice、Supabase、自動メール通知（Resend）' },
      { label: '導入効果の目安', text: '請求書作成時間 -90%、入金確認の自動化、未回収リスクの低減' },
      { label: '料金目安', text: '月額3万円〜' },
    ],
  },
  {
    id: 'maintenance',
    title: '保守・運用サポート',
    subtitle: '導入して終わりではなく、成果が出るまで伴走します。',
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
      {/* Nav spacer */}
      <div className="h-[72px]" />

      {/* Hero */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <div className="gold-line w-12 mb-6" />
            <h1 className="text-[clamp(28px,4vw,44px)] font-bold tracking-tight mb-4">サービス詳細</h1>
            <p className="text-[16px] text-[var(--text-sub)] leading-[2] max-w-[600px]">
              御社の課題に応じて、以下の領域から最適な施策を組み合わせて提案します。単体でも、複数組み合わせでも対応可能です。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <section key={service.id} id={service.id} className={i % 2 === 0 ? 'bg-[var(--bg-alt)]' : ''}>
          <div className="max-w-[1100px] mx-auto px-6 py-20 md:py-24">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
                <div className="md:col-span-5">
                  <p className="text-[var(--gold)] text-[13px] font-medium mb-3">Service {String(i + 1).padStart(2, '0')}</p>
                  <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight mb-4">{service.title}</h2>
                  <p className="text-[15px] text-[var(--text-sub)] leading-[2]">{service.subtitle}</p>
                </div>
                <div className="md:col-span-6 md:col-start-7">
                  <div className="space-y-6">
                    {service.details.map((d) => (
                      <div key={d.label}>
                        <p className="text-[13px] text-[var(--gold)] font-medium mb-1">{d.label}</p>
                        <p className="text-[15px] text-[var(--text-sub)] leading-[1.9]">{d.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[var(--bg-dark)] text-white py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <div className="gold-line w-12 mx-auto mb-8" />
            <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight mb-4">
              どのサービスが最適か、一緒に考えます。
            </h2>
            <p className="text-white/50 text-[15px] leading-[2] mb-10">
              30分のオンライン面談で、御社に必要な施策の全体像をお伝えします。
            </p>
            <Link href="/contact" className="inline-block bg-[var(--gold)] text-[var(--bg-dark)] px-10 py-4 rounded-lg text-[15px] font-bold hover:opacity-90 transition-opacity">
              無料で相談する
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

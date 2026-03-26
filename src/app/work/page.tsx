import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'

const cases = [
  {
    category: 'Web制作',
    title: '宿泊施設のサイト刷新で予約数+180%',
    metric: '+180%',
    metricLabel: '直接予約数',
    image: '/images/work-web.png',
    challenge: '公式サイトが10年以上前のデザインのまま放置されており、スマートフォン非対応。OTA経由の予約に依存し、手数料負担が増加。',
    solution: 'UI/UXを全面刷新し、スマホファーストのレスポンシブデザインに。予約導線を3ステップに簡素化し、多言語対応（英・中・韓）を追加。Googleビジネスプロフィールとの連携も強化。',
    result: '公開3ヶ月で直接予約数が2.8倍に増加。OTA手数料の大幅削減を実現。Google検索からの流入も1.5倍に。',
    period: '3日間（デザイン・実装・公開）',
    services: ['Web制作', 'UI/UX設計', 'SEO対策', '多言語対応'],
    serviceLink: '/services#web',
  },
  {
    category: 'AI導入',
    title: '9言語対応AIチャットボットで対応工数-80%',
    metric: '-80%',
    image: '/images/demo-desktop.png',
    metricLabel: '対応工数',
    challenge: 'インバウンド観光客からの問い合わせが急増し、深夜・早朝の対応にスタッフが疲弊。英語以外の問い合わせには対応できず、機会損失が発生。',
    solution: 'LINE公式アカウントにAIチャットボットを導入。Claude AIによる自然な多言語応答で、施設案内・アクセス情報・FAQ・予約変更を24時間自動処理。スタッフには日本語で通知。',
    result: '月間1,200件の問い合わせを人手なしで処理。スタッフの対応工数は80%削減。ゲスト満足度調査で「対応の速さ」が前年比+35ポイント。',
    period: '2週間（構築・テスト・導入）',
    services: ['AI導入', 'LINE Bot', '多言語対応', '業務自動化'],
    serviceLink: '/services#ai',
  },
  {
    category: '漫画制作',
    title: '採用漫画の導入で応募数が3倍に',
    metric: '×3',
    metricLabel: '応募数',
    image: '/images/work-manga.png',
    challenge: '求人サイトに掲載しても応募が集まらない。テキスト中心の採用ページでは、社風や働く人の雰囲気が伝わらず、求職者が離脱。',
    solution: '社員インタビューを元に10ページの採用漫画を制作。入社1年目のストーリーを通じて、仕事内容・チームの雰囲気・成長環境をビジュアルで表現。SNS向けにショート版も制作。',
    result: '採用ページの滞在時間が4.2倍に増加。漫画のSNSシェアにより認知が拡大し、エントリー数が前年比3倍に。',
    period: '1週間（ヒアリング・制作・納品）',
    services: ['漫画制作', '採用ブランディング', 'SNSコンテンツ'],
    serviceLink: '/services#creative',
  },
]

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <SiteNav />
      <div className="h-[72px]" />

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-[#1a4a3a] opacity-15 blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1100px] mx-auto">
          <ScrollReveal>
            <div className="gold-line w-12 mb-6" />
            <h1 className="text-white text-[clamp(28px,4vw,44px)] font-bold tracking-tight mb-4">導入実績</h1>
            <p className="text-[16px] text-white/40 leading-[2] max-w-[600px]">
              業種・規模を問わず、具体的な成果を出しています。以下は代表的な事例です。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Cases — AI Lab style */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 space-y-24 md:space-y-32 pb-20 md:pb-28">
        {cases.map((c) => (
          <section key={c.title}>
            <ScrollReveal>
              <div className="relative">
                {/* Dark text card - left side */}
                <div className="relative z-10 md:w-[55%] bg-[#2C2C2C] rounded-lg p-10 md:p-14">
                  <span className="inline-block text-[var(--gold)] text-[12px] font-bold tracking-[0.15em] uppercase bg-[var(--gold)]/10 px-3 py-1.5 rounded-full mb-5">{c.category}</span>
                  <h2 className="text-white text-[22px] md:text-[28px] font-bold tracking-tight leading-[1.4] mb-6">{c.title}</h2>

                  {/* Metric */}
                  <div className="mb-6">
                    <p className="text-white/40 text-[13px] mb-1">{c.metricLabel}</p>
                    <p className="text-[var(--gold)] text-[48px] font-bold leading-none">{c.metric}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-[var(--gold)] text-[12px] font-medium mb-1">課題</p>
                      <p className="text-white/50 text-[14px] leading-[1.9]">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="text-[var(--gold)] text-[12px] font-medium mb-1">施策</p>
                      <p className="text-white/50 text-[14px] leading-[1.9]">{c.solution}</p>
                    </div>
                    <div>
                      <p className="text-[var(--gold)] text-[12px] font-medium mb-1">成果</p>
                      <p className="text-white/80 text-[14px] leading-[1.9] font-medium">{c.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[12px] text-white/30">納期: {c.period}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {c.services.map((s) => (
                      <span key={s} className="text-[11px] text-[var(--gold)] bg-[var(--gold)]/10 px-3 py-1 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Photo - right side, offset down */}
                <div className="md:absolute md:right-0 md:top-[15%] md:w-[52%] mt-4 md:mt-0">
                  <div className="rounded-lg overflow-hidden">
                    <img src={c.image} alt={c.title} className="w-full aspect-[16/11] object-cover" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#0D1F1F] text-white py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <div className="gold-line w-12 mx-auto mb-8" />
            <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight mb-4">
              御社でも同じ成果を出せるか、まずはご相談ください。
            </h2>
            <p className="text-white/50 text-[15px] leading-[2] mb-8">
              業種や規模に関係なく、業務課題があればお力になれます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--gold)] text-[#1A1A1A] px-10 py-4 rounded-lg text-[15px] font-bold hover:opacity-90 transition-opacity min-h-[52px]">
                無料で相談する
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 rounded-lg text-[15px] font-medium hover:border-white/40 transition-colors min-h-[52px]">
                サービス一覧を見る
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

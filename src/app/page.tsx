import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FAQ from '@/components/ui/FAQ'
import MobileMenu from '@/components/ui/MobileMenu'
import MobileCTABar from '@/components/ui/MobileCTABar'

const services = [
  { title: 'AI導入支援', desc: '業務自動化・チャットボット・データ分析の設計と実装。' },
  { title: 'Web制作・リニューアル', desc: 'コーポレートサイト・LP・予約システムの構築。' },
  { title: 'DXコンサルティング', desc: '業務フロー分析から投資対効果の高い施策を特定。' },
  { title: '漫画・クリエイティブ制作', desc: '採用漫画・企業PR・ロゴ・動画のデザイン。' },
  { title: '請求書・決済システム', desc: 'インボイス対応の請求書自動発行・Stripe連携。' },
  { title: '保守・運用サポート', desc: '月額保守で継続改善。障害対応・月次レポート付き。' },
]

const projects = [
  {
    title: '宿泊施設のサイト刷新で予約数+180%',
    desc: '老朽化した予約導線を再設計し、UI・コピー・ページ構成を全面改修。公開3ヶ月で直接予約数が2.8倍に増加。',
    metric: '+180%',
    metricLabel: '予約数',
    category: 'Web制作',
  },
  {
    title: '9言語対応AIチャットボットで対応工数-80%',
    desc: 'インバウンド対応に追われていた現場の負荷を、多言語AIチャットボットで自動化。月間1,200件を人手なしで処理。',
    metric: '-80%',
    metricLabel: '対応工数',
    category: 'AI導入',
  },
  {
    title: '採用漫画の導入で応募数が3倍に',
    desc: 'テキスト主体だった採用ページに漫画コンテンツを追加。求職者の滞在時間が4.2倍に伸び、エントリー数が3倍に。',
    metric: '×3',
    metricLabel: '応募数',
    category: '漫画制作',
  },
]

const steps = [
  { num: '1', title: '業務分析・課題の特定', desc: '現場の業務フローをヒアリングし、ボトルネックを特定します。「AIを入れたい」ではなく「何を解決すべきか」から設計します。', note: 'オンライン面談60分 / 無料' },
  { num: '2', title: 'プロトタイプの構築', desc: '最短2週間で動作するプロトタイプを提出します。実物を見てから判断できるため、仕様のズレやコストリスクを最小化します。', note: '費用は本契約時に全額充当' },
  { num: '3', title: '本番導入・運用定着', desc: '納品して終わりではなく、社内に定着するまで支援します。マニュアル整備、担当者研修、3ヶ月の改善対応を含みます。', note: '月次レポートで効果を測定' },
]

const faqItems = [
  { q: 'ITやAIの知識がまったくなくても大丈夫ですか？', a: 'はい。むしろそういう方のためのサービスです。「何をすればいいか分からない」という状態から、課題を整理し、最適な仕組みを構築します。' },
  { q: '相談だけでも構いませんか？', a: 'もちろんです。30分のオンライン面談で、課題の整理と施策の概要をお伝えします。相談後に契約の義務は一切ありません。' },
  { q: 'どのような業種に対応していますか？', a: '飲食、宿泊、美容、医療、小売、不動産、士業、自治体など幅広く対応しています。業種よりも「何に困っているか」が大切です。' },
  { q: '費用感を教えてください。', a: 'Web制作は7万円〜、AI導入は月額5万円〜、漫画制作は1話9.8万円〜が目安です。ヒアリング後に必要な範囲だけお見積もりします。' },
  { q: '導入後のサポートはありますか？', a: 'マニュアル整備、担当者研修、3ヶ月の改善対応を標準で含みます。月額保守プランでは月次レポートによる効果測定も実施します。' },
]

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ===== NAV ===== */}
      <nav className="fixed w-full z-50 top-0 bg-white/90 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="text-[15px] font-bold tracking-tight">
            FOMUS Creative Studio
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-[14px] text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">サービス</a>
            <a href="#work" className="text-[14px] text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">実績</a>
            <a href="#process" className="text-[14px] text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">導入の流れ</a>
            <a href="#faq" className="text-[14px] text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">FAQ</a>
            <Link
              href="/auth/register"
              className="text-[14px] bg-[var(--accent)] text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              無料で相談する
            </Link>
          </div>
          <MobileMenu />
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 px-6 max-w-[1100px] mx-auto">
        <ScrollReveal>
          <h1 className="text-[clamp(32px,5vw,56px)] font-bold leading-[1.3] tracking-tight mb-6">
            御社の業務課題を分析し、
            <br />
            最適な<span className="text-[var(--accent)]">仕組み</span>を構築します。
          </h1>
          <p className="text-[17px] text-[var(--text-sub)] leading-[1.9] max-w-[640px] mb-8">
            AI導入・Web制作・クリエイティブ制作。中小企業のIT課題に対して、
            ヒアリングから実装・運用定着まで一貫して対応します。
          </p>
          <Link
            href="/auth/register"
            className="inline-block bg-[var(--accent)] text-white px-8 py-3.5 rounded-lg text-[15px] font-medium hover:opacity-90 transition-opacity"
          >
            無料で相談する（30分・オンライン）
          </Link>
          <p className="text-[13px] text-[var(--text-muted)] mt-3">
            営業電話・しつこい後追いは一切行いません。
          </p>
        </ScrollReveal>
      </section>

      {/* ===== HERO IMAGE ===== */}
      <ScrollReveal>
        <div className="mx-6 max-w-[1100px] md:mx-auto rounded-xl overflow-hidden">
          <div className="img-ph w-full aspect-[21/9]" />
        </div>
      </ScrollReveal>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-20 md:py-28 px-6 max-w-[1100px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[24px] md:text-[32px] font-bold tracking-tight mb-4">対応領域</h2>
          <p className="text-[15px] text-[var(--text-sub)] mb-12">
            御社の課題に応じて、以下の領域から最適な施策を組み合わせて提案します。
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 60}>
              <div className="bg-[var(--bg-alt)] rounded-xl p-6 h-full hover:shadow-md transition-shadow">
                <h3 className="text-[16px] font-bold mb-2">{s.title}</h3>
                <p className="text-[14px] text-[var(--text-sub)] leading-[1.8]">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== WORK ===== */}
      <section id="work" className="bg-[var(--bg-alt)] py-20 md:py-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <h2 className="text-[24px] md:text-[32px] font-bold tracking-tight mb-4">導入実績</h2>
            <p className="text-[15px] text-[var(--text-sub)] mb-12">
              業種を問わず、業務課題に対して具体的な成果を出しています。
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="bg-[var(--accent)] px-6 py-8">
                    <p className="text-white/70 text-[13px] mb-1">{p.metricLabel}</p>
                    <p className="text-white text-[40px] font-bold leading-none">{p.metric}</p>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-[12px] text-[var(--accent)] font-medium mb-2">{p.category}</p>
                    <h3 className="text-[16px] font-bold leading-[1.5] mb-3">{p.title}</h3>
                    <p className="text-[14px] text-[var(--text-sub)] leading-[1.8] flex-1">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="py-20 md:py-28 px-6 max-w-[1100px] mx-auto">
        <div className="max-w-[720px]">
          <ScrollReveal>
            <h2 className="text-[24px] md:text-[32px] font-bold tracking-tight mb-6">
              IT人材不足は、経営リスクそのものです。
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <p className="text-[15px] text-[var(--text-sub)] leading-[2] mb-4">
              中小企業のAI導入率は約5%。DX推進を掲げても、社内にIT専任者がいなければ計画は止まります。外注すれば数百万、採用すれば年間600万以上。しかも成果が出る保証はありません。
            </p>
            <p className="text-[15px] text-[var(--text-sub)] leading-[2]">
              FOOMUSは「何をすべきか分からない」という段階から入ります。御社の業務を分析し、投資対効果の高い施策だけを特定します。<strong className="text-[var(--text)]">不要なものは提案しません。</strong>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" className="bg-[var(--text)] text-white py-20 md:py-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <h2 className="text-[24px] md:text-[32px] font-bold tracking-tight mb-12">導入までの流れ</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 80}>
                <div className="border-t-2 border-[var(--accent)] pt-6">
                  <span className="text-[var(--accent)] text-[14px] font-bold">STEP {step.num}</span>
                  <h3 className="text-[18px] font-bold mt-3 mb-4">{step.title}</h3>
                  <p className="text-white/70 text-[14px] leading-[1.9] mb-4">{step.desc}</p>
                  <p className="text-white/40 text-[13px]">{step.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="py-20 md:py-28 px-6 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-4">
            <ScrollReveal>
              <div className="img-ph aspect-[3/4] rounded-xl" />
            </ScrollReveal>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ScrollReveal delay={60}>
              <p className="text-[13px] text-[var(--accent)] font-medium mb-3">代表</p>
              <h2 className="text-[24px] md:text-[32px] font-bold tracking-tight mb-6">増尾 圭亮</h2>
              <p className="text-[15px] text-[var(--text-sub)] leading-[2]">
                合同会社FOMUS代表。AI開発、Web制作、漫画制作までを一人で設計・実装する技術者です。大規模な開発チームではなく、意思決定者が直接手を動かすことで、伝言コスト・管理コストを排除します。
              </p>
              <p className="text-[15px] text-[var(--text-sub)] leading-[2] mt-4">
                <strong className="text-[var(--text)]">信条は「不要なものは売らない」。</strong>御社に必要ない施策は、聞かれても断ります。
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="bg-[var(--bg-alt)] py-20 md:py-28 px-6">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <h2 className="text-[24px] md:text-[32px] font-bold tracking-tight mb-10">よくあるご質問</h2>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <FAQ items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-[24px] md:text-[32px] font-bold tracking-tight mb-4">
              まず30分、現状を整理しませんか。
            </h2>
            <p className="text-[15px] text-[var(--text-sub)] leading-[2] mb-8">
              オンラインで御社の業務課題をお聞きし、対応可能な施策と概算をその場でお伝えします。
            </p>
            <Link
              href="/auth/register"
              className="inline-block bg-[var(--accent)] text-white px-8 py-3.5 rounded-lg text-[15px] font-medium hover:opacity-90 transition-opacity"
            >
              無料で相談する（30分・オンライン）
            </Link>
            <p className="text-[13px] text-[var(--text-muted)] mt-3">
              営業電話・しつこい後追いは一切行いません。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-[var(--border)] py-12 px-6">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="text-[15px] font-bold mb-1">FOMUS Creative Studio</p>
            <p className="text-[13px] text-[var(--text-muted)]">合同会社FOMUS</p>
          </div>
          <div className="flex gap-8 text-[14px] text-[var(--text-sub)]">
            <a href="#services" className="hover:text-[var(--text)] transition-colors">サービス</a>
            <a href="#work" className="hover:text-[var(--text)] transition-colors">実績</a>
            <a href="#process" className="hover:text-[var(--text)] transition-colors">導入の流れ</a>
            <Link href="/auth/login" className="hover:text-[var(--text)] transition-colors">ログイン</Link>
          </div>
        </div>
        <div className="max-w-[1100px] mx-auto mt-8 pt-6 border-t border-[var(--border)] text-[13px] text-[var(--text-muted)]">
          &copy; 2026 合同会社FOMUS
        </div>
      </footer>

      <MobileCTABar />
    </div>
  )
}

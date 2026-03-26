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
  { title: '宿泊施設のサイト刷新で予約数+180%', desc: '老朽化した予約導線を再設計し、UI・コピー・ページ構成を全面改修。公開3ヶ月で直接予約数が2.8倍に増加。', metric: '+180%', metricLabel: '予約数', category: 'Web制作' },
  { title: '9言語対応AIチャットボットで対応工数-80%', desc: 'インバウンド対応に追われていた現場の負荷を、多言語AIチャットボットで自動化。月間1,200件を人手なしで処理。', metric: '-80%', metricLabel: '対応工数', category: 'AI導入' },
  { title: '採用漫画の導入で応募数が3倍に', desc: 'テキスト主体だった採用ページに漫画コンテンツを追加。求職者の滞在時間が4.2倍に伸び、エントリー数が3倍に。', metric: '×3', metricLabel: '応募数', category: '漫画制作' },
]

const steps = [
  { num: '01', title: '業務分析・課題の特定', desc: '現場の業務フローをヒアリングし、ボトルネックを特定します。「AIを入れたい」ではなく「何を解決すべきか」から設計します。', note: 'オンライン面談60分 / 無料' },
  { num: '02', title: 'プロトタイプの構築', desc: '最短2週間で動作するプロトタイプを提出します。実物を見てから判断できるため、仕様のズレやコストリスクを最小化します。', note: '費用は本契約時に全額充当' },
  { num: '03', title: '本番導入・運用定着', desc: '納品して終わりではなく、社内に定着するまで支援します。マニュアル整備、担当者研修、3ヶ月の改善対応を含みます。', note: '月次レポートで効果を測定' },
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
      <nav className="fixed w-full z-50 top-0 bg-[var(--bg)]/90 backdrop-blur-xl">
        <div className="gold-line" />
        <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-[15px] font-bold tracking-tight">FOMUS Creative Studio</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-[14px] text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">サービス</a>
            <a href="#work" className="text-[14px] text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">実績</a>
            <a href="#process" className="text-[14px] text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">導入の流れ</a>
            <a href="#faq" className="text-[14px] text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">FAQ</a>
            <Link href="/auth/register" className="text-[14px] bg-[var(--bg-dark)] text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity">
              無料で相談する
            </Link>
          </div>
          <MobileMenu />
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-[13px] font-medium tracking-wide mb-6">
              中小企業専門のクリエイティブスタジオ
            </p>
            <h1 className="text-[clamp(32px,5vw,52px)] font-bold leading-[1.35] tracking-tight mb-6">
              御社の業務課題を分析し、
              <br />
              最適な
              <span className="font-[family-name:var(--font-serif)] italic text-[var(--gold)]"> 仕組み </span>
              を構築します。
            </h1>
            <p className="text-[16px] text-[var(--text-sub)] leading-[2] max-w-[600px] mb-10">
              AI導入・Web制作・クリエイティブ制作。ヒアリングから実装・運用定着まで、一貫して対応します。
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Link href="/auth/register" className="inline-block bg-[var(--bg-dark)] text-white px-8 py-4 rounded-lg text-[15px] font-medium hover:opacity-90 transition-opacity">
              無料で相談する（30分・オンライン）
            </Link>
            <p className="text-[13px] text-[var(--text-muted)] mt-4">営業電話・しつこい後追いは一切行いません。</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== HERO IMAGE ===== */}
      <ScrollReveal>
        <div className="mx-6 max-w-[1100px] md:mx-auto">
          <div className="img-ph w-full aspect-[2.2/1] rounded-2xl" />
        </div>
      </ScrollReveal>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-24 md:py-32 px-6">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <div className="gold-line w-12 mb-6" />
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-3">対応領域</h2>
            <p className="text-[15px] text-[var(--text-sub)] mb-14">
              御社の課題に応じて、最適な施策を組み合わせて提案します。
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 60}>
                <div className="lux-card rounded-xl p-7 h-full">
                  <h3 className="text-[16px] font-bold mb-3">{s.title}</h3>
                  <p className="text-[14px] text-[var(--text-sub)] leading-[1.9]">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WORK ===== */}
      <section id="work" className="bg-[var(--bg-dark)] text-white py-24 md:py-32 px-6">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <div className="h-px w-12 mb-6" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-3">導入実績</h2>
            <p className="text-white/50 text-[15px] mb-14">業種を問わず、業務課題に対して具体的な成果を出しています。</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/8 hover:border-white/15 transition-all duration-500 h-full flex flex-col">
                  <div className="px-7 pt-8 pb-6 border-b border-white/10">
                    <p className="text-[var(--gold)] text-[12px] font-medium tracking-wide mb-2">{p.category}</p>
                    <p className="text-[42px] font-bold leading-none tracking-tight">{p.metric}</p>
                    <p className="text-white/40 text-[13px] mt-1">{p.metricLabel}</p>
                  </div>
                  <div className="px-7 py-6 flex-1">
                    <h3 className="text-[15px] font-bold leading-[1.5] mb-3">{p.title}</h3>
                    <p className="text-white/50 text-[14px] leading-[1.9]">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <div className="gold-line w-12 mb-6" />
            <h2 className="font-[family-name:var(--font-serif)] italic text-[clamp(24px,4vw,36px)] leading-[1.6] mb-8 text-[var(--text)]">
              AI導入は、もはや選択肢ではなく前提条件です。
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <p className="text-[15px] text-[var(--text-sub)] leading-[2.1] mb-5">
              AI活用企業の生産性は未導入企業の最大3倍。問い合わせ対応の80%自動化、レビュー返信の100%即時化、スタッフ採用コストの半減——すでに成果を出している中小企業が増えています。
            </p>
            <p className="text-[15px] text-[var(--text-sub)] leading-[2.1] mb-5">
              にもかかわらず、日本の中小企業のAI導入率はわずか5%。理由は明確です。<strong className="text-[var(--text)]">「何から始めればいいか分からない」から。</strong>
            </p>
            <p className="text-[15px] text-[var(--text-sub)] leading-[2.1]">
              FOMUSは、その最初の一歩から伴走するパートナーです。御社の業務を分析し、投資対効果の高い施策だけを特定。導入後の運用定着まで、一貫してサポートします。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" className="bg-[var(--bg-alt)] py-24 md:py-32 px-6">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <div className="gold-line w-12 mb-6" />
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-14">導入までの流れ</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 80}>
                <div className="lux-card rounded-xl p-7 h-full">
                  <span className="text-[var(--gold)] text-[13px] font-bold">STEP {step.num}</span>
                  <h3 className="text-[17px] font-bold mt-3 mb-4">{step.title}</h3>
                  <p className="text-[14px] text-[var(--text-sub)] leading-[1.9] mb-5">{step.desc}</p>
                  <p className="text-[13px] text-[var(--text-muted)]">{step.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-4">
              <ScrollReveal>
                <div className="img-ph aspect-[3/4] rounded-2xl" />
              </ScrollReveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ScrollReveal delay={60}>
                <div className="gold-line w-12 mb-6" />
                <p className="text-[var(--gold)] text-[13px] font-medium mb-3">代表</p>
                <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-6">増尾 圭亮</h2>
                <p className="text-[15px] text-[var(--text-sub)] leading-[2.1]">
                  合同会社FOMUS代表。AI開発、Web制作、漫画制作までを一人で設計・実装する技術者です。大規模な開発チームではなく、意思決定者が直接手を動かすことで、伝言コスト・管理コストを排除します。
                </p>
                <p className="text-[15px] text-[var(--text-sub)] leading-[2.1] mt-4">
                  <strong className="text-[var(--text)]">信条は「不要なものは売らない」。</strong>御社に必要ない施策は、聞かれても断ります。
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="bg-[var(--bg-alt)] py-24 md:py-32 px-6">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <div className="gold-line w-12 mb-6" />
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-10">よくあるご質問</h2>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <FAQ items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[var(--bg-dark)] text-white py-24 md:py-32 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <div className="gold-line w-12 mx-auto mb-8" />
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-4">
              まず30分、現状を整理しませんか。
            </h2>
            <p className="text-white/50 text-[15px] leading-[2] mb-10">
              オンラインで御社の業務課題をお聞きし、対応可能な施策と概算をその場でお伝えします。
            </p>
            <Link href="/auth/register" className="inline-block bg-[var(--gold)] text-[var(--bg-dark)] px-10 py-4 rounded-lg text-[15px] font-bold hover:opacity-90 transition-opacity">
              無料で相談する
            </Link>
            <p className="text-white/25 text-[13px] mt-4">営業電話・しつこい後追いは一切行いません。</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="gold-line mb-10" />
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
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
          <p className="text-[13px] text-[var(--text-muted)]">&copy; 2026 合同会社FOMUS</p>
        </div>
      </footer>

      <MobileCTABar />
    </div>
  )
}

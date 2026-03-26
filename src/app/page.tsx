import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FAQ from '@/components/ui/FAQ'
import MobileMenu from '@/components/ui/MobileMenu'
import MobileCTABar from '@/components/ui/MobileCTABar'

/* ───────────────────────────── DATA ───────────────────────────── */

const stats = [
  { value: '50+', label: 'プロジェクト', color: '#2563EB' },
  { value: '30+', label: '対応業種', color: '#7C3AED' },
  { value: '92%', label: 'リピート率', color: '#16A34A' },
  { value: '2週間', label: '最短導入', color: '#D4451A' },
]

const services = [
  { id: 'AI', title: 'AI導入支援', desc: '業務自動化・チャットボット・データ分析の設計と実装', tags: ['ChatGPT', 'LINE Bot', '業務自動化'], color: '#2563EB', bg: '#EFF6FF' },
  { id: 'WEB', title: 'Web制作', desc: 'コーポレートサイト・LP・予約システムの構築', tags: ['Next.js', 'レスポンシブ', 'SEO'], color: '#16A34A', bg: '#F0FDF4' },
  { id: 'DX', title: 'DXコンサルティング', desc: '業務フロー分析から投資対効果の高い施策を特定', tags: ['業務分析', 'ROI設計', 'IT戦略'], color: '#7C3AED', bg: '#F5F3FF' },
  { id: 'MNG', title: '漫画制作', desc: '採用・営業・ブランディング用の漫画コンテンツ', tags: ['採用漫画', 'SNS漫画', 'LP漫画'], color: '#DB2777', bg: '#FDF2F8' },
  { id: 'CRE', title: 'クリエイティブ制作', desc: 'ロゴ・名刺・動画・SNS運用素材のデザイン', tags: ['ロゴ', '動画', 'SNS'], color: '#D4451A', bg: '#FDF2EC' },
  { id: 'MNT', title: '保守・運用', desc: '月額保守で継続改善。障害対応・分析レポート付き', tags: ['月次レポート', '改善提案', '監視'], color: '#0891B2', bg: '#ECFEFF' },
]

const projects = [
  {
    label: 'Web Renewal',
    title: '宿泊施設のサイト刷新で予約数+180%',
    description: '老朽化した予約導線を再設計し、UI・コピー・ページ構成を全面改修。公開3ヶ月で直接予約数が2.8倍に増加。',
    tags: ['Web制作', 'UI/UX', 'レスポンシブ'],
    color: '#1a3a2a',
    metric: '+180%',
    metricLabel: '予約数',
  },
  {
    label: 'AI Chatbot',
    title: '9言語対応AIチャットボットで対応工数-80%',
    description: 'インバウンド対応に追われていた現場の負荷を、多言語AIチャットボットで自動化。月間対応件数1,200件を人手なしで処理。',
    tags: ['AI導入', 'LINE', '多言語'],
    color: '#1a1a3a',
    metric: '-80%',
    metricLabel: '対応工数',
  },
  {
    label: 'Manga',
    title: '採用漫画の導入で応募数が3倍に',
    description: 'テキスト主体だった採用ページに漫画コンテンツを追加。求職者の滞在時間が4.2倍に伸び、エントリー数が3倍に。',
    tags: ['漫画制作', '採用ブランディング', 'SNS'],
    color: '#3a1a1a',
    metric: '3x',
    metricLabel: '応募数',
  },
]

const steps = [
  {
    num: '01',
    title: '業務分析・課題の特定',
    body: '現場の業務フローをヒアリングし、ボトルネックを特定します。「AIを入れたい」ではなく「何を解決すべきか」から設計します。',
    note: '所要時間：オンライン面談 60分',
  },
  {
    num: '02',
    title: 'プロトタイプの構築・検証',
    body: '最短2週間で動作するプロトタイプを提出します。実物を見てから判断できるため、仕様のズレや追加コストのリスクを最小化します。',
    note: 'プロトタイプ費用は本契約時に全額充当',
  },
  {
    num: '03',
    title: '本番導入・運用定着',
    body: '納品して終わりではなく、社内に定着するまでを支援します。操作マニュアルの整備、担当者への研修、導入後3ヶ月の改善対応を含みます。',
    note: '月次レポートで効果測定を実施',
  },
]

const faqItems = [
  { q: 'ITやAIの知識がまったくなくても大丈夫ですか？', a: 'はい。むしろそういう方のためのサービスです。「何をすればいいか分からない」という状態から、課題を整理し、最適な仕組みを構築します。専門用語を使わずにご説明しますので、ご安心ください。' },
  { q: '相談だけでも構いませんか？', a: 'もちろんです。30分のオンライン面談で、課題の整理と対応可能な施策の概要をお伝えします。相談後に契約の義務は一切ありません。' },
  { q: 'どのような業種に対応していますか？', a: '業種は問いません。飲食、宿泊、美容、医療、小売、不動産、士業、自治体など幅広く対応しています。大切なのは「何に困っているか」です。' },
  { q: '費用感を教えてください。', a: 'Web制作は7万円〜、AI導入は月額5万円〜、漫画制作は1話9.8万円〜が目安です。ヒアリング後に必要な範囲だけお見積もりします。不要なものは提案しません。' },
  { q: '導入後のサポートはありますか？', a: '納品して終わりではありません。操作マニュアルの整備、担当者への研修、導入後3ヶ月の改善対応を標準で含みます。月額保守プランでは月次レポートによる効果測定も実施します。' },
]

/* ───────────────────────────── PAGE ───────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ===== NAV ===== */}
      <nav className="fixed w-full z-50 top-0 bg-[var(--bg)]/80 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col">
            <span className="text-[13px] tracking-[0.2em] font-medium leading-none">FOMUS</span>
            <span className="text-[10px] tracking-[0.1em] text-[var(--text-muted)] mt-0.5">Creative Studio</span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'Work', 'Approach', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="link-slide text-[12px] tracking-[0.15em] uppercase text-[var(--text-sub)] hover:text-[var(--text)] transition-colors"
              >
                {item}
              </a>
            ))}
            <Link
              href="/auth/register"
              className="text-[12px] tracking-[0.1em] uppercase bg-[var(--accent)] text-white px-6 py-2.5 rounded-full hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
            >
              Contact
            </Link>
          </div>
          <MobileMenu />
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-32 px-6 md:px-16 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <h1 className="text-[clamp(48px,7vw,88px)] leading-[1.1] tracking-[-0.03em] font-light">
            仕組みで、
            <span className="font-[family-name:var(--font-serif)] italic text-[var(--accent)]">勝つ。</span>
          </h1>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-12 mt-12 md:mt-16 gap-8">
          <div className="md:col-span-6 md:col-start-7">
            <ScrollReveal delay={120}>
              <p className="text-[16px] text-[var(--text-sub)] leading-[1.8] font-light">
                AI・Web・クリエイティブ。御社の業務課題に対して、最適な仕組みを設計し、実装します。
                FOMUS Creative Studioは、中小企業専門のクリエイティブスタジオです。
              </p>
              <div className="mt-10">
                <Link
                  href="/auth/register"
                  className="inline-block bg-[var(--accent)] text-white px-8 py-4 rounded-full text-[13px] tracking-[0.05em] font-medium hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                >
                  無料診断を予約する（30分・オンライン）
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF BAR ===== */}
      <ScrollReveal>
        <div className="border-y border-[var(--border)] bg-[var(--bg-alt)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[clamp(28px,4vw,40px)] font-light tracking-[-0.02em] leading-none mb-2" style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className="text-[12px] tracking-[0.15em] uppercase text-[var(--text-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-24 md:py-36 px-6 md:px-16 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <p className="text-[12px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-4">
            Services
          </p>
          <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.25] font-light tracking-[-0.02em] mb-16">
            対応領域
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 80}>
              <div className="group border border-[var(--border)] rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 h-full" style={{ borderTopWidth: '3px', borderTopColor: s.color }}>
                <p className="text-[12px] tracking-[0.15em] uppercase mb-4 font-medium" style={{ color: s.color }}>
                  {s.id}
                </p>
                <h3 className="text-[18px] font-medium leading-[1.4] mb-3">
                  {s.title}
                </h3>
                <p className="text-[14px] text-[var(--text-sub)] leading-[1.8] font-light mb-6">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-3 py-1 rounded-full" style={{ color: s.color, backgroundColor: s.bg }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== WORK ===== */}
      <section id="work" className="border-t border-[var(--border)] py-24 md:py-36 px-6 md:px-16 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <p className="text-[12px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-4">
            Selected Work
          </p>
          <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.25] font-light tracking-[-0.02em] mb-16">
            実績
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.label} delay={i * 100}>
              <div className="project-card group cursor-pointer">
                <div
                  className="aspect-[4/5] rounded-lg mb-5 flex flex-col justify-end p-8 border-t-4 border-transparent group-hover:shadow-xl transition-all duration-500"
                  style={{
                    background: project.color,
                    // @ts-expect-error CSS custom property for hover border color
                    '--hover-border': project.color,
                  }}
                >
                  <span className="text-white/40 text-[12px] tracking-[0.15em] uppercase mb-2">
                    {project.metricLabel}
                  </span>
                  <span className="text-white font-light text-[clamp(48px,6vw,72px)] leading-none tracking-tight">
                    {project.metric}
                  </span>
                </div>
                <p className="text-[12px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2">
                  {project.label}
                </p>
                <h3 className="text-[17px] font-medium leading-[1.5] mb-2">
                  {project.title}
                </h3>
                <p className="text-[14px] text-[var(--text-sub)] leading-[1.8] font-light mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] text-[var(--text-muted)] border border-[var(--border)] px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="border-t border-[var(--border)] py-24 md:py-36 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="max-w-[800px]">
          <ScrollReveal>
            <p className="text-[12px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-4">
              Philosophy
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.25] font-light tracking-[-0.02em] mb-10">
              IT人材不足は、経営リスクそのものです。
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <p className="text-[16px] text-[var(--text-sub)] leading-[1.8] font-light mb-6">
              中小企業のAI導入率は約5%。DX推進を掲げても、社内にIT専任者がいなければ計画は止まります。外注すれば数百万。採用すれば年間600万以上。しかも成果が出る保証はありません。
            </p>
            <p className="text-[16px] text-[var(--text-sub)] leading-[1.8] font-light">
              FOMUSは「何をすべきか分からない」という段階から入ります。御社の業務を分析し、投資対効果の高い施策だけを特定します。不要なものは提案しません。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== APPROACH ===== */}
      <section id="approach" className="border-t border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-24 md:py-36">
          <ScrollReveal>
            <p className="text-[12px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-4">
              Approach
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.25] font-light tracking-[-0.02em] mb-16">
              導入までの流れ
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div className="border-t border-[var(--border)] pt-8">
                  <p className="text-[12px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-6">
                    {step.num}
                  </p>
                  <h3 className="text-[20px] font-medium leading-[1.4] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-[var(--text-sub)] leading-[1.8] font-light mb-6">
                    {step.body}
                  </p>
                  <p className="text-[12px] tracking-[0.15em] uppercase text-[var(--text-muted)]">
                    {step.note}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="border-t border-[var(--border)] py-24 md:py-36 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-5">
            <ScrollReveal>
              <div className="img-ph aspect-[3/4] rounded-lg" />
            </ScrollReveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <ScrollReveal delay={80}>
              <p className="text-[12px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-8">
                Founder
              </p>
              <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.25] font-light tracking-[-0.02em] mb-8">
                増尾 圭亮
              </h2>
              <p className="text-[16px] text-[var(--text-sub)] leading-[1.8] font-light">
                合同会社FOMUS代表。AI開発、Web制作、漫画制作までを一人で設計・実装する技術者です。大規模な開発チームではなく、意思決定者が直接手を動かすことで、伝言コスト・管理コストを排除します。信条は「不要なものは売らない」。
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="border-t border-[var(--border)] py-24 md:py-36 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <ScrollReveal>
              <p className="text-[12px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-4">
                FAQ
              </p>
              <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.25] font-light tracking-[-0.02em]">
                よくある<br />ご質問
              </h2>
            </ScrollReveal>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ScrollReveal delay={60}>
              <FAQ items={faqItems} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[var(--text)] text-[var(--bg)] py-24 md:py-36">
        <div className="max-w-[800px] mx-auto px-6 md:px-16 text-center">
          <ScrollReveal>
            <h2 className="text-[clamp(32px,5vw,56px)] leading-[1.15] font-light tracking-[-0.02em] mb-6">
              まず30分、現状を整理しませんか。
            </h2>
            <p className="text-[var(--bg)]/50 text-[16px] leading-[1.8] font-light mb-12 max-w-[600px] mx-auto">
              オンラインで御社の業務課題をお聞きし、対応可能な施策と概算をその場でお伝えします。
            </p>
            <Link
              href="/auth/register"
              className="inline-block bg-[var(--bg)] text-[var(--text)] px-10 py-4 rounded-full text-[13px] tracking-[0.05em] font-medium hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
            >
              無料診断を予約する（30分・オンライン）
            </Link>
            <p className="text-[var(--bg)]/30 text-[12px] tracking-[0.1em] mt-6">
              営業電話・しつこい後追いは一切行いません。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-20 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          <div>
            <p className="text-[13px] tracking-[0.2em] font-medium mb-0.5">FOMUS</p>
            <p className="text-[10px] text-[var(--text-muted)]">Creative Studio</p>
          </div>
          <div className="flex gap-16 text-[12px] tracking-[0.15em] uppercase text-[var(--text-sub)]">
            <div className="space-y-4">
              <a href="#services" className="block link-slide hover:text-[var(--text)] transition-colors">Services</a>
              <a href="#work" className="block link-slide hover:text-[var(--text)] transition-colors">Work</a>
              <a href="#approach" className="block link-slide hover:text-[var(--text)] transition-colors">Approach</a>
            </div>
            <div className="space-y-4">
              <a href="#faq" className="block link-slide hover:text-[var(--text)] transition-colors">FAQ</a>
              <Link href="/auth/register" className="block link-slide hover:text-[var(--text)] transition-colors">Contact</Link>
              <Link href="/auth/login" className="block link-slide hover:text-[var(--text)] transition-colors">Login</Link>
            </div>
          </div>
        </div>
        <div className="divider mb-8" />
        <div className="flex flex-col md:flex-row justify-between gap-4 text-[11px] text-[var(--text-muted)]">
          <p>&copy; 2026 合同会社FOMUS</p>
          <p>Tokyo / Kyoto / Dubai</p>
        </div>
      </footer>

      {/* ===== MOBILE CTA BAR ===== */}
      <MobileCTABar />
    </div>
  )
}

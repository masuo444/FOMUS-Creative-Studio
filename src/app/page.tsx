import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FAQ from '@/components/ui/FAQ'

const services = [
  {
    icon: '🤖',
    title: 'AI Solutions',
    titleJa: 'AI業務自動化',
    desc: '多言語チャット、レビュー自動返信、予約管理、FAQボット。あなたの業務に合わせたAIを構築。',
    tags: ['LINE対応', '9言語', 'Claude AI', '24時間稼働'],
    accent: '#00d4ff',
  },
  {
    icon: '🌐',
    title: 'Web Production',
    titleJa: 'Web制作・リニューアル',
    desc: '古くなったサイトを最短3日でリニューアル。チャットボット・多言語対応もワンストップ。',
    tags: ['最短3日', 'レスポンシブ', 'SEO最適化', 'チャットボット'],
    accent: '#f5c842',
  },
  {
    icon: '📕',
    title: 'Manga & Creative',
    titleJa: 'AI漫画・クリエイティブ制作',
    desc: '採用漫画、企業PR漫画、自己紹介漫画。AI×ディレクションで最短1週間、40言語対応。',
    tags: ['採用漫画', '40言語対応', '企業PR', 'MangaX'],
    accent: '#e8006a',
  },
  {
    icon: '🏛️',
    title: 'Government DX',
    titleJa: '自治体サイト刷新',
    desc: '既存CMSを触らずデザインだけ刷新。JIS X 8341-3準拠・アクセシビリティ対応。随意契約OK。',
    tags: ['CMS不変', 'JIS準拠', 'PDF HTML化', 'アクセシビリティ'],
    accent: '#6366f1',
  },
  {
    icon: '📊',
    title: 'Invoice & Payment',
    titleJa: '請求書・決済AI',
    desc: 'インボイス制度対応の請求書をAIが自動生成。Stripe連携で決済から発行まで一気通貫。',
    tags: ['適格請求書', 'AI生成', 'Stripe連携', '自動発行'],
    accent: '#f5c842',
  },
  {
    icon: '💡',
    title: 'AI Consulting',
    titleJa: 'AIコンサルティング',
    desc: '「AIで何ができるか分からない」から伴走。御社の業務を分析し、最適なAI活用プランを設計。',
    tags: ['無料相談', '業務分析', 'ROI試算', '導入サポート'],
    accent: '#a855f7',
  },
]

const faqItems = [
  { q: 'AIの知識がなくても導入できますか？', a: 'まったく問題ありません。「AIで何ができるか分からない」状態からでも大丈夫です。ヒアリングで御社の業務を把握し、最適なAIツールをこちらで構築・導入します。' },
  { q: '初期費用はかかりますか？', a: 'サービスによります。Web制作・漫画制作は一括納品のため初期費用のみ。AI業務自動化は初期構築費＋月額保守の形です。まずは無料相談でお見積もりします。' },
  { q: '最短でどのくらいで導入できますか？', a: 'ヒアリングから1週間でプロトタイプをお見せします。Web制作は最短3日、AI業務自動化は2〜4週間が目安です。お急ぎの場合はご相談ください。' },
  { q: '他社のAIサービスとの違いは？', a: '大手は大企業向けで高額、他社は単機能のみ。FOOMUSはAI・Web・クリエイティブを一社で完結でき、中小企業の予算感に合わせた提案ができる唯一のスタジオです。' },
  { q: '契約期間の縛りはありますか？', a: 'AI月額プランは最低3ヶ月からですが、それ以降はいつでも解約可能です。Web制作・漫画制作は納品ベースのため、月額費用は発生しません。' },
  { q: '海外向けにも対応していますか？', a: 'はい。AI多言語チャットは9言語対応、漫画制作は40言語対応。Dubai法人を通じた中東・東南アジア展開の実績もあります。' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--void)] text-[var(--white)] overflow-x-hidden noise">

      {/* ========== NAV ========== */}
      <nav className="fixed w-full z-50 px-6 md:px-14 h-[72px] flex items-center justify-between bg-transparent transition-all duration-300">
        <Link href="/" className="font-[family-name:var(--font-display)] text-[clamp(14px,2.5vw,22px)] tracking-[3px] text-[var(--white)]">
          FOMUS<span className="text-[var(--magenta)]" style={{ textShadow: '0 0 20px rgba(232,0,106,0.6)' }}>.</span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Process', 'FAQ', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[3px] uppercase text-[var(--dimmer)] hover:text-[var(--white)] transition-colors"
            >
              {item}
            </a>
          ))}
          <Link
            href="/auth/register"
            className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[3px] uppercase border border-[var(--magenta)] text-[var(--magenta)] px-7 py-3 hover:bg-[var(--magenta)] hover:text-[var(--void)] transition-all relative overflow-hidden"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center dot-grid overflow-hidden">
        {/* Orbs */}
        <div className="orb w-[560px] h-[560px] bg-[rgba(232,0,106,0.22)] -top-[15%] right-0 absolute" />
        <div className="orb w-[420px] h-[420px] bg-[rgba(0,212,255,0.13)] bottom-0 left-[5%] absolute" style={{ animationDelay: '-3.5s' }} />
        <div className="orb w-[280px] h-[280px] bg-[rgba(245,200,66,0.09)] top-[35%] left-[45%] absolute" style={{ animationDelay: '-6s' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 pt-32 pb-20">
          <ScrollReveal>
            <div className="sec-label font-[family-name:var(--font-space-mono)] mb-7">
              Creative Studio
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(72px,10vw,155px)] leading-[0.88] tracking-[2px] mb-10">
              <span className="block text-[var(--white)]">CREATE.</span>
              <span className="block" style={{ WebkitTextStroke: '2px var(--magenta)', color: 'transparent', textShadow: 'var(--glow-m)' }}>
                DELIVER.
              </span>
              <span className="block text-[var(--cyan)]" style={{ textShadow: 'var(--glow-c)' }}>
                ACCELERATE.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-[17px] text-[var(--dim)] max-w-[500px] leading-[2] mb-12 font-[family-name:var(--font-noto-sans-jp)] font-light">
              つくる、届ける、加速する。
              <br />
              AI業務自動化から、Web制作、漫画制作まで。
              <br />
              中小企業のDXを、構想から実装まで。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/auth/register" className="btn-glow font-[family-name:var(--font-space-mono)] text-[11px] tracking-[3px] uppercase px-12 py-5 inline-block">
                無料相談
              </Link>
              <a href="#services" className="font-[family-name:var(--font-space-mono)] text-[11px] tracking-[3px] uppercase text-[var(--dimmer)] hover:text-[var(--white)] transition-colors flex items-center gap-3">
                Services <span className="text-lg">↓</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={400}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24">
              {[
                { n: '50+', l: 'Projects' },
                { n: '1 Week', l: 'Prototype' },
                { n: '6', l: 'Service Lines' },
                { n: '9', l: 'Languages' },
              ].map((s, i) => (
                <div key={s.l} className="stat-card px-6 py-5" style={{ borderLeftColor: i === 0 ? 'var(--magenta)' : i === 1 ? 'var(--cyan)' : i === 2 ? 'var(--gold)' : 'var(--white)' }}>
                  <div className="font-[family-name:var(--font-display)] text-[46px] leading-none">{s.n}</div>
                  <div className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-[3px] uppercase text-[var(--dimmer)] mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 right-14 z-10 font-[family-name:var(--font-space-mono)] text-[9px] tracking-[4px] uppercase text-[var(--dimmer)] hidden md:flex flex-col items-center gap-3" style={{ writingMode: 'vertical-rl' }}>
          Scroll
          <span className="w-[1px] h-[72px] bg-gradient-to-b from-transparent to-[var(--dimmer)]" style={{ animation: 'scrollLine 2.5s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ========== MARQUEE ========== */}
      <div className="border-y border-[var(--border)] bg-[rgba(232,0,106,0.04)] py-4 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {['AI SOLUTIONS', 'WEB PRODUCTION', 'MANGA & CREATIVE', 'GOVERNMENT DX', 'INVOICE AI', 'CONSULTING'].map((t) => (
                <span key={`${i}-${t}`} className="font-[family-name:var(--font-display)] text-[19px] tracking-[3px] text-[rgba(240,238,248,0.6)] px-7">
                  {t} <span className="text-[var(--magenta)]">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ========== SERVICES ========== */}
      <section id="services" className="max-w-7xl mx-auto px-6 md:px-14 py-32">
        <ScrollReveal>
          <div className="sec-label font-[family-name:var(--font-space-mono)] mb-5">Services</div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(48px,6vw,92px)] leading-[0.92] tracking-[1px] mb-20">
            WHAT WE{' '}
            <em className="font-[family-name:var(--font-serif-jp)] italic" style={{ WebkitTextStroke: '1.5px var(--cyan)', color: 'transparent', textShadow: 'var(--glow-c)' }}>
              CREATE
            </em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div
                className="service-card glass-card rounded-none p-7 h-full cursor-default"
                style={{ '--card-accent': service.accent } as React.CSSProperties}
              >
                <span className="text-3xl block mb-5">{service.icon}</span>
                <h3 className="font-[family-name:var(--font-display)] text-[28px] tracking-[2px] mb-1">
                  {service.title}
                </h3>
                <p className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-[2px] uppercase text-[var(--dimmer)] mb-4">
                  {service.titleJa}
                </p>
                <p className="text-[15px] text-[var(--dim)] font-light leading-[1.9] mb-5 font-[family-name:var(--font-noto-sans-jp)]">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-[1px] px-3 py-1.5 border border-[var(--border)] text-[var(--dimmer)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section id="process" className="border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 md:px-14 py-32">
          <ScrollReveal>
            <div className="sec-label font-[family-name:var(--font-space-mono)] mb-5">Process</div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(48px,6vw,92px)] leading-[0.92] tracking-[1px] mb-20">
              HOW WE{' '}
              <em className="font-[family-name:var(--font-serif-jp)] italic" style={{ WebkitTextStroke: '1.5px var(--magenta)', color: 'transparent', textShadow: 'var(--glow-m)' }}>
                WORK
              </em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'HEARING', ja: 'ヒアリング', desc: '「何に一番時間を取られていますか？」\n御社の業務課題を1時間で把握します。', note: '無料・オンライン対応' },
              { step: '02', title: 'PROTOTYPE', ja: 'プロトタイプ', desc: '1週間で動くツールを構築。\n実際の業務データで試せる状態でお見せします。', note: '動くものを見てから判断' },
              { step: '03', title: 'LAUNCH', ja: '導入・運用', desc: '本番導入後も月額保守で継続改善。\nAIの精度は使うほど向上します。', note: '月額保守で安心運用' },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 120}>
                <div>
                  <div className="font-[family-name:var(--font-display)] text-[120px] leading-none text-[rgba(240,238,248,0.03)] mb-2">
                    {item.step}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-[32px] tracking-[3px] mb-1">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-[2px] uppercase text-[var(--magenta)] mb-5">
                    {item.ja}
                  </p>
                  <p className="text-[15px] text-[var(--dim)] font-light leading-[2] whitespace-pre-line mb-5 font-[family-name:var(--font-noto-sans-jp)]">
                    {item.desc}
                  </p>
                  <span className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-[2px] uppercase text-[var(--dimmer)] border border-[var(--border)] px-4 py-2 inline-block">
                    {item.note}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" className="max-w-3xl mx-auto px-6 md:px-14 py-32">
        <ScrollReveal>
          <div className="sec-label font-[family-name:var(--font-space-mono)] mb-5">FAQ</div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(48px,6vw,72px)] leading-[0.92] tracking-[1px] mb-16">
            QUESTIONS
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <FAQ items={faqItems} />
        </ScrollReveal>
      </section>

      {/* ========== CTA ========== */}
      <section id="contact" className="border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 md:px-14 py-32 text-center">
          <ScrollReveal>
            <div className="sec-label font-[family-name:var(--font-space-mono)] justify-center mb-8">Contact</div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(48px,8vw,100px)] leading-[0.88] tracking-[2px] mb-8">
              LET&apos;S{' '}
              <span className="text-[var(--cyan)]" style={{ textShadow: 'var(--glow-c)' }}>TALK</span>
            </h2>
            <p className="text-[16px] text-[var(--dim)] font-light max-w-md mx-auto leading-[2] mb-12 font-[family-name:var(--font-noto-sans-jp)]">
              「AIで何ができるか分からない」でもOK。
              <br />
              御社の業務をお聞きして、最適なプランをご提案します。
            </p>
            <Link href="/auth/register" className="btn-glow font-[family-name:var(--font-space-mono)] text-[11px] tracking-[3px] uppercase px-14 py-5 inline-block">
              無料相談を予約する
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-[var(--border)] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
            <div>
              <p className="font-[family-name:var(--font-display)] text-[24px] tracking-[3px] mb-2">
                FOMUS<span className="text-[var(--magenta)]">.</span>
              </p>
              <p className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-[3px] uppercase text-[var(--dimmer)]">
                Creative Studio
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-3">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Process', href: '#process' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
                { label: 'Login', href: '/auth/login' },
                { label: 'Dashboard', href: '/dashboard' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[2px] uppercase text-[var(--dimmer)] hover:text-[var(--white)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-[2px] text-[var(--dimmer)]">
              &copy; 2026 FOMUS GLOBAL INC. / 合同会社FOMUS
            </p>
            <p className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-[2px] text-[var(--dimmer)]">
              伝統工芸 × テクノロジー × コミュニティ
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

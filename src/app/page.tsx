import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FAQ from '@/components/ui/FAQ'

const services = [
  {
    icon: '🤖',
    title: 'AI Solutions',
    titleJa: 'AI業務自動化',
    desc: '多言語チャット、レビュー自動返信、予約管理、FAQボット。あなたの業務に合わせたAIを構築します。',
    tags: ['LINE対応', '9言語', 'Claude AI', '24時間稼働'],
    accent: '#2563EB',
  },
  {
    icon: '🌐',
    title: 'Web Production',
    titleJa: 'Web制作・リニューアル',
    desc: '古くなったサイトを最短3日でリニューアル。チャットボット・多言語対応もワンストップで。',
    tags: ['最短3日', 'レスポンシブ', 'SEO最適化', 'チャットボット'],
    accent: '#16A34A',
  },
  {
    icon: '📕',
    title: 'Manga & Creative',
    titleJa: 'AI漫画・クリエイティブ制作',
    desc: '採用漫画、企業PR漫画、自己紹介漫画。AI×クリエイティブディレクションで最短1週間。',
    tags: ['¥98,000〜', '40言語対応', '採用漫画', '企業PR'],
    accent: '#E8006A',
  },
  {
    icon: '🏛️',
    title: 'Government DX',
    titleJa: '自治体サイト刷新',
    desc: '既存CMSを触らずデザインだけ刷新。JIS X 8341-3準拠・アクセシビリティ対応。随意契約OK。',
    tags: ['CMS不変', 'JIS準拠', '20万円〜', 'PDF HTML化'],
    accent: '#6366F1',
  },
  {
    icon: '📊',
    title: 'Invoice & Payment',
    titleJa: '請求書・決済AI',
    desc: 'インボイス制度対応の請求書をAIが自動生成。Stripe連携で決済から発行まで一気通貫。',
    tags: ['適格請求書', 'AI生成', 'Stripe連携', '自動発行'],
    accent: '#F59E0B',
  },
  {
    icon: '💡',
    title: 'AI Consulting',
    titleJa: 'AIコンサルティング',
    desc: '「AIで何ができるか分からない」から伴走。御社の業務を分析し、最適なAI活用プランを設計。',
    tags: ['無料相談', '業務分析', 'ROI試算', '導入サポート'],
    accent: '#A855F7',
  },
]

const faqItems = [
  { q: 'AIの知識がなくても導入できますか？', a: 'はい。「AIで何ができるか分からない」状態からでも大丈夫です。ヒアリングで御社の業務を把握し、最適なAIツールをこちらで構築・導入します。操作は日本語のダッシュボードから簡単に行えます。' },
  { q: '初期費用はかかりますか？', a: 'サービスによります。Web制作・漫画制作は一括納品のため初期費用のみ。AI業務自動化は初期構築費（ヒアリング〜プロトタイプ）＋月額保守の形です。まずは無料相談でお見積もりします。' },
  { q: '最短でどのくらいで導入できますか？', a: 'ヒアリングから1週間でプロトタイプをお見せします。Web制作は最短3日、AI業務自動化は2〜4週間が目安です。お急ぎの場合はご相談ください。' },
  { q: '月額費用はどのくらいですか？', a: 'Web制作は一括7万円〜、AI業務自動化は月額5万円〜、漫画制作は1話9.8万円〜です。御社の規模と要件に合わせて最適なプランをご提案します。' },
  { q: '他社のAIサービスとの違いは？', a: '大手は大企業向けで高額、他社は単機能のみ。FOOMUSはAI・Web・クリエイティブを一社で完結でき、中小企業の予算感に合わせた提案ができる唯一のスタジオです。' },
  { q: '契約期間の縛りはありますか？', a: 'AI月額プランは最低3ヶ月からですが、それ以降はいつでも解約可能です。Web制作・漫画制作は納品ベースのため、月額費用は発生しません。' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* ========== NAV ========== */}
      <nav className="fixed w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-cormorant)] text-xl font-semibold tracking-tight">
              FOMUS Creative Studio
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-xs text-white/50 hover:text-white tracking-widest uppercase transition-colors">Services</a>
            <a href="#process" className="text-xs text-white/50 hover:text-white tracking-widest uppercase transition-colors">Process</a>
            <a href="#pricing" className="text-xs text-white/50 hover:text-white tracking-widest uppercase transition-colors">Pricing</a>
            <a href="#faq" className="text-xs text-white/50 hover:text-white tracking-widest uppercase transition-colors">FAQ</a>
            <Link
              href="/auth/register"
              className="text-xs bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              無料相談
            </Link>
          </div>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center dot-grid">
        <div className="hero-gradient hero-gradient-1" />
        <div className="hero-gradient hero-gradient-2" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center pt-24 pb-20">
          <ScrollReveal delay={100}>
            <div className="gold-line mx-auto mb-8" />
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-8xl font-light tracking-tight leading-[0.95] mb-6">
              Create.
              <br />
              <span className="italic text-white/60">Deliver.</span>
              <br />
              <span className="font-semibold bg-gradient-to-r from-[#C8A855] to-[#E8D89A] bg-clip-text text-transparent">
                Accelerate.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-base md:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed mt-8 font-[family-name:var(--font-noto-sans-jp)]">
              つくる、届ける、加速する。
              <br />
              AI業務自動化から、Web制作、漫画制作まで。
              <br />
              中小企業のDXを、構想から実装までワンストップで。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link
                href="/auth/register"
                className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all"
              >
                無料相談を予約する
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white/5 transition-all"
              >
                サービスを見る
              </a>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={400}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 max-w-3xl mx-auto">
              {[
                { value: '50+', label: 'プロジェクト実績' },
                { value: '1週間', label: '最短プロトタイプ' },
                { value: '6', label: 'サービスライン' },
                { value: '9言語', label: 'AI多言語対応' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-semibold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/30">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== MARQUEE ========== */}
      <div className="border-y border-white/5 py-5 overflow-hidden">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 text-sm text-white/15 font-[family-name:var(--font-cormorant)] tracking-widest">
              <span>AI SOLUTIONS</span><span>·</span>
              <span>WEB PRODUCTION</span><span>·</span>
              <span>MANGA & CREATIVE</span><span>·</span>
              <span>GOVERNMENT DX</span><span>·</span>
              <span>INVOICE AI</span><span>·</span>
              <span>CONSULTING</span><span>·</span>
              <span>AI SOLUTIONS</span><span>·</span>
              <span>WEB PRODUCTION</span><span>·</span>
              <span>MANGA & CREATIVE</span><span>·</span>
              <span>GOVERNMENT DX</span><span>·</span>
              <span>INVOICE AI</span><span>·</span>
              <span>CONSULTING</span><span>·</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========== SERVICES ========== */}
      <section id="services" className="max-w-7xl mx-auto px-6 md:px-8 py-32">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light tracking-tight mb-4">
              Services
            </h2>
            <p className="text-sm text-white/30 tracking-[0.2em] uppercase">FOOMUSにできること</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div
                className="service-card glass-card rounded-2xl p-7 h-full transition-all duration-500 cursor-default"
                style={{ '--card-accent': service.accent } as React.CSSProperties}
              >
                <span className="text-3xl block mb-4">{service.icon}</span>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-tight mb-1">
                  {service.title}
                </h3>
                <p className="text-xs text-white/40 mb-4">{service.titleJa}</p>
                <p className="text-sm text-white/50 leading-relaxed mb-5">{service.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-white/40"
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
      <section id="process" className="border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-32">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="gold-line mx-auto mb-6" />
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light tracking-tight mb-4">
                Process
              </h2>
              <p className="text-sm text-white/30 tracking-[0.2em] uppercase">3ステップで始まる</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Hearing',
                titleJa: 'ヒアリング',
                desc: '「何に一番時間を取られていますか？」\n御社の業務課題を1時間で把握します。',
                detail: '無料・オンライン対応',
              },
              {
                step: '02',
                title: 'Prototype',
                titleJa: 'プロトタイプ',
                desc: '1週間で動くAIツールを構築。\n実際の業務データで試せる状態でお見せします。',
                detail: '動くものを見てから判断',
              },
              {
                step: '03',
                title: 'Launch & Grow',
                titleJa: '導入・運用',
                desc: '本番導入後も月額保守で継続改善。\nAIの精度は使うほど向上します。',
                detail: '月額保守で安心運用',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 120}>
                <div className="relative">
                  <div className="font-[family-name:var(--font-cormorant)] text-7xl font-light text-white/5 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#C8A855] mb-4">{item.titleJa}</p>
                  <p className="text-sm text-white/40 leading-relaxed whitespace-pre-line mb-4">
                    {item.desc}
                  </p>
                  <span className="text-xs text-white/20 border border-white/10 px-3 py-1 rounded-full">
                    {item.detail}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NUMBERS ========== */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '-80%', label: '対応時間', color: 'from-blue-400 to-cyan-400' },
              { value: '+60%', label: '業務効率', color: 'from-green-400 to-emerald-400' },
              { value: '+40%', label: '顧客満足度', color: 'from-amber-400 to-yellow-300' },
              { value: '-50%', label: 'コスト', color: 'from-pink-400 to-rose-400' },
            ].map((item) => (
              <div key={item.label}>
                <div
                  className={`font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                >
                  {item.value}
                </div>
                <div className="text-xs text-white/30 mt-2">{item.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ========== PRICING ========== */}
      <section id="pricing" className="border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-32">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="gold-line mx-auto mb-6" />
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light tracking-tight mb-4">
                Pricing
              </h2>
              <p className="text-sm text-white/30 tracking-[0.2em] uppercase">
                明確な料金体系
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: 'Start',
                nameJa: 'スタート',
                price: '5万円〜',
                unit: '/月',
                desc: '1つのAI機能を導入',
                features: ['ヒアリング（1時間）', 'AI機能 1モジュール', 'LINE or Web対応', '月次レポート', 'メールサポート'],
                note: '小規模事業者に最適',
                popular: false,
              },
              {
                name: 'Business',
                nameJa: 'ビジネス',
                price: '15万円〜',
                unit: '/月',
                desc: '複数AI機能を統合',
                features: ['ヒアリング（2時間）', 'AI機能 3モジュールまで', '全チャネル対応', 'ダッシュボード', '優先チャットサポート', '月次改善提案'],
                note: '成長企業に最適',
                popular: true,
              },
              {
                name: 'Enterprise',
                nameJa: 'エンタープライズ',
                price: '30万円〜',
                unit: '/月',
                desc: 'フルカスタムAI基盤',
                features: ['要件定義（無制限）', 'AI機能 無制限', 'API連携開発', '専用ダッシュボード', '専任担当者', 'SLA保証'],
                note: 'フルカスタム対応',
                popular: false,
              },
            ].map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 100}>
                <div
                  className={`glass-card rounded-2xl p-7 relative h-full ${
                    plan.popular ? 'border-[#C8A855]/30 ring-1 ring-[#C8A855]/20' : ''
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C8A855] to-[#E8D89A] text-black text-[11px] px-4 py-1 rounded-full font-medium">
                      POPULAR
                    </span>
                  )}
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold">{plan.name}</h3>
                  <p className="text-xs text-white/40 mb-4">{plan.nameJa}</p>
                  <div className="mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-sm text-white/30">{plan.unit}</span>
                  </div>
                  <p className="text-xs text-white/40 mb-4">{plan.desc}</p>
                  <div className="bg-white/5 text-white/40 text-xs px-3 py-2 rounded-lg mb-5 text-center">
                    {plan.note}
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="text-sm text-white/50 flex items-start gap-2">
                        <span className="text-[#C8A855] mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="text-center mt-12">
              <p className="text-xs text-white/30">
                Web制作: 一括7万円〜 / 漫画制作: 1話9.8万円〜 / 自治体サイト: 20万円〜
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" className="max-w-3xl mx-auto px-6 md:px-8 py-32">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light tracking-tight mb-4">
              FAQ
            </h2>
            <p className="text-sm text-white/30 tracking-[0.2em] uppercase">よくあるご質問</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <FAQ items={faqItems} />
        </ScrollReveal>
      </section>

      {/* ========== CTA ========== */}
      <section className="border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-32 text-center">
          <ScrollReveal>
            <div className="gold-line mx-auto mb-8" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light tracking-tight mb-6">
              Let&apos;s talk.
            </h2>
            <p className="text-white/40 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-10">
              「AIで何ができるか分からない」でもOK。
              <br />
              御社の業務をお聞きして、最適なプランをご提案します。
            </p>
            <Link
              href="/auth/register"
              className="group inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full text-sm font-medium hover:shadow-[0_0_60px_rgba(200,168,85,0.2)] transition-all"
            >
              無料相談を予約する
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
            <div>
              <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-tight mb-2">
                FOMUS Creative Studio
              </p>
              <p className="text-xs text-white/30">つくる、届ける、加速する。</p>
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-xs text-white/30">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <Link href="/auth/login" className="hover:text-white transition-colors">ログイン</Link>
              <a href="#process" className="hover:text-white transition-colors">Process</a>
              <Link href="/auth/register" className="hover:text-white transition-colors">無料相談</Link>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/20">
            <p>&copy; 2026 合同会社FOMUS. All rights reserved.</p>
            <div className="flex gap-6">
              <span>伝統工芸 × テクノロジー × コミュニティ</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

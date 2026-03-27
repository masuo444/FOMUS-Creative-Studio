import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FAQ from '@/components/ui/FAQ'
import MobileMenu from '@/components/ui/MobileMenu'
import MobileCTABar from '@/components/ui/MobileCTABar'

const services = [
  { title: 'AI導入', en: 'AI Solutions', desc: '業務自動化・チャットボット・データ分析の設計と実装。', href: '/services#ai' },
  { title: 'Web制作', en: 'Web Production', desc: 'コーポレートサイト・LP・予約システムの構築。', href: '/services#web' },
  { title: 'DX推進', en: 'DX Consulting', desc: '業務フロー分析から投資対効果の高い施策を特定。', href: '/services#dx' },
  { title: '漫画制作', en: 'Manga & Creative', desc: '採用漫画・企業PR・ロゴ・動画のデザイン。', href: '/services#creative' },
  { title: 'AI研修', en: 'AI Training', desc: '業務起点のAI活用研修。助成金で最大75%OFF。', href: '/services#training' },
  { title: '保守運用', en: 'Maintenance', desc: '月額保守で継続改善。障害対応・月次レポート付き。', href: '/services#maintenance' },
]

const painPoints = [
  { icon: '01', title: '売上が頭打ちになっている', desc: 'Webからの問い合わせがゼロ。口コミ頼みの集客に限界を感じている。競合はネットから新規客を取っているのに、自社だけ取り残されている。', impact: '年間数百万円の機会損失' },
  { icon: '02', title: '人がやらなくていい仕事に追われている', desc: '問い合わせ対応、予約管理、請求書作成、レビュー返信。毎日同じ作業の繰り返しで、経営に集中する時間がない。', impact: '1日3時間 = 年間750時間のロス' },
  { icon: '03', title: '採用しても人が来ない・定着しない', desc: '求人を出しても応募がない。来ても続かない。会社の魅力が求職者に伝わっていない。採用コストだけが膨らむ。', impact: '採用単価50万円 × 離職で二重コスト' },
  { icon: '04', title: 'AI導入が必要なのは分かるが、何をすればいいか分からない', desc: '周りはChatGPTだDXだと言うが、自社にどう関係するのか見えない。相談できる相手もいない。このままでは確実に取り残される。', impact: 'AI導入企業との生産性格差: 最大3倍' },
]

const products = [
  {
    num: '01',
    en: 'Discover',
    title: '課題を見つける',
    desc: '御社の業務を深く理解し、ボトルネックを特定します。何を改善すべきか、どこにコストが漏れているか。最適な打ち手を、根拠とともに設計します。',
    note: 'オンライン面談 60分 / 無料',
    image: '/images/demo-desktop.png',
  },
  {
    num: '02',
    en: 'Create',
    title: '仕組みをつくる',
    desc: 'AI、Web、デザイン、漫画——あらゆる手段を使って、御社だけの仕組みを構築します。既製品の導入ではなく、課題に合わせたオーダーメイド。最短2週間で動くプロトタイプを提出します。',
    note: 'プロトタイプ費用は本契約時に全額充当',
    image: '/images/hero-laptop.png',
  },
  {
    num: '03',
    en: 'Grow',
    title: '成果を伸ばし続ける',
    desc: '導入して終わりではなく、継続的に改善し続けます。月次レポート、障害対応、機能追加、新しい課題への対応——御社のIT部門として機能します。',
    note: 'まずはヒアリングから',
    image: '/images/work-web.png',
  },
]

const steps = [
  { num: '01', title: 'ヒアリング', desc: '御社の業務フローと課題をオンラインで伺います。「何をすればいいか分からない」状態でも問題ありません。課題の整理から始めます。', note: 'オンライン面談 / 無料' },
  { num: '02', title: 'プロトタイプ', desc: '最短2週間で動作するプロトタイプを提出します。実物を見てから判断できるため、仕様のズレやコストリスクを最小化します。', note: 'ヒアリング後にお見積もり' },
  { num: '03', title: '導入・運用', desc: '納品して終わりではなく、社内に定着するまで支援します。マニュアル整備、担当者研修、改善対応を含みます。', note: '月次レポートで効果を測定' },
]

const faqItems = [
  { q: 'ITやAIの知識がまったくなくても大丈夫ですか？', a: 'はい。むしろそういう方のためのサービスです。「何をすればいいか分からない」という状態から、課題を整理し、最適な仕組みを構築します。' },
  { q: '相談だけでも構いませんか？', a: 'もちろんです。オンライン面談で、課題の整理と施策の概要をお伝えします。相談後に契約の義務は一切ありません。' },
  { q: 'どのような業種に対応していますか？', a: '飲食、宿泊、美容、医療、小売、不動産、士業、自治体など幅広く対応しています。業種よりも「何に困っているか」が大切です。' },
  { q: '費用感を教えてください。', a: 'ヒアリング後に、必要な範囲だけお見積もりします。不要な施策を勧めることはありません。まずはお気軽にご相談ください。' },
  { q: '導入後のサポートはありますか？', a: 'マニュアル整備、担当者研修、改善対応を標準で含みます。ITパートナー契約では、月次レポートによる効果測定と継続的な改善を実施します。' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">

      {/* ===== NAV (transparent over hero) ===== */}
      <nav className="fixed w-full z-50 top-0">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
          <Link href="/" className="text-white text-[15px] font-bold tracking-tight">
            FOMUS Creative Studio
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-white/60 text-[14px] hover:text-white transition-colors">サービス</Link>
            <Link href="/work" className="text-white/60 text-[14px] hover:text-white transition-colors">実績</Link>
            <Link href="/company" className="text-white/60 text-[14px] hover:text-white transition-colors">会社概要</Link>
            <a href="#faq" className="text-white/60 text-[14px] hover:text-white transition-colors">FAQ</a>
            <Link href="/contact" className="text-[14px] bg-[var(--gold)] text-[#1A1A1A] px-6 py-2.5 rounded-lg font-bold hover:opacity-90 transition-opacity">
              無料で相談する
            </Link>
          </div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* ===== HERO (dark #1A1A1A) ===== */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-end overflow-hidden">
        {/* Abstract visual background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F1F] via-[#1A1A1A] to-[#1A1A1A]" />
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#1a4a3a] opacity-20 blur-[120px]" />
          <div className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] rounded-full bg-[#B8943E] opacity-[0.06] blur-[100px]" />
          <div className="absolute top-[40%] left-[40%] w-[200px] h-[200px] rounded-full bg-[#2D6A4F] opacity-15 blur-[80px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-[72px] pb-20 md:pb-28 w-full">
          <ScrollReveal>
            <h1 className="text-white text-[clamp(36px,7vw,80px)] font-bold leading-[1.15] tracking-tight mb-5">
              CREATIVE SOLUTIONS
              <br />
              FOR YOUR BUSINESS
            </h1>
            <p className="text-white/40 text-[15px] md:text-[16px] leading-[2] max-w-[480px]">
              御社の業務課題を分析し、最適な仕組みを構築します。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SERVICES GRID — Glass cards on photo bg ===== */}
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0">
          <img src="/images/hero-laptop.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 60}>
                <Link
                  href={s.href}
                  className="group relative bg-white/10 backdrop-blur-xl border border-white/15 rounded-xl p-5 md:p-7 hover:bg-white/20 hover:border-white/30 transition-all duration-500 overflow-hidden block"
                >
                  <p className="text-white/40 text-[11px] md:text-[12px] tracking-wide mb-1">{s.en}</p>
                  <p className="text-white text-[17px] md:text-[20px] font-bold">{s.title}</p>
                  <div className="max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-out">
                    <p className="text-white/50 text-[13px] leading-[1.7] mt-3 pr-4">{s.desc}</p>
                  </div>
                  <span className="absolute top-5 right-5 text-white/20 group-hover:text-[var(--gold)] transition-colors text-[18px]">→</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 課題セクション (warm cream #F5F3EE) ===== */}
      <section className="bg-[#F5F3EE] py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Pain Points</p>
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight mb-14 text-[#1A1A18]">
              こんな課題を抱えていませんか？
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-8 md:p-10 h-full border border-[#E8E6DE] hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                  <span className="inline-block text-[var(--gold)] text-[12px] font-bold tracking-[0.15em] bg-[var(--gold-light)] px-3 py-1.5 rounded-full mb-5">{p.icon}</span>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#1A1A18] mb-4 leading-[1.4]">{p.title}</h3>
                  <p className="text-[15px] text-[#4A4A46] leading-[2] mb-5">{p.desc}</p>
                  <div className="border-t border-[#E8E6DE] pt-4">
                    <p className="text-[14px] text-[#B8943E] font-bold">{p.impact}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Impact Statement (dark, full-width) ===== */}
      <section className="bg-[#1A1A1A] py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B8943E] opacity-[0.04] blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-[clamp(26px,5vw,48px)] font-bold tracking-tight leading-[1.4] mb-6">
              これらの課題、
              <br />
              すべて
              <span className="font-[family-name:var(--font-serif)] italic text-[var(--gold)]"> 仕組み </span>
              で解決できます。
            </h2>
            <p className="text-white/40 text-[16px] md:text-[18px] leading-[2]">
              放置すれば損失は拡大します。対策は早いほど効果が出ます。
            </p>
            <div className="mt-10">
              <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--gold)] text-[#1A1A1A] px-10 py-4 rounded-lg text-[16px] font-bold hover:opacity-90 transition-opacity min-h-[52px]">
                無料で相談する
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Our Approach (dark #1A1A1A) ===== */}
      <section className="bg-[#1A1A1A] py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Our Approach</p>
            <h2 className="text-white text-[28px] md:text-[36px] font-bold tracking-tight mb-6">Discover. Create. Grow.</h2>
            <p className="text-white/40 text-[15px] leading-[2] max-w-[560px] mb-16">課題の発見から、仕組みの構築、そして成果の拡大まで。<br />クリエイティブの力で、御社のビジネスを次のステージへ。</p>
          </ScrollReveal>

          <div className="space-y-20 md:space-y-28">
            {products.map((p, i) => (
              <ScrollReveal key={p.num} delay={i * 80}>
                <div className="relative">
                  {/* Dark text card - left side */}
                  <div className="relative z-10 md:w-[55%] bg-[#2C2C2C] rounded-lg p-10 md:p-14">
                    <span className="inline-block text-[var(--gold)] text-[12px] font-bold tracking-[0.15em] uppercase bg-[var(--gold)]/10 px-3 py-1.5 rounded-full mb-5">{p.en}</span>
                    <h3 className="text-white text-[28px] md:text-[34px] font-bold tracking-tight leading-[1.3] mb-5">
                      {p.title}
                    </h3>
                    <p className="text-white/60 text-[15px] leading-[2] mb-6 max-w-[440px]">
                      {p.desc}
                    </p>
                    <p className="text-[var(--gold)] text-[14px] font-medium">{p.note}</p>
                  </div>

                  {/* Photo - right side, offset down */}
                  <div className="md:absolute md:right-0 md:top-[15%] md:w-[52%] mt-4 md:mt-0">
                    <div className="rounded-lg overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full aspect-[16/11] object-cover" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS — Glass cards on dark teal ===== */}
      <section id="process" className="bg-[#0D1F1F] text-white py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Process</p>
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight mb-14">導入までの流れ</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div className="relative group glass-card p-8 h-full overflow-hidden">
                  {/* Subtle glow accent */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--gold)]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10">
                    <span className="inline-block text-[var(--gold)] text-[12px] font-bold tracking-[0.15em] uppercase bg-[var(--gold)]/10 px-3 py-1.5 rounded-full mb-5">Step {step.num}</span>
                    <h3 className="text-[20px] font-bold mt-1 mb-4 leading-[1.4]">{step.title}</h3>
                    <p className="text-white/50 text-[14px] md:text-[15px] leading-[1.9] mb-6">{step.desc}</p>
                    <p className="text-[13px] text-[var(--gold)] font-medium">{step.note}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER (warm cream) ===== */}
      <section className="bg-[#F5F3EE] py-24 md:py-32 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-4">
              <ScrollReveal>
                <img src="/images/founder.jpg" alt="増尾 圭亮" className="aspect-[3/4] rounded-2xl object-cover w-full" />
              </ScrollReveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ScrollReveal delay={60}>
                <p className="text-[var(--gold)] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Founder</p>
                <p className="text-[var(--gold)] text-[13px] font-medium mb-3">代表</p>
                <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight mb-6 text-[#1A1A18]">増尾 圭亮</h2>
                <p className="text-[15px] md:text-[16px] text-[#4A4A46] leading-[2.1]">
                  合同会社FOMUS代表。AI開発、Web制作、漫画制作までを一人で設計・実装する技術者です。大規模な開発チームではなく、意思決定者が直接手を動かすことで、伝言コスト・管理コストを排除します。
                </p>
                <p className="text-[15px] md:text-[16px] text-[#1A1A18] leading-[2.1] mt-4 mb-6 font-bold">
                  ITのことで困ったら、まず私に相談してください。
                </p>
                <Link href="/company" className="inline-flex items-center text-[15px] text-[var(--gold)] font-medium hover:opacity-80 transition-opacity">
                  会社概要を見る →
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ (warm cream) ===== */}
      <section id="faq" className="bg-[#F5F3EE] py-24 md:py-32 px-6">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">FAQ</p>
            <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight mb-10 text-[#1A1A18]">よくあるご質問</h2>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <FAQ items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA (dark #1A1A1A) ===== */}
      <section className="bg-[#1A1A1A] text-white py-24 md:py-32 px-6 relative overflow-hidden">
        {/* Orb decoration */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#2D6A4F] opacity-[0.06] blur-[120px]" />

        <div className="relative z-10 max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <div className="h-px w-12 mx-auto mb-8" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
            <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight mb-4">
              まずは話を聞かせてください。
            </h2>
            <p className="text-white/50 text-[15px] md:text-[16px] leading-[2] mb-8">
              オンラインで御社の業務課題をお聞きし、最適な施策をその場でお伝えします。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--gold)] text-[#1A1A1A] px-10 py-4 rounded-lg text-[16px] font-bold hover:opacity-90 transition-opacity min-h-[52px]">
              無料で相談する
            </Link>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-white/40 text-[13px]">
              <span>相談無料</span>
              <span>営業電話なし</span>
              <span>契約の義務なし</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#1A1A1A] border-t border-white/[0.06] py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="h-px w-full mb-10" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
            <div>
              <p className="text-[15px] font-bold mb-1 text-white">FOMUS Creative Studio</p>
              <p className="text-[13px] text-white/40">合同会社FOMUS</p>
            </div>
            <div className="flex flex-wrap gap-6 text-[14px] text-white/50">
              <Link href="/services" className="hover:text-white transition-colors py-1">サービス</Link>
              <Link href="/work" className="hover:text-white transition-colors py-1">実績</Link>
              <Link href="/company" className="hover:text-white transition-colors py-1">会社概要</Link>
              <Link href="/contact" className="hover:text-white transition-colors py-1">お問い合わせ</Link>
              <Link href="/privacy" className="hover:text-white transition-colors py-1">プライバシーポリシー</Link>
            </div>
          </div>
          <p className="text-[13px] text-white/30">&copy; 2026 合同会社FOMUS</p>
        </div>
      </footer>

      <MobileCTABar />
    </div>
  )
}

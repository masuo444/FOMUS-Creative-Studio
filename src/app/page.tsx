import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FAQ from '@/components/ui/FAQ'
import MobileMenu from '@/components/ui/MobileMenu'
import MobileCTABar from '@/components/ui/MobileCTABar'

const services = [
  { title: 'AI導入支援', desc: '業務自動化・チャットボット・データ分析の設計と実装。', href: '/services#ai' },
  { title: 'Web制作・リニューアル', desc: 'コーポレートサイト・LP・予約システムの構築。', href: '/services#web' },
  { title: 'DXコンサルティング', desc: '業務フロー分析から投資対効果の高い施策を特定。', href: '/services#dx' },
  { title: '漫画・クリエイティブ制作', desc: '採用漫画・企業PR・ロゴ・動画のデザイン。', href: '/services#creative' },
  { title: '請求書・決済システム', desc: 'インボイス対応の請求書自動発行・Stripe連携。', href: '/services#invoice' },
  { title: '保守・運用サポート', desc: '月額保守で継続改善。障害対応・月次レポート付き。', href: '/services#maintenance' },
]

const projects = [
  { title: '宿泊施設のサイト刷新で予約数+180%', desc: '老朽化した予約導線を再設計し、UI・コピー・ページ構成を全面改修。公開3ヶ月で直接予約数が2.8倍に増加。', metric: '+180%', metricLabel: '予約数', category: 'Web制作', image: '/images/work-web.png' },
  { title: '9言語対応AIチャットボットで対応工数-80%', desc: 'インバウンド対応に追われていた現場の負荷を、多言語AIチャットボットで自動化。月間1,200件を人手なしで処理。', metric: '-80%', metricLabel: '対応工数', category: 'AI導入', image: '/images/demo-desktop.png' },
  { title: '採用漫画の導入で応募数が3倍に', desc: 'テキスト主体だった採用ページに漫画コンテンツを追加。求職者の滞在時間が4.2倍に伸び、エントリー数が3倍に。', metric: '×3', metricLabel: '応募数', category: '漫画制作', image: '/images/work-manga.png' },
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

const trustBadges = [
  { num: '80%', label: '問い合わせ対応の自動化率' },
  { num: '180%', label: '予約数の増加実績' },
  { num: '3倍', label: '採用応募数の増加' },
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
            <Link href="/services" className="text-[14px] text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">サービス</Link>
            <Link href="/work" className="text-[14px] text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">実績</Link>
            <Link href="/company" className="text-[14px] text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">会社概要</Link>
            <a href="#faq" className="text-[14px] text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">FAQ</a>
            <Link href="/contact" className="text-[14px] bg-[var(--gold)] text-[var(--bg-dark)] px-6 py-2.5 rounded-lg font-bold hover:opacity-90 transition-opacity">
              無料で相談する
            </Link>
          </div>
          <MobileMenu />
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-[14px] md:text-[15px] font-medium tracking-wide mb-5">
              中小企業専門 / AI・Web・クリエイティブの一括支援
            </p>
            <h1 className="text-[clamp(28px,5.5vw,56px)] font-bold leading-[1.3] tracking-tight mb-5">
              「売上を上げたい」
              <br className="hidden md:block" />
              「人手が足りない」——
              <br />
              その課題、
              <span className="font-[family-name:var(--font-serif)] italic text-[var(--gold)]"> 仕組み </span>
              で解決します。
            </h1>
            <p className="text-[16px] md:text-[17px] text-[var(--text-sub)] leading-[2] max-w-[620px] mb-8">
              AI導入・Web制作・漫画制作。ヒアリングから実装・運用定着まで、代表が直接対応します。中間マージンなし。
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--gold)] text-[var(--bg-dark)] px-8 py-4 rounded-lg text-[16px] font-bold hover:opacity-90 transition-opacity min-h-[52px]">
                無料で相談する（30分・オンライン）
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center border-2 border-[var(--border)] text-[var(--text)] px-8 py-4 rounded-lg text-[15px] font-medium hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors min-h-[52px]">
                サービスを見る
              </Link>
            </div>
            <p className="text-[13px] md:text-[14px] text-[var(--text-muted)] mt-3">
              相談無料 / 営業電話なし / 契約の義務なし
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TRUST NUMBERS ===== */}
      <ScrollReveal>
        <div className="mx-6 max-w-[1100px] md:mx-auto mb-8">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {trustBadges.map((b) => (
              <div key={b.label} className="text-center py-6 md:py-8 rounded-xl bg-[var(--bg-alt)]">
                <p className="text-[clamp(24px,4vw,40px)] font-bold text-[var(--gold)] leading-none mb-2">{b.num}</p>
                <p className="text-[12px] md:text-[13px] text-[var(--text-muted)]">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ===== HERO IMAGE ===== */}
      <ScrollReveal>
        <div className="mx-6 max-w-[1100px] md:mx-auto">
          <div className="relative w-full aspect-[2.2/1] rounded-2xl overflow-hidden bg-[var(--bg-dark)]">
            <img src="/images/hero-laptop.png" alt="FOMUS Creative Studio" className="w-full h-full object-cover opacity-90" />
          </div>
        </div>
      </ScrollReveal>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-24 md:py-32 px-6">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <div className="gold-line w-12 mb-6" />
            <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight mb-3">対応領域</h2>
            <p className="text-[15px] md:text-[16px] text-[var(--text-sub)] mb-14">
              御社の課題に応じて、最適な施策を組み合わせて提案します。
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 60}>
                <Link href={s.href} className="block h-full">
                  <div className="lux-card rounded-xl p-7 h-full">
                    <h3 className="text-[17px] font-bold mb-3">{s.title}</h3>
                    <p className="text-[14px] text-[var(--text-sub)] leading-[1.9] mb-4">{s.desc}</p>
                    <span className="text-[13px] text-[var(--gold)] font-medium">詳しく見る →</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={200}>
            <div className="text-center mt-12">
              <Link href="/services" className="inline-flex items-center text-[15px] text-[var(--gold)] font-medium hover:opacity-80 transition-opacity">
                全サービスの詳細を見る →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== MID-PAGE CTA ===== */}
      <section className="bg-[var(--bg-alt)] py-14 md:py-16 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-[18px] md:text-[22px] font-bold tracking-tight mb-4">
              「うちの場合、何から始めればいい？」
            </p>
            <p className="text-[14px] md:text-[15px] text-[var(--text-sub)] mb-6">
              30分のオンライン面談で、御社に最適な施策の全体像をお伝えします。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--gold)] text-[var(--bg-dark)] px-8 py-4 rounded-lg text-[15px] font-bold hover:opacity-90 transition-opacity min-h-[52px]">
              無料で相談する
            </Link>
            <p className="text-[13px] text-[var(--text-muted)] mt-3">契約の義務なし / 1営業日以内にご返信</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WORK ===== */}
      <section id="work" className="bg-[var(--bg-dark)] text-white py-24 md:py-32 px-6">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <div className="h-px w-12 mb-6" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
            <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight mb-3">導入実績</h2>
            <p className="text-white/50 text-[15px] md:text-[16px] mb-14">業種を問わず、業務課題に対して具体的な成果を出しています。</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/8 hover:border-white/15 transition-all duration-500 h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <p className="text-[var(--gold)] text-[12px] font-medium tracking-wide mb-1">{p.category}</p>
                      <p className="text-[36px] font-bold leading-none tracking-tight text-white">{p.metric}</p>
                      <p className="text-white/50 text-[12px] mt-1">{p.metricLabel}</p>
                    </div>
                  </div>
                  <div className="px-5 py-5 flex-1">
                    <h3 className="text-[15px] font-bold leading-[1.5] mb-2">{p.title}</h3>
                    <p className="text-white/50 text-[14px] leading-[1.8]">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={200}>
            <div className="text-center mt-10">
              <Link href="/work" className="inline-flex items-center text-[15px] text-[var(--gold)] font-medium hover:opacity-80 transition-opacity">
                全ての実績を詳しく見る →
              </Link>
            </div>
          </ScrollReveal>
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
            <p className="text-[15px] md:text-[16px] text-[var(--text-sub)] leading-[2.1] mb-5">
              AI活用企業の生産性は未導入企業の最大3倍。問い合わせ対応の80%自動化、レビュー返信の100%即時化、スタッフ採用コストの半減——すでに成果を出している中小企業が増えています。
            </p>
            <p className="text-[15px] md:text-[16px] text-[var(--text-sub)] leading-[2.1] mb-5">
              にもかかわらず、日本の中小企業のAI導入率はわずか5%。理由は明確です。<strong className="text-[var(--text)] text-[16px] md:text-[17px]">「何から始めればいいか分からない」から。</strong>
            </p>
            <p className="text-[15px] md:text-[16px] text-[var(--text-sub)] leading-[2.1]">
              FOMUSは、その最初の一歩から一緒に進めるパートナーです。御社の業務を分析し、投資対効果の高い施策だけを特定。導入後の運用定着まで、一貫してサポートします。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" className="bg-[var(--bg-alt)] py-24 md:py-32 px-6">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <div className="gold-line w-12 mb-6" />
            <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight mb-14">導入までの流れ</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 80}>
                <div className="lux-card rounded-xl p-7 h-full">
                  <span className="text-[var(--gold)] text-[13px] font-bold">STEP {step.num}</span>
                  <h3 className="text-[18px] font-bold mt-3 mb-4">{step.title}</h3>
                  <p className="text-[14px] md:text-[15px] text-[var(--text-sub)] leading-[1.9] mb-5">{step.desc}</p>
                  <p className="text-[13px] text-[var(--gold)] font-medium bg-[var(--gold-light)] inline-block px-3 py-1 rounded-full">{step.note}</p>
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
                <img src="/images/founder.jpg" alt="増尾 圭亮" className="aspect-[3/4] rounded-2xl object-cover w-full" />
              </ScrollReveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ScrollReveal delay={60}>
                <div className="gold-line w-12 mb-6" />
                <p className="text-[var(--gold)] text-[13px] font-medium mb-3">代表</p>
                <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight mb-6">増尾 圭亮</h2>
                <p className="text-[15px] md:text-[16px] text-[var(--text-sub)] leading-[2.1]">
                  合同会社FOMUS代表。AI開発、Web制作、漫画制作までを一人で設計・実装する技術者です。大規模な開発チームではなく、意思決定者が直接手を動かすことで、伝言コスト・管理コストを排除します。
                </p>
                <p className="text-[15px] md:text-[16px] text-[var(--text-sub)] leading-[2.1] mt-4 mb-6">
                  <strong className="text-[var(--text)]">信条は「不要なものは売らない」。</strong>御社に必要ない施策は、聞かれても断ります。
                </p>
                <Link href="/company" className="inline-flex items-center text-[15px] text-[var(--gold)] font-medium hover:opacity-80 transition-opacity">
                  会社概要を見る →
                </Link>
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
            <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight mb-10">よくあるご質問</h2>
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
            <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight mb-4">
              まず30分、現状を整理しませんか。
            </h2>
            <p className="text-white/50 text-[15px] md:text-[16px] leading-[2] mb-8">
              オンラインで御社の業務課題をお聞きし、対応可能な施策と概算をその場でお伝えします。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--gold)] text-[var(--bg-dark)] px-10 py-4 rounded-lg text-[16px] font-bold hover:opacity-90 transition-opacity min-h-[52px]">
              無料で相談する
            </Link>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-white/40 text-[13px]">
              <span>相談無料</span>
              <span>営業電話なし</span>
              <span>契約の義務なし</span>
              <span>1営業日以内に返信</span>
            </div>
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
            <div className="flex flex-wrap gap-6 text-[14px] text-[var(--text-sub)]">
              <Link href="/services" className="hover:text-[var(--text)] transition-colors py-1">サービス</Link>
              <Link href="/work" className="hover:text-[var(--text)] transition-colors py-1">実績</Link>
              <Link href="/company" className="hover:text-[var(--text)] transition-colors py-1">会社概要</Link>
              <Link href="/contact" className="hover:text-[var(--text)] transition-colors py-1">お問い合わせ</Link>
              <Link href="/privacy" className="hover:text-[var(--text)] transition-colors py-1">プライバシーポリシー</Link>
            </div>
          </div>
          <p className="text-[13px] text-[var(--text-muted)]">&copy; 2026 合同会社FOMUS</p>
        </div>
      </footer>

      <MobileCTABar />
    </div>
  )
}

import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FAQ from '@/components/ui/FAQ'

const projects = [
  {
    label: 'Web Renewal',
    title: '宿泊予約数を180%にしたサイト刷新',
    tags: ['Web制作', 'UI/UX', 'レスポンシブ'],
    color: '#1a3a2a',
    metric: '+180%',
    metricLabel: '予約数',
  },
  {
    label: 'AI Chatbot',
    title: '9言語対応AIで夜間対応を自動化',
    tags: ['AI導入', 'LINE', '多言語'],
    color: '#1a1a3a',
    metric: '-80%',
    metricLabel: '対応工数',
  },
  {
    label: 'Manga',
    title: '採用漫画で応募数を3倍に',
    tags: ['漫画制作', '採用ブランディング', 'SNS'],
    color: '#3a1a1a',
    metric: '×3',
    metricLabel: '応募数',
  },
]

const faqItems = [
  { q: 'ITやAIの知識がまったくなくても大丈夫ですか？', a: 'はい。むしろそういう方のためのサービスです。「何をすればいいか分からない」という状態から、課題を整理し、最適な仕組みを構築します。' },
  { q: '相談だけでも構いませんか？', a: 'もちろんです。お話を聞いた上で、必要なければ無理にご提案しません。' },
  { q: 'どのような業種に対応していますか？', a: '業種は問いません。飲食、宿泊、美容、医療、小売、不動産、士業、自治体など。大切なのは「何に困っているか」です。' },
  { q: '費用感を教えてください。', a: 'Web制作は7万円〜、AI導入は月額5万円〜、漫画制作は1話9.8万円〜が目安です。ヒアリング後に必要な範囲だけお見積もりします。' },
  { q: '導入にはどのくらいかかりますか？', a: 'ヒアリングから最短1週間で動くプロトタイプをお見せします。' },
]

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ===== NAV ===== */}
      <nav className="fixed w-full z-50 top-0">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 flex items-center justify-between h-20">
          <Link href="/" className="text-[13px] tracking-[0.2em] font-medium">
            FOMUS
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {['Approach', 'Work', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="link-slide text-[11px] tracking-[0.15em] text-[var(--text-sub)] hover:text-[var(--text)] transition-colors"
              >
                {item}
              </a>
            ))}
            <Link
              href="/auth/register"
              className="text-[11px] tracking-[0.1em] bg-[var(--text)] text-[var(--bg)] px-6 py-2.5 rounded-full hover:opacity-80 transition-opacity"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="pt-40 pb-24 md:pt-52 md:pb-32 px-8 md:px-16 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <h1 className="text-[clamp(40px,8vw,120px)] leading-[1] tracking-[-0.03em] font-light">
            あなたの
            <span className="font-[family-name:var(--font-serif)] italic">困った</span>
            を、
            <br />
            仕組みで解決する。
          </h1>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-12 mt-16 gap-8">
          <div className="md:col-span-5 md:col-start-8">
            <ScrollReveal delay={120}>
              <p className="text-[15px] text-[var(--text-sub)] leading-[2] font-light">
                AI、Web制作、クリエイティブ。
                課題をヒアリングして、あなたの会社に合った仕組みを構築します。
              </p>
              <div className="mt-8">
                <Link
                  href="/auth/register"
                  className="group inline-flex items-center gap-3 text-[13px] tracking-[0.05em]"
                >
                  <span className="bg-[var(--text)] text-[var(--bg)] w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    →
                  </span>
                  <span className="link-slide">無料相談をする</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FULL IMAGE ===== */}
      <ScrollReveal>
        <div className="mx-8 md:mx-16 rounded-lg overflow-hidden">
          <div className="img-ph w-full aspect-[21/9]" />
        </div>
      </ScrollReveal>

      {/* ===== PHILOSOPHY ===== */}
      <section className="py-32 md:py-48 px-8 md:px-16 max-w-[1400px] mx-auto">
        <div className="max-w-[800px]">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono-space)] text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase mb-10">
              Philosophy
            </p>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <p className="text-[clamp(22px,3.5vw,40px)] leading-[1.7] font-light tracking-[-0.01em]">
              多くの中小企業は、<span className="font-[family-name:var(--font-serif)] italic">何から始めればいいか分からない</span>という壁にぶつかっています。
              私たちは、その壁を一緒に越えるところから始めます。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== APPROACH ===== */}
      <section id="approach" className="border-t border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">

          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 py-24 md:py-32 items-center border-b border-[var(--border)]">
            <ScrollReveal>
              <p className="font-[family-name:var(--font-mono-space)] text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase mb-6">01</p>
              <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.2] font-light tracking-[-0.02em] mb-6">
                話を、
                <span className="font-[family-name:var(--font-serif)] italic">聞く。</span>
              </h2>
              <p className="text-[15px] text-[var(--text-sub)] leading-[2] font-light max-w-[440px]">
                何に時間がかかっているか。何を変えたいか。
                30分のオンラインミーティングで、課題を整理します。
              </p>
              <p className="font-[family-name:var(--font-mono-space)] text-[10px] tracking-[0.2em] text-[var(--text-muted)] mt-6">無料・オンライン</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="img-ph aspect-[4/3] rounded-lg" />
            </ScrollReveal>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 py-24 md:py-32 items-center border-b border-[var(--border)]">
            <ScrollReveal className="md:order-2">
              <p className="font-[family-name:var(--font-mono-space)] text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase mb-6">02</p>
              <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.2] font-light tracking-[-0.02em] mb-6">
                1週間で、
                <span className="font-[family-name:var(--font-serif)] italic">つくる。</span>
              </h2>
              <p className="text-[15px] text-[var(--text-sub)] leading-[2] font-light max-w-[440px]">
                課題に合わせた仕組みを構築し、動くプロトタイプをお見せします。
                触って、効果を感じてから判断してください。
              </p>
              <p className="font-[family-name:var(--font-mono-space)] text-[10px] tracking-[0.2em] text-[var(--text-muted)] mt-6">最短1週間</p>
            </ScrollReveal>
            <ScrollReveal delay={100} className="md:order-1">
              <div className="img-ph aspect-[4/3] rounded-lg" />
            </ScrollReveal>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 py-24 md:py-32 items-center">
            <ScrollReveal>
              <p className="font-[family-name:var(--font-mono-space)] text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase mb-6">03</p>
              <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.2] font-light tracking-[-0.02em] mb-6">
                導入して、
                <span className="font-[family-name:var(--font-serif)] italic">育てる。</span>
              </h2>
              <p className="text-[15px] text-[var(--text-sub)] leading-[2] font-light max-w-[440px]">
                本番導入後も月額保守で継続改善。
                使うほど、あなたの業務に最適化されていきます。
              </p>
              <p className="font-[family-name:var(--font-mono-space)] text-[10px] tracking-[0.2em] text-[var(--text-muted)] mt-6">月額保守</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="img-ph aspect-[4/3] rounded-lg" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== WORK ===== */}
      <section id="work" className="py-32 md:py-48 px-8 md:px-16 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="font-[family-name:var(--font-mono-space)] text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase mb-4">Selected Work</p>
              <h2 className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-light tracking-[-0.02em]">実績</h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.label} delay={i * 100}>
              <div className="project-card cursor-pointer">
                <div
                  className="aspect-[4/5] rounded-lg mb-5 flex flex-col justify-end p-8"
                  style={{ background: project.color }}
                >
                  <span className="text-white/40 font-[family-name:var(--font-mono-space)] text-[10px] tracking-[0.2em] uppercase mb-2">
                    {project.metricLabel}
                  </span>
                  <span className="text-white font-light text-[clamp(48px,6vw,72px)] leading-none tracking-tight">
                    {project.metric}
                  </span>
                </div>
                <p className="font-[family-name:var(--font-mono-space)] text-[10px] tracking-[0.2em] text-[var(--text-muted)] uppercase mb-2">
                  {project.label}
                </p>
                <h3 className="text-[17px] font-normal leading-[1.5] mb-3">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-[var(--text-muted)] border border-[var(--border)] px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="border-t border-[var(--border)] py-32 md:py-48 px-8 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-5">
            <ScrollReveal>
              <div className="img-ph aspect-[3/4] rounded-lg" />
            </ScrollReveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <ScrollReveal delay={80}>
              <p className="font-[family-name:var(--font-mono-space)] text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase mb-8">Founder</p>
              <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.2] font-light tracking-[-0.02em] mb-8">
                増尾 圭亮
              </h2>
              <p className="text-[15px] text-[var(--text-sub)] leading-[2.2] font-light mb-4">
                「やりたいことはあるけど、どう形にすればいいか分からない」
              </p>
              <p className="text-[15px] text-[var(--text-sub)] leading-[2.2] font-light">
                そういう相談を、毎日受けています。
                AIもWebも漫画も、全部自分で作れます。
                だから、本当に必要なものだけを提案できます。
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="border-t border-[var(--border)] py-32 md:py-48 px-8 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <ScrollReveal>
              <p className="font-[family-name:var(--font-mono-space)] text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase mb-4">FAQ</p>
              <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.2] font-light tracking-[-0.02em]">
                よくある
                <br />ご質問
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
      <section className="bg-[var(--text)] text-[var(--bg)] py-32 md:py-48">
        <div className="max-w-[800px] mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <h2 className="text-[clamp(32px,6vw,64px)] leading-[1.15] font-light tracking-[-0.02em] mb-8">
              まずは、
              <span className="font-[family-name:var(--font-serif)] italic">話を聞かせて</span>
              ください。
            </h2>
            <p className="text-[var(--bg)]/50 text-[15px] leading-[2] font-light mb-12">
              30分のオンラインミーティングで、必要な仕組みが見えてきます。
            </p>
            <Link
              href="/auth/register"
              className="inline-block bg-[var(--bg)] text-[var(--text)] px-10 py-4 rounded-full text-[13px] tracking-[0.05em] font-medium hover:opacity-90 transition-opacity"
            >
              無料相談を予約する
            </Link>
            <p className="text-[var(--bg)]/25 text-[11px] mt-6">
              営業は一切しません
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-20 px-8 md:px-16 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          <div>
            <p className="text-[13px] tracking-[0.2em] font-medium mb-1">FOMUS</p>
            <p className="text-[11px] text-[var(--text-muted)]">Creative Studio</p>
          </div>
          <div className="flex gap-16 text-[11px] text-[var(--text-sub)]">
            <div className="space-y-4">
              <a href="#approach" className="block link-slide hover:text-[var(--text)] transition-colors">Approach</a>
              <a href="#work" className="block link-slide hover:text-[var(--text)] transition-colors">Work</a>
              <a href="#faq" className="block link-slide hover:text-[var(--text)] transition-colors">FAQ</a>
            </div>
            <div className="space-y-4">
              <Link href="/auth/register" className="block link-slide hover:text-[var(--text)] transition-colors">Contact</Link>
              <Link href="/auth/login" className="block link-slide hover:text-[var(--text)] transition-colors">Login</Link>
            </div>
          </div>
        </div>
        <div className="divider mb-8" />
        <div className="flex flex-col md:flex-row justify-between gap-4 text-[11px] text-[var(--text-muted)]">
          <p>&copy; 2026 合同会社FOMUS</p>
          <p>東京 · 京都 · Dubai</p>
        </div>
      </footer>
    </div>
  )
}

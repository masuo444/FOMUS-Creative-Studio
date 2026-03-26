import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FAQ from '@/components/ui/FAQ'

const faqItems = [
  { q: 'ITやAIの知識がまったくないのですが、大丈夫ですか？', a: 'はい、むしろそういう方のためのサービスです。「何をすればいいか分からない」という状態から、ヒアリングで課題を整理し、最適な仕組みをこちらで構築します。' },
  { q: '相談だけでも大丈夫ですか？', a: 'もちろんです。「今のうちの状況でAIって使えるの？」というレベルのご相談で構いません。お話を聞いた上で、必要なければ無理におすすめしません。' },
  { q: 'どんな業種に対応していますか？', a: '業種は問いません。飲食、宿泊、美容、医療、小売、不動産、士業、自治体など、幅広く対応しています。大切なのは業種ではなく「何に困っているか」です。' },
  { q: '費用はどのくらいですか？', a: '内容によります。Web制作は7万円〜、AI導入は月額5万円〜、漫画制作は1話9.8万円〜が目安です。ヒアリングの上で、必要な範囲だけお見積もりします。' },
  { q: '導入までどのくらいかかりますか？', a: 'ヒアリングから最短1週間でプロトタイプをお見せします。動くものを見てから判断していただけます。' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">

      {/* NAV */}
      <nav className="fixed w-full z-50 mix-blend-difference">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between h-20">
          <Link href="/" className="text-white text-sm tracking-[0.15em] font-medium">
            FOMUS
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <a href="#approach" className="text-white/60 text-[11px] tracking-[0.15em] hover:text-white transition-colors">Approach</a>
            <a href="#work" className="text-white/60 text-[11px] tracking-[0.15em] hover:text-white transition-colors">Work</a>
            <a href="#faq" className="text-white/60 text-[11px] tracking-[0.15em] hover:text-white transition-colors">FAQ</a>
            <Link href="/auth/register" className="text-white text-[11px] tracking-[0.15em] border border-white/30 px-5 py-2 hover:bg-white hover:text-black transition-all">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* ======================================== */}
      {/* HERO                                     */}
      {/* ======================================== */}
      <section className="min-h-screen flex items-end pb-20 md:pb-28 pt-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase mb-8">
              Creative Studio — Est. 2024
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h1 className="text-[clamp(36px,7vw,88px)] leading-[1.05] tracking-tight font-light mb-8">
              あなたの「困った」を、
              <br />
              <span className="font-[family-name:var(--font-serif)] italic text-[var(--accent)]">仕組み</span>
              で解決する。
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="text-[var(--text-sub)] text-base md:text-lg leading-[2] max-w-[520px] font-light mb-12">
              課題をヒアリングして、AI・Web・クリエイティブの中から、
              あなたの会社に合った仕組みを構築します。
            </p>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <Link
              href="/auth/register"
              className="group inline-flex items-center gap-4 text-sm"
            >
              <span className="border-b border-[var(--text)] pb-0.5 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-colors">
                無料相談をする
              </span>
              <span className="text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all">
                →
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Full-width image */}
      <ScrollReveal>
        <div className="img-ph w-full h-[50vw] max-h-[600px]" />
      </ScrollReveal>

      {/* ======================================== */}
      {/* INTRO                                    */}
      {/* ======================================== */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="max-w-[720px] mx-auto">
            <ScrollReveal>
              <p className="font-[family-name:var(--font-serif)] italic text-[clamp(24px,4vw,44px)] leading-[1.6] text-[var(--text)] font-normal">
                &ldquo;AIが便利らしいけど、うちには関係ない&rdquo;
                <br />
                &ldquo;ホームページ、古いまま放置してしまっている&rdquo;
                <br />
                &ldquo;ITに詳しい人が社内にいない&rdquo;
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-[var(--text-sub)] text-base leading-[2.2] font-light mt-12">
                よく聞く話です。そして、それは御社だけではありません。
                <br />
                中小企業の95%が、同じ悩みを抱えています。
              </p>
              <p className="text-[var(--text)] text-base leading-[2.2] font-normal mt-6">
                私たちは、その悩みを一緒に整理するところから始めます。
                <br />
                売り込みではなく、対話から。
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/* APPROACH                                 */}
      {/* ======================================== */}
      <section id="approach">
        {/* Step 1 */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5">
              <ScrollReveal>
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase mb-4">01 — Hearing</p>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-[1.4] mb-6">
                  まず、話を
                  <span className="font-[family-name:var(--font-serif)] italic">聞かせて</span>
                  ください。
                </h2>
                <p className="text-[var(--text-sub)] text-[15px] leading-[2.2] font-light">
                  何に時間がかかっているのか。何がストレスなのか。何を変えたいのか。30分のオンラインミーティングで、御社の課題を整理します。
                </p>
              </ScrollReveal>
            </div>
            <div className="md:col-span-7">
              <ScrollReveal delay={100}>
                <div className="img-ph rounded-sm aspect-[16/10]" />
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="hr-label">Process</div>
        </div>

        {/* Step 2 */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7 md:order-1">
              <ScrollReveal>
                <div className="img-ph rounded-sm aspect-[16/10]" />
              </ScrollReveal>
            </div>
            <div className="md:col-span-5 md:order-2">
              <ScrollReveal delay={100}>
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase mb-4">02 — Prototype</p>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-[1.4] mb-6">
                  1週間で、
                  <span className="font-[family-name:var(--font-serif)] italic">動くもの</span>
                  を。
                </h2>
                <p className="text-[var(--text-sub)] text-[15px] leading-[2.2] font-light">
                  課題に合わせた仕組みを構築し、実際に動くプロトタイプをお見せします。触ってみて、効果を感じてから導入を判断してください。
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="hr-label">Process</div>
        </div>

        {/* Step 3 */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5">
              <ScrollReveal>
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase mb-4">03 — Launch & Grow</p>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-[1.4] mb-6">
                  導入して、
                  <span className="font-[family-name:var(--font-serif)] italic">育てる。</span>
                </h2>
                <p className="text-[var(--text-sub)] text-[15px] leading-[2.2] font-light">
                  本番導入後も月額保守で継続改善。使えば使うほど、あなたの業務に最適化されていきます。
                </p>
              </ScrollReveal>
            </div>
            <div className="md:col-span-7">
              <ScrollReveal delay={100}>
                <div className="img-ph rounded-sm aspect-[16/10]" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/* WORK                                     */}
      {/* ======================================== */}
      <section id="work" className="bg-[var(--text)] text-white py-24 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-white/40 uppercase mb-4">Selected Work</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-20">実績</h2>
          </ScrollReveal>

          {/* Project 1 */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <div className="bg-white/5 aspect-[4/3] rounded-sm" />
              <div className="flex flex-col justify-center">
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-white/30 uppercase mb-3">Web Renewal</p>
                <h3 className="text-xl font-light mb-3">旅館サイトのフルリニューアル</h3>
                <p className="text-white/50 text-sm leading-[2] font-light">
                  老舗旅館の公式サイトを3日間で刷新。スマホ対応・多言語対応・予約導線の最適化を実施。リニューアル後、予約数が1.8倍に。
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Project 2 */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <div className="flex flex-col justify-center md:order-2">
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-white/30 uppercase mb-3">AI Chatbot</p>
                <h3 className="text-xl font-light mb-3">LINE多言語AIコンシェルジュ</h3>
                <p className="text-white/50 text-sm leading-[2] font-light">
                  外国人ゲストからのLINE問い合わせにAIが9言語で自動応答。深夜帯の対応を完全自動化し、スタッフの負担を80%削減。
                </p>
              </div>
              <div className="bg-white/5 aspect-[4/3] rounded-sm md:order-1" />
            </div>
          </ScrollReveal>

          {/* Project 3 */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 aspect-[4/3] rounded-sm" />
              <div className="flex flex-col justify-center">
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-white/30 uppercase mb-3">Manga Production</p>
                <h3 className="text-xl font-light mb-3">採用漫画で応募数3倍</h3>
                <p className="text-white/50 text-sm leading-[2] font-light">
                  「会社の雰囲気が伝わらない」という課題に対し、社員インタビューを元にした採用漫画を制作。SNSでの拡散もあり、応募数が前年比3倍に。
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======================================== */}
      {/* FOUNDER                                  */}
      {/* ======================================== */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start">
            <div className="md:col-span-4">
              <ScrollReveal>
                <div className="img-ph aspect-[3/4] rounded-sm" />
              </ScrollReveal>
            </div>
            <div className="md:col-span-7 md:col-start-6 md:pt-12">
              <ScrollReveal delay={80}>
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase mb-6">Founder</p>
                <h2 className="text-3xl font-light tracking-tight mb-1">増尾 圭亮</h2>
                <p className="text-sm text-[var(--text-muted)] mb-8">合同会社FOMUS 代表</p>
                <p className="text-[var(--text-sub)] text-[15px] leading-[2.2] font-light mb-8">
                  「やりたいことはあるけど、どう形にすればいいか分からない」
                  <br />
                  そういう相談を、毎日受けています。
                </p>
                <p className="text-[var(--text-sub)] text-[15px] leading-[2.2] font-light">
                  AIもWebも漫画も、全部自分で作れます。
                  <br />
                  だから、御社に本当に必要なものだけを提案できます。
                  <br />
                  不要なものは売りません。
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/* FAQ                                      */}
      {/* ======================================== */}
      <section id="faq" className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <ScrollReveal>
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase mb-4">FAQ</p>
                <h2 className="text-3xl font-light tracking-tight">
                  よくある
                  <br />
                  ご質問
                </h2>
              </ScrollReveal>
            </div>
            <div className="md:col-span-8">
              <ScrollReveal delay={80}>
                <FAQ items={faqItems} />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/* CTA                                      */}
      {/* ======================================== */}
      <section className="border-t border-[var(--border)] py-24 md:py-36">
        <div className="max-w-[720px] mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <h2 className="text-[clamp(28px,5vw,52px)] font-light tracking-tight leading-[1.3] mb-6">
              まずは、
              <span className="font-[family-name:var(--font-serif)] italic">話を聞かせて</span>
              ください。
            </h2>
            <p className="text-[var(--text-sub)] text-[15px] leading-[2.2] font-light mb-12">
              「こんなこと相談していいのかな」で大丈夫です。
              <br />
              30分のオンラインミーティングで、必要な仕組みが見えてきます。
            </p>
            <Link
              href="/auth/register"
              className="inline-block bg-[var(--text)] text-[var(--bg)] px-10 py-4 text-sm tracking-wide hover:bg-[var(--accent)] transition-colors duration-300"
            >
              無料相談を予約する
            </Link>
            <p className="text-xs text-[var(--text-muted)] mt-4">
              営業は一切しません
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ======================================== */}
      {/* FOOTER                                   */}
      {/* ======================================== */}
      <footer className="border-t border-[var(--border)] py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
            <div>
              <p className="text-sm tracking-[0.15em] font-medium mb-2">FOMUS</p>
              <p className="text-[11px] text-[var(--text-muted)]">Creative Studio</p>
            </div>
            <div className="flex gap-12 text-[11px] text-[var(--text-sub)]">
              <div className="space-y-3">
                <a href="#approach" className="block hover:text-[var(--text)] transition-colors">Approach</a>
                <a href="#work" className="block hover:text-[var(--text)] transition-colors">Work</a>
                <a href="#faq" className="block hover:text-[var(--text)] transition-colors">FAQ</a>
              </div>
              <div className="space-y-3">
                <Link href="/auth/register" className="block hover:text-[var(--text)] transition-colors">Contact</Link>
                <Link href="/auth/login" className="block hover:text-[var(--text)] transition-colors">Login</Link>
                <Link href="/dashboard" className="block hover:text-[var(--text)] transition-colors">Dashboard</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-[var(--border)] text-[11px] text-[var(--text-muted)]">
            <p>&copy; 2026 合同会社FOMUS</p>
            <p>伝統工芸 × テクノロジー × コミュニティ</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

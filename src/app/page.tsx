import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FAQ from '@/components/ui/FAQ'

const painPoints = [
  {
    text: '「AIが便利らしいけど、うちには関係ないかな」',
    detail: '実は、日々の業務の30%はAIで自動化できます。',
  },
  {
    text: '「ホームページが古いまま放置してしまっている」',
    detail: '見た目だけで、お客様の50%が離脱しています。',
  },
  {
    text: '「外国語の問い合わせが来ても、対応できない」',
    detail: 'インバウンド客の取りこぼしが毎月起きています。',
  },
  {
    text: '「口コミの返信、いつかやろうと思ってもう半年」',
    detail: '放置された口コミは、新規客が一番最初に見る場所です。',
  },
  {
    text: '「採用が全然うまくいかない」',
    detail: '応募者は、会社の"人柄"が見えないと応募しません。',
  },
  {
    text: '「ITに詳しい人が社内にいない」',
    detail: 'だからこそ、外に"ITが分かるパートナー"が必要です。',
  },
]

const portfolio = [
  { label: 'Web Renewal', desc: '旅館サイトのリニューアル — 予約数1.8倍', img: 'PORTFOLIO 01' },
  { label: 'AI Chatbot', desc: 'LINE多言語チャット導入 — 夜間対応を完全自動化', img: 'PORTFOLIO 02' },
  { label: 'Manga', desc: '採用漫画制作 — 応募数が前年比3倍', img: 'PORTFOLIO 03' },
]

const faqItems = [
  { q: 'ITやAIの知識がまったくないのですが、大丈夫ですか？', a: 'はい、むしろそういう方のためのサービスです。「何をすればいいか分からない」状態から、ヒアリングで課題を整理し、最適な仕組みをこちらで構築します。専門用語は使いません。' },
  { q: '相談だけでも大丈夫ですか？', a: 'もちろんです。「今のうちの状況でAIって使えるの？」というレベルの相談で構いません。お話を聞いた上で、必要なければ無理に提案しません。' },
  { q: 'どんな業種に対応していますか？', a: '旅館・ホテル、飲食店、美容サロン、クリニック、小売、不動産、士業、自治体など、業種を問わず対応します。大切なのは業種ではなく「何に困っているか」です。' },
  { q: '費用感はどれくらいですか？', a: 'ホームページ制作は7万円〜、AI導入は月額5万円〜、漫画制作は1話9.8万円〜が目安です。ヒアリングの上で、御社に必要な範囲だけのお見積もりを出します。' },
  { q: '導入までどれくらいかかりますか？', a: 'ヒアリングから最短1週間でプロトタイプをお見せします。Web制作は最短3日、AI導入は2〜4週間が目安です。' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">

      {/* ========== NAV ========== */}
      <nav className="fixed w-full z-50 bg-[var(--bg)]/90 backdrop-blur-lg border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="font-[family-name:var(--font-display)] text-[20px] tracking-[2px]">
            FOMUS<span className="text-[var(--accent)]">.</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-xs text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">私たちについて</a>
            <a href="#work" className="text-xs text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">実績</a>
            <a href="#faq" className="text-xs text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">よくある質問</a>
            <Link
              href="/auth/register"
              className="text-xs bg-[var(--text)] text-white px-5 py-2.5 rounded-full font-medium hover:bg-[var(--text)]/80 transition-colors"
            >
              無料で相談する
            </Link>
          </div>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <p className="text-[var(--accent)] text-sm font-medium mb-4 font-[family-name:var(--font-space-mono)] tracking-wide">
                  FOMUS Creative Studio
                </p>
                <h1 className="text-4xl md:text-[56px] font-bold leading-[1.15] tracking-tight mb-6 font-[family-name:var(--font-noto-sans-jp)]">
                  あなたの「困った」を、
                  <br />
                  <span className="text-[var(--accent)]">仕組み</span>で解決する。
                </h1>
                <p className="text-[var(--text-sub)] text-base md:text-lg leading-[2] mb-8 font-[family-name:var(--font-noto-sans-jp)] font-light">
                  課題をヒアリングして、あなたの会社に合った
                  <br className="hidden md:block" />
                  AI・Web・クリエイティブの仕組みを構築します。
                </p>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/auth/register"
                    className="inline-flex items-center gap-2 bg-[var(--text)] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[var(--text)]/80 transition-colors"
                  >
                    まずは話を聞かせてください
                    <span>→</span>
                  </Link>
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-4">
                  無料・オンライン・30分で完了。営業は一切しません。
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={200}>
              <div className="img-placeholder rounded-2xl aspect-[4/3] md:aspect-square">
                HERO IMAGE
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== PAIN POINTS ========== */}
      <section className="bg-[var(--bg-warm)] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-[var(--accent)] text-sm font-medium mb-3 font-[family-name:var(--font-space-mono)] tracking-wide">
              CHALLENGES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 font-[family-name:var(--font-noto-sans-jp)]">
              こんなこと、ありませんか？
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {painPoints.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white rounded-xl p-6 border border-[var(--border)] hover:border-[var(--accent)]/20 hover:shadow-sm transition-all h-full">
                  <p className="text-base font-medium leading-relaxed mb-3 font-[family-name:var(--font-noto-sans-jp)]">
                    {item.text}
                  </p>
                  <p className="text-sm text-[var(--text-sub)] leading-relaxed font-[family-name:var(--font-noto-sans-jp)] font-light">
                    {item.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SOLUTION ========== */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="img-placeholder rounded-2xl aspect-[4/3]">
                WORKING IMAGE
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-[var(--accent)] text-sm font-medium mb-3 font-[family-name:var(--font-space-mono)] tracking-wide">
                OUR APPROACH
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-noto-sans-jp)]">
                答えは、あなたの話の中にある。
              </h2>
              <p className="text-[var(--text-sub)] text-base leading-[2] mb-8 font-[family-name:var(--font-noto-sans-jp)] font-light">
                私たちは「これを売りたい」という会社ではありません。
                <br /><br />
                まず、あなたの業務を聞きます。何に時間がかかっているのか、何がストレスなのか、何を変えたいのか。
                <br /><br />
                その上で、AI・Web・クリエイティブの中から最適な「仕組み」を提案し、1週間で動くプロトタイプをお見せします。
                <br /><br />
                <strong>必要なのは、あなたの30分だけです。</strong>
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="bg-[var(--text)] text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-[var(--accent)] text-sm font-medium mb-3 font-[family-name:var(--font-space-mono)] tracking-wide">
              PROCESS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 font-[family-name:var(--font-noto-sans-jp)]">
              進め方
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: '01',
                title: 'ヒアリング',
                desc: '御社の業務と課題を30分〜1時間お聞きします。オンライン対応。「何をすればいいか分からない」で大丈夫です。',
                note: '無料',
              },
              {
                step: '02',
                title: 'プロトタイプ',
                desc: '1週間で動くものをお見せします。実際に触って、効果を実感してから導入を判断してください。',
                note: '1週間',
              },
              {
                step: '03',
                title: '導入・改善',
                desc: '本番導入後も月額保守で継続改善。使えば使うほど、あなたの業務に最適化されていきます。',
                note: '月額保守',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div>
                  <span className="font-[family-name:var(--font-display)] text-[80px] leading-none text-white/5 block">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold mb-3 -mt-4 font-[family-name:var(--font-noto-sans-jp)]">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-[2] mb-4 font-[family-name:var(--font-noto-sans-jp)] font-light">
                    {item.desc}
                  </p>
                  <span className="text-xs text-[var(--accent)] font-[family-name:var(--font-space-mono)] tracking-wide">
                    {item.note}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PORTFOLIO ========== */}
      <section id="work" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-[var(--accent)] text-sm font-medium mb-3 font-[family-name:var(--font-space-mono)] tracking-wide">
              WORKS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 font-[family-name:var(--font-noto-sans-jp)]">
              実績
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 80}>
                <div className="group cursor-pointer">
                  <div className="img-placeholder rounded-xl aspect-[3/2] mb-4 group-hover:scale-[1.02] transition-transform duration-500">
                    {item.img}
                  </div>
                  <p className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[2px] text-[var(--text-muted)] uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium font-[family-name:var(--font-noto-sans-jp)]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="text-center mt-12">
              <Link href="/services" className="text-sm text-[var(--text-sub)] hover:text-[var(--text)] transition-colors border-b border-[var(--border)] pb-0.5">
                サービス詳細を見る →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== FOUNDER ========== */}
      <section className="bg-[var(--bg-warm)] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="img-placeholder rounded-2xl aspect-square max-w-[400px]">
                FOUNDER PHOTO
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-[var(--accent)] text-sm font-medium mb-3 font-[family-name:var(--font-space-mono)] tracking-wide">
                FOUNDER
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-2 font-[family-name:var(--font-noto-sans-jp)]">
                増尾 圭亮
              </h2>
              <p className="text-sm text-[var(--text-muted)] mb-6 font-[family-name:var(--font-space-mono)]">
                合同会社FOMUS 代表 / FOMUS Global Inc. CEO
              </p>
              <p className="text-[var(--text-sub)] text-base leading-[2] mb-6 font-[family-name:var(--font-noto-sans-jp)] font-light">
                元ホテルマン。京都在住。Dubai法人経営。
                <br /><br />
                接客の現場で「人が足りない」「言葉が通じない」を目の当たりにし、テクノロジーで解決する道を選びました。
                <br /><br />
                伝統工芸（枡）の製造販売、AI開発、Web制作、漫画制作。一見バラバラに見えますが、すべて「人の手が届かないところに、仕組みで届ける」という同じ思想で動いています。
              </p>
              <div className="flex flex-wrap gap-2">
                {['元ホテルマン', 'AI実装', 'Dubai法人', '京都在住', '伝統工芸'].map((tag) => (
                  <span key={tag} className="text-xs text-[var(--text-sub)] border border-[var(--border)] px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-[var(--accent)] text-sm font-medium mb-3 font-[family-name:var(--font-space-mono)] tracking-wide">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 font-[family-name:var(--font-noto-sans-jp)]">
              よくあるご質問
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <FAQ items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="bg-[var(--text)] text-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-noto-sans-jp)]">
              まずは、話を聞かせてください。
            </h2>
            <p className="text-white/60 text-base leading-[2] mb-10 font-[family-name:var(--font-noto-sans-jp)] font-light">
              「こんなこと相談していいのかな」で大丈夫です。
              <br />
              30分のヒアリングで、御社に必要な仕組みが見えてきます。
            </p>
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 bg-white text-[var(--text)] px-8 py-4 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
            >
              無料相談を予約する
              <span>→</span>
            </Link>
            <p className="text-xs text-white/30 mt-4">
              無料・オンライン・30分。営業は一切しません。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-16 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
            <div>
              <p className="font-[family-name:var(--font-display)] text-[20px] tracking-[2px] mb-1">
                FOMUS<span className="text-[var(--accent)]">.</span>
              </p>
              <p className="text-xs text-[var(--text-muted)]">Creative Studio</p>
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-xs text-[var(--text-sub)]">
              <a href="#about" className="hover:text-[var(--text)] transition-colors">私たちについて</a>
              <Link href="/auth/login" className="hover:text-[var(--text)] transition-colors">ログイン</Link>
              <a href="#work" className="hover:text-[var(--text)] transition-colors">実績</a>
              <Link href="/dashboard" className="hover:text-[var(--text)] transition-colors">ダッシュボード</Link>
              <a href="#faq" className="hover:text-[var(--text)] transition-colors">よくある質問</a>
              <Link href="/services" className="hover:text-[var(--text)] transition-colors">サービス詳細</Link>
            </div>
          </div>
          <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
            <p>&copy; 2026 合同会社FOMUS / FOMUS Global Inc.</p>
            <p>伝統工芸 × テクノロジー × コミュニティ</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

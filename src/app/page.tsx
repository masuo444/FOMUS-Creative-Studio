import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FAQ from '@/components/ui/FAQ'
import MobileMenu from '@/components/ui/MobileMenu'
import MobileCTABar from '@/components/ui/MobileCTABar'
import FaqSchema from '@/components/seo/FaqSchema'

const services = [
  {
    title: 'AI導入支援', en: 'AI Solutions', href: '/services/ai', image: '/images/hero-ai.jpg',
    desc: '問い合わせ対応・レビュー返信・予約管理をAIで自動化。対応工数-80%。',
    highlights: ['24時間自動応答', '多言語対応', 'レビュー自動返信'],
    metric: '-80%', metricLabel: '対応工数',
  },
  {
    title: 'Web制作', en: 'Web Production', href: '/services/web', image: '/images/work-web-dev.jpg',
    desc: '問い合わせが来るサイトを構築。SEO・予約・決済・多言語まで一社完結。',
    highlights: ['SEO対策込み', '表示速度2秒以内', '予約・EC対応'],
    metric: '+180%', metricLabel: '問い合わせ数',
  },
  {
    title: '漫画制作（FOMUS MANGA STUDIO）', en: 'Manga & Creative', href: 'https://creative-manga.fomusglobal.com', image: '/images/work-manga-studio.jpg',
    desc: '採用・営業・研修・CS、部門の課題に合わせた漫画を制作。MangaXに無料掲載。',
    highlights: ['最短1週間納品', 'MangaX掲載無料', 'コスト1/3'],
    metric: '1/3', metricLabel: 'コスト',
  },
  {
    title: '法人リスキリング', en: 'AI Reskilling', href: '/services/training', image: '/images/work-training.jpg',
    desc: '御社の業務データを題材にした実務特化型AI研修。助成金で実質80%OFF。',
    highlights: ['実質1人4万円〜', '10時間完結', '翌日から即実践'],
    metric: '80%', metricLabel: '実質OFF',
  },
]

const painPoints = [
  { icon: '01', title: '売上が頭打ちになっている', desc: 'Webからの問い合わせがゼロ。口コミ頼みの集客に限界を感じている。競合はネットから新規客を取っているのに、自社だけ取り残されている。', impact: '年間数百万円の機会損失' },
  { icon: '02', title: '人がやらなくていい仕事に追われている', desc: '問い合わせ対応、予約管理、請求書作成、レビュー返信。毎日同じ作業の繰り返しで、経営に集中する時間がない。', impact: '1日3時間 = 年間750時間のロス' },
  { icon: '03', title: '採用しても人が来ない・定着しない', desc: '求人を出しても応募がない。来ても続かない。会社の魅力が求職者に伝わっていない。採用コストだけが膨らむ。', impact: '採用単価50万円 × 離職で二重コスト' },
  { icon: '04', title: 'AI導入が必要なのは分かるが、何をすればいいか分からない', desc: '周りはChatGPTだDXだと言うが、自社にどう関係するのか見えない。相談できる相手もいない。このままでは確実に取り残される。', impact: 'AI導入企業との生産性格差: 最大3倍' },
]

const steps = [
  { num: '01', title: 'ヒアリング', desc: '御社の業務フローと課題をオンラインで伺います。「何をすればいいか分からない」状態でも問題ありません。', note: 'オンライン面談 / 無料' },
  { num: '02', title: 'プロトタイプ', desc: '最短2週間で動作するプロトタイプを提出します。実物を見てから判断できるため、コストリスクを最小化します。', note: 'ヒアリング後にお見積もり' },
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
    <div className="min-h-screen bg-white">

      {/* ===== NAV (white, pill CTA) ===== */}
      <nav className="fixed w-full z-50 top-0 bg-white/90 backdrop-blur-xl border-b border-[#E5E7EB]/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
          <Link href="/" className="text-[#1F2937] text-[15px] font-bold tracking-tight">
            FOMUS Creative Studio
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-[#6B7280] text-[14px] hover:text-[#059669] transition-colors">サービス</Link>
            <Link href="/work" className="text-[#6B7280] text-[14px] hover:text-[#059669] transition-colors">実績</Link>
            <Link href="/company" className="text-[#6B7280] text-[14px] hover:text-[#059669] transition-colors">会社概要</Link>
            <Link href="/blog" className="text-[#6B7280] text-[14px] hover:text-[#059669] transition-colors">ブログ</Link>
            <Link href="/contact" className="text-[14px] bg-[#059669] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#047857] transition-colors">
              無料で相談する
            </Link>
          </div>
          <div className="md:hidden"><MobileMenu /></div>
        </div>
      </nav>

      {/* ===== HERO (white/light-green, text left, image right, decorative curves) ===== */}
      {/* ===== HERO (full-screen background image, object-right) ===== */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
        {/* 全画面背景画像 — 女性を右寄せ */}
        <div className="absolute inset-0">
          <Image src="/images/hero-ai.jpg" alt="AI活用で企業の競争力を高める" fill className="object-cover object-[75%_center]" priority />
        </div>

        {/* テキストエリアの背景（左側だけ半透明） */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[40%] bg-white/80 backdrop-blur-sm" />
        <div className="absolute inset-y-0 left-[40%] w-[10%] hidden md:block bg-gradient-to-r from-white/80 to-transparent backdrop-blur-[2px]" style={{ maskImage: 'linear-gradient(to right, black, transparent)', WebkitMaskImage: 'linear-gradient(to right, black, transparent)' }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-[72px] w-full">
          <div className="max-w-[580px]">
            <ScrollReveal>
              <h1 className="text-[#1F2937] font-bold tracking-tight mb-6">
                <span className="text-[clamp(24px,4vw,36px)] leading-[2]">AI活用を</span>
                <br />
                <span className="text-[clamp(48px,8vw,80px)] text-[#059669] leading-[1.1]">成果</span>
                <span className="text-[clamp(28px,4.5vw,42px)] leading-[1.3]">に変える実装力で、</span>
                <br />
                <span className="text-[clamp(28px,4.5vw,42px)] leading-[1.3]">企業の競争力を高める。</span>
              </h1>
              <p className="text-[#6B7280] text-[15px] md:text-[17px] leading-[2] max-w-[520px] mb-10">
                業務課題の分析から、AI・Web・クリエイティブの仕組み構築、運用定着まで。御社のビジネスを次のステージへ。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#059669] text-white px-8 py-4 rounded-full text-[16px] font-bold hover:bg-[#047857] transition-all hover:shadow-lg hover:shadow-[#059669]/20 min-h-[52px]">
                  無料で相談する
                </Link>
                <a href="#services" className="inline-flex items-center justify-center border-2 border-[#E5E7EB] text-[#1F2937] px-8 py-4 rounded-full text-[16px] font-medium hover:border-[#059669] hover:text-[#059669] transition-colors min-h-[52px]">
                  サービスを見る
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FULL-WIDTH TRUST IMAGE BAR ===== */}
      {/* ===== CHALLENGES (white bg, soft cards) ===== */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Challenges</p>
            <h2 className="font-bold tracking-tight mb-14 text-[#1F2937]">
              <span className="text-[24px] md:text-[28px]">こんな</span>
              <span className="text-[36px] md:text-[48px] text-[#059669]">課題</span>
              <span className="text-[24px] md:text-[28px]">を抱えていませんか？</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="soft-card p-8 md:p-10 h-full">
                  <span className="inline-block text-[#059669] text-[12px] font-bold tracking-[0.15em] bg-[#D1FAE5] px-4 py-1.5 rounded-full mb-5">{p.icon}</span>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#1F2937] mb-4 leading-[1.4]">{p.title}</h3>
                  <p className="text-[15px] text-[#6B7280] leading-[2] mb-5">{p.desc}</p>
                  <div className="border-t border-[#E5E7EB] pt-4">
                    <p className="text-[14px] text-[#059669] font-bold">{p.impact}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Impact Statement (photo bg + overlay) ===== */}
      <section className="py-24 md:py-32 px-6" style={{ background: 'linear-gradient(135deg, #065F46 0%, #064E3B 100%)' }}>
        <div className="max-w-[900px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white font-bold tracking-tight leading-[1.4] mb-6">
              <span className="text-[clamp(22px,3.5vw,32px)]">これらの課題、すべて</span>
              <br />
              <span className="text-[clamp(40px,7vw,72px)] text-[#34D399]">仕組み</span>
              <span className="text-[clamp(22px,3.5vw,32px)]">で解決できます。</span>
            </h2>
            <p className="text-white/60 text-[16px] md:text-[18px] leading-[2]">
              放置すれば損失は拡大します。対策は早いほど効果が出ます。
            </p>
            <div className="mt-10">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#065F46] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-white/90 transition-all min-h-[52px]">
                無料で相談する
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SERVICES（縦並び） ===== */}
      <section id="services" className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Services</p>
            <h2 className="font-bold tracking-tight mb-4 text-[#1F2937]">
              <span className="text-[24px] md:text-[28px]">御社の課題に合わせた</span>
              <span className="text-[36px] md:text-[48px] text-[#059669]">4つのサービス</span>
            </h2>
            <p className="text-[#6B7280] text-[15px] leading-[2] max-w-[560px] mb-16">
              AI・Web・クリエイティブ・研修。必要なものだけを、組み合わせて提案します。
            </p>
          </ScrollReveal>

          <div className="space-y-10">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 60}>
                <Link href={s.href} className="group block" {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  <div className={`rounded-3xl overflow-hidden border border-[#E5E7EB] hover:border-[#059669]/30 hover:shadow-xl transition-all duration-300 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex`}>
                    {/* 画像 */}
                    <div className="md:w-[50%] relative overflow-hidden bg-[#F0FDF4] flex-shrink-0">
                      <Image src={s.image} alt={s.title} width={800} height={450} className="w-full aspect-[16/9] object-cover" />
                      <div className="absolute top-5 left-5">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur text-[#059669] text-[14px] font-bold shadow-lg">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* テキスト */}
                    <div className="md:w-[55%] p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <p className="text-[#059669] text-[11px] font-bold tracking-[0.2em] uppercase">{s.en}</p>
                        <div className="flex items-end gap-1.5">
                          <span className="text-[32px] md:text-[40px] font-bold text-[#059669] leading-none">{s.metric}</span>
                          <span className="text-[12px] text-[#9CA3AF] pb-1">{s.metricLabel}</span>
                        </div>
                      </div>
                      <h3 className="text-[24px] md:text-[28px] font-bold text-[#1F2937] tracking-tight mb-3 leading-[1.3]">{s.title}</h3>
                      <p className="text-[14px] md:text-[15px] text-[#6B7280] leading-[2] mb-6">{s.desc}</p>

                      {/* ハイライト */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {s.highlights.map((h) => (
                          <span key={h} className="text-[12px] text-[#059669] bg-[#F0FDF4] border border-[#D1FAE5] px-3 py-1.5 rounded-full font-medium">{h}</span>
                        ))}
                      </div>

                      <span className="text-[14px] text-[#059669] font-medium group-hover:underline">詳しく見る →</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESULTS (Before → After ストーリー) ===== */}
      <section className="bg-[#F0FDF4] py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-4 text-center">Results</p>
            <h2 className="font-bold tracking-tight mb-4 text-[#1F2937] text-center">
              <span className="text-[24px] md:text-[28px]">FOMUSに依頼すると、</span>
              <br />
              <span className="text-[36px] md:text-[48px] text-[#059669]">こう変わります。</span>
            </h2>
            <p className="text-[#6B7280] text-[15px] leading-[2] max-w-[560px] mx-auto mb-16 text-center">
              放置すれば損失は拡大します。対策は早いほど効果が出ます。
            </p>
          </ScrollReveal>

          {/* Before → After 比較テーブル */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden">
              {/* ヘッダー */}
              <div className="grid grid-cols-12 border-b border-[#E5E7EB]">
                <div className="col-span-4 px-6 md:px-8 py-5 text-[13px] font-bold text-[#9CA3AF]">課題</div>
                <div className="col-span-4 px-6 md:px-8 py-5 text-[13px] font-bold text-[#DC2626] text-center">導入前</div>
                <div className="col-span-4 px-6 md:px-8 py-5 text-[13px] font-bold text-[#059669] text-center">FOMUS導入後</div>
              </div>
              {/* 行データ */}
              {[
                { issue: '問い合わせ対応', before: '手動 / 日本語のみ', after: 'AI自動 / 多言語対応', highlight: '対応工数 -80%' },
                { issue: '予約管理', before: '電話・紙台帳・転記ミス', after: 'LINE・Web一元管理・自動リマインド', highlight: '予約数 +180%' },
                { issue: 'レビュー返信', before: '放置 → 星が下がる', after: 'AIが24h以内に100%返信', highlight: '評価回復' },
                { issue: 'Webサイト', before: '名刺代わりで放置', after: '集客導線+SEO+予約機能', highlight: '問い合わせ +180%' },
                { issue: '採用活動', before: '求人を出しても応募ゼロ', after: '採用漫画+MangaX掲載で差別化', highlight: '応募数 ×3' },
                { issue: '社員のAI活用', before: '誰も使いこなせない', after: '実務特化研修で全員が業務活用', highlight: '助成金 75%OFF' },
                { issue: 'IT全般の相談先', before: '業者が複数でバラバラ', after: 'FOMUSが一社で全て完結', highlight: '管理コスト ゼロ' },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-12 items-center ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'} ${i < 6 ? 'border-b border-[#E5E7EB]' : ''}`}>
                  <div className="col-span-4 px-6 md:px-8 py-5">
                    <p className="text-[14px] md:text-[15px] font-bold text-[#1F2937]">{row.issue}</p>
                  </div>
                  <div className="col-span-4 px-6 md:px-8 py-5 text-center">
                    <p className="text-[13px] md:text-[14px] text-[#9CA3AF] line-through">{row.before}</p>
                  </div>
                  <div className="col-span-4 px-6 md:px-8 py-5 text-center">
                    <p className="text-[13px] md:text-[14px] text-[#1F2937] font-bold mb-1">{row.after}</p>
                    <span className="inline-block text-[11px] text-[#059669] bg-[#D1FAE5] px-2.5 py-0.5 rounded-full font-bold">{row.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* 金額インパクト */}
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {[
                { amount: '年間200万円+', label: 'OTA手数料を削減', sub: '自社予約サイト構築' },
                { amount: '年間336万円', label: '人件費を削減', sub: '問い合わせ対応の自動化' },
                { amount: '年間180万円', label: '採用コストを削減', sub: '採用漫画で応募数3倍' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-[#E5E7EB] p-6 text-center">
                  <p className="text-[28px] md:text-[32px] font-bold text-[#059669] leading-none mb-2">{item.amount}</p>
                  <p className="text-[15px] font-bold text-[#1F2937] mb-1">{item.label}</p>
                  <p className="text-[12px] text-[#9CA3AF]">{item.sub}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#059669] text-white px-8 py-4 rounded-full text-[15px] font-bold hover:bg-[#047857] transition-all hover:shadow-lg hover:shadow-[#059669]/20 min-h-[52px]">
                無料で相談する
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ===== PROCESS (white bg, soft cards) ===== */}
      <section id="process" className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Process</p>
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight mb-14 text-[#1F2937]">導入までの流れ</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div className="soft-card p-8 h-full">
                  <span className="inline-block text-[#059669] text-[12px] font-bold tracking-[0.15em] bg-[#D1FAE5] px-4 py-1.5 rounded-full mb-5">Step {step.num}</span>
                  <h3 className="text-[20px] font-bold mt-1 mb-4 leading-[1.4] text-[#1F2937]">{step.title}</h3>
                  <p className="text-[#6B7280] text-[14px] md:text-[15px] leading-[1.9] mb-6">{step.desc}</p>
                  <p className="text-[13px] text-[#059669] font-medium">{step.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 選ばれる3つの理由 (CA style — full-width, white, bold) ===== */}
      <section className="bg-white">
        {/* Header */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-16">
          <ScrollReveal>
            <p className="text-[#059669] text-[12px] font-bold tracking-[0.25em] uppercase mb-6">Why FOMUS</p>
            <h2 className="text-[clamp(32px,6vw,64px)] font-bold tracking-tight leading-[1.15] text-[#1F2937]">
              選ばれる、<br />
              <span className="text-[#059669]">3つの理由。</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Reason 01 */}
        <div className="border-t border-[#E5E7EB]">
          <ScrollReveal>
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
              <div className="md:col-span-2">
                <span className="text-[clamp(48px,8vw,96px)] font-bold text-[#E5E7EB] leading-none">01</span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-[clamp(22px,3vw,32px)] font-bold leading-[1.4] mb-6 text-[#1F2937]">
                  AIを教える会社ではなく、<br className="hidden md:block" />
                  <span className="text-[#059669]">AIで事業を回している会社。</span>
                </h3>
                <p className="text-[16px] md:text-[17px] text-[#6B7280] leading-[2] max-w-[720px] mb-8">
                  FOMUSは日本の伝統工芸品を20カ国以上に展開しています。また、日本酒メディアを運営しています。AI検索、多言語チャットボット、IP事業展開などを自社ビジネスに実装し、現場で成果を出しています。AIを「教えるだけ」の企業ではなく、自ら使って事業を動かしているからこそ、御社の現場の問題を解決できます。
                </p>
                <div className="flex flex-wrap gap-3">
                  {['日本酒メディア運営', '伝統工芸品 20カ国展開', '自社ビジネスにAI全面導入'].map((tag) => (
                    <span key={tag} className="text-[12px] text-[#059669] bg-[#F0FDF4] border border-[#D1FAE5] px-4 py-2 rounded-full font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Reason 02 */}
        <div className="border-t border-[#E5E7EB]">
          <ScrollReveal>
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
              <div className="md:col-span-2">
                <span className="text-[clamp(48px,8vw,96px)] font-bold text-[#E5E7EB] leading-none">02</span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-[clamp(22px,3vw,32px)] font-bold leading-[1.4] mb-6 text-[#1F2937]">
                  漫画は広報だけじゃない。<br className="hidden md:block" />
                  <span className="text-[#059669]">部門ごとの課題を解決する。</span>
                </h3>
                <p className="text-[16px] md:text-[17px] text-[#6B7280] leading-[2] max-w-[720px] mb-8">
                  採用漫画、営業資料、社内研修マニュアル、カスタマーサポートのFAQ漫画。営業・人事・企画・CSなど、部門ごとの課題に合わせた漫画を制作します。さらに自社プラットフォーム「MangaX」に無料掲載可能。プロモーション用途でも社内用途でも、制作から公開まで一気通貫で対応します。
                </p>
                <div className="flex flex-wrap gap-3">
                  {['営業・採用・研修・CS対応', 'MangaXに無料掲載', '制作→公開を一気通貫'].map((tag) => (
                    <span key={tag} className="text-[12px] text-[#059669] bg-[#F0FDF4] border border-[#D1FAE5] px-4 py-2 rounded-full font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Reason 03 */}
        <div className="border-t border-[#E5E7EB]">
          <ScrollReveal>
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
              <div className="md:col-span-2">
                <span className="text-[clamp(48px,8vw,96px)] font-bold text-[#E5E7EB] leading-none">03</span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-[clamp(22px,3vw,32px)] font-bold leading-[1.4] mb-6 text-[#1F2937]">
                  AI・Web・漫画・研修を、<br className="hidden md:block" />
                  <span className="text-[#059669]">一社に集約できる。</span>
                </h3>
                <p className="text-[16px] md:text-[17px] text-[#6B7280] leading-[2] max-w-[720px] mb-8">
                  AIはA社、WebはB社、漫画はC社、研修はD社。窓口が増えるほど管理コストと連携ミスが膨らみます。FOMUSはすべてを一社で設計から運用まで完結。発注先を集約することで、コスト・スピード・品質のすべてが改善します。
                </p>
                <div className="flex flex-wrap gap-3">
                  {['AI・Web・漫画・研修を一社完結', '8つのプロダクトを自社運用', '窓口1つで管理コストゼロ'].map((tag) => (
                    <span key={tag} className="text-[12px] text-[#059669] bg-[#F0FDF4] border border-[#D1FAE5] px-4 py-2 rounded-full font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 対応業種 (white bg, pill tags) ===== */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Industries</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-10 text-[#1F2937]">対応業種</h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {['飲食店', '旅館・ホテル', '美容サロン', 'クリニック・歯科', '小売店', '不動産', '士業・コンサル', '自治体', '製造業', 'IT企業', 'EC事業者', 'スタートアップ'].map((industry) => (
                <span key={industry} className="text-[14px] md:text-[15px] text-[#1F2937] border border-[#059669]/20 bg-[#F0FDF4] px-5 py-3 rounded-full hover:bg-[#D1FAE5] hover:border-[#059669]/40 transition-colors cursor-default">
                  {industry}
                </span>
              ))}
            </div>
            <p className="text-[14px] text-[#6B7280] mt-8">業種よりも「何に困っているか」が大切です。上記以外の業種もお気軽にご相談ください。</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== ミニCTA（課題別）(light green bg, rounded cards) ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-10 text-[#1F2937] text-center">どんなご相談でも構いません</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: '売上を上げたい', a: 'Webサイト改善、AI集客、レビュー管理で新規顧客を獲得' },
              { q: 'コストを下げたい', a: 'AIによる業務自動化で、人件費・外注費を大幅削減' },
              { q: '人を採りたい', a: '採用漫画・採用サイトで応募数を増やし、採用単価を下げる' },
              { q: 'AIを使いたいが分からない', a: 'ヒアリングで課題を整理し、何をすべきかを明確にする' },
            ].map((item, i) => (
              <ScrollReveal key={item.q} delay={i * 60}>
                <Link href="/contact" className="flex items-center justify-between bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#059669] hover:shadow-md transition-all duration-300 group">
                  <div>
                    <p className="text-[17px] font-bold text-[#1F2937] mb-1">「{item.q}」</p>
                    <p className="text-[14px] text-[#6B7280]">{item.a}</p>
                  </div>
                  <span className="text-[#059669] text-[20px] flex-shrink-0 ml-4 w-10 h-10 rounded-full bg-[#D1FAE5] flex items-center justify-center group-hover:bg-[#059669] group-hover:text-white transition-all">→</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER (white bg) ===== */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-4">
              <ScrollReveal>
                <Image src="/images/founder.jpg" alt="増尾 圭亮 - 合同会社FOMUS代表" width={600} height={800} className="aspect-[3/4] rounded-3xl object-cover w-full" />
              </ScrollReveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ScrollReveal delay={60}>
                <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-6">Founder</p>
                <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight mb-2 text-[#1F2937]">増尾 圭亮</h2>
                <p className="text-[14px] text-[#9CA3AF] mb-6">合同会社FOMUS 代表</p>
                <p className="text-[15px] md:text-[16px] text-[#6B7280] leading-[2.1]">
                  日本の伝統工芸品を20カ国以上に展開する事業と、全国1,500蔵を網羅する日本酒メディアを運営。AIチャットボット、多言語AI検索、IP事業展開などを自社ビジネスに実装し、実際の売上と業務効率の改善に直結させてきました。
                </p>
                <p className="text-[15px] md:text-[16px] text-[#6B7280] leading-[2.1] mt-4">
                  この経験をもとに、FOMUS Creative StudioとしてAI導入・Web制作・漫画制作・AI研修などを企業に提供しています。「AIを教える側」だけでなく「AIで事業を活用している側」として、机上の空論ではない実務に基づいた提案をします。
                </p>
                <div className="flex flex-wrap gap-3 mt-6 mb-6">
                  {['AI開発・導入', 'Web制作', '漫画制作 / MangaX', '貿易（20カ国+）', 'メディア運営'].map((tag) => (
                    <span key={tag} className="text-[12px] text-[#059669] bg-[#F0FDF4] border border-[#D1FAE5] px-3 py-1.5 rounded-full font-medium">{tag}</span>
                  ))}
                </div>
                <Link href="/company" className="inline-flex items-center text-[15px] text-[#059669] font-medium hover:opacity-80 transition-opacity">
                  会社概要を見る →
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ (light green bg, rounded style) ===== */}
      <section id="faq" className="bg-[#F0FDF4] py-24 md:py-32 px-6">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">FAQ</p>
            <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight mb-10 text-[#1F2937]">よくあるご質問</h2>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <FAQ items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA (deep green #065F46, pill button) ===== */}
      <section className="text-white py-24 md:py-32 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #065F46 0%, #064E3B 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#10B981] opacity-[0.1] blur-[150px]" />
          <div className="absolute inset-0 dot-grid-dark" />
        </div>
        <div className="relative z-10 max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-bold tracking-tight mb-4">
              <span className="text-[24px] md:text-[28px]">まずは</span>
              <span className="text-[36px] md:text-[48px] text-[#10B981]">話を聞かせて</span>
              <span className="text-[24px] md:text-[28px]">ください。</span>
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[2] mb-8">
              オンラインで御社の業務課題をお聞きし、最適な施策をその場でお伝えします。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#065F46] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-[#D1FAE5] transition-all hover:shadow-lg min-h-[52px]">
              無料で相談する
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER (deep green #065F46) ===== */}
      <footer className="bg-[#065F46] border-t border-white/[0.06] py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
            <div>
              <p className="text-[15px] font-bold mb-1 text-white">FOMUS Creative Studio</p>
              <p className="text-[13px] text-white/50">合同会社FOMUS</p>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-3 text-[14px] text-white/60">
              <Link href="/services" className="hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/10">サービス</Link>
              <Link href="/work" className="hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/10">実績</Link>
              <Link href="/company" className="hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/10">会社概要</Link>
              <Link href="/contact" className="hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/10">お問い合わせ</Link>
              <Link href="/privacy" className="hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/10">プライバシーポリシー</Link>
            </div>
          </div>
          <div className="h-px w-full bg-white/10 mb-8" />
          <p className="text-[13px] text-white/30">&copy; 2026 合同会社FOMUS</p>
        </div>
      </footer>

      <FaqSchema items={faqItems} />
      <MobileCTABar />
    </div>
  )
}

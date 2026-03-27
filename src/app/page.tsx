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
            <a href="#faq" className="text-[#6B7280] text-[14px] hover:text-[#059669] transition-colors">FAQ</a>
            <Link href="/contact" className="text-[14px] bg-[#059669] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#047857] transition-colors">
              無料で相談する
            </Link>
          </div>
          <div className="md:hidden"><MobileMenu /></div>
        </div>
      </nav>

      {/* ===== HERO (white/light-green, text left, image right, decorative curves) ===== */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden bg-white">
        {/* Decorative curved SVG lines (DigiRise style) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] -right-[15%] w-[80%] h-[120%] opacity-[0.07]" viewBox="0 0 800 800" fill="none">
            <rect x="100" y="50" width="600" height="700" rx="300" stroke="url(#hero-grad)" strokeWidth="2" />
            <rect x="200" y="150" width="500" height="550" rx="250" stroke="url(#hero-grad)" strokeWidth="1.5" />
            <rect x="300" y="250" width="400" height="400" rx="200" stroke="url(#hero-grad)" strokeWidth="1" />
            <defs>
              <linearGradient id="hero-grad" x1="0" y1="0" x2="800" y2="800">
                <stop stopColor="#059669" />
                <stop offset="1" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>
          {/* Soft blobs */}
          <div className="absolute top-[15%] right-[5%] w-[500px] h-[500px] rounded-full bg-[#10B981] opacity-[0.06] blur-[120px]" />
          <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#059669] opacity-[0.04] blur-[100px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-[72px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: text */}
            <div>
              <ScrollReveal>
                <h1 className="text-[#1F2937] text-[clamp(32px,6vw,64px)] font-bold leading-[1.2] tracking-tight mb-6">
                  AI活用を、
                  <br /><span className="text-[#059669]">成果</span>に変える実装力で、
                  <br />企業の競争力を高める。
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
            {/* Right: hero image */}
            <div className="hidden md:block">
              <ScrollReveal delay={100}>
                <img src="/images/hero-laptop.png" alt="FOMUS Creative Studio" className="w-full max-w-[560px] mx-auto rounded-3xl" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID (dark green #065F46, glass cards) ===== */}
      <section id="services" className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #065F46 0%, #064E3B 100%)' }}>
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-[#10B981] opacity-[0.1] blur-[120px]" />
          <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-[#059669] opacity-[0.08] blur-[100px]" />
          <div className="absolute inset-0 dot-grid-dark" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="text-[#34D399] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Services</p>
            <h2 className="text-white text-[28px] md:text-[36px] font-bold tracking-tight mb-14">
              御社の課題に合わせた
              <br className="md:hidden" />6つのサービス
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 60}>
                <Link href={s.href} className="group relative glass-card-green p-5 md:p-7 hover:border-white/25 transition-all duration-500 overflow-hidden block">
                  <p className="text-white/40 text-[11px] md:text-[12px] tracking-wide mb-1">{s.en}</p>
                  <p className="text-white text-[17px] md:text-[20px] font-bold">{s.title}</p>
                  <div className="max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-out">
                    <p className="text-white/50 text-[13px] leading-[1.7] mt-3 pr-4">{s.desc}</p>
                  </div>
                  <span className="absolute top-5 right-5 text-white/20 group-hover:text-[#34D399] transition-colors text-[18px]">→</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHALLENGES (white bg, soft cards) ===== */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Challenges</p>
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight mb-14 text-[#1F2937]">
              こんな課題を抱えていませんか？
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

      {/* ===== Impact Statement (light green bg — NOT dark) ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-full opacity-[0.05]" viewBox="0 0 1200 400" fill="none">
            <ellipse cx="600" cy="200" rx="500" ry="180" stroke="url(#impact-grad)" strokeWidth="1.5" />
            <ellipse cx="600" cy="200" rx="400" ry="140" stroke="url(#impact-grad)" strokeWidth="1" />
            <defs>
              <linearGradient id="impact-grad" x1="0" y1="0" x2="1200" y2="400">
                <stop stopColor="#059669" />
                <stop offset="1" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-[#1F2937] text-[clamp(26px,5vw,48px)] font-bold tracking-tight leading-[1.4] mb-6">
              これらの課題、
              <br />すべて<span className="text-[#059669]"> 仕組み </span>で解決できます。
            </h2>
            <p className="text-[#6B7280] text-[16px] md:text-[18px] leading-[2]">
              放置すれば損失は拡大します。対策は早いほど効果が出ます。
            </p>
            <div className="mt-10">
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#059669] text-white px-10 py-4 rounded-full text-[16px] font-bold hover:bg-[#047857] transition-all hover:shadow-lg hover:shadow-[#059669]/20 min-h-[52px]">
                無料で相談する
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== RESULTS (white bg, rounded cards with green header) ===== */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-4 text-center">Results</p>
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight mb-3 text-[#1F2937] text-center">
              導入で、業務はこう変わります
            </h2>
            <p className="text-[#6B7280] text-[15px] leading-[2] max-w-[560px] mx-auto mb-16 text-center">
              FOMUSのサービスを導入した企業の業務改善効果
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                industry: '宿泊・飲食業界',
                subtitle: '多言語対応・集客改善を実現',
                items: [
                  { label: '問い合わせ対応', before: '手動 / 日本語のみ', after: 'AI自動 / 9言語対応' },
                  { label: '予約数', before: '月30件', after: '月84件' },
                ],
                metric: '+180%',
                metricLabel: '予約数',
                saving: '年間200万円以上のOTA手数料を削減',
              },
              {
                industry: 'サービス・小売業界',
                subtitle: '業務自動化・コスト削減を実現',
                items: [
                  { label: '問い合わせ対応', before: '月120時間', after: '月24時間' },
                  { label: 'レビュー返信', before: '放置', after: '24h以内に100%返信' },
                ],
                metric: '-80%',
                metricLabel: '対応工数',
                saving: '年間336万円の人件費を削減',
              },
              {
                industry: '全業種共通',
                subtitle: '採用力・ブランディング強化を実現',
                items: [
                  { label: '応募数', before: '月5件', after: '月15件' },
                  { label: '採用単価', before: '50万円', after: '20万円' },
                ],
                metric: '×3',
                metricLabel: '応募数',
                saving: '採用コスト年間180万円を削減',
              },
            ].map((card, i) => (
              <ScrollReveal key={card.industry} delay={i * 100}>
                <div className="soft-card overflow-hidden h-full flex flex-col">
                  {/* Header - green gradient */}
                  <div className="px-8 py-6" style={{ background: 'linear-gradient(135deg, #059669, #10B981)' }}>
                    <p className="text-white/80 text-[12px] font-bold tracking-[0.1em] uppercase mb-1">{card.industry}</p>
                    <p className="text-white/60 text-[13px]">{card.subtitle}</p>
                  </div>

                  {/* Metric */}
                  <div className="px-8 py-6 border-b border-[#E5E7EB] text-center">
                    <p className="text-[#059669] text-[48px] md:text-[56px] font-bold leading-none">{card.metric}</p>
                    <p className="text-[#6B7280] text-[13px] mt-2">{card.metricLabel}</p>
                  </div>

                  {/* Before/After */}
                  <div className="px-8 py-6 flex-1">
                    {card.items.map((item) => (
                      <div key={item.label} className="mb-5 last:mb-0">
                        <p className="text-[12px] text-[#9CA3AF] font-medium mb-2">{item.label}</p>
                        <div className="flex items-center gap-3">
                          <span className="text-[14px] text-[#9CA3AF] line-through">{item.before}</span>
                          <span className="text-[14px] text-[#9CA3AF]">→</span>
                          <span className="text-[14px] text-[#1F2937] font-bold">{item.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom saving */}
                  <div className="px-8 py-5 bg-[#F0FDF4] border-t border-[#E5E7EB]">
                    <p className="text-[14px] text-[#059669] font-bold text-center">{card.saving}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#059669] text-white px-8 py-4 rounded-full text-[15px] font-bold hover:bg-[#047857] transition-all hover:shadow-lg hover:shadow-[#059669]/20 min-h-[52px]">
                無料で相談する
              </Link>
              <Link href="/work" className="inline-flex items-center justify-center border-2 border-[#E5E7EB] text-[#1F2937] px-8 py-4 rounded-full text-[15px] font-medium hover:border-[#059669] hover:text-[#059669] transition-colors min-h-[52px]">
                導入実績を詳しく見る
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TRACK RECORD (light green) ===== */}
      <section className="bg-[#F0FDF4] py-16 md:py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-4 text-center">Track Record</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-10 text-[#1F2937] text-center">これまでに構築したもの</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '1,500+', label: '酒蔵データベース', sub: 'Terroir HUB SAKE' },
              { num: '970+', label: '蒸留所データベース', sub: 'Terroir HUB SHOCHU' },
              { num: '8', label: 'サイト・サービス構築', sub: 'Web / EC / SaaS' },
              { num: '32', label: '多言語対応', sub: 'AI翻訳・検索' },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 60}>
                <div className="bg-white rounded-2xl p-6 text-center border border-[#E5E7EB] hover:shadow-md transition-all duration-300">
                  <p className="text-[#059669] text-[32px] md:text-[40px] font-bold leading-none mb-2">{item.num}</p>
                  <p className="text-[14px] font-bold text-[#1F2937] mb-1">{item.label}</p>
                  <p className="text-[12px] text-[#9CA3AF]">{item.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={200}>
            <div className="text-center mt-8">
              <Link href="/work" className="inline-flex items-center text-[14px] text-[#059669] font-medium hover:opacity-80 transition-opacity">
                全ての実績を見る →
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

      {/* ===== 選ばれる3つの理由 (light green bg) ===== */}
      <section className="bg-[#F0FDF4] py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-4 text-center">Why FOMUS</p>
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight mb-14 text-[#1F2937] text-center">選ばれる3つの理由</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: '代表が直接対応する', desc: '窓口から設計、実装、納品まで、代表の増尾が一貫して対応します。伝言ゲームによる認識のズレや、下請けへの丸投げがありません。意思決定が速く、コストも抑えられます。' },
              { num: '02', title: 'AI・Web・クリエイティブを一社で完結', desc: 'AIチャットボット、Webサイト、漫画制作、業務システム。通常なら3-4社に分散する発注を、FOMUSは一社で完結します。窓口が一つだから、管理コストもゼロです。' },
              { num: '03', title: '動くものを先に見せる', desc: '提案書だけでは判断できません。FOMUSは最短2週間で動作するプロトタイプを提出します。実物を触ってから導入を判断できるので、失敗のリスクを最小化できます。' },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 80}>
                <div className="bg-white rounded-3xl p-8 md:p-10 text-center md:text-left border border-[#E5E7EB] hover:shadow-lg transition-all duration-300">
                  <span className="inline-block text-[#059669] text-[56px] md:text-[64px] font-bold leading-none mb-4">{item.num}</span>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#1F2937] mb-4 leading-[1.4]">{item.title}</h3>
                  <p className="text-[15px] text-[#6B7280] leading-[2]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
                <img src="/images/founder.jpg" alt="増尾 圭亮" className="aspect-[3/4] rounded-3xl object-cover w-full" />
              </ScrollReveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ScrollReveal delay={60}>
                <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-6">Founder</p>
                <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight mb-6 text-[#1F2937]">増尾 圭亮</h2>
                <p className="text-[15px] md:text-[16px] text-[#6B7280] leading-[2.1]">
                  合同会社FOMUS代表。AI開発、Web制作、漫画制作までを一人で設計・実装する技術者です。大規模な開発チームではなく、意思決定者が直接手を動かすことで、伝言コスト・管理コストを排除します。
                </p>
                <p className="text-[15px] md:text-[16px] text-[#1F2937] leading-[2.1] mt-4 mb-6 font-bold">
                  ITのことで困ったら、まず私に相談してください。
                </p>
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
            <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight mb-4">
              まずは話を聞かせてください。
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[2] mb-8">
              オンラインで御社の業務課題をお聞きし、最適な施策をその場でお伝えします。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#065F46] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-[#D1FAE5] transition-all hover:shadow-lg min-h-[52px]">
              無料で相談する
            </Link>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-white/50 text-[13px]">
              <span>相談無料</span>
              <span>営業電話なし</span>
              <span>契約の義務なし</span>
            </div>
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

      <MobileCTABar />
    </div>
  )
}

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

      {/* ===== NAV (white, green accent) ===== */}
      <nav className="fixed w-full z-50 top-0 bg-white/90 backdrop-blur-xl border-b border-[#E5E5E5]/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
          <Link href="/" className="text-[#1A1A1A] text-[15px] font-bold tracking-tight">
            FOMUS Creative Studio
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-[#555555] text-[14px] hover:text-[#0D9668] transition-colors">サービス</Link>
            <Link href="/work" className="text-[#555555] text-[14px] hover:text-[#0D9668] transition-colors">実績</Link>
            <Link href="/company" className="text-[#555555] text-[14px] hover:text-[#0D9668] transition-colors">会社概要</Link>
            <a href="#faq" className="text-[#555555] text-[14px] hover:text-[#0D9668] transition-colors">FAQ</a>
            <Link href="/contact" className="text-[14px] bg-[#0D9668] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#0b8059] transition-colors">
              無料で相談する
            </Link>
          </div>
          <div className="md:hidden"><MobileMenu /></div>
        </div>
      </nav>

      {/* ===== HERO (white/light green gradient) ===== */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FAF5 0%, #FFFFFF 60%)' }}>
        {/* Soft gradient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] right-[5%] w-[500px] h-[500px] rounded-full bg-[#10B981] opacity-[0.08] blur-[120px]" />
          <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#0D9668] opacity-[0.06] blur-[100px]" />
          <div className="absolute top-[50%] left-[40%] w-[300px] h-[300px] rounded-full bg-[#34D399] opacity-[0.05] blur-[80px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-[72px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: text */}
            <div>
              <ScrollReveal>
                <h1 className="text-[#1A1A1A] text-[clamp(32px,6vw,64px)] font-bold leading-[1.2] tracking-tight mb-6">
                  AI活用を、
                  <br />成果に変える。
                </h1>
                <p className="text-[#555555] text-[15px] md:text-[17px] leading-[2] max-w-[520px] mb-10">
                  業務課題の分析から、AI・Web・クリエイティブの仕組み構築、運用定着まで。御社のビジネスを次のステージへ。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="inline-flex items-center justify-center bg-[#0D9668] text-white px-8 py-4 rounded-lg text-[16px] font-bold hover:bg-[#0b8059] transition-colors min-h-[52px]">
                    無料で相談する
                  </Link>
                  <a href="#services" className="inline-flex items-center justify-center border-2 border-[#E5E5E5] text-[#1A1A1A] px-8 py-4 rounded-lg text-[16px] font-medium hover:border-[#0D9668] hover:text-[#0D9668] transition-colors min-h-[52px]">
                    サービスを見る
                  </a>
                </div>
              </ScrollReveal>
            </div>
            {/* Right: hero image */}
            <div className="hidden md:block">
              <ScrollReveal delay={100}>
                <img src="/images/hero-laptop.png" alt="FOMUS Creative Studio" className="w-full max-w-[560px] mx-auto rounded-2xl" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID (dark green, glass cards — creative CyberAgent section) ===== */}
      <section id="services" className="relative py-20 md:py-28 bg-[#0F2B1F] overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-[#10B981] opacity-[0.08] blur-[120px]" />
          <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-[#0D9668] opacity-[0.06] blur-[100px]" />
          <div className="absolute inset-0 dot-grid-dark" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="text-[#10B981] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Services</p>
            <h2 className="text-white text-[28px] md:text-[36px] font-bold tracking-tight mb-14">
              御社の課題に合わせた
              <br className="md:hidden" />6つのサービス
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 60}>
                <Link href={s.href} className="group relative bg-[#0D9668]/10 backdrop-blur-xl border border-[#0D9668]/20 rounded-xl p-5 md:p-7 hover:bg-[#0D9668]/20 hover:border-[#0D9668]/40 transition-all duration-500 overflow-hidden block">
                  <p className="text-white/40 text-[11px] md:text-[12px] tracking-wide mb-1">{s.en}</p>
                  <p className="text-white text-[17px] md:text-[20px] font-bold">{s.title}</p>
                  <div className="max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-out">
                    <p className="text-white/50 text-[13px] leading-[1.7] mt-3 pr-4">{s.desc}</p>
                  </div>
                  <span className="absolute top-5 right-5 text-white/20 group-hover:text-[#10B981] transition-colors text-[18px]">→</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHALLENGES (white bg) ===== */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#0D9668] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Challenges</p>
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight mb-14 text-[#1A1A1A]">
              こんな課題を抱えていませんか？
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="bg-[#F8FAFB] rounded-2xl p-8 md:p-10 h-full border border-[#E5E5E5] hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                  <span className="inline-block text-[#0D9668] text-[12px] font-bold tracking-[0.15em] bg-[#E6F7F0] px-3 py-1.5 rounded-full mb-5">{p.icon}</span>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#1A1A1A] mb-4 leading-[1.4]">{p.title}</h3>
                  <p className="text-[15px] text-[#555555] leading-[2] mb-5">{p.desc}</p>
                  <div className="border-t border-[#E5E5E5] pt-4">
                    <p className="text-[14px] text-[#0D9668] font-bold">{p.impact}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Impact Statement (dark green) ===== */}
      <section className="bg-[#0F2B1F] py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0D9668] opacity-[0.08] blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-[clamp(26px,5vw,48px)] font-bold tracking-tight leading-[1.4] mb-6">
              これらの課題、
              <br />すべて
              <span className="font-[family-name:var(--font-serif)] italic text-[#10B981]"> 仕組み </span>
              で解決できます。
            </h2>
            <p className="text-white/40 text-[16px] md:text-[18px] leading-[2]">
              放置すれば損失は拡大します。対策は早いほど効果が出ます。
            </p>
            <div className="mt-10">
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#0D9668] text-white px-10 py-4 rounded-lg text-[16px] font-bold hover:bg-[#0b8059] transition-colors min-h-[52px]">
                無料で相談する
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== RESULTS (white bg) ===== */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#0D9668] text-[12px] font-bold tracking-[0.15em] uppercase mb-4 text-center">Results</p>
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight mb-3 text-[#1A1A1A] text-center">
              導入で、業務はこう変わります
            </h2>
            <p className="text-[#555555] text-[15px] leading-[2] max-w-[560px] mx-auto mb-16 text-center">
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
                <div className="bg-[#F8FAFB] rounded-2xl border border-[#E5E5E5] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                  {/* Header */}
                  <div className="bg-[#0F2B1F] px-8 py-6">
                    <p className="text-[#10B981] text-[12px] font-bold tracking-[0.1em] uppercase mb-1">{card.industry}</p>
                    <p className="text-white/50 text-[13px]">{card.subtitle}</p>
                  </div>

                  {/* Metric */}
                  <div className="px-8 py-6 border-b border-[#E5E5E5] text-center">
                    <p className="text-[#0D9668] text-[48px] md:text-[56px] font-bold leading-none">{card.metric}</p>
                    <p className="text-[#555555] text-[13px] mt-2">{card.metricLabel}</p>
                  </div>

                  {/* Before/After */}
                  <div className="px-8 py-6 flex-1">
                    {card.items.map((item) => (
                      <div key={item.label} className="mb-5 last:mb-0">
                        <p className="text-[12px] text-[#999999] font-medium mb-2">{item.label}</p>
                        <div className="flex items-center gap-3">
                          <span className="text-[14px] text-[#999999] line-through">{item.before}</span>
                          <span className="text-[14px] text-[#999999]">→</span>
                          <span className="text-[14px] text-[#1A1A1A] font-bold">{item.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom saving */}
                  <div className="px-8 py-5 bg-[#E6F7F0] border-t border-[#E5E5E5]">
                    <p className="text-[14px] text-[#0D9668] font-bold text-center">{card.saving}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#0D9668] text-white px-8 py-4 rounded-lg text-[15px] font-bold hover:bg-[#0b8059] transition-colors min-h-[52px]">
                無料で相談する
              </Link>
              <Link href="/work" className="inline-flex items-center justify-center border-2 border-[#E5E5E5] text-[#1A1A1A] px-8 py-4 rounded-lg text-[15px] font-medium hover:border-[#0D9668] hover:text-[#0D9668] transition-colors min-h-[52px]">
                導入実績を詳しく見る
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TRACK RECORD (light green) ===== */}
      <section className="bg-[#F0FAF5] py-16 md:py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#0D9668] text-[12px] font-bold tracking-[0.15em] uppercase mb-4 text-center">Track Record</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-10 text-[#1A1A1A] text-center">これまでに構築したもの</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '1,500+', label: '酒蔵データベース', sub: 'Terroir HUB SAKE' },
              { num: '970+', label: '蒸留所データベース', sub: 'Terroir HUB SHOCHU' },
              { num: '8', label: 'サイト・サービス構築', sub: 'Web / EC / SaaS' },
              { num: '32', label: '多言語対応', sub: 'AI翻訳・検索' },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 60}>
                <div className="bg-white rounded-xl p-6 text-center border border-[#E5E5E5]">
                  <p className="text-[#0D9668] text-[32px] md:text-[40px] font-bold leading-none mb-2">{item.num}</p>
                  <p className="text-[14px] font-bold text-[#1A1A1A] mb-1">{item.label}</p>
                  <p className="text-[12px] text-[#999999]">{item.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={200}>
            <div className="text-center mt-8">
              <Link href="/work" className="inline-flex items-center text-[14px] text-[#0D9668] font-medium hover:opacity-80 transition-opacity">
                全ての実績を見る →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PROCESS (white bg) ===== */}
      <section id="process" className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#0D9668] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Process</p>
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight mb-14 text-[#1A1A1A]">導入までの流れ</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div className="bg-[#F8FAFB] rounded-2xl p-8 h-full border border-[#E5E5E5] hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                  <span className="inline-block text-[#0D9668] text-[12px] font-bold tracking-[0.15em] bg-[#E6F7F0] px-3 py-1.5 rounded-full mb-5">Step {step.num}</span>
                  <h3 className="text-[20px] font-bold mt-1 mb-4 leading-[1.4] text-[#1A1A1A]">{step.title}</h3>
                  <p className="text-[#555555] text-[14px] md:text-[15px] leading-[1.9] mb-6">{step.desc}</p>
                  <p className="text-[13px] text-[#0D9668] font-medium">{step.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 選ばれる3つの理由 (white) ===== */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#0D9668] text-[12px] font-bold tracking-[0.15em] uppercase mb-4 text-center">Why FOMUS</p>
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight mb-14 text-[#1A1A1A] text-center">選ばれる3つの理由</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: '代表が直接対応する', desc: '窓口から設計、実装、納品まで、代表の増尾が一貫して対応します。伝言ゲームによる認識のズレや、下請けへの丸投げがありません。意思決定が速く、コストも抑えられます。' },
              { num: '02', title: 'AI・Web・クリエイティブを一社で完結', desc: 'AIチャットボット、Webサイト、漫画制作、業務システム。通常なら3-4社に分散する発注を、FOMUSは一社で完結します。窓口が一つだから、管理コストもゼロです。' },
              { num: '03', title: '動くものを先に見せる', desc: '提案書だけでは判断できません。FOMUSは最短2週間で動作するプロトタイプを提出します。実物を触ってから導入を判断できるので、失敗のリスクを最小化できます。' },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 80}>
                <div className="text-center md:text-left">
                  <span className="inline-block text-[#0D9668] text-[48px] md:text-[56px] font-bold leading-none mb-4 opacity-20">{item.num}</span>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#1A1A1A] mb-4 leading-[1.4]">{item.title}</h3>
                  <p className="text-[15px] text-[#555555] leading-[2]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 対応業種 (light green) ===== */}
      <section className="bg-[#F0FAF5] py-16 md:py-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-[#0D9668] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Industries</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-10 text-[#1A1A1A]">対応業種</h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {['飲食店', '旅館・ホテル', '美容サロン', 'クリニック・歯科', '小売店', '不動産', '士業・コンサル', '自治体', '製造業', 'IT企業', 'EC事業者', 'スタートアップ'].map((industry) => (
                <span key={industry} className="text-[14px] md:text-[15px] text-[#1A1A1A] border border-[#0D9668]/20 bg-white px-5 py-3 rounded-full">
                  {industry}
                </span>
              ))}
            </div>
            <p className="text-[14px] text-[#555555] mt-8">業種よりも「何に困っているか」が大切です。上記以外の業種もお気軽にご相談ください。</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== ミニCTA（課題別） ===== */}
      <section className="bg-white py-20 md:py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-10 text-[#1A1A1A] text-center">どんなご相談でも構いません</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: '売上を上げたい', a: 'Webサイト改善、AI集客、レビュー管理で新規顧客を獲得' },
              { q: 'コストを下げたい', a: 'AIによる業務自動化で、人件費・外注費を大幅削減' },
              { q: '人を採りたい', a: '採用漫画・採用サイトで応募数を増やし、採用単価を下げる' },
              { q: 'AIを使いたいが分からない', a: 'ヒアリングで課題を整理し、何をすべきかを明確にする' },
            ].map((item, i) => (
              <ScrollReveal key={item.q} delay={i * 60}>
                <Link href="/contact" className="flex items-center justify-between bg-[#F8FAFB] rounded-xl p-6 border border-[#E5E5E5] hover:border-[#0D9668] hover:shadow-md transition-all duration-300 group">
                  <div>
                    <p className="text-[17px] font-bold text-[#1A1A1A] mb-1">「{item.q}」</p>
                    <p className="text-[14px] text-[#555555]">{item.a}</p>
                  </div>
                  <span className="text-[#0D9668] text-[20px] flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER (light green bg) ===== */}
      <section className="bg-[#F0FAF5] py-24 md:py-32 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-4">
              <ScrollReveal>
                <img src="/images/founder.jpg" alt="増尾 圭亮" className="aspect-[3/4] rounded-2xl object-cover w-full" />
              </ScrollReveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ScrollReveal delay={60}>
                <p className="text-[#0D9668] text-[12px] font-bold tracking-[0.15em] uppercase mb-6">Founder</p>
                <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight mb-6 text-[#1A1A1A]">増尾 圭亮</h2>
                <p className="text-[15px] md:text-[16px] text-[#555555] leading-[2.1]">
                  合同会社FOMUS代表。AI開発、Web制作、漫画制作までを一人で設計・実装する技術者です。大規模な開発チームではなく、意思決定者が直接手を動かすことで、伝言コスト・管理コストを排除します。
                </p>
                <p className="text-[15px] md:text-[16px] text-[#1A1A1A] leading-[2.1] mt-4 mb-6 font-bold">
                  ITのことで困ったら、まず私に相談してください。
                </p>
                <Link href="/company" className="inline-flex items-center text-[15px] text-[#0D9668] font-medium hover:opacity-80 transition-opacity">
                  会社概要を見る →
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ (white bg) ===== */}
      <section id="faq" className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <p className="text-[#0D9668] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">FAQ</p>
            <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight mb-10 text-[#1A1A1A]">よくあるご質問</h2>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <FAQ items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA (dark green) ===== */}
      <section className="bg-[#0F2B1F] text-white py-24 md:py-32 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <div className="h-px w-12 mx-auto mb-8" style={{ background: 'linear-gradient(90deg, #0D9668, #10B981, transparent)' }} />
            <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight mb-4">
              まずは話を聞かせてください。
            </h2>
            <p className="text-white/50 text-[15px] md:text-[16px] leading-[2] mb-8">
              オンラインで御社の業務課題をお聞きし、最適な施策をその場でお伝えします。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#0D9668] text-white px-10 py-4 rounded-lg text-[16px] font-bold hover:bg-[#0b8059] transition-colors min-h-[52px]">
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

      {/* ===== FOOTER (dark green) ===== */}
      <footer className="bg-[#0F2B1F] border-t border-white/[0.06] py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
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

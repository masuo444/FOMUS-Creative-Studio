import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'
import FAQ from '@/components/ui/FAQ'
import FaqSchema from '@/components/seo/FaqSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'Web制作 | コーポレートサイト・LP・予約システム・ECサイト',
  description: '問い合わせ数+180%、表示速度2秒以内。集客導線を設計したWebサイトを構築。コーポレートサイト・LP・予約システム・EC・多言語対応。SEO対策込み。',
  alternates: { canonical: '/services/web' },
}

const painPoints = [
  { icon: '🔍', title: 'Webからの問い合わせがゼロ', desc: '名刺代わりのサイトが放置され、検索にも出ない。競合はWebから新規客を獲得している。' },
  { icon: '📱', title: 'スマホで見ると崩れる', desc: '閲覧の7割はスマホ。表示が崩れる、文字が小さい、ボタンが押せない。それだけで離脱される。' },
  { icon: '⏳', title: '更新のたびに業者に依頼が必要', desc: 'お知らせ一つ変更するのに数日待ち。費用も毎回かかる。自分で更新できない。' },
]

const comparison = [
  { item: '目的', typical: '見た目が綺麗なサイトを納品', fomus: '問い合わせ・予約・売上を増やす' },
  { item: 'SEO対策', typical: 'オプション（別料金）', fomus: '標準装備' },
  { item: '表示速度', typical: '気にしていない', fomus: '2秒以内を保証' },
  { item: '更新', typical: '毎回業者に依頼（有料）', fomus: '保守契約内で柔軟に対応' },
  { item: '公開後', typical: '納品して終わり', fomus: '月次レポートで継続改善' },
  { item: '対応範囲', typical: 'サイトだけ', fomus: 'AI連携・予約・EC・多言語まで一社完結' },
]

const works = [
  { title: 'Terroir HUB SAKE', desc: '全国1,500蔵を網羅する日本酒ポータル。AI検索・多言語対応・蔵元ページ自動生成。', image: '/images/work-terroir.jpg', url: 'https://sake.terroirhub.com' },
  { title: 'SAQT', desc: '全業種対応のWeb制作・集客支援サービスのLP。', image: '/images/work-web.png', url: 'https://saqt-ai.com' },
  { title: 'FOMUS AI Training', desc: '法人向けAI研修サービスのLP。助成金訴求・カリキュラム詳細を設計。', image: '/images/work-training.jpg', url: 'https://ai-training.fomus.jp' },
]

const solutions = [
  { icon: '🏢', en: 'Corporate', title: 'コーポレートサイト', desc: '企業の信頼を伝えるデザインと、問い合わせにつながる導線設計。SEO対策込み。' },
  { icon: '🎯', en: 'Landing Page', title: 'ランディングページ', desc: '広告・キャンペーンの成果を最大化するLP。ABテストで継続的に改善。' },
  { icon: '📅', en: 'Booking', title: '予約システム', desc: 'LINE・Web・電話からの予約を一元管理。空き状況の自動応答・リマインド通知。' },
  { icon: '🛒', en: 'EC', title: 'ECサイト・決済', desc: 'Stripe連携でクレジットカード決済・サブスクリプションに対応。' },
  { icon: '🌐', en: 'Multilingual', title: '多言語対応', desc: 'あらゆる言語に対応した多言語サイト。海外展開・インバウンド集客を支援。' },
  { icon: '✏️', en: 'CMS', title: '自分で更新できる仕組み', desc: 'お知らせ・ブログ・実績を御社で自由に編集可能。業者への都度発注が不要に。' },
]

const flow = [
  { step: '01', title: 'ヒアリング', desc: '目的・ターゲット・競合を整理し、サイト戦略を設計。', note: '無料', icon: '💬' },
  { step: '02', title: 'デザイン', desc: 'ワイヤーフレーム→ビジュアルデザイン。実物に近いプロトタイプで確認。', note: '1〜2週間', icon: '🎨' },
  { step: '03', title: '開発・実装', desc: 'レスポンシブ・SEO・高速表示を標準装備。スマホでも美しく動作。', note: '2〜4週間', icon: '⚡' },
  { step: '04', title: '公開・運用', desc: 'テスト・公開・GA設定まで。公開後も月次レポートで効果を測定。', note: '月次レポート付き', icon: '📊' },
]

const faqItems = [
  { q: 'デザインのイメージが固まっていなくても大丈夫ですか？', a: 'はい。競合分析とヒアリングをもとに、御社に最適なデザインをご提案します。参考サイトをお持ちであれば、それをベースにすることも可能です。' },
  { q: '既存サイトのリニューアルも対応できますか？', a: 'はい。既存サイトの問題点を分析した上で、デザイン・構造・SEOを改善するリニューアルを行います。' },
  { q: '公開後の修正や機能追加はできますか？', a: '月額保守契約で、修正・機能追加・セキュリティ更新まで継続的にサポートします。' },
  { q: 'AI機能やチャットボットもサイトに組み込めますか？', a: 'はい。FOMUSはAI導入も一社で対応できるため、サイト制作とAIチャットボット・多言語対応・レビュー自動返信などを同時に構築できます。' },
  { q: '費用感を教えてください。', a: 'サイトの規模と機能によって異なります。ヒアリング後に、必要な範囲だけお見積もりします。不要な機能を勧めることはありません。' },
]

export default function ServiceWebPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />
      <Breadcrumb items={[{ name: 'ホーム', href: '/' }, { name: 'サービス', href: '/services' }, { name: 'Web制作', href: '/services/web' }]} />

      {/* ===== Hero ===== */}
      <section className="relative pt-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/work-terroir.jpg" alt="FOMUS Web制作実績" fill className="object-cover" />
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Web Production</p>
            <h1 className="font-bold tracking-tight mb-6 text-[#1F2937]">
              <span className="text-[24px] md:text-[28px]">見た目だけでなく、</span>
              <br />
              <span className="text-[48px] md:text-[64px] text-[#059669]">成果が出る</span>
              <span className="text-[24px] md:text-[28px]">サイトを。</span>
            </h1>
            <p className="text-[#6B7280] text-[16px] leading-[2] max-w-[600px] mb-8">
              「問い合わせが来ない」「スマホで崩れる」「更新できない」。<br />
              そのサイト、作り直すだけで売上が変わります。<br />
              集客導線・SEO・予約システム・AI連携まで、一社で完結。
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['SEO対策込み', '表示速度2秒以内', '自分で更新可能', 'AI連携対応', '多言語対応'].map((tag) => (
                <span key={tag} className="text-[12px] text-[#059669] bg-[#D1FAE5] px-4 py-2 rounded-full font-bold">{tag}</span>
              ))}
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#059669] text-white px-8 py-4 rounded-full text-[16px] font-bold hover:bg-[#047857] transition-all min-h-[52px]">
              無料で相談する
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 課題 ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Problem</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">御社のサイト、こうなっていませんか？</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-[#F9FAFB] rounded-2xl p-8 border border-[#E5E7EB] h-full">
                  <span className="text-[32px] mb-4 block">{item.icon}</span>
                  <h3 className="text-[17px] font-bold text-[#1F2937] mb-3 leading-[1.5]">{item.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-[1.9]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 比較表 ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Comparison</p>
            <h2 className="font-bold tracking-tight text-[#1F2937] mb-4">
              <span className="text-[24px] md:text-[28px]">一般的なWeb制作会社と</span>
              <span className="text-[36px] md:text-[48px] text-[#059669]">何が違うのか</span>
            </h2>
            <p className="text-[#6B7280] text-[15px] leading-[2] mb-12">FOMUSは「サイトを納品する」のではなく「成果を出す仕組みを構築する」。</p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="rounded-2xl border border-[#E5E7EB] overflow-hidden bg-white">
              <div className="grid grid-cols-3 bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <div className="p-4 md:p-5 text-[13px] font-bold text-[#6B7280]" />
                <div className="p-4 md:p-5 text-[13px] font-bold text-[#9CA3AF] text-center">一般的なWeb制作</div>
                <div className="p-4 md:p-5 text-[13px] font-bold text-[#059669] text-center">FOMUS</div>
              </div>
              {comparison.map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-b border-[#E5E7EB] last:border-b-0">
                  <div className="p-4 md:p-5 text-[14px] font-medium text-[#1F2937]">{row.item}</div>
                  <div className="p-4 md:p-5 text-[13px] md:text-[14px] text-[#9CA3AF] text-center">{row.typical}</div>
                  <div className="p-4 md:p-5 text-[13px] md:text-[14px] text-[#059669] font-bold text-center">{row.fomus}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 制作実績 ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Works</p>
            <h2 className="font-bold tracking-tight text-[#1F2937] mb-4">
              <span className="text-[24px] md:text-[28px]">FOMUSが構築した</span>
              <span className="text-[36px] md:text-[48px] text-[#059669]">Webサイト</span>
            </h2>
            <p className="text-[#6B7280] text-[15px] leading-[2] max-w-[560px] mb-12">すべて自社で企画・デザイン・開発・運用まで一貫対応。</p>
          </ScrollReveal>
          <div className="space-y-8">
            {works.map((work, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <a href={work.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className={`rounded-3xl overflow-hidden border border-[#E5E7EB] hover:border-[#059669]/30 hover:shadow-xl transition-all duration-300 flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-[55%] relative overflow-hidden bg-[#F9FAFB] flex-shrink-0">
                      <Image src={work.image} alt={work.title} width={800} height={450} className="w-full aspect-[16/9] object-contain" />
                    </div>
                    <div className="md:w-[45%] p-8 md:p-10 flex flex-col justify-center">
                      <h3 className="text-[22px] md:text-[26px] font-bold text-[#1F2937] tracking-tight mb-3">{work.title}</h3>
                      <p className="text-[14px] md:text-[15px] text-[#6B7280] leading-[2] mb-4">{work.desc}</p>
                      <span className="text-[14px] text-[#059669] font-medium group-hover:underline">{work.url.replace('https://', '')} &#8599;</span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 中間CTA ===== */}
      <ScrollReveal>
        <div className="bg-gradient-to-r from-[#059669] to-[#10B981] py-12 px-6 text-center">
          <p className="text-white text-[18px] md:text-[22px] font-bold mb-2">御社のサイト、改善の余地がどこにあるか確認しませんか？</p>
          <p className="text-white/60 text-[14px] mb-6">ヒアリングは無料。現状のサイトの課題を整理してお伝えします。</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#059669] px-8 py-3 rounded-full text-[15px] font-bold hover:bg-white/90 transition-colors min-h-[48px]">
            無料で相談する
          </Link>
        </div>
      </ScrollReveal>

      {/* ===== 対応範囲 ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Solutions</p>
            <h2 className="font-bold tracking-tight text-[#1F2937] mb-4">
              <span className="text-[24px] md:text-[28px]">Webサイトを起点に、</span>
              <span className="text-[36px] md:text-[48px] text-[#059669]">集客の仕組み</span>
              <span className="text-[24px] md:text-[28px]">を構築する</span>
            </h2>
            <p className="text-[#6B7280] text-[15px] leading-[2] max-w-[560px] mb-12">サイト単体ではなく、予約・決済・AI・多言語を統合した成果直結の設計。</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 h-full">
                  <span className="text-[28px] mb-3 block">{item.icon}</span>
                  <p className="text-[#059669] text-[11px] font-bold tracking-[0.15em] mb-2">{item.en}</p>
                  <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-[2]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 導入効果 ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Impact</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">サイトを変えると、数字が変わる</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: '+180%', label: '問い合わせ数', before: '月5件', after: '月14件' },
              { metric: '2秒', label: '表示速度', before: '8秒以上', after: '2秒以内' },
              { metric: '-40%', label: '直帰率', before: '75%', after: '45%' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 text-center">
                  <p className="text-[48px] md:text-[56px] font-bold text-[#059669] leading-none mb-4">{item.metric}</p>
                  <p className="text-[15px] font-bold text-[#1F2937] mb-4">{item.label}</p>
                  <div className="flex items-center justify-center gap-3 text-[14px]">
                    <span className="text-[#9CA3AF] line-through">{item.before}</span>
                    <span className="text-[#9CA3AF]">→</span>
                    <span className="text-[#1F2937] font-bold">{item.after}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 制作の流れ ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Flow</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">制作の流れ</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-4">
            {flow.map((item) => (
              <ScrollReveal key={item.step}>
                <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 h-full text-center">
                  <span className="text-[28px] mb-3 block">{item.icon}</span>
                  <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] mb-2">STEP {item.step}</p>
                  <h3 className="text-[15px] font-bold text-[#1F2937] mb-2">{item.title}</h3>
                  <p className="text-[13px] text-[#6B7280] leading-[1.9] mb-3">{item.desc}</p>
                  <span className="inline-block text-[11px] text-[#059669] bg-[#D1FAE5] px-3 py-1 rounded-full font-bold">{item.note}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">FAQ</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">よくある質問</h2>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#065F46] py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-[24px] md:text-[30px] font-bold tracking-tight mb-4">まずは無料でご相談ください</h2>
            <p className="text-white/60 text-[15px] leading-[2] mb-8">
              サイトの目的と課題をヒアリングし、最適なプランをご提案します。<br />
              デザインのイメージが固まっていなくても問題ありません。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#065F46] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-[#D1FAE5] transition-colors min-h-[52px]">
              無料で相談する
            </Link>
                      </ScrollReveal>
        </div>
      </section>

      <FaqSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: 'ホーム', href: '/' },
        { name: 'サービス', href: '/services' },
        { name: 'Web制作', href: '/services/web' },
      ]} />
      <SiteFooter />
    </div>
  )
}

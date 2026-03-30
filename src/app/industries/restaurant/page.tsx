import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'
import FAQ from '@/components/ui/FAQ'
import FaqSchema from '@/components/seo/FaqSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: '飲食店のAI導入・Web制作・予約システム | 人手不足をAIで解決',
  description: '飲食店の人手不足・予約管理・インバウンド対応・レビュー返信をAIで自動化。問い合わせ対応工数-80%、予約数+180%。多言語対応・LINE予約・採用漫画まで一社完結。',
  alternates: { canonical: '/industries/restaurant' },
  keywords: ['飲食店 AI導入', '飲食店 予約システム', 'レストラン DX', '飲食 人手不足 対策', 'インバウンド 多言語対応', '飲食店 レビュー返信 自動化'],
}

const painPoints = [
  { title: '人手不足なのに、電話対応・予約管理に時間を取られる', desc: 'ピーク時に電話が鳴り続ける。予約台帳の転記ミス。営業時間外の予約を取りこぼす。人を増やす余裕もない。' },
  { title: '外国人客が増えたが、対応できない', desc: 'インバウンド需要は伸びているのに、英語・中国語のメニューもない。口コミへの返信もできない。機会損失が続いている。' },
  { title: 'Googleレビューを放置している', desc: '低評価レビューに返信できず、星が下がり続ける。新規客がレビューを見て来店をやめている。対応する時間がない。' },
]

const solutions = [
  { en: 'AI Chatbot', title: 'AI予約・問い合わせ対応', desc: 'LINE・Web・電話からの予約を一元管理。営業時間外も自動応答。空き状況の確認・リマインド通知まで自動化。', href: '/services/ai' },
  { en: 'Multilingual', title: '多言語AI対応', desc: '英語・中国語・韓国語をはじめ、あらゆる言語で自動対応。メニュー翻訳、予約対応、口コミ返信まで。翻訳スタッフ不要。', href: '/services/ai' },
  { en: 'Review AI', title: 'レビュー自動返信', desc: 'Googleレビューや食べログの口コミに、トーンを合わせてAIが自動返信。24時間以内に100%返信。', href: '/services/ai' },
  { en: 'Web', title: '集客できるWebサイト', desc: '予約導線を設計したWebサイト。SEO対策込みで「地域名 + ジャンル」検索に強い。', href: '/services/web' },
  { en: 'Manga', title: '採用漫画', desc: '「うちの店で働く魅力」を漫画で伝える。求人サイトでは伝わらないリアルなストーリーで応募数アップ。MangaXに無料掲載。', href: '/services/manga' },
]

const impacts = [
  { metric: '-80%', label: '問い合わせ対応工数', before: '月120時間', after: '月24時間' },
  { metric: '+180%', label: '予約数', before: '月30件', after: '月84件' },
  { metric: '全言語', label: '多言語対応', before: '日本語のみ', after: 'あらゆる言語に自動対応' },
]

const faqItems = [
  { q: '飲食店でもAIを導入できますか？', a: 'はい。LINE予約の自動応答、Googleレビューの自動返信、多言語メニュー対応など、飲食店に特化したAI活用方法をご提案します。ITの知識は一切不要です。' },
  { q: '小規模な個人店でも対応できますか？', a: 'はい。むしろ少人数で運営する飲食店ほど、AI自動化の効果が大きく出ます。最小限の投資で最大の効果が得られるプランをご提案します。' },
  { q: 'インバウンド対応はどこまでできますか？', a: '英語・中国語・韓国語・フランス語・スペイン語をはじめ、あらゆる言語に対応可能です。メニュー翻訳、予約対応、口コミ返信まで自動化できます。' },
  { q: '費用感を教えてください。', a: 'ヒアリング後に、お店の規模と課題に合わせたお見積もりを提出します。不要な機能は入れません。まずは無料相談からどうぞ。' },
]

export default function IndustryRestaurantPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />
      <Breadcrumb items={[{ name: 'ホーム', href: '/' }, { name: '業種別', href: '/services' }, { name: '飲食店', href: '/industries/restaurant' }]} />

      {/* Hero */}
      <section className="relative pt-0 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 60%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] -right-[20%] w-[70%] h-[120%] opacity-[0.06]" viewBox="0 0 800 800" fill="none">
            <rect x="100" y="50" width="600" height="700" rx="300" stroke="url(#sg-rest)" strokeWidth="2" />
            <rect x="200" y="150" width="500" height="550" rx="250" stroke="url(#sg-rest)" strokeWidth="1.5" />
            <defs><linearGradient id="sg-rest" x1="0" y1="0" x2="800" y2="800"><stop stopColor="#059669" /><stop offset="1" stopColor="#10B981" /></linearGradient></defs>
          </svg>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#10B981] opacity-[0.06] blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">For Restaurants</p>
            <h1 className="font-bold tracking-tight mb-6 text-[#1F2937]">
              <span className="text-[24px] md:text-[28px]">飲食店の人手不足を、</span>
              <br />
              <span className="text-[48px] md:text-[64px] text-[#059669]">AIで解決</span>
              <span className="text-[24px] md:text-[28px]">する。</span>
            </h1>
            <p className="text-[#6B7280] text-[16px] leading-[2] max-w-[560px]">
              予約管理、問い合わせ対応、レビュー返信、インバウンド対応。<br />
              人がやらなくていい業務をAIに任せ、料理とサービスに集中できる環境を。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 課題 */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Challenges</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">飲食店が抱える課題</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {painPoints.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-start gap-5 bg-[#F9FAFB] rounded-2xl p-6 md:p-8 border border-[#E5E7EB]">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FEE2E2] text-[#DC2626] text-[14px] font-bold flex-shrink-0 mt-0.5">!</span>
                  <div>
                    <h3 className="text-[17px] font-bold text-[#1F2937] mb-2">{item.title}</h3>
                    <p className="text-[14px] text-[#6B7280] leading-[1.9]">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 解決策 */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Solutions</p>
            <h2 className="font-bold tracking-tight text-[#1F2937] mb-4">
              <span className="text-[24px] md:text-[28px]">飲食店に最適な</span>
              <span className="text-[36px] md:text-[48px] text-[#059669]">仕組み</span>
              <span className="text-[24px] md:text-[28px]">を構築します</span>
            </h2>
            <p className="text-[#6B7280] text-[15px] leading-[2] max-w-[560px] mb-12">AI・Web・漫画を組み合わせて、御店の課題に合わせた最適な仕組みを提案します。</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <Link href={item.href} className="block h-full group">
                  <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 h-full hover:shadow-lg transition-shadow">
                    <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] mb-3">{item.en}</p>
                    <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                    <p className="text-[14px] text-[#6B7280] leading-[2]">{item.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 導入効果 */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Impact</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">導入効果</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {impacts.map((item, i) => (
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

      {/* 中間CTA */}
      <ScrollReveal>
        <div className="bg-gradient-to-r from-[#059669] to-[#10B981] py-12 px-6 text-center">
          <p className="text-white text-[18px] md:text-[22px] font-bold mb-4">御店の業務、どこまで自動化できるか確認しませんか？</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#059669] px-8 py-3 rounded-full text-[15px] font-bold hover:bg-white/90 transition-colors min-h-[48px]">
            無料で相談する
          </Link>
        </div>
      </ScrollReveal>

      {/* FAQ */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">FAQ</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">よくある質問</h2>
          </ScrollReveal>
          <ScrollReveal><FAQ items={faqItems} /></ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#065F46] py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-[24px] md:text-[30px] font-bold tracking-tight mb-4">まずは無料でご相談ください</h2>
            <p className="text-white/60 text-[15px] leading-[2] mb-8">
              御店の課題をヒアリングし、最適なAI活用方法をご提案します。<br />
              ITの知識は不要です。「何から始めるか」からお伝えします。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#065F46] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-white/90 transition-colors min-h-[52px]">
              無料で相談する
            </Link>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-white/40 text-[13px]">
              <span>相談無料</span><span>営業電話なし</span><span>契約の義務なし</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FaqSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: 'ホーム', href: '/' },
        { name: '業種別', href: '/services' },
        { name: '飲食店', href: '/industries/restaurant' },
      ]} />
      <SiteFooter />
    </div>
  )
}

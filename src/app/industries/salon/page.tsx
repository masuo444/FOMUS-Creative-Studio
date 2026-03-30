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
  title: '美容サロンのAI導入・LINE予約・Web制作 | リピーター施策で売上UP',
  description: '美容室・ネイル・エステの予約管理をLINE連携で自動化。リピーター施策、採用漫画、集客Webサイトまで一社完結。問い合わせ対応工数-80%。',
  alternates: { canonical: '/industries/salon' },
  keywords: ['美容室 予約システム', 'サロン LINE連携', '美容 採用漫画', 'サロン リピーター', '美容室 Web制作', 'エステ DX'],
}

const painPoints = [
  { title: '予約の電話対応でカット中に手が止まる', desc: '施術中に電話が鳴る。取れなかった電話は予約の取りこぼし。LINEやWebからの予約もバラバラで管理が煩雑。' },
  { title: 'リピーターが定着しない', desc: '新規は来るがリピートにつながらない。来店後のフォローや再来店促進の仕組みがない。' },
  { title: '採用しても人が続かない', desc: '求人を出しても応募が来ない。来ても続かない。サロンの魅力が求職者に伝わっていない。' },
]

const solutions = [
  { en: 'LINE Booking', title: 'LINE予約・自動リマインド', desc: 'LINE連携で24時間予約受付。空き状況自動応答・リマインド通知で無断キャンセルを削減。', href: '/services/ai' },
  { en: 'Repeat Strategy', title: 'リピーター施策', desc: '来店後の自動フォローメッセージ、誕生日クーポン、再来店促進をLINEで自動配信。', href: '/services/ai' },
  { en: 'Web', title: '集客Webサイト', desc: '「地域名 + 美容室」で検索上位に表示されるSEO対策済みサイト。ポートフォリオ・料金・予約導線を最適化。', href: '/services/web' },
  { en: 'Manga', title: '採用漫画', desc: 'サロンの雰囲気・働く魅力を漫画で伝える。求人媒体やSNSで差別化。MangaXに無料掲載。', href: '/services/manga' },
  { en: 'Training', title: 'AI研修', desc: 'スタッフのSNS運用・予約管理のAI活用スキルを育成。助成金で最大75%OFF。', href: '/services/training' },
]

const impacts = [
  { metric: '-80%', label: '予約対応工数', before: '月40時間', after: '月8時間' },
  { metric: '+40%', label: 'リピート率', before: '30%', after: '42%' },
  { metric: '×3', label: '採用応募数', before: '月2件', after: '月6件' },
]

const faqItems = [
  { q: '個人サロンでも導入できますか？', a: 'はい。1人で運営するサロンほど、予約管理の自動化や来店後フォローの仕組み化で大きな効果が出ます。' },
  { q: 'LINE予約はどのように動きますか？', a: 'お客様がLINE公式アカウントから予約すると、空き状況を自動確認して予約確定。施術前のリマインドも自動送信されます。スタッフの手間はゼロです。' },
  { q: 'リピーター施策はどんなことができますか？', a: '来店後のお礼メッセージ、次回来店時期のリマインド、誕生日クーポンの自動配信など。来店データに基づいたパーソナライズされた施策を自動で実行します。' },
  { q: '費用感を教えてください。', a: 'サロンの規模と課題に合わせたお見積もりを提出します。助成金を活用すれば研修費用は最大75%OFF。まずは無料相談からどうぞ。' },
]

export default function IndustrySalonPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />
      <Breadcrumb items={[{ name: 'ホーム', href: '/' }, { name: '業種別', href: '/services' }, { name: '美容サロン', href: '/industries/salon' }]} />

      {/* Hero */}
      <section className="relative pt-0 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 60%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] -right-[20%] w-[70%] h-[120%] opacity-[0.06]" viewBox="0 0 800 800" fill="none">
            <rect x="100" y="50" width="600" height="700" rx="300" stroke="url(#sg-salon)" strokeWidth="2" />
            <rect x="200" y="150" width="500" height="550" rx="250" stroke="url(#sg-salon)" strokeWidth="1.5" />
            <defs><linearGradient id="sg-salon" x1="0" y1="0" x2="800" y2="800"><stop stopColor="#059669" /><stop offset="1" stopColor="#10B981" /></linearGradient></defs>
          </svg>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#10B981] opacity-[0.06] blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">For Beauty Salons</p>
            <h1 className="font-bold tracking-tight mb-6 text-[#1F2937]">
              <span className="text-[24px] md:text-[28px]">美容サロンの予約・リピーター施策を、</span>
              <br />
              <span className="text-[48px] md:text-[64px] text-[#059669]">LINE × AI</span>
              <span className="text-[24px] md:text-[28px]">で自動化する。</span>
            </h1>
            <p className="text-[#6B7280] text-[16px] leading-[2] max-w-[560px]">
              予約受付、リマインド通知、来店後フォロー、再来店促進。<br />
              施術に集中できる仕組みを構築します。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 課題 */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Challenges</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">美容サロンが抱える課題</h2>
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
              <span className="text-[24px] md:text-[28px]">美容サロンに最適な</span>
              <span className="text-[36px] md:text-[48px] text-[#059669]">仕組み</span>
              <span className="text-[24px] md:text-[28px]">を構築します</span>
            </h2>
            <p className="text-[#6B7280] text-[15px] leading-[2] max-w-[560px] mb-12">AI・Web・漫画を組み合わせて、御サロンの課題に合わせた最適な仕組みを提案します。</p>
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
                    <span className="text-[#9CA3AF]">&rarr;</span>
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
          <p className="text-white text-[18px] md:text-[22px] font-bold mb-4">御サロンの予約管理、まだ手作業ですか？</p>
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
              御サロンの課題をヒアリングし、最適なAI活用方法をご提案します。<br />
              ITの知識は不要です。「何から始めるか」からお伝えします。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#065F46] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-white/90 transition-colors min-h-[52px]">
              無料で相談する
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <FaqSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: 'ホーム', href: '/' },
        { name: '業種別', href: '/services' },
        { name: '美容サロン', href: '/industries/salon' },
      ]} />
      <SiteFooter />
    </div>
  )
}

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
  title: '保守運用・ITパートナー契約 | 月額保守・障害対応・継続改善',
  description: '月額ITパートナー契約で御社のIT部門として機能。障害対応24時間以内、セキュリティ更新、月次レポート、機能改善まで。都度見積もり不要。',
  alternates: { canonical: '/services/maintenance' },
}

const painPoints = [
  { title: 'サイトやシステムが作りっぱなしで放置されている', desc: '制作会社に納品してもらったが、その後更新されず古い情報のまま。改善提案もない。' },
  { title: '障害が起きても対応してもらえない', desc: '制作会社との契約が切れている。サイトが落ちても誰に連絡すればいいか分からない。' },
  { title: '修正のたびに都度見積もりが必要', desc: 'テキスト変更だけで数万円。毎回見積もりを待つ時間もコストも無駄。' },
]

const scope = [
  { en: 'Emergency', title: '障害対応', desc: 'サイト・システムの障害発生時に迅速に対応。原因調査から復旧まで24時間以内に一次回答。' },
  { en: 'Security', title: 'セキュリティ更新', desc: 'フレームワーク・ライブラリのアップデート、脆弱性対応を定期的に実施。放置リスクをゼロに。' },
  { en: 'Improvement', title: '機能追加・改善', desc: '運用データをもとにUI改善や新機能を提案・実装。サイトの成果を継続的に向上させます。' },
  { en: 'Report', title: '月次レポート', desc: 'アクセス解析・コンバージョン・パフォーマンスの月次レポートを提出。効果を数字で確認。' },
  { en: 'Training', title: '担当者研修', desc: 'CMS操作やツールの使い方を御社の担当者にレクチャー。自分で更新できる力をつけます。' },
]

const comparison = [
  { item: '障害対応', typical: '契約切れで放置', fomus: '24時間以内に一次回答' },
  { item: '改善提案', typical: '納品して終わり', fomus: '月次レポートで毎月提案' },
  { item: '修正依頼', typical: '都度見積もり', fomus: '月額内で対応' },
  { item: '担当者', typical: '毎回変わる', fomus: '専任担当者が一貫対応' },
  { item: 'セキュリティ', typical: '放置', fomus: '定期的にアップデート' },
]

const faqItems = [
  { q: '他社で制作したサイトも保守してもらえますか？', a: 'はい。まず現状のシステム構成を調査し、対応可能な範囲をお伝えします。WordPress、Next.js、その他フレームワークに幅広く対応しています。' },
  { q: '月額費用はいくらですか？', a: 'サイトの規模と必要なサポート範囲によって異なります。ヒアリング後に、最適なプランをお見積もりします。' },
  { q: '月額内でどこまで対応できますか？', a: 'テキスト修正・画像差し替え・軽微な機能改善は月額内で対応します。大規模な機能追加は別途お見積もりしますが、都度の見積もり手間は最小化します。' },
  { q: '解約はいつでもできますか？', a: 'はい。最低契約期間の制約はありません。御社のご都合に合わせて柔軟に対応します。' },
]

export default function ServiceMaintenancePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />
      <Breadcrumb items={[{ name: 'ホーム', href: '/' }, { name: 'サービス', href: '/services' }, { name: '保守運用', href: '/services/maintenance' }]} />

      {/* ===== Hero ===== */}
      <section className="relative pt-0 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 60%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] -right-[20%] w-[70%] h-[120%] opacity-[0.06]" viewBox="0 0 800 800" fill="none">
            <rect x="100" y="50" width="600" height="700" rx="300" stroke="url(#sg-mt)" strokeWidth="2" />
            <rect x="200" y="150" width="500" height="550" rx="250" stroke="url(#sg-mt)" strokeWidth="1.5" />
            <defs><linearGradient id="sg-mt" x1="0" y1="0" x2="800" y2="800"><stop stopColor="#059669" /><stop offset="1" stopColor="#10B981" /></linearGradient></defs>
          </svg>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#10B981] opacity-[0.06] blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Maintenance</p>
            <h1 className="font-bold tracking-tight mb-6 text-[#1F2937]">
              <span className="text-[24px] md:text-[28px]">作って終わりではない。</span>
              <br />
              <span className="text-[48px] md:text-[64px] text-[#059669]">御社のIT部門</span>
              <span className="text-[24px] md:text-[28px]">として。</span>
            </h1>
            <p className="text-[#6B7280] text-[16px] leading-[2] max-w-[560px]">
              月額ITパートナー契約で、障害対応・セキュリティ更新・改善提案まで。<br />
              都度見積もり不要。専任担当者が一貫して対応します。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 課題 ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Challenges</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">こんな課題を抱えていませんか？</h2>
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

      {/* ===== 対応範囲 ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Scope</p>
            <h2 className="font-bold tracking-tight text-[#1F2937] mb-4">
              <span className="text-[24px] md:text-[28px]">ITに関わるすべてを</span>
              <span className="text-[36px] md:text-[48px] text-[#059669]">一括でお任せ</span>
            </h2>
            <p className="text-[#6B7280] text-[15px] leading-[2] max-w-[560px] mb-12">保守・運用だけでなく、新しい施策の企画・実装まで対応します。</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scope.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 h-full">
                  <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] mb-3">{item.en}</p>
                  <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-[2]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 比較表 ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Comparison</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">一般的な保守 vs FOMUS</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="rounded-2xl border border-[#E5E7EB] overflow-hidden">
              <div className="grid grid-cols-3 bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <div className="p-4 text-[13px] font-bold text-[#6B7280]" />
                <div className="p-4 text-[13px] font-bold text-[#9CA3AF] text-center">一般的な保守</div>
                <div className="p-4 text-[13px] font-bold text-[#059669] text-center">FOMUS</div>
              </div>
              {comparison.map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-b border-[#E5E7EB] last:border-b-0">
                  <div className="p-4 text-[14px] font-medium text-[#1F2937]">{row.item}</div>
                  <div className="p-4 text-[14px] text-[#9CA3AF] text-center">{row.typical}</div>
                  <div className="p-4 text-[14px] text-[#059669] font-bold text-center">{row.fomus}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 中間CTA ===== */}
      <ScrollReveal>
        <div className="bg-gradient-to-r from-[#059669] to-[#10B981] py-12 px-6 text-center">
          <p className="text-white text-[18px] md:text-[22px] font-bold mb-4">御社のサイト・システム、放置していませんか？</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#059669] px-8 py-3 rounded-full text-[15px] font-bold hover:bg-white/90 transition-colors min-h-[48px]">
            無料で相談する
          </Link>
        </div>
      </ScrollReveal>

      {/* ===== FAQ ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
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
              現在のシステム構成や運用課題をヒアリングし、<br />
              最適なサポートプランをご提案します。
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#065F46] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-white/90 transition-colors min-h-[52px]">
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

      <FaqSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: 'ホーム', href: '/' },
        { name: 'サービス', href: '/services' },
        { name: '保守運用', href: '/services/maintenance' },
      ]} />
      <SiteFooter />
    </div>
  )
}

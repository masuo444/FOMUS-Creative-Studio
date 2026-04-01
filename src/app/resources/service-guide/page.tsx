import Image from 'next/image'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'

export default function ServiceGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="pt-[72px] bg-[#065F46] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#10B981] opacity-[0.1] blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto px-8 py-20 md:py-28 text-center">
          <p className="text-[#34D399] text-[13px] font-bold tracking-[0.25em] uppercase mb-6">Service Guide</p>
          <h1 className="text-[36px] md:text-[48px] font-bold tracking-tight mb-4">FOMUS Creative Studio</h1>
          <p className="text-white/60 text-[18px] mb-2">サービス案内</p>
          <p className="text-white/40 text-[14px]">合同会社FOMUS / studio.fomus.jp</p>
        </div>
      </section>

      {/* FOMUSとは */}
      <section className="py-16 md:py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">About</p>
              <h2 className="text-[24px] md:text-[30px] font-bold text-[#1F2937] tracking-tight mb-6">
                AIで事業を回している会社が、<br />御社にも同じ仕組みを導入します。
              </h2>
              <p className="text-[15px] text-[#6B7280] leading-[2]">
                FOMUSは「AIを教えるだけの会社」ではありません。全国1,500蔵の日本酒ポータル、多言語AIチャットボット、ECサイトを自社で運営。自分たちで使い、改善し続けている技術をベースに、御社の業務課題を解決します。
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/work-terroir-sake.jpg" alt="Terroir HUB SAKE" width={600} height={375} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 3つの特徴 */}
      <section className="bg-[#F9FAFB] py-16 md:py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Why FOMUS</p>
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1F2937] tracking-tight mb-12">3つの強み</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: '実務家が直接対応', desc: '代表が直接設計・実装。伝言コスト・管理コストが発生しません。' },
              { num: '02', title: '自社実績がベース', desc: '自社で運営するサービスで実証済みの技術を、そのまま導入します。' },
              { num: '03', title: '定着するまで支援', desc: '月次レポートで効果を測定し、継続的に改善します。' },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-2xl border border-[#E5E7EB] p-8">
                <p className="text-[#059669] text-[32px] font-bold mb-3">{item.num}</p>
                <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                <p className="text-[14px] text-[#6B7280] leading-[1.9]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* サービス一覧 */}
      <section className="py-16 md:py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Services</p>
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1F2937] tracking-tight mb-12">サービス一覧</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'AI導入支援', image: '/images/hero-ai.jpg', desc: 'AIチャットボット、FAQ自動応答、レビュー返信、予約管理の自動化。自社開発SaaS「KANADE AI」も提供。' },
              { title: 'Web制作', image: '/images/work-web-dev.jpg', desc: 'コーポレートサイト、LP、予約システム、EC。SEO対策込み。表示速度2秒以内。' },
              { title: '漫画制作', image: '/images/work-manga-studio.jpg', desc: '採用漫画、企業PR漫画。最短1週間納品。MangaXに無料掲載。' },
              { title: 'AI研修・リスキリング', image: '/images/work-training.jpg', desc: '御社の業務データを題材にした10時間の実務特化型AI研修。' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E5E7EB] overflow-hidden">
                <Image src={item.image} alt={item.title} width={500} height={280} className="w-full aspect-[16/9] object-cover" />
                <div className="p-6">
                  <h3 className="text-[17px] font-bold text-[#1F2937] mb-2">{item.title}</h3>
                  <p className="text-[13px] text-[#6B7280] leading-[1.9]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 導入実績 */}
      <section className="bg-[#F0FDF4] py-16 md:py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Results</p>
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1F2937] tracking-tight mb-12">導入実績</h2>
          <div className="space-y-6">
            {[
              { title: 'Terroir HUB SAKE', image: '/images/work-terroir-sake.jpg', metrics: ['1,500蔵を網羅', 'AI検索搭載', '32言語対応'], desc: '全国の酒蔵情報ポータル。AIコンシェルジュ「サクラ」による自然言語検索。' },
              { title: 'MangaX', image: '/images/work-manga.jpg', metrics: ['40言語対応', '最短1週間', '掲載無料'], desc: '漫画制作+掲載プラットフォーム。制作から公開まで一気通貫。' },
              { title: 'KANADE AI', image: '/images/hero-ai.jpg', metrics: ['8言語対応', '7業種対応', '即日導入'], desc: '接客業向け多言語AIコンシェルジュSaaS。チャットボット・予約・決済を統合。' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-[40%] flex-shrink-0">
                  <Image src={item.image} alt={item.title} width={400} height={250} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:p-8 flex-1">
                  <h3 className="text-[20px] font-bold text-[#1F2937] mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-[1.9] mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.metrics.map((m) => (
                      <span key={m} className="text-[12px] text-[#059669] bg-[#D1FAE5] px-3 py-1 rounded-full font-medium">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 導入の流れ */}
      <section className="py-16 md:py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] uppercase mb-4">Flow</p>
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1F2937] tracking-tight mb-12">導入の流れ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'ヒアリング', desc: '御社の課題をオンラインで伺います。', note: '無料' },
              { step: '02', title: 'プロトタイプ', desc: '最短2週間で動作するプロトタイプを提出。', note: '見積もり後' },
              { step: '03', title: '導入・運用', desc: '定着するまで支援。月次レポート付き。', note: '継続改善' },
            ].map((item) => (
              <div key={item.step} className="bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] p-8 text-center">
                <p className="text-[#059669] text-[28px] font-bold mb-3">{item.step}</p>
                <h3 className="text-[17px] font-bold text-[#1F2937] mb-3">{item.title}</h3>
                <p className="text-[13px] text-[#6B7280] leading-[1.9] mb-3">{item.desc}</p>
                <span className="text-[12px] text-[#059669] bg-[#D1FAE5] px-3 py-1 rounded-full font-medium">{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 会社概要 + CTA */}
      <section className="bg-[#065F46] py-16 md:py-24 px-8">
        <div className="max-w-[640px] mx-auto text-center text-white">
          <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-6">30〜60分の無料ミーティング</h2>
          <p className="text-white/60 text-[15px] leading-[2] mb-8">
            御社の業務内容をヒアリングし、最適なプランをご提案します。
          </p>
          <div className="bg-white/10 rounded-2xl p-6 mb-6 text-left text-[14px]">
            <div className="grid grid-cols-2 gap-y-3">
              <span className="text-white/50">会社名</span><span>合同会社FOMUS</span>
              <span className="text-white/50">代表</span><span>増尾 圭亮</span>
              <span className="text-white/50">メール</span><span>info@fomus.jp</span>
              <span className="text-white/50">サイト</span><span>studio.fomus.jp</span>
            </div>
          </div>
          <p className="text-white/40 text-[13px]">studio.fomus.jp/contact からお問い合わせください</p>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

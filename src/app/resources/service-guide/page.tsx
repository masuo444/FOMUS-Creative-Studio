'use client'

import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'

const services = [
  {
    number: '01',
    title: 'AI導入支援',
    description: 'AIチャットボット、FAQ自動応答、レビュー返信、予約管理の自動化。自社開発SaaS「KANADE AI」も提供。',
  },
  {
    number: '02',
    title: 'Web制作',
    description: 'コーポレートサイト、LP、予約システム、EC。SEO対策込み。表示速度2秒以内。',
  },
  {
    number: '03',
    title: '漫画制作',
    description: '採用漫画、企業PR漫画。最短1週間納品。MangaXに無料掲載。',
  },
  {
    number: '04',
    title: 'AI研修・リスキリング',
    description: '御社の業務データを題材にした10時間の実務特化型研修。',
  },
  {
    number: '05',
    title: 'DXコンサルティング',
    description: '業務フロー分析、IT投資の優先順位設計、ツール選定。',
  },
  {
    number: '06',
    title: '保守・運用',
    description: '24時間障害対応、セキュリティ更新、月次効果測定。',
  },
]

const works = [
  {
    name: 'Terroir HUB SAKE',
    description: '全国1,500蔵の酒蔵ポータル。AI検索・32言語対応。',
  },
  {
    name: 'MangaX',
    description: '漫画制作+掲載プラットフォーム。40言語対応。',
  },
  {
    name: 'KANADE AI',
    description: '接客業向け多言語AIコンシェルジュSaaS。8言語・7業種対応。',
  },
]

const steps = [
  {
    number: '1',
    title: 'ヒアリング（無料・オンライン）',
    description: '御社の課題を整理',
  },
  {
    number: '2',
    title: 'プロトタイプ提出（最短2週間）',
    description: '実物を見てから判断',
  },
  {
    number: '3',
    title: '導入・運用',
    description: '定着するまで支援',
  },
]

export default function ServiceGuidePage() {
  return (
    <>
      <style jsx global>{`
        @media print {
          nav, footer, .no-print, .line-floating-button {
            display: none !important;
          }
          body {
            font-size: 11pt !important;
            background: white !important;
            color: #1F2937 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print-header {
            display: flex !important;
          }
          .print-footer {
            display: block !important;
          }
          .print-page-break {
            page-break-before: always;
          }
          .screen-hero {
            display: none !important;
          }
          @page {
            margin: 15mm 12mm;
            size: A4 portrait;
          }
          section {
            page-break-inside: avoid;
          }
        }
      `}</style>

      {/* Screen nav */}
      <div className="no-print">
        <SiteNav />
      </div>

      {/* Print header (hidden on screen) */}
      <div className="print-header hidden items-center justify-between px-4 py-3 border-b border-gray-200">
        <span className="text-[14pt] font-bold tracking-tight text-[#059669]">FOMUS Creative Studio</span>
        <span className="text-[9pt] text-gray-500">{new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </div>

      <main className="min-h-screen bg-white">
        {/* Screen hero */}
        <section className="screen-hero pt-[72px] bg-gradient-to-b from-[#F0FDF4] to-white">
          <div className="max-w-[720px] mx-auto px-6 py-16 md:py-20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] uppercase tracking-[0.15em] text-[#059669] font-medium mb-4">Company Profile</p>
                <h1 className="text-[28px] md:text-[36px] font-bold text-[#1F2937] tracking-tight leading-tight mb-4">サービス案内資料</h1>
                <p className="text-[15px] text-[#6B7280] leading-relaxed">合同会社FOMUS の会社概要・サービス一覧・導入実績</p>
              </div>
              <button
                onClick={() => window.print()}
                className="no-print flex-shrink-0 inline-flex items-center gap-2 bg-[#059669] text-white text-[14px] font-medium px-6 py-3 rounded-full hover:bg-[#065F46] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                印刷 / PDF保存
              </button>
            </div>
          </div>
        </section>

        {/* Document body */}
        <div className="max-w-[720px] mx-auto px-6 pb-20">

          {/* 表紙 (print only) */}
          <div className="hidden print:flex print:flex-col print:items-center print:justify-center print:min-h-[60vh] text-center">
            <div className="w-16 h-[3px] bg-[#059669] mx-auto mb-8" />
            <h1 className="text-[28pt] font-bold text-[#1F2937] tracking-tight mb-2">FOMUS Creative Studio</h1>
            <p className="text-[14pt] text-[#059669] font-medium mb-12">サービス案内</p>
            <div className="text-[10pt] text-[#6B7280] space-y-1">
              <p>合同会社FOMUS</p>
              <p>studio.fomus.jp</p>
            </div>
          </div>

          {/* 会社概要 */}
          <section className="mb-14 print-page-break">
            <SectionHeading number="1" title="会社概要" />
            <div className="border border-[#E5E7EB] rounded-xl overflow-hidden">
              <InfoRow label="会社名" value="合同会社FOMUS" />
              <InfoRow label="代表" value="増尾 圭亮" />
              <InfoRow label="設立" value="2024年" />
              <InfoRow label="所在地" value="埼玉県坂戸市本町3-33" />
              <InfoRow label="事業内容" value="AI導入支援 / Web制作 / 漫画制作 / AI研修 / DXコンサルティング / 保守運用" isLast />
            </div>
          </section>

          {/* FOMUSの特徴 */}
          <section className="mb-14">
            <SectionHeading number="2" title="FOMUSの特徴" />
            <div className="space-y-4">
              <FeatureCard
                number="01"
                title="「AIで事業を回している会社」が導入を支援"
                points={[
                  '自社で全国1,500蔵の日本酒ポータル、多言語AIチャットボット、ECを運営',
                  '机上の空論ではなく実務に基づいた提案',
                ]}
              />
              <FeatureCard
                number="02"
                title="意思決定者が直接設計・実装"
                points={[
                  '大規模チームではなく代表が直接対応',
                  '伝言コスト・管理コストが発生しない',
                ]}
              />
              <FeatureCard
                number="03"
                title="導入して終わりではない"
                points={[
                  '定着するまで支援',
                  '月次レポートで効果測定',
                ]}
              />
            </div>
          </section>

          {/* サービス一覧 */}
          <section className="mb-14 print-page-break">
            <SectionHeading number="3" title="サービス一覧" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((s) => (
                <div key={s.number} className="border border-[#E5E7EB] rounded-xl p-5 hover:shadow-sm transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[12px] font-bold text-[#059669]">{s.number}</span>
                    <h3 className="text-[15px] font-bold text-[#1F2937]">{s.title}</h3>
                  </div>
                  <p className="text-[13px] text-[#6B7280] leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 導入実績 */}
          <section className="mb-14">
            <SectionHeading number="4" title="導入実績" />
            <div className="space-y-4">
              {works.map((w) => (
                <div key={w.name} className="flex items-start gap-4 border border-[#E5E7EB] rounded-xl p-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F0FDF4] flex items-center justify-center">
                    <span className="text-[#059669] text-[14px] font-bold">{w.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#1F2937] mb-1">{w.name}</h3>
                    <p className="text-[13px] text-[#6B7280] leading-relaxed">{w.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 導入の流れ */}
          <section className="mb-14 print-page-break">
            <SectionHeading number="5" title="導入の流れ" />
            <div className="space-y-0">
              {steps.map((s, i) => (
                <div key={s.number} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#059669] text-white text-[14px] font-bold flex items-center justify-center">{s.number}</span>
                    {i < steps.length - 1 && <div className="w-[2px] h-8 bg-[#D1FAE5]" />}
                  </div>
                  <div className="pt-2 pb-4">
                    <h3 className="text-[15px] font-bold text-[#1F2937] mb-1">{s.title}</h3>
                    <p className="text-[13px] text-[#6B7280]">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* お問い合わせ */}
          <section className="mb-12">
            <SectionHeading number="6" title="お問い合わせ" />
            <div className="bg-[#065F46] text-white rounded-xl p-6 md:p-8">
              <p className="text-[15px] leading-relaxed mb-6">
                30分の無料ミーティングで、御社に最適なプランをご提案します。
              </p>
              <div className="space-y-3 text-[14px]">
                <div className="flex items-center gap-3">
                  <span className="text-[#34D399]">&#9679;</span>
                  <span>メール: info@fomus.jp</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#34D399]">&#9679;</span>
                  <span>サイト: studio.fomus.jp</span>
                </div>
              </div>
            </div>
          </section>

          {/* 印刷ボタン（画面用） */}
          <div className="no-print text-center pb-8">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 bg-[#059669] text-white text-[14px] font-medium px-8 py-3 rounded-full hover:bg-[#065F46] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              印刷 / PDF保存
            </button>
          </div>
        </div>

        {/* Print footer (hidden on screen) */}
        <div className="print-footer hidden text-center text-[8pt] text-[#6B7280] border-t border-gray-200 pt-3 mt-8">
          <p>&copy; 2026 合同会社FOMUS / FOMUS Creative Studio &mdash; studio.fomus.jp</p>
        </div>
      </main>

      {/* Screen footer */}
      <div className="no-print">
        <SiteFooter />
      </div>
    </>
  )
}

/* ── Sub-components ── */

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#059669] text-white text-[13px] font-bold flex items-center justify-center">{number}</span>
      <h2 className="text-[20px] md:text-[24px] font-bold text-[#1F2937] tracking-tight">{title}</h2>
    </div>
  )
}

function InfoRow({ label, value, isLast }: { label: string; value: string; isLast?: boolean }) {
  return (
    <div className={`flex ${!isLast ? 'border-b border-[#E5E7EB]' : ''}`}>
      <div className="w-[140px] flex-shrink-0 bg-[#F9FAFB] px-5 py-3 text-[13px] font-medium text-[#6B7280]">{label}</div>
      <div className="px-5 py-3 text-[14px] text-[#1F2937]">{value}</div>
    </div>
  )
}

function FeatureCard({ number, title, points }: { number: string; title: string; points: string[] }) {
  return (
    <div className="border border-[#E5E7EB] rounded-xl p-5">
      <div className="flex items-center gap-3 mb-3">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F0FDF4] text-[#059669] text-[12px] font-bold flex items-center justify-center">{number}</span>
        <h3 className="text-[15px] font-bold text-[#1F2937]">{title}</h3>
      </div>
      <ul className="space-y-1.5 ml-11">
        {points.map((p, i) => (
          <li key={i} className="text-[13px] text-[#6B7280] leading-relaxed flex items-start gap-2">
            <span className="text-[#059669] mt-1 flex-shrink-0">&#8226;</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

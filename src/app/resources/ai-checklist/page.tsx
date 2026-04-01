'use client'

import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'

export default function AIChecklistPage() {
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
          <div className="max-w-[720px] mx-auto px-6 py-16 md:py-20 text-center">
            <p className="text-[12px] uppercase tracking-[0.15em] text-[#059669] font-medium mb-4">Free Resource</p>
            <h1 className="text-[28px] md:text-[36px] font-bold text-[#1F2937] tracking-tight leading-tight mb-4">AI導入チェックリスト</h1>
            <p className="text-[15px] text-[#6B7280] leading-relaxed mb-8">中小企業の経営者・DX推進担当者向け セルフ診断15項目</p>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 bg-[#059669] text-white text-[14px] font-medium px-8 py-3 rounded-full hover:bg-[#065F46] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              印刷 / PDF保存
            </button>
          </div>
        </section>

        {/* Document body */}
        <div className="max-w-[720px] mx-auto px-6 pb-20">

          {/* 表紙セクション (print) */}
          <div className="hidden print:block text-center py-12">
            <h1 className="text-[24pt] font-bold text-[#059669] mb-2">AI導入チェックリスト</h1>
            <p className="text-[11pt] text-[#6B7280] mb-8">中小企業の経営者・DX推進担当者向け セルフ診断15項目</p>
            <div className="text-[9pt] text-[#6B7280]">
              <p>発行: FOMUS Creative Studio / 合同会社FOMUS</p>
              <p>studio.fomus.jp</p>
            </div>
          </div>

          {/* セクション1: 現状診断 */}
          <section className="mb-12">
            <SectionHeading number="1" title="現状診断" subtitle="業務の自動化ポテンシャルを5項目で判定" />
            <p className="text-[14px] text-[#6B7280] mb-6">以下の項目に「はい」「いいえ」でチェックしてください。</p>
            <div className="space-y-0 border border-[#E5E7EB] rounded-xl overflow-hidden">
              <CheckItem index={1} text="問い合わせ対応に月10時間以上使っている" />
              <CheckItem index={2} text="同じ質問への回答を繰り返している" />
              <CheckItem index={3} text="レビューや口コミの返信が追いついていない" />
              <CheckItem index={4} text="予約・受付管理が電話やFAX中心" />
              <CheckItem index={5} text="データ入力・レポート作成を手作業で行っている" />
            </div>
            <div className="mt-4 bg-[#F0FDF4] border border-[#D1FAE5] rounded-xl p-4">
              <p className="text-[13px] text-[#065F46] font-medium">判定: 「はい」が3つ以上 → AIによる業務自動化の効果が大きい領域があります。</p>
              <p className="text-[12px] text-[#6B7280] mt-1">「はい」の数: <span className="inline-block w-8 border-b border-[#059669]" /> / 5項目</p>
            </div>
          </section>

          {/* セクション2: AI活用の優先順位 */}
          <section className="mb-12">
            <SectionHeading number="2" title="AI活用の優先順位" subtitle="「頻度 × 時間 × ミス率」で優先度を判定" />
            <p className="text-[14px] text-[#6B7280] mb-6">各業務について「高 / 中 / 低」を記入し、総合優先度を判定してください。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] border-collapse">
                <thead>
                  <tr className="bg-[#059669] text-white">
                    <th className="text-left py-3 px-4 font-medium rounded-tl-xl">業務</th>
                    <th className="text-center py-3 px-3 font-medium w-[72px]">頻度</th>
                    <th className="text-center py-3 px-3 font-medium w-[72px]">時間</th>
                    <th className="text-center py-3 px-3 font-medium w-[72px]">ミス率</th>
                    <th className="text-center py-3 px-4 font-medium w-[80px] rounded-tr-xl">優先度</th>
                  </tr>
                </thead>
                <tbody>
                  <PriorityRow index={1} task="問い合わせ・FAQ対応" />
                  <PriorityRow index={2} task="レビュー返信" />
                  <PriorityRow index={3} task="予約・スケジュール管理" />
                  <PriorityRow index={4} task="レポート・資料作成" />
                  <PriorityRow index={5} task="翻訳・多言語対応" isLast />
                </tbody>
              </table>
            </div>
            <p className="text-[12px] text-[#6B7280] mt-3">※ 3項目とも「高」の業務から優先的にAI導入を検討します。</p>
          </section>

          {/* セクション3: 導入前に確認すべきこと */}
          <section className="mb-12 print-page-break">
            <SectionHeading number="3" title="導入前に確認すべきこと" subtitle="準備不足による失敗を防ぐ5項目" />
            <p className="text-[14px] text-[#6B7280] mb-6">導入を進める前に、以下の準備が整っているか確認してください。</p>
            <div className="space-y-0 border border-[#E5E7EB] rounded-xl overflow-hidden">
              <CheckItem index={1} text="AIに任せる業務の範囲を明確にしているか" />
              <CheckItem index={2} text="社内にAI推進の担当者（兼任可）がいるか" />
              <CheckItem index={3} text="月額予算の目安を決めているか" />
              <CheckItem index={4} text="セキュリティ・個人情報の取り扱いルールがあるか" />
              <CheckItem index={5} text="「まず1つだけ」に絞る覚悟があるか" />
            </div>
            <div className="mt-4 bg-[#F0FDF4] border border-[#D1FAE5] rounded-xl p-4">
              <p className="text-[13px] text-[#065F46] font-medium">判定: 未チェックの項目がある場合、導入前に整理することで成功率が大幅に上がります。</p>
            </div>
          </section>

          {/* セクション4: ROI簡易計算シート */}
          <section className="mb-12">
            <SectionHeading number="4" title="ROI簡易計算シート" subtitle="導入効果を金額で可視化する" />
            <p className="text-[14px] text-[#6B7280] mb-6">自動化する業務の時間単価と月間作業時間を入力し、年間の削減効果を算出します。</p>

            <div className="border border-[#E5E7EB] rounded-xl overflow-hidden">
              {/* Step 1 */}
              <div className="p-5 border-b border-[#E5E7EB]">
                <p className="text-[13px] font-medium text-[#059669] mb-3">Step 1: 年間コストを算出</p>
                <div className="flex items-center gap-2 flex-wrap text-[14px] text-[#1F2937]">
                  <span>時間単価</span>
                  <InputBox placeholder="2,500" unit="円" />
                  <span>x</span>
                  <span>月間作業時間</span>
                  <InputBox placeholder="40" unit="h" />
                  <span>x 12ヶ月 =</span>
                  <InputBox placeholder="" unit="円/年" wide />
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 border-b border-[#E5E7EB]">
                <p className="text-[13px] font-medium text-[#059669] mb-3">Step 2: 年間削減効果を算出</p>
                <div className="flex items-center gap-2 flex-wrap text-[14px] text-[#1F2937]">
                  <span>年間コスト</span>
                  <InputBox placeholder="" unit="円" />
                  <span>x</span>
                  <span>削減率</span>
                  <InputBox placeholder="80" unit="%" />
                  <span>=</span>
                  <InputBox placeholder="" unit="円/年" wide />
                </div>
              </div>

              {/* Example */}
              <div className="p-5 bg-[#FAFAFA]">
                <p className="text-[12px] text-[#6B7280] mb-2">計算例:</p>
                <p className="text-[13px] text-[#1F2937]">2,500円 x 40h x 12ヶ月 = <strong className="text-[#059669]">1,200,000円</strong>（年間コスト）</p>
                <p className="text-[13px] text-[#1F2937]">1,200,000円 x 80% = <strong className="text-[#059669]">960,000円</strong>（年間削減効果）</p>
              </div>
            </div>
          </section>

          {/* セクション5: 次のステップ */}
          <section className="mb-12">
            <SectionHeading number="5" title="次のステップ" subtitle="チェック結果をもとに、具体的なプランを設計します" />

            <div className="bg-[#065F46] text-white rounded-xl p-6 md:p-8">
              <p className="text-[15px] leading-relaxed mb-6">
                このチェックリストの結果をもとに、無料でご相談いただけます。<br />
                ヒアリング後に、御社に最適なAI活用プランをご提案します。
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
                <div className="flex items-center gap-3">
                  <span className="text-[#34D399]">&#9679;</span>
                  <span>お問い合わせページ: studio.fomus.jp/contact</span>
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

function SectionHeading({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-1">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#059669] text-white text-[13px] font-bold flex items-center justify-center">{number}</span>
        <h2 className="text-[20px] md:text-[24px] font-bold text-[#1F2937] tracking-tight">{title}</h2>
      </div>
      <p className="text-[13px] text-[#6B7280] ml-11">{subtitle}</p>
    </div>
  )
}

function CheckItem({ index, text }: { index: number; text: string }) {
  return (
    <label className={`flex items-start gap-3 p-4 cursor-pointer hover:bg-[#F9FAFB] transition-colors ${index > 1 ? 'border-t border-[#E5E7EB]' : ''}`}>
      <input
        type="checkbox"
        className="mt-0.5 w-5 h-5 rounded border-[#D1D5DB] text-[#059669] focus:ring-[#059669] flex-shrink-0 accent-[#059669]"
      />
      <span className="text-[14px] text-[#1F2937] leading-relaxed">
        <span className="text-[#6B7280] text-[12px] mr-2">{index}.</span>
        {text}
      </span>
    </label>
  )
}

function PriorityRow({ index, task, isLast }: { index: number; task: string; isLast?: boolean }) {
  const rounded = isLast ? 'last:rounded-b-xl' : ''
  return (
    <tr className={`border-t border-[#E5E7EB] ${rounded}`}>
      <td className="py-3 px-4 text-[#1F2937]">
        <span className="text-[#6B7280] text-[12px] mr-2">{index}.</span>
        {task}
      </td>
      <td className="py-3 px-3 text-center"><span className="inline-block w-10 border-b border-[#D1D5DB]">&nbsp;</span></td>
      <td className="py-3 px-3 text-center"><span className="inline-block w-10 border-b border-[#D1D5DB]">&nbsp;</span></td>
      <td className="py-3 px-3 text-center"><span className="inline-block w-10 border-b border-[#D1D5DB]">&nbsp;</span></td>
      <td className="py-3 px-4 text-center"><span className="inline-block w-12 border-b-2 border-[#059669]">&nbsp;</span></td>
    </tr>
  )
}

function InputBox({ placeholder, unit, wide }: { placeholder: string; unit: string; wide?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1">
      <span className={`inline-block border-b-2 border-[#059669] text-center text-[14px] ${wide ? 'w-28' : 'w-16'}`}>
        {placeholder && <span className="text-[#D1D5DB]">{placeholder}</span>}
        {!placeholder && <span>&nbsp;</span>}
      </span>
      <span className="text-[12px] text-[#6B7280]">{unit}</span>
    </span>
  )
}

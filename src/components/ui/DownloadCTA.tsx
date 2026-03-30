import Link from 'next/link'

export default function DownloadCTA() {
  return (
    <div className="max-w-[800px] mx-auto px-6 md:px-10">
      <div className="bg-[#F0FDF4] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="text-[17px] md:text-[18px] font-bold text-[#1F2937] mb-1">AI導入チェックリスト（無料PDF）</p>
          <p className="text-[14px] text-[#6B7280] leading-[1.8]">15項目のセルフ診断で、御社に最適なAI活用方法が分かります。</p>
        </div>
        <Link
          href="/download/ai-checklist"
          className="inline-flex items-center justify-center bg-[#059669] text-white px-8 py-3 rounded-full text-[15px] font-bold hover:bg-[#047857] transition-colors min-h-[48px] whitespace-nowrap"
        >
          無料でダウンロード
        </Link>
      </div>
    </div>
  )
}

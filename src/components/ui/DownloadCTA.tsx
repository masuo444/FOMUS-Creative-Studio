import Link from 'next/link'

export default function DownloadCTA() {
  return (
    <div className="max-w-[800px] mx-auto px-6 md:px-10">
      <div className="bg-[#F0FDF4] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="text-[17px] md:text-[18px] font-bold text-[#1F2937] mb-1">サービス案内資料（無料）</p>
          <p className="text-[14px] text-[#6B7280] leading-[1.8]">AI導入・Web制作・漫画制作・AI研修の詳細をまとめた資料をお届けします。</p>
        </div>
        <Link
          href="/download/ai-checklist"
          className="inline-flex items-center justify-center bg-[#059669] text-white px-8 py-3 rounded-full text-[15px] font-bold hover:bg-[#047857] transition-colors min-h-[48px] whitespace-nowrap"
        >
          資料請求（無料）
        </Link>
      </div>
    </div>
  )
}

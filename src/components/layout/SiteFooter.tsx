import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="bg-[#065F46] py-16 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          <div>
            <p className="text-[15px] font-bold mb-1 text-white">FOMUS Creative Studio</p>
            <p className="text-[13px] text-white/50">合同会社FOMUS</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-3 text-[14px] text-white/60">
            <Link href="/services" className="hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/10 min-h-[44px] flex items-center">サービス</Link>
            <Link href="/work" className="hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/10 min-h-[44px] flex items-center">実績</Link>
            <Link href="/company" className="hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/10 min-h-[44px] flex items-center">会社概要</Link>
            <Link href="/contact" className="hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/10 min-h-[44px] flex items-center">お問い合わせ</Link>
            <Link href="/privacy" className="hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/10 min-h-[44px] flex items-center">プライバシーポリシー</Link>
          </div>
        </div>
        <div className="h-px w-full bg-white/10 mb-8" />
        <p className="text-[13px] text-white/30">&copy; 2026 合同会社FOMUS</p>
      </div>
    </footer>
  )
}

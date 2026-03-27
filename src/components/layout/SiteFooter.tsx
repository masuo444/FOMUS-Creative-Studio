import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="bg-[#0F2B1F] border-t border-white/[0.06] py-16 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="h-px w-full mb-10" style={{ background: 'linear-gradient(90deg, #0D9668, #10B981, transparent)' }} />
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          <div>
            <p className="text-[15px] font-bold mb-1 text-white">FOMUS Creative Studio</p>
            <p className="text-[13px] text-white/40">合同会社FOMUS</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-white/50">
            <Link href="/services" className="hover:text-white transition-colors py-1 min-h-[44px] flex items-center">サービス</Link>
            <Link href="/work" className="hover:text-white transition-colors py-1 min-h-[44px] flex items-center">実績</Link>
            <Link href="/company" className="hover:text-white transition-colors py-1 min-h-[44px] flex items-center">会社概要</Link>
            <Link href="/contact" className="hover:text-white transition-colors py-1 min-h-[44px] flex items-center">お問い合わせ</Link>
            <Link href="/privacy" className="hover:text-white transition-colors py-1 min-h-[44px] flex items-center">プライバシーポリシー</Link>
          </div>
        </div>
        <p className="text-[13px] text-white/30">&copy; 2026 合同会社FOMUS</p>
      </div>
    </footer>
  )
}

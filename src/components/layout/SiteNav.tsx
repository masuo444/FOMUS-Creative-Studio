import Link from 'next/link'
import MobileMenu from '@/components/ui/MobileMenu'

export default function SiteNav() {
  return (
    <nav className="fixed w-full z-50 top-0 bg-white/90 backdrop-blur-xl border-b border-[#E5E7EB]/60">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-[15px] font-bold tracking-tight text-[#1F2937]">FOMUS Creative Studio</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-[14px] text-[#6B7280] hover:text-[#059669] transition-colors">サービス</Link>
          <Link href="/work" className="text-[14px] text-[#6B7280] hover:text-[#059669] transition-colors">実績</Link>
          <Link href="/company" className="text-[14px] text-[#6B7280] hover:text-[#059669] transition-colors">会社概要</Link>
          <Link href="/blog" className="text-[14px] text-[#6B7280] hover:text-[#059669] transition-colors">ブログ</Link>
          <Link href="/contact" className="text-[14px] bg-[#059669] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#047857] transition-colors">
            無料で相談する
          </Link>
        </div>
        <MobileMenu />
      </div>
    </nav>
  )
}

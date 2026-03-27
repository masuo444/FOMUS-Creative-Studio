import Link from 'next/link'
import MobileMenu from '@/components/ui/MobileMenu'

export default function SiteNav() {
  return (
    <nav className="fixed w-full z-50 top-0 bg-white/90 backdrop-blur-xl border-b border-[#E5E5E5]/60">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-[15px] font-bold tracking-tight text-[#1A1A1A]">FOMUS Creative Studio</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-[14px] text-[#555555] hover:text-[#0D9668] transition-colors">サービス</Link>
          <Link href="/work" className="text-[14px] text-[#555555] hover:text-[#0D9668] transition-colors">実績</Link>
          <Link href="/company" className="text-[14px] text-[#555555] hover:text-[#0D9668] transition-colors">会社概要</Link>
          <Link href="/contact" className="text-[14px] bg-[#0D9668] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#0b8059] transition-colors">
            無料で相談する
          </Link>
        </div>
        <MobileMenu />
      </div>
    </nav>
  )
}

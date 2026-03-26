import Link from 'next/link'
import MobileMenu from '@/components/ui/MobileMenu'

export default function SiteNav() {
  return (
    <nav className="fixed w-full z-50 top-0 bg-[#1A1A1A]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-[15px] font-bold tracking-tight text-white">FOMUS Creative Studio</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-[14px] text-white/60 hover:text-white transition-colors">サービス</Link>
          <Link href="/work" className="text-[14px] text-white/60 hover:text-white transition-colors">実績</Link>
          <Link href="/company" className="text-[14px] text-white/60 hover:text-white transition-colors">会社概要</Link>
          <Link href="/contact" className="text-[14px] bg-[var(--gold)] text-[#1A1A1A] px-6 py-2.5 rounded-lg font-bold hover:opacity-90 transition-opacity">
            無料で相談する
          </Link>
        </div>
        <MobileMenu />
      </div>
    </nav>
  )
}

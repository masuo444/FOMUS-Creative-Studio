import Link from 'next/link'
import MobileMenu from '@/components/ui/MobileMenu'

export default function SiteNav() {
  return (
    <nav className="fixed w-full z-50 top-0 bg-[var(--bg)]/90 backdrop-blur-xl">
      <div className="gold-line" />
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-[15px] font-bold tracking-tight">FOMUS Creative Studio</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-[14px] text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">サービス</Link>
          <Link href="/work" className="text-[14px] text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">実績</Link>
          <Link href="/company" className="text-[14px] text-[var(--text-sub)] hover:text-[var(--text)] transition-colors">会社概要</Link>
          <Link href="/contact" className="text-[14px] bg-[var(--gold)] text-[var(--bg-dark)] px-6 py-2.5 rounded-lg font-bold hover:opacity-90 transition-opacity">
            無料で相談する
          </Link>
        </div>
        <MobileMenu />
      </div>
    </nav>
  )
}

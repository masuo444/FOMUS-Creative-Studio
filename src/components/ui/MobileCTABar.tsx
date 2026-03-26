'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function MobileCTABar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-[#1A1A1A] border-t border-white/[0.06] px-5 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <Link
          href="/contact"
          className="block w-full text-center bg-[var(--gold)] text-[#1A1A1A] py-3.5 rounded-lg text-[15px] font-bold min-h-[48px] flex items-center justify-center"
        >
          無料で相談する
        </Link>
      </div>
    </div>
  )
}

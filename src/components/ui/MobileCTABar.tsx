'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function MobileCTABar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
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
      <div className="bg-[var(--text)] px-5 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <Link
          href="/auth/register"
          className="block w-full text-center bg-[var(--bg)] text-[var(--text)] py-3 rounded-full text-[13px] tracking-[0.05em] font-medium"
        >
          無料診断を予約する
        </Link>
      </div>
    </div>
  )
}

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
      <div className="bg-white border-t border-[#E5E5E5] px-5 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <Link
          href="/contact"
          className="block w-full text-center bg-[#0D9668] text-white py-3.5 rounded-lg text-[15px] font-bold min-h-[48px] flex items-center justify-center hover:bg-[#0b8059] transition-colors"
        >
          無料で相談する
        </Link>
      </div>
    </div>
  )
}

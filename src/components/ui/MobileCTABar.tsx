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
      <div className="bg-white/95 backdrop-blur-lg border-t border-[#E5E7EB] px-5 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <Link
          href="/contact"
          className="block w-full text-center bg-[#059669] text-white py-3.5 rounded-full text-[15px] font-bold min-h-[48px] flex items-center justify-center hover:bg-[#047857] transition-colors"
        >
          無料で相談する
        </Link>
      </div>
    </div>
  )
}

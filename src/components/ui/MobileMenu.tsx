'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'サービス', href: '/services' },
  { label: '実績', href: '/work' },
  { label: '会社概要', href: '/company' },
  { label: 'ブログ', href: '/blog' },
  { label: 'FAQ', href: '/#faq' },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-[6px]"
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <span className={`block w-5 h-[1.5px] transition-all duration-300 ${open ? 'rotate-45 translate-y-[7.5px] bg-[#1F2937]' : 'bg-[#1F2937]'}`} />
        <span className={`block w-5 h-[1.5px] bg-[#1F2937] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-[1.5px] transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7.5px] bg-[#1F2937]' : 'bg-[#1F2937]'}`} />
      </button>

      <div className={`fixed inset-0 z-50 bg-white transition-opacity duration-500 md:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Soft green blob decorations */}
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-[#10B981] opacity-[0.06] blur-[120px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[200px] h-[200px] rounded-full bg-[#059669] opacity-[0.04] blur-[100px]" />

        <div className="flex flex-col items-start justify-center h-full px-10">
          <nav className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[28px] font-bold tracking-tight text-[#1F2937] hover:text-[#059669] transition-colors"
                style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-12">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-block bg-[#059669] text-white px-8 py-4 rounded-full text-[15px] font-bold hover:bg-[#047857] transition-colors"
            >
              無料で相談する
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

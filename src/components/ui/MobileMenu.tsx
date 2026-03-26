'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'サービス', href: '/services' },
  { label: '実績', href: '/work' },
  { label: '会社概要', href: '/company' },
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
        <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
        <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
      </button>

      <div className={`fixed inset-0 z-50 bg-[var(--bg)] transition-opacity duration-500 md:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-start justify-center h-full px-10">
          <nav className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[28px] font-bold tracking-tight text-[var(--text)]"
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
              className="inline-block bg-[var(--bg-dark)] text-white px-8 py-4 rounded-lg text-[15px] font-medium"
            >
              無料で相談する
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

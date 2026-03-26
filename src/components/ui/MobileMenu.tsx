'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'FAQ', href: '#faq' },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-[6px]"
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <span
          className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${
            open ? 'rotate-45 translate-y-[7.5px]' : ''
          }`}
        />
        <span
          className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${
            open ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${
            open ? '-rotate-45 -translate-y-[7.5px]' : ''
          }`}
        />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[var(--bg)] transition-opacity duration-500 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full px-10">
          <nav className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[32px] font-light tracking-[-0.02em] text-[var(--text)] transition-opacity duration-300 hover:opacity-60"
                style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-16">
            <Link
              href="/auth/register"
              onClick={() => setOpen(false)}
              className="inline-block bg-[var(--text)] text-[var(--bg)] px-8 py-3.5 rounded-full text-[13px] tracking-[0.05em] font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

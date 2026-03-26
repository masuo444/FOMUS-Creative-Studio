'use client'

import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="border-b border-[var(--border)]">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left group"
          >
            <span className="text-[15px] font-medium pr-4 group-hover:text-[var(--accent)] transition-colors font-[family-name:var(--font-noto-sans-jp)]">
              {item.q}
            </span>
            <span
              className={`text-xl text-[var(--text-muted)] transition-transform duration-300 flex-shrink-0 ${
                open === i ? 'rotate-45 text-[var(--accent)]' : ''
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${
              open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="pb-5 text-sm text-[var(--text-sub)] leading-[2] font-[family-name:var(--font-noto-sans-jp)] font-light">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

'use client'

import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-0">
      {items.map((item, i) => (
        <div
          key={i}
          className="border-b border-[var(--border)] transition-colors"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-6 text-left group"
          >
            <span className="text-[15px] font-[family-name:var(--font-noto-sans-jp)] font-light text-[var(--white)] pr-4 group-hover:text-[var(--magenta)] transition-colors">
              {item.q}
            </span>
            <span
              className={`font-[family-name:var(--font-display)] text-2xl text-[var(--dimmer)] transition-transform duration-300 flex-shrink-0 ${
                open === i ? 'rotate-45 text-[var(--magenta)]' : ''
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
            <p className="pb-6 text-[14px] text-[var(--dimmer)] leading-[2] font-[family-name:var(--font-noto-sans-jp)] font-light">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

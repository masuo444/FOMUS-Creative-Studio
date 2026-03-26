'use client'

import { useState } from 'react'

interface FAQItem { q: string; a: string }

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
            <span className="text-[15px] font-medium pr-6 group-hover:text-[var(--accent)] transition-colors">
              {item.q}
            </span>
            <span className={`text-[18px] text-[var(--text-muted)] flex-shrink-0 transition-transform duration-300 ${
              open === i ? 'rotate-45 text-[var(--accent)]' : ''
            }`}>
              +
            </span>
          </button>
          <div className={`grid transition-all duration-500 ${
            open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}>
            <div className="overflow-hidden">
              <p className="pb-5 text-[14px] text-[var(--text-sub)] leading-[2]">
                {item.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

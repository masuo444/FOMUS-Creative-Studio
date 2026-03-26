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
            className="w-full flex items-center justify-between py-6 text-left group"
          >
            <span className="text-[15px] font-normal leading-relaxed pr-8 group-hover:text-[var(--accent)] transition-colors duration-300">
              {item.q}
            </span>
            <span className={`w-5 h-5 flex items-center justify-center border rounded-full text-xs flex-shrink-0 transition-all duration-500 ${
              open === i
                ? 'border-[var(--accent)] text-[var(--accent)] rotate-45'
                : 'border-[var(--border)] text-[var(--text-muted)]'
            }`}>
              +
            </span>
          </button>
          <div className={`grid transition-all duration-500 ease-out ${
            open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}>
            <div className="overflow-hidden">
              <p className="pb-6 text-[14px] text-[var(--text-sub)] leading-[2] font-light max-w-[540px]">
                {item.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

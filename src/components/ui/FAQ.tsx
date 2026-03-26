'use client'

import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-white/10 rounded-xl overflow-hidden transition-colors hover:border-white/20"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <span className="text-sm font-medium text-white pr-4">{item.q}</span>
            <span
              className={`text-white/40 text-xl transition-transform duration-300 flex-shrink-0 ${
                open === i ? 'rotate-45' : ''
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
            <p className="px-5 pb-5 text-sm text-white/60 leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

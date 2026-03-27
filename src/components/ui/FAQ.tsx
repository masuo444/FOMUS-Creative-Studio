'use client'

import { useState } from 'react'

interface FAQItem { q: string; a: string }

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className={`rounded-2xl border transition-all duration-300 ${
          open === i ? 'border-[#059669]/30 bg-[#F0FDF4]' : 'border-[#E5E7EB] bg-white'
        }`}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 md:py-6 text-left group min-h-[56px]"
          >
            <span className={`text-[15px] md:text-[16px] font-medium pr-6 transition-colors ${
              open === i ? 'text-[#059669]' : 'group-hover:text-[#059669]'
            }`}>
              {item.q}
            </span>
            <span className={`text-[20px] flex-shrink-0 transition-all duration-300 w-[44px] h-[44px] flex items-center justify-center rounded-full ${
              open === i ? 'rotate-45 text-white bg-[#059669]' : 'text-[#9CA3AF] bg-[#F0FDF4]'
            }`}>
              +
            </span>
          </button>
          <div className={`grid transition-all duration-500 ${
            open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}>
            <div className="overflow-hidden">
              <p className="px-6 pb-6 text-[14px] md:text-[15px] text-[#6B7280] leading-[2]">
                {item.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

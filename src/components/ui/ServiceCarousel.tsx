'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

interface Service {
  title: string
  en: string
  desc: string
  href: string
  image: string
  tags: string[]
  metric: string
  metricLabel: string
}

export default function ServiceCarousel({ services }: { services: Service[] }) {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % services.length)
  }, [services.length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + services.length) % services.length)
  }, [services.length])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* メインスライド */}
      <div className="relative overflow-hidden rounded-3xl border border-[#E5E7EB]">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* 左: 画像（3/5） */}
          <div className="relative overflow-hidden md:col-span-3 bg-[#F0FDF4]">
            {services.map((item, i) => (
              <div
                key={item.title}
                className="absolute inset-0 transition-all duration-700 ease-in-out"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? 'scale(1)' : 'scale(1.05)',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover min-h-[260px] md:min-h-[460px]"
                />
              </div>
            ))}
            {/* ナンバーオーバーレイ */}
            <div className="absolute top-5 left-5 z-10">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur text-[#059669] text-[14px] font-bold shadow-lg">
                {String(current + 1).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* 右: テキスト（2/5） */}
          <div className="md:col-span-2 bg-white flex flex-col">
            {services.map((item, i) => (
              <div
                key={item.title}
                className="flex-1 flex flex-col"
                style={{
                  display: i === current ? 'flex' : 'none',
                  animation: i === current ? 'fadeSlideUp 0.5s ease-out' : 'none',
                }}
              >
                {/* メトリクス帯 */}
                <div className="px-8 pt-8 pb-4 flex items-end gap-2">
                  <span className="text-[40px] md:text-[48px] font-bold text-[#059669] leading-none">{item.metric}</span>
                  <span className="text-[13px] text-[#6B7280] pb-1.5">{item.metricLabel}</span>
                </div>

                {/* コンテンツ */}
                <div className="px-8 pb-6 flex-1">
                  <p className="text-[#059669] text-[11px] font-bold tracking-[0.2em] uppercase mb-2">{item.en}</p>
                  <h3 className="text-[24px] md:text-[28px] font-bold text-[#1F2937] tracking-tight mb-3 leading-[1.3]">{item.title}</h3>
                  <p className="text-[14px] md:text-[15px] text-[#6B7280] leading-[2] mb-5">{item.desc}</p>

                  {/* タグ */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[11px] text-[#059669] bg-[#F0FDF4] border border-[#D1FAE5] px-3 py-1 rounded-full font-medium">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* ボタン */}
                <div className="px-8 pb-8">
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center bg-[#059669] text-white px-7 py-3 rounded-full text-[14px] font-bold hover:bg-[#047857] transition-colors min-h-[44px]"
                  >
                    詳しく見る →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* コントロール */}
      <div className="flex items-center justify-between mt-6">
        {/* ドットナビ */}
        <div className="flex items-center gap-3">
          {services.map((item, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group flex items-center gap-2"
            >
              <span
                className="block h-[3px] rounded-full transition-all duration-500"
                style={{
                  width: i === current ? '48px' : '16px',
                  backgroundColor: i === current ? '#059669' : '#D1D5DB',
                }}
              />
              {i === current && (
                <span className="text-[12px] text-[#059669] font-bold tracking-wide hidden md:inline">
                  {item.en}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* 矢印ボタン */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:border-[#059669] hover:text-[#059669] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:border-[#059669] hover:text-[#059669] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

'use client'

import { useState } from 'react'

export default function DownloadForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = {
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
    }

    try {
      await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    } catch {
      // API未実装でもUI上は成功扱い
    }

    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 md:p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#D1FAE5] flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M7 14L12 19L21 9" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-[18px] font-bold text-[#1F2937] mb-2">メールをご確認ください。</p>
        <p className="text-[14px] text-[#6B7280] leading-[1.8]">ダウンロードリンクをお送りしました。</p>
      </div>
    )
  }

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
      <h3 className="text-[18px] font-bold text-[#1F2937] mb-6">無料ダウンロード</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="company" className="block text-[13px] font-medium text-[#6B7280] mb-1.5">会社名</label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className="w-full px-4 py-3 text-[16px] text-[#1F2937] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#059669]/30 focus:border-[#059669] transition-colors"
            placeholder="株式会社FOMUS"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-[13px] font-medium text-[#6B7280] mb-1.5">お名前</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 text-[16px] text-[#1F2937] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#059669]/30 focus:border-[#059669] transition-colors"
            placeholder="山田 太郎"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[13px] font-medium text-[#6B7280] mb-1.5">メールアドレス</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 text-[16px] text-[#1F2937] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#059669]/30 focus:border-[#059669] transition-colors"
            placeholder="info@example.com"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#059669] text-white text-[15px] font-bold py-3.5 rounded-full hover:bg-[#047857] transition-colors min-h-[48px] disabled:opacity-60"
        >
          {loading ? '送信中...' : '無料でダウンロードする'}
        </button>
      </form>
      <p className="text-[11px] text-[#9CA3AF] mt-4 leading-[1.6]">
        入力いただいた情報は、ダウンロードリンクの送付とサービスのご案内にのみ使用します。
      </p>
    </div>
  )
}

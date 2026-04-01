'use client'

import { useState } from 'react'

export default function DownloadForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const form = e.currentTarget
    const data = {
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
    }

    try {
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }

    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 md:p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#D1FAE5] flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M7 14L12 19L21 9" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-[18px] font-bold text-[#1F2937] mb-2">メールをご確認ください</p>
        <p className="text-[14px] text-[#6B7280] leading-[1.8]">
          ご入力いただいたメールアドレスに<br />
          資料のダウンロードリンクをお送りしました。
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
      <h3 className="text-[18px] font-bold text-[#1F2937] mb-6">無料で資料請求</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="company" className="flex items-center gap-2 mb-1.5">
            <span className="text-[13px] font-medium text-[#6B7280]">会社名</span>
            <span className="text-[10px] font-bold text-white bg-[#059669] px-1.5 py-0.5 rounded">必須</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className="w-full px-4 py-3 text-[16px] text-[#1F2937] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#059669]/30 focus:border-[#059669] transition-colors"
            placeholder="株式会社○○"
          />
        </div>
        <div>
          <label htmlFor="name" className="flex items-center gap-2 mb-1.5">
            <span className="text-[13px] font-medium text-[#6B7280]">お名前</span>
            <span className="text-[10px] font-bold text-white bg-[#059669] px-1.5 py-0.5 rounded">必須</span>
          </label>
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
          <label htmlFor="email" className="flex items-center gap-2 mb-1.5">
            <span className="text-[13px] font-medium text-[#6B7280]">メールアドレス</span>
            <span className="text-[10px] font-bold text-white bg-[#059669] px-1.5 py-0.5 rounded">必須</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 text-[16px] text-[#1F2937] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#059669]/30 focus:border-[#059669] transition-colors"
            placeholder="info@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="flex items-center gap-2 mb-1.5">
            <span className="text-[13px] font-medium text-[#6B7280]">電話番号</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full px-4 py-3 text-[16px] text-[#1F2937] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#059669]/30 focus:border-[#059669] transition-colors"
            placeholder="090-XXXX-XXXX"
          />
        </div>

        {error && (
          <p className="text-[13px] text-red-500">送信に失敗しました。時間をおいて再度お試しください。</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#059669] text-white text-[15px] font-bold py-3.5 rounded-full hover:bg-[#047857] transition-colors min-h-[48px] disabled:opacity-60"
        >
          {loading ? '送信中...' : '無料で資料をダウンロードする'}
        </button>
      </form>
      <p className="text-[11px] text-[#9CA3AF] mt-4 leading-[1.6]">
        入力いただいた情報は、資料の送付とサービスのご案内にのみ使用します。
      </p>
    </div>
  )
}

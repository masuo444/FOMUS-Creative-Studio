'use client'

import { useState } from 'react'
import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', type: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', company: '', phone: '', type: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="min-h-screen bg-[#F5F5F5]">
        <SiteNav />
        <div className="flex items-center justify-center min-h-screen px-6">
          <div className="text-center max-w-[480px]">
            <div className="w-16 h-16 rounded-full bg-[#D1FAE5] flex items-center justify-center mx-auto mb-6">
              <span className="text-[#059669] text-[28px]">✓</span>
            </div>
            <h1 className="text-[24px] font-bold tracking-tight mb-4 text-[#1F2937]">お問い合わせを受け付けました。</h1>
            <p className="text-[15px] text-[#6B7280] leading-[2] mb-8">
              内容を確認の上、1営業日以内にご連絡いたします。
            </p>
            <Link href="/" className="text-[14px] text-[#059669] font-medium hover:underline">
              ← トップページに戻る
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <SiteNav />

      {/* Breadcrumb + Title area */}
      <section className="pt-[72px] bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[800px] mx-auto px-6 py-8 md:py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] text-[#9CA3AF] mb-6">
            <Link href="/" className="hover:text-[#059669] transition-colors">TOP</Link>
            <span>›</span>
            <span className="text-[#1F2937]">お問い合わせ</span>
          </div>
          <h1 className="text-[28px] md:text-[36px] font-bold tracking-tight text-[#1F2937]">お問い合わせ</h1>
        </div>
      </section>

      {/* Form area on gray bg */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-[800px] mx-auto">

          {/* Description card */}
          <div className="bg-white rounded-xl p-8 md:p-10 mb-8 shadow-sm">
            <p className="text-[15px] text-[#6B7280] leading-[2]">
              サービスに関するご質問・ご相談は、以下のフォームよりお問い合わせください。
              <br />
              内容を確認の上、1営業日以内にご連絡いたします。
            </p>
          </div>

          {/* Form card */}
          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-xl p-8 md:p-10 mb-8 shadow-sm">
              <div className="space-y-8">

                {/* 会社名 */}
                <div>
                  <label className="flex items-center gap-3 mb-3">
                    <span className="text-[15px] font-bold text-[#1F2937]">会社名</span>
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3.5 text-[16px] bg-white text-[#1F2937] focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/10 transition-all min-h-[48px]"
                    placeholder="株式会社○○"
                  />
                </div>

                {/* お名前 */}
                <div>
                  <label className="flex items-center gap-3 mb-3">
                    <span className="text-[15px] font-bold text-[#1F2937]">お名前</span>
                    <span className="text-[11px] font-bold text-white bg-[#059669] px-2 py-0.5 rounded">必須</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3.5 text-[16px] bg-white text-[#1F2937] focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/10 transition-all min-h-[48px]"
                    placeholder="山田 太郎"
                  />
                </div>

                {/* メールアドレス */}
                <div>
                  <label className="flex items-center gap-3 mb-3">
                    <span className="text-[15px] font-bold text-[#1F2937]">Eメールアドレス</span>
                    <span className="text-[11px] font-bold text-white bg-[#059669] px-2 py-0.5 rounded">必須</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3.5 text-[16px] bg-white text-[#1F2937] focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/10 transition-all min-h-[48px]"
                    placeholder="info@example.com"
                  />
                  <p className="text-[12px] text-[#9CA3AF] mt-2">※携帯電話のメールアドレスの場合、返信メールが届かないことがあります。</p>
                </div>

                {/* 電話番号 */}
                <div>
                  <label className="flex items-center gap-3 mb-3">
                    <span className="text-[15px] font-bold text-[#1F2937]">電話番号</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3.5 text-[16px] bg-white text-[#1F2937] focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/10 transition-all min-h-[48px]"
                    placeholder="090-XXXX-XXXX"
                  />
                </div>

                {/* お問い合わせ種類 */}
                <div>
                  <label className="flex items-center gap-3 mb-3">
                    <span className="text-[15px] font-bold text-[#1F2937]">お問い合わせ種類</span>
                    <span className="text-[11px] font-bold text-white bg-[#059669] px-2 py-0.5 rounded">必須</span>
                  </label>
                  <select
                    required
                    value={form.type}
                    onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                    className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3.5 text-[16px] bg-white text-[#1F2937] focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/10 transition-all min-h-[48px] appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%239CA3AF' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                  >
                    <option value="">選択してください</option>
                    <option value="AI導入について">AI導入について</option>
                    <option value="Web制作について">Web制作について</option>
                    <option value="DXコンサルティングについて">DXコンサルティングについて</option>
                    <option value="漫画・クリエイティブ制作について">漫画・クリエイティブ制作について</option>
                    <option value="AI研修について">AI研修について</option>
                    <option value="保守・運用について">保守・運用について</option>
                    <option value="その他">その他</option>
                  </select>
                </div>

                {/* お問い合わせ内容 */}
                <div>
                  <label className="flex items-center gap-3 mb-3">
                    <span className="text-[15px] font-bold text-[#1F2937]">お問い合わせ内容</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    rows={6}
                    className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3.5 text-[16px] bg-white text-[#1F2937] focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/10 transition-all resize-none"
                    placeholder=""
                  />
                </div>

              </div>
            </div>

            {/* Privacy policy card */}
            <div className="bg-white rounded-xl p-8 md:p-10 mb-8 shadow-sm">
              <p className="text-[14px] text-[#6B7280] leading-[2]">
                当社（合同会社FOMUS）は、お客様より取得する個人情報を、お問い合わせいただいたご質問やご要望へ回答する目的でのみ利用いたします。なお、当社の個人情報保護に関する基本方針については、以下の
                <Link href="/privacy" className="text-[#059669] hover:underline">プライバシーポリシー</Link>
                をご確認ください。
              </p>
            </div>

            {/* Confirm note card */}
            <div className="bg-white rounded-xl p-8 md:p-10 mb-10 shadow-sm">
              <p className="text-[14px] text-[#6B7280]">
                記入内容に問題がなければ「確認する」ボタンを押してください。
              </p>
            </div>

            {/* Error */}
            {status === 'error' && (
              <div className="bg-red-50 text-red-600 text-[14px] px-6 py-4 rounded-xl mb-8">
                送信に失敗しました。時間をおいて再度お試しください。
              </div>
            )}

            {/* Submit button — CyberAgent style: outline pill with arrow */}
            <div className="text-center">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center gap-3 border-2 border-[#059669] text-[#059669] px-14 py-4 rounded-full text-[16px] font-bold hover:bg-[#059669] hover:text-white transition-all disabled:opacity-50 min-h-[56px]"
              >
                {status === 'sending' ? '送信中...' : '確認する'}
                <span className="text-[18px]">›</span>
              </button>
            </div>
          </form>

        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

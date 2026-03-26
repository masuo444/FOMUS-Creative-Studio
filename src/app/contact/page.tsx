'use client'

import { useState } from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
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
        setForm({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-6">
        <div className="text-center max-w-[480px]">
          <div className="gold-line w-12 mx-auto mb-6" />
          <h1 className="text-[28px] font-bold tracking-tight mb-4 text-white">お問い合わせを受け付けました。</h1>
          <p className="text-[15px] text-white/50 leading-[2] mb-8">
            内容を確認の上、1営業日以内にご連絡いたします。
          </p>
          <Link href="/" className="text-[14px] text-[var(--gold)] font-medium hover:opacity-80 transition-opacity">
            ← トップに戻る
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <SiteNav />

      {/* Dark hero area */}
      <section className="pt-[72px] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-[#1a4a3a] opacity-15 blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[560px] mx-auto px-6 py-16 md:py-20">
          <ScrollReveal>
            <div className="gold-line w-12 mb-6" />
            <h1 className="text-white text-[clamp(28px,4vw,44px)] font-bold tracking-tight mb-4">お問い合わせ</h1>
            <p className="text-[15px] md:text-[16px] text-white/40 leading-[2]">
              御社の課題について、オンライン面談でお話を伺います。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Cream form area */}
      <section className="bg-[#F5F3EE] py-16 md:py-20 px-6">
        <div className="max-w-[560px] mx-auto">
          {/* 安心材料 */}
          <ScrollReveal>
            <div className="bg-white rounded-xl p-5 mb-10 border border-[#E8E6DE]">
              <div className="flex flex-col gap-3 text-[14px] text-[#4A4A46]">
                <div className="flex items-start gap-3">
                  <span className="text-[var(--gold)] font-bold text-[16px] leading-none mt-0.5">&#10003;</span>
                  <span>ご相談は<strong className="text-[#1A1A18]">完全無料</strong>です（オンライン面談）</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[var(--gold)] font-bold text-[16px] leading-none mt-0.5">&#10003;</span>
                  <span>営業電話・しつこい後追いは<strong className="text-[#1A1A18]">一切しません</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[var(--gold)] font-bold text-[16px] leading-none mt-0.5">&#10003;</span>
                  <span>相談後に<strong className="text-[#1A1A18]">契約の義務はありません</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[var(--gold)] font-bold text-[16px] leading-none mt-0.5">&#10003;</span>
                  <span><strong className="text-[#1A1A18]">1営業日以内</strong>にご返信します</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[14px] md:text-[15px] font-medium mb-2 text-[#1A1A18]">お名前 <span className="text-[var(--gold)]">*</span></label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border border-[#D8D6D0] rounded-lg px-4 py-3.5 text-[16px] bg-white text-[#1A1A18] focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/20 transition-colors min-h-[48px]"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-[14px] md:text-[15px] font-medium mb-2 text-[#1A1A18]">メールアドレス <span className="text-[var(--gold)]">*</span></label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full border border-[#D8D6D0] rounded-lg px-4 py-3.5 text-[16px] bg-white text-[#1A1A18] focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/20 transition-colors min-h-[48px]"
                  placeholder="info@example.com"
                />
              </div>
              <div>
                <label className="block text-[14px] md:text-[15px] font-medium mb-2 text-[#1A1A18]">会社名</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                  className="w-full border border-[#D8D6D0] rounded-lg px-4 py-3.5 text-[16px] bg-white text-[#1A1A18] focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/20 transition-colors min-h-[48px]"
                  placeholder="株式会社○○"
                />
              </div>
              <div>
                <label className="block text-[14px] md:text-[15px] font-medium mb-2 text-[#1A1A18]">ご相談内容 <span className="text-[var(--gold)]">*</span></label>
                <textarea
                  required
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  rows={5}
                  className="w-full border border-[#D8D6D0] rounded-lg px-4 py-3.5 text-[16px] bg-white text-[#1A1A18] focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/20 transition-colors resize-none"
                  placeholder="例：業務を効率化したい / サイトをリニューアルしたい / 何から始めればいいか分からない"
                />
              </div>

              {status === 'error' && (
                <div className="bg-red-50 text-red-600 text-[14px] px-4 py-3 rounded-lg">
                  送信に失敗しました。時間をおいて再度お試しください。
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[var(--gold)] text-[#1A1A1A] py-4 rounded-lg text-[16px] font-bold hover:opacity-90 transition-opacity disabled:opacity-50 min-h-[52px]"
              >
                {status === 'sending' ? '送信中...' : '無料で相談する'}
              </button>

              <p className="text-[13px] text-[#8E8D88] text-center">
                送信後、1営業日以内にご返信します。
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

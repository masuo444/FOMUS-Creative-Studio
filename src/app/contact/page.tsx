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
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-[480px]">
          <div className="gold-line w-12 mx-auto mb-6" />
          <h1 className="text-[28px] font-bold tracking-tight mb-4">お問い合わせを受け付けました。</h1>
          <p className="text-[15px] text-[var(--text-sub)] leading-[2] mb-8">
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
    <div className="min-h-screen"><SiteNav />
      <div className="h-[72px]" />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[560px] mx-auto">
          <ScrollReveal>
            <div className="gold-line w-12 mb-6" />
            <h1 className="text-[clamp(28px,4vw,44px)] font-bold tracking-tight mb-4">お問い合わせ</h1>
            <p className="text-[15px] text-[var(--text-sub)] leading-[2] mb-12">
              御社の課題について、30分のオンライン面談でお話を伺います。
              以下のフォームからお気軽にご連絡ください。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[14px] font-medium mb-2">お名前 <span className="text-[var(--gold)]">*</span></label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border border-[var(--border)] rounded-lg px-4 py-3 text-[15px] bg-white focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/20 transition-colors"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-[14px] font-medium mb-2">メールアドレス <span className="text-[var(--gold)]">*</span></label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full border border-[var(--border)] rounded-lg px-4 py-3 text-[15px] bg-white focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/20 transition-colors"
                  placeholder="info@example.com"
                />
              </div>
              <div>
                <label className="block text-[14px] font-medium mb-2">会社名</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                  className="w-full border border-[var(--border)] rounded-lg px-4 py-3 text-[15px] bg-white focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/20 transition-colors"
                  placeholder="株式会社○○"
                />
              </div>
              <div>
                <label className="block text-[14px] font-medium mb-2">ご相談内容 <span className="text-[var(--gold)]">*</span></label>
                <textarea
                  required
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  rows={5}
                  className="w-full border border-[var(--border)] rounded-lg px-4 py-3 text-[15px] bg-white focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/20 transition-colors resize-none"
                  placeholder="例：AIで業務を効率化したい / サイトをリニューアルしたい / 何から始めればいいか分からない"
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
                className="w-full bg-[var(--bg-dark)] text-white py-4 rounded-lg text-[15px] font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === 'sending' ? '送信中...' : '送信する'}
              </button>

              <p className="text-[13px] text-[var(--text-muted)] text-center">
                営業電話・しつこい後追いは一切行いません。1営業日以内にご返信します。
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}

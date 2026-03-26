'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Save, MessageSquare, Bot, Globe } from 'lucide-react'
import type { Facility } from '@/lib/types'

export default function FacilitySettings({ facility }: { facility: Facility }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    name: facility.name,
    description: facility.description || '',
    address: facility.address || '',
    phone: facility.phone || '',
    website_url: facility.website_url || '',
    line_channel_secret: facility.line_channel_secret || '',
    line_channel_access_token: facility.line_channel_access_token || '',
    line_bot_active: facility.line_bot_active,
    ai_tone: facility.ai_tone || 'polite',
    supported_languages: facility.supported_languages,
  })

  const handleSave = async () => {
    setLoading(true)
    const supabase = createClient()

    const { error } = await supabase
      .from('facilities')
      .update({
        name: form.name,
        description: form.description || null,
        address: form.address || null,
        phone: form.phone || null,
        website_url: form.website_url || null,
        line_channel_secret: form.line_channel_secret || null,
        line_channel_access_token: form.line_channel_access_token || null,
        line_bot_active: form.line_bot_active,
        ai_tone: form.ai_tone,
        supported_languages: form.supported_languages,
        updated_at: new Date().toISOString(),
      })
      .eq('id', facility.id)

    setLoading(false)
    if (!error) {
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
      router.refresh()
    }
  }

  const languages = [
    { code: 'ja', label: '日本語' },
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'ko', label: '한국어' },
    { code: 'th', label: 'ภาษาไทย' },
    { code: 'ar', label: 'العربية' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' },
  ]

  const toggleLang = (code: string) => {
    setForm(f => ({
      ...f,
      supported_languages: f.supported_languages.includes(code)
        ? f.supported_languages.filter(l => l !== code)
        : [...f.supported_languages, code],
    }))
  }

  return (
    <div className="max-w-2xl space-y-8">
      {/* Basic Info */}
      <section className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <Globe className="w-4 h-4 text-gray-400" />
          基本情報
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">施設名</label>
            <input
              type="text"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">説明</label>
            <textarea
              value={form.description}
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
              rows={2}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">住所</label>
              <input type="text" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">電話番号</label>
              <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* LINE Integration */}
      <section className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-green-500" />
          LINE連携
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Channel Secret</label>
            <input
              type="password"
              value={form.line_channel_secret}
              onChange={e => setForm(f => ({ ...f, line_channel_secret: e.target.value }))}
              placeholder="LINE Developers で取得"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm font-mono"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Channel Access Token</label>
            <input
              type="password"
              value={form.line_channel_access_token}
              onChange={e => setForm(f => ({ ...f, line_channel_access_token: e.target.value }))}
              placeholder="LINE Developers で取得"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm font-mono"
            />
          </div>
          <div className="flex items-center gap-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={form.line_bot_active}
                onChange={e => setForm(f => ({ ...f, line_bot_active: e.target.checked }))}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-gray-200 peer-focus:ring-2 peer-focus:ring-black/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500" />
            </label>
            <span className="text-sm">LINE Bot を有効にする</span>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-500">
            <p className="font-medium mb-1">Webhook URL:</p>
            <code className="text-gray-700">{typeof window !== 'undefined' ? window.location.origin : 'https://your-domain.com'}/api/line/webhook</code>
          </div>
        </div>
      </section>

      {/* AI Settings */}
      <section className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <Bot className="w-4 h-4 text-blue-500" />
          AI設定
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">応答トーン</label>
            <select
              value={form.ai_tone}
              onChange={e => setForm(f => ({ ...f, ai_tone: e.target.value }))}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
            >
              <option value="polite">丁寧（でございます調）</option>
              <option value="casual">カジュアル（ですます調）</option>
              <option value="formal">フォーマル（ビジネス調）</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">対応言語</label>
            <div className="flex flex-wrap gap-2">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => toggleLang(lang.code)}
                  className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                    form.supported_languages.includes(lang.code)
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Save Button */}
      <button
        onClick={handleSave}
        disabled={loading}
        className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
      >
        <Save className="w-4 h-4" />
        {loading ? '保存中...' : saved ? '保存しました' : '設定を保存'}
      </button>
    </div>
  )
}

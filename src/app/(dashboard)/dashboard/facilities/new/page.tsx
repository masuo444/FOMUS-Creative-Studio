'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { INDUSTRY_INFO, type IndustryType } from '@/lib/types'

export default function NewFacilityPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    industry_type_id: '' as IndustryType | '',
    description: '',
    address: '',
    phone: '',
    website_url: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.industry_type_id) {
      setError('施設名と業種は必須です')
      return
    }

    setLoading(true)
    setError('')

    try {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')

      const slug = form.name
        .toLowerCase()
        .replace(/[^a-z0-9\u3040-\u9fff]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '') || `facility-${Date.now()}`

      const { data, error: dbError } = await supabase
        .from('facilities')
        .insert({
          owner_id: user.id,
          name: form.name,
          slug: `${slug}-${Date.now().toString(36)}`,
          industry_type_id: form.industry_type_id,
          description: form.description || null,
          address: form.address || null,
          phone: form.phone || null,
          website_url: form.website_url || null,
        })
        .select()
        .single()

      if (dbError) throw dbError

      // Also create facility_member for the owner
      await supabase.from('facility_members').insert({
        facility_id: data.id,
        user_id: user.id,
        role: 'owner',
      })

      router.push(`/dashboard/facilities/${data.id}`)
      router.refresh()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'エラーが発生しました')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-8">施設を追加</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Industry Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">業種を選択</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {(Object.entries(INDUSTRY_INFO) as [IndustryType, typeof INDUSTRY_INFO[IndustryType]][]).map(([key, info]) => (
              <button
                key={key}
                type="button"
                onClick={() => setForm(f => ({ ...f, industry_type_id: key }))}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  form.industry_type_id === key
                    ? 'border-black bg-gray-50'
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <span className="text-2xl">{info.icon}</span>
                <span className="text-sm font-medium">{info.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">施設名 *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            placeholder="例：京都グランドホテル"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">施設の説明</label>
          <textarea
            value={form.description}
            onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
            rows={3}
            placeholder="AIコンシェルジュに伝える施設の特徴（例：全室オーシャンビューの温泉旅館）"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black resize-none"
          />
        </div>

        {/* Address & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">住所</label>
            <input
              type="text"
              value={form.address}
              onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
              placeholder="京都市東山区..."
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">電話番号</label>
            <input
              type="tel"
              value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              placeholder="075-XXX-XXXX"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black"
            />
          </div>
        </div>

        {/* Website */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">公式サイトURL</label>
          <input
            type="url"
            value={form.website_url}
            onChange={e => setForm(f => ({ ...f, website_url: e.target.value }))}
            placeholder="https://"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black"
          />
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg">{error}</div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          {loading ? '作成中...' : '施設を作成'}
        </button>
      </form>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Plus, Pencil, Trash2, BookOpen, ChevronDown } from 'lucide-react'
import type { KnowledgeItem } from '@/lib/types'

const CATEGORIES = [
  { value: 'facility_info', label: '施設基本情報' },
  { value: 'faq', label: 'よくある質問' },
  { value: 'menu', label: 'メニュー / サービス' },
  { value: 'access', label: 'アクセス情報' },
  { value: 'policy', label: 'ポリシー（キャンセル等）' },
  { value: 'amenity', label: 'アメニティ / 設備' },
  { value: 'nearby', label: '周辺情報' },
  { value: 'event', label: 'イベント / キャンペーン' },
  { value: 'custom', label: 'カスタム' },
]

interface Props {
  facilityId: string
  items: KnowledgeItem[]
  categories: { slug: string; name_ja: string }[]
}

export default function KnowledgeManager({ facilityId, items, categories }: Props) {
  const router = useRouter()
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<KnowledgeItem | null>(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    category: 'faq',
    title: '',
    content_ja: '',
    content_en: '',
  })

  const resetForm = () => {
    setForm({ category: 'faq', title: '', content_ja: '', content_en: '' })
    setEditing(null)
    setShowForm(false)
  }

  const handleSave = async () => {
    if (!form.title || !form.content_ja) return
    setLoading(true)

    const supabase = createClient()

    if (editing) {
      await supabase
        .from('knowledge_base')
        .update({
          category: form.category,
          title: form.title,
          content_ja: form.content_ja,
          content_en: form.content_en || null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', editing.id)
    } else {
      await supabase.from('knowledge_base').insert({
        facility_id: facilityId,
        category: form.category,
        title: form.title,
        content_ja: form.content_ja,
        content_en: form.content_en || null,
      })
    }

    resetForm()
    setLoading(false)
    router.refresh()
  }

  const handleDelete = async (id: string) => {
    if (!confirm('この項目を削除しますか？')) return
    const supabase = createClient()
    await supabase.from('knowledge_base').delete().eq('id', id)
    router.refresh()
  }

  const handleEdit = (item: KnowledgeItem) => {
    setForm({
      category: item.category,
      title: item.title,
      content_ja: item.content_ja,
      content_en: item.content_en || '',
    })
    setEditing(item)
    setShowForm(true)
  }

  const grouped = CATEGORIES.map(cat => ({
    ...cat,
    items: items.filter(i => i.category === cat.value),
  })).filter(g => g.items.length > 0)

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-gray-500">{items.length}件の項目</span>
        <button
          onClick={() => { resetForm(); setShowForm(true) }}
          className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-4 h-4" />
          追加
        </button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">{editing ? '編集' : '新規追加'}</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">カテゴリ</label>
                <select
                  value={form.category}
                  onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                >
                  {CATEGORIES.map(c => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">タイトル *</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                  placeholder="例：チェックイン時間"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">日本語テキスト *</label>
              <textarea
                value={form.content_ja}
                onChange={e => setForm(f => ({ ...f, content_ja: e.target.value }))}
                rows={3}
                placeholder="AIが参照する情報を入力してください"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">英語テキスト（任意）</label>
              <textarea
                value={form.content_en}
                onChange={e => setForm(f => ({ ...f, content_en: e.target.value }))}
                rows={2}
                placeholder="English version (optional - AI will translate if not provided)"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                disabled={loading || !form.title || !form.content_ja}
                className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 disabled:opacity-50"
              >
                {loading ? '保存中...' : editing ? '更新' : '追加'}
              </button>
              <button onClick={resetForm} className="text-sm text-gray-500 hover:text-gray-700">
                キャンセル
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Knowledge Items */}
      {items.length === 0 ? (
        <div className="text-center py-16 text-gray-400 bg-white rounded-xl border border-gray-100">
          <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p className="text-sm">ナレッジベースが空です</p>
          <p className="text-xs mt-1">施設の情報やFAQを追加すると、AIがより正確に応答できるようになります</p>
        </div>
      ) : (
        <div className="space-y-6">
          {grouped.map(group => (
            <div key={group.value}>
              <h3 className="text-sm font-medium text-gray-500 mb-2">{group.label}</h3>
              <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-50">
                {group.items.map(item => (
                  <div key={item.id} className="p-4 flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.content_ja}</p>
                      {item.content_en && (
                        <p className="text-xs text-gray-400 mt-1 line-clamp-1">EN: {item.content_en}</p>
                      )}
                    </div>
                    <div className="flex gap-1">
                      <button onClick={() => handleEdit(item)} className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(item.id)} className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-gray-50">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

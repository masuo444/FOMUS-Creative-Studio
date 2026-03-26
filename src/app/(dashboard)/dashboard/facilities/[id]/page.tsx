import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MessageSquare, Star, BookOpen, Settings, Users, TrendingUp } from 'lucide-react'
import { INDUSTRY_INFO, PLAN_INFO, CHANNEL_INFO } from '@/lib/types'

export default async function FacilityPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: facility } = await supabase
    .from('facilities')
    .select('*')
    .eq('id', id)
    .single()

  if (!facility) notFound()

  const today = new Date().toISOString().split('T')[0]
  const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString()

  const [
    { count: todayMsgs },
    { count: weekMsgs },
    { count: pendingReviews },
    { count: kbItems },
    { data: recentConversations },
  ] = await Promise.all([
    supabase.from('ai_conversations').select('*', { count: 'exact', head: true })
      .eq('facility_id', id).eq('role', 'user').gte('created_at', today),
    supabase.from('ai_conversations').select('*', { count: 'exact', head: true })
      .eq('facility_id', id).eq('role', 'user').gte('created_at', weekAgo),
    supabase.from('reviews').select('*', { count: 'exact', head: true })
      .eq('facility_id', id).eq('reply_status', 'pending'),
    supabase.from('knowledge_base').select('*', { count: 'exact', head: true })
      .eq('facility_id', id).eq('is_active', true),
    supabase.from('ai_conversations').select('*')
      .eq('facility_id', id).eq('role', 'user')
      .order('created_at', { ascending: false }).limit(5),
  ])

  const industry = INDUSTRY_INFO[facility.industry_type_id as keyof typeof INDUSTRY_INFO]
  const plan = PLAN_INFO[facility.plan as keyof typeof PLAN_INFO]

  return (
    <div>
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <span className="text-4xl">{industry?.icon}</span>
          <div>
            <h1 className="text-2xl font-bold">{facility.name}</h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm text-gray-500">{industry?.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${plan?.color}`}>{plan?.label}</span>
              {facility.line_bot_active && (
                <span className="flex items-center gap-1 text-xs text-green-600">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" /> LINE稼働中
                </span>
              )}
            </div>
          </div>
        </div>
        <Link
          href={`/dashboard/facilities/${id}/settings`}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Settings className="w-4 h-4" />
          設定
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-1 text-gray-500">
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs">本日の会話</span>
          </div>
          <p className="text-2xl font-bold">{todayMsgs || 0}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-1 text-gray-500">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs">今週の会話</span>
          </div>
          <p className="text-2xl font-bold">{weekMsgs || 0}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-1 text-orange-500">
            <Star className="w-4 h-4" />
            <span className="text-xs">未返信レビュー</span>
          </div>
          <p className="text-2xl font-bold text-orange-600">{pendingReviews || 0}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-1 text-gray-500">
            <BookOpen className="w-4 h-4" />
            <span className="text-xs">ナレッジ項目</span>
          </div>
          <p className="text-2xl font-bold">{kbItems || 0}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { href: `/dashboard/facilities/${id}/conversations`, icon: MessageSquare, label: '会話ログ', desc: 'ゲストとの全会話を確認' },
          { href: `/dashboard/facilities/${id}/reviews`, icon: Star, label: 'レビュー管理', desc: 'AI返信の確認・承認' },
          { href: `/dashboard/facilities/${id}/knowledge`, icon: BookOpen, label: 'ナレッジベース', desc: 'FAQ・施設情報を管理' },
          { href: `/dashboard/facilities/${id}/settings`, icon: Settings, label: '設定', desc: 'LINE連携・AI設定' },
        ].map(item => (
          <Link
            key={item.href}
            href={item.href}
            className="bg-white rounded-xl border border-gray-100 p-5 hover:border-gray-200 hover:shadow-sm transition-all"
          >
            <item.icon className="w-5 h-5 text-gray-400 mb-3" />
            <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </Link>
        ))}
      </div>

      {/* Recent Conversations */}
      <h2 className="text-lg font-semibold mb-4">最近の会話</h2>
      {recentConversations && recentConversations.length > 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-50">
          {recentConversations.map((conv: any) => (
            <div key={conv.id} className="p-4 flex items-start gap-3">
              <span className="text-lg">{CHANNEL_INFO[conv.channel as keyof typeof CHANNEL_INFO]?.icon || '💬'}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium">{conv.channel_user_name || conv.channel_user_id?.slice(0, 8)}</span>
                  <span className="text-xs text-gray-400">{conv.detected_language.toUpperCase()}</span>
                  {conv.is_escalated && <span className="text-xs text-red-500 bg-red-50 px-1.5 py-0.5 rounded">要対応</span>}
                </div>
                <p className="text-sm text-gray-600 truncate">{conv.content}</p>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap">
                {new Date(conv.created_at).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-400 bg-white rounded-xl border border-gray-100">
          <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-30" />
          <p className="text-sm">まだ会話がありません</p>
          <p className="text-xs mt-1">LINE連携を設定すると、ゲストからの会話がここに表示されます</p>
        </div>
      )}
    </div>
  )
}

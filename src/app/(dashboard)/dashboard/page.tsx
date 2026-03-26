import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Building2, MessageSquare, Star, TrendingUp } from 'lucide-react'
import { INDUSTRY_INFO, PLAN_INFO } from '@/lib/types'
import type { Facility } from '@/lib/types'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: facilities } = await supabase
    .from('facilities')
    .select('*')
    .order('created_at', { ascending: true })

  // Get conversation stats for today
  const today = new Date().toISOString().split('T')[0]
  const { count: todayConversations } = await supabase
    .from('ai_conversations')
    .select('*', { count: 'exact', head: true })
    .gte('created_at', today)
    .eq('role', 'user')

  const { count: pendingReviews } = await supabase
    .from('reviews')
    .select('*', { count: 'exact', head: true })
    .eq('reply_status', 'pending')

  const { count: totalConversations } = await supabase
    .from('ai_conversations')
    .select('*', { count: 'exact', head: true })
    .eq('role', 'user')

  if (!facilities || facilities.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center">
        <div className="text-6xl mb-6">🏢</div>
        <h1 className="text-2xl font-bold mb-2">ようこそ、FOMUS AIへ</h1>
        <p className="text-gray-500 mb-8">まずは施設を登録して、AIツールの構築を始めましょう。</p>
        <Link
          href="/dashboard/facilities/new"
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          <Building2 className="w-4 h-4" />
          施設を登録する
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">ダッシュボード</h1>
        <Link
          href="/dashboard/facilities/new"
          className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          + 施設を追加
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard icon={Building2} label="登録施設" value={facilities.length} />
        <StatCard icon={MessageSquare} label="本日の会話" value={todayConversations || 0} />
        <StatCard icon={Star} label="未返信レビュー" value={pendingReviews || 0} accent={!!pendingReviews} />
        <StatCard icon={TrendingUp} label="累計会話" value={totalConversations || 0} />
      </div>

      {/* Facilities */}
      <h2 className="text-lg font-semibold mb-4">施設一覧</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {facilities.map((facility: Facility) => {
          const industry = INDUSTRY_INFO[facility.industry_type_id]
          const plan = PLAN_INFO[facility.plan]
          return (
            <Link
              key={facility.id}
              href={`/dashboard/facilities/${facility.id}`}
              className="bg-white rounded-xl border border-gray-100 p-5 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{industry?.icon}</span>
                  <div>
                    <h3 className="font-semibold text-sm">{facility.name}</h3>
                    <p className="text-xs text-gray-500">{industry?.label}</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${plan?.color}`}>
                  {plan?.label}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                {facility.line_bot_active && (
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    LINE稼働中
                  </span>
                )}
                <span>{facility.supported_languages.length}言語対応</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, accent }: {
  icon: React.ComponentType<{ className?: string }>; label: string; value: number; accent?: boolean
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5">
      <div className="flex items-center gap-3 mb-2">
        <Icon className={`w-4 h-4 ${accent ? 'text-orange-500' : 'text-gray-400'}`} />
        <span className="text-sm text-gray-500">{label}</span>
      </div>
      <p className={`text-2xl font-bold ${accent ? 'text-orange-600' : ''}`}>{value.toLocaleString()}</p>
    </div>
  )
}

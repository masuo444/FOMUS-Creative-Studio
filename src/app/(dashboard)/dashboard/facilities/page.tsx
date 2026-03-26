import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Building2, Plus } from 'lucide-react'
import { INDUSTRY_INFO, PLAN_INFO } from '@/lib/types'
import type { Facility } from '@/lib/types'

export default async function FacilitiesPage() {
  const supabase = await createClient()
  const { data: facilities } = await supabase
    .from('facilities')
    .select('*')
    .order('created_at', { ascending: true })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">施設一覧</h1>
        <Link
          href="/dashboard/facilities/new"
          className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-4 h-4" />
          施設を追加
        </Link>
      </div>

      {(!facilities || facilities.length === 0) ? (
        <div className="text-center py-20">
          <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 mb-4">まだ施設が登録されていません</p>
          <Link
            href="/dashboard/facilities/new"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            最初の施設を登録
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-50">
          {facilities.map((facility: Facility) => {
            const industry = INDUSTRY_INFO[facility.industry_type_id]
            const plan = PLAN_INFO[facility.plan]
            return (
              <Link
                key={facility.id}
                href={`/dashboard/facilities/${facility.id}`}
                className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{industry?.icon}</span>
                  <div>
                    <h3 className="font-semibold">{facility.name}</h3>
                    <p className="text-sm text-gray-500">{industry?.label} · {facility.address || '住所未設定'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {facility.line_bot_active && (
                    <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      LINE
                    </span>
                  )}
                  <span className={`text-xs px-2 py-1 rounded-full ${plan?.color}`}>
                    {plan?.label}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

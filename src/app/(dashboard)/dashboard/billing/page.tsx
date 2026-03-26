import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { PLAN_INFO, type Plan } from '@/lib/types'
import { Check, Zap } from 'lucide-react'

export default async function BillingPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: facilities } = await supabase
    .from('facilities')
    .select('id, name, plan, stripe_subscription_id')

  const plans: { key: Plan; features: string[] }[] = [
    { key: 'light', features: ['1つのAI機能', '月500メッセージ', 'メールサポート', '基本レポート'] },
    { key: 'standard', features: ['複数AI機能統合', '月3,000メッセージ', '全レビュー管理', '予約自動処理', '15言語対応', 'チャットサポート'] },
    { key: 'premium', features: ['フルカスタムAI基盤', 'メッセージ無制限', '全機能利用可能', '専任サポート', 'API連携', 'オンプレミス対応'] },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">プラン・請求</h1>
      <p className="text-sm text-gray-500 mb-8">IT導入補助金2026対応 — お客様の実質負担を最大75%軽減</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {plans.map(plan => {
          const info = PLAN_INFO[plan.key]
          const isPopular = plan.key === 'standard'
          return (
            <div key={plan.key} className={`bg-white rounded-xl border-2 p-6 relative ${
              isPopular ? 'border-black' : 'border-gray-100'
            }`}>
              {isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-full">
                  人気
                </span>
              )}
              <h3 className="text-lg font-bold mb-1">{info.label}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">&yen;{info.price.toLocaleString()}</span>
                <span className="text-sm text-gray-500">/月</span>
              </div>
              <div className="bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-lg mb-4 text-center">
                補助金適用で実質 &yen;{Math.round(info.price * 0.25).toLocaleString()}/月
              </div>
              <ul className="space-y-2.5 mb-6">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isPopular
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
                <Zap className="w-4 h-4 inline mr-1" />
                このプランを選択
              </button>
            </div>
          )
        })}
      </div>

      {/* Current subscriptions */}
      {facilities && facilities.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-4">現在のプラン</h2>
          <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-50">
            {facilities.map((f: any) => (
              <div key={f.id} className="flex items-center justify-between p-4">
                <span className="font-medium text-sm">{f.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${PLAN_INFO[f.plan as Plan]?.color}`}>
                  {PLAN_INFO[f.plan as Plan]?.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import { MessageSquare, AlertTriangle } from 'lucide-react'
import { CHANNEL_INFO } from '@/lib/types'

export default async function ConversationsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: facility } = await supabase
    .from('facilities')
    .select('name')
    .eq('id', id)
    .single()
  if (!facility) notFound()

  // Get unique conversation threads (grouped by channel_user_id)
  const { data: conversations } = await supabase
    .from('ai_conversations')
    .select('*')
    .eq('facility_id', id)
    .order('created_at', { ascending: false })
    .limit(200)

  // Group by channel_user_id
  const threads = new Map<string, NonNullable<typeof conversations>>()
  for (const conv of conversations || []) {
    const key = conv.channel_user_id
    if (!threads.has(key)) threads.set(key, [])
    threads.get(key)!.push(conv)
  }

  // Sort threads by latest message
  const sortedThreads = [...threads.entries()].sort((a, b) => {
    const aLatest = a[1]?.[0]?.created_at ?? ''
    const bLatest = b[1]?.[0]?.created_at ?? ''
    return bLatest.localeCompare(aLatest)
  })

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">会話ログ</h1>
      <p className="text-sm text-gray-500 mb-8">{facility.name}</p>

      {sortedThreads.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <MessageSquare className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p>まだ会話がありません</p>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedThreads.map(([userId, msgs]) => {
            const latestMsg = msgs[0]
            const channel = CHANNEL_INFO[latestMsg.channel as keyof typeof CHANNEL_INFO]
            const hasEscalation = msgs.some((m: any) => m.is_escalated)
            const userName = msgs.find((m: any) => m.channel_user_name)?.channel_user_name || userId.slice(0, 12)
            const msgCount = msgs.filter((m: any) => m.role === 'user').length

            return (
              <div key={userId} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                {/* Thread Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-50">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{channel?.icon || '💬'}</span>
                    <div>
                      <span className="font-medium text-sm">{userName}</span>
                      <span className="text-xs text-gray-400 ml-2">{channel?.label} · {latestMsg.detected_language.toUpperCase()}</span>
                    </div>
                    {hasEscalation && (
                      <span className="flex items-center gap-1 text-xs text-red-500 bg-red-50 px-2 py-0.5 rounded-full">
                        <AlertTriangle className="w-3 h-3" /> 要対応
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-400">{msgCount}件のメッセージ</span>
                </div>

                {/* Messages */}
                <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
                  {[...msgs].reverse().map((msg: any) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                        msg.role === 'assistant'
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-blue-600 text-white'
                      }`}>
                        {msg.content}
                        <div className={`text-[10px] mt-1 ${msg.role === 'assistant' ? 'text-gray-400' : 'text-blue-200'}`}>
                          {new Date(msg.created_at).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
                          {msg.intent && msg.role === 'user' && ` · ${msg.intent}`}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import { Star } from 'lucide-react'

export default async function ReviewsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: facility } = await supabase
    .from('facilities')
    .select('name')
    .eq('id', id)
    .single()
  if (!facility) notFound()

  const { data: reviews } = await supabase
    .from('reviews')
    .select('*, review_replies(*)')
    .eq('facility_id', id)
    .order('reviewed_at', { ascending: false })
    .limit(50)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">レビュー管理</h1>
      <p className="text-sm text-gray-500 mb-8">{facility.name}</p>

      {(!reviews || reviews.length === 0) ? (
        <div className="text-center py-20 text-gray-400 bg-white rounded-xl border border-gray-100">
          <Star className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p className="text-sm">レビューはまだありません</p>
          <p className="text-xs mt-1">Google Business等を連携すると、レビューが自動で取り込まれます</p>
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map((review: any) => {
            const reply = review.review_replies?.[0]
            const stars = review.rating ? '\u2605'.repeat(Math.round(review.rating)) + '\u2606'.repeat(5 - Math.round(review.rating)) : ''
            return (
              <div key={review.id} className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="font-medium text-sm">{review.reviewer_name || '匿名'}</span>
                    {review.rating && (
                      <span className="ml-2 text-sm text-amber-500">{stars}</span>
                    )}
                    <span className="ml-2 text-xs text-gray-400">
                      {new Date(review.reviewed_at).toLocaleDateString('ja-JP')}
                    </span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    review.reply_status === 'published' ? 'bg-green-50 text-green-600' :
                    review.reply_status === 'ai_drafted' ? 'bg-blue-50 text-blue-600' :
                    review.reply_status === 'approved' ? 'bg-indigo-50 text-indigo-600' :
                    'bg-orange-50 text-orange-600'
                  }`}>
                    {review.reply_status === 'published' ? '返信済み' :
                     review.reply_status === 'ai_drafted' ? 'AI下書き' :
                     review.reply_status === 'approved' ? '承認済み' :
                     '未返信'}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-3">{review.body}</p>
                {review.translated_body_ja && review.original_language !== 'ja' && (
                  <p className="text-xs text-gray-400 mb-3">翻訳: {review.translated_body_ja}</p>
                )}
                {review.ai_tags && review.ai_tags.length > 0 && (
                  <div className="flex gap-1.5 mb-3">
                    {review.ai_tags.map((tag: string) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                )}
                {reply && (
                  <div className="bg-gray-50 rounded-lg p-3 mt-3">
                    <span className="text-xs font-medium text-gray-500 mb-1 block">AI返信ドラフト</span>
                    <p className="text-sm text-gray-700">{reply.edited_content || reply.draft_content}</p>
                  </div>
                )}
                {review.reply_status === 'pending' && (
                  <form action={`/api/ai/review-reply`} method="POST" className="mt-3">
                    <input type="hidden" name="reviewId" value={review.id} />
                    <button
                      type="submit"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      AI返信を生成
                    </button>
                  </form>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between px-8 py-6">
        <h1 className="text-xl font-bold tracking-tight">OMOTE-AI</h1>
        <div className="flex gap-4">
          <Link href="/auth/login" className="text-sm text-gray-400 hover:text-white transition-colors">
            ログイン
          </Link>
          <Link href="/auth/register" className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
            無料で始める
          </Link>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-sm px-4 py-1.5 rounded-full mb-8">
          <span className="text-green-400">●</span> IT導入補助金2026対応
        </div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-4xl">
          接客業の
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">多言語対応</span>
          を<br />AIで解決
        </h2>
        <p className="text-lg text-gray-400 mt-6 max-w-2xl">
          旅館・ホテル・飲食店・美容サロン・クリニック。
          LINE・WhatsAppからの問い合わせにAIが多言語で自動応答。
          レビュー返信も予約管理も、すべて1つのダッシュボードで。
        </p>
        <div className="flex gap-4 mt-10">
          <Link href="/auth/register" className="bg-white text-black px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors">
            無料トライアル開始
          </Link>
          <Link href="#features" className="border border-white/20 text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-white/10 transition-colors">
            機能を見る
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-24 text-center">
          {[
            { icon: '🏨', label: '旅館・ホテル' },
            { icon: '🍽️', label: '飲食店' },
            { icon: '💇', label: '美容・サロン' },
            { icon: '🏥', label: 'クリニック' },
            { icon: '🛍️', label: '小売' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <span className="text-3xl">{item.icon}</span>
              <span className="text-sm text-gray-400">{item.label}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

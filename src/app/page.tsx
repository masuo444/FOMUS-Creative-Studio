import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">FOMUS AI</span>
          <span className="text-xs text-gray-500 border border-gray-700 px-2 py-0.5 rounded-full">Business Platform</span>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/auth/login" className="text-sm text-gray-400 hover:text-white transition-colors">
            ログイン
          </Link>
          <Link href="/auth/register" className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
            無料で相談
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8">
        {/* Hero */}
        <section className="py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-sm px-4 py-1.5 rounded-full mb-8">
            <span className="text-green-400">●</span> IT導入補助金2026対応 — 最大75%OFF
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-4xl mx-auto">
            あなたのビジネスに
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">合わせたAI</span>
            を、
            <br />
            1週間で。
          </h1>
          <p className="text-lg text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed">
            「AIって便利らしいけど、うちにはどう使えばいいか分からない」
            <br />
            その悩み、FOMUSが解決します。ヒアリングからプロトタイプまで1週間。
            <br />
            あなたの業務に最適なAIツールを、オーダーメイドで構築。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/auth/register" className="bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors">
              無料相談を予約する
            </Link>
            <a href="#cases" className="border border-white/20 text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-white/10 transition-colors">
              導入事例を見る
            </a>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 border-t border-white/10">
          <h2 className="text-3xl font-bold text-center mb-16">導入の流れ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'ヒアリング', desc: '「何に一番時間を取られていますか？」\nあなたの業務の課題を1時間で把握します。', icon: '🎯' },
              { step: '02', title: 'プロトタイプ', desc: '1週間で動くAIツールを構築。\n実際の業務データで試せる状態でお見せします。', icon: '⚡' },
              { step: '03', title: '導入・運用', desc: '本番導入後も月額保守で継続改善。\nAIの精度は使うほど上がります。', icon: '🔄' },
            ].map((item) => (
              <div key={item.step} className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <div className="text-xs text-blue-400 font-mono mb-2">STEP {item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section id="cases" className="py-20 border-t border-white/10">
          <h2 className="text-3xl font-bold text-center mb-4">こんな課題を解決します</h2>
          <p className="text-gray-500 text-center mb-16">業種を問わず、あなたの「困った」にAIで答えます</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏨', industry: '旅館・ホテル', pain: '夜間の外国語問い合わせに対応できない', solution: 'LINE多言語AIコンシェルジュ', result: '対応時間を80%削減' },
              { icon: '🍽️', industry: '飲食店', pain: 'Google口コミが放置で星が下がり続ける', solution: 'レビュー自動返信AI', result: '返信率0%→100%、評価0.3UP' },
              { icon: '💇', industry: '美容サロン', pain: '施術中に予約電話が鳴り集中できない', solution: 'LINE予約自動受付AI', result: '電話対応70%削減' },
              { icon: '🏥', industry: 'クリニック', pain: '受付スタッフが足りない、電話が鳴り止まない', solution: 'AI受付・問診アシスタント', result: '受付業務40%削減' },
              { icon: '🏢', industry: '不動産', pain: '物件紹介メールの作成に毎日2時間', solution: 'AI物件紹介文自動生成', result: '作成時間90%削減' },
              { icon: '📊', industry: '税理士・士業', pain: '顧問先から同じ質問が何度も来る', solution: 'FAQ AIチャットボット', result: '問い合わせ対応60%削減' },
            ].map((item) => (
              <div key={item.industry} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-bold mt-3 mb-1">{item.industry}</h3>
                <p className="text-sm text-red-400 mb-3">💢 {item.pain}</p>
                <p className="text-sm text-gray-300 mb-2">→ {item.solution}</p>
                <p className="text-xs text-green-400 font-medium">{item.result}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 border-t border-white/10">
          <h2 className="text-3xl font-bold text-center mb-4">料金</h2>
          <p className="text-gray-500 text-center mb-16">IT導入補助金で最大75%OFF。実質負担を大幅に軽減できます</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'スタート', price: '月額 5万円〜', desc: '1つのAI機能を導入', features: ['ヒアリング（1時間）', 'AI機能 1モジュール', 'LINE or Web対応', '月次レポート', 'メールサポート'], subsidy: '実質 月1.25万円〜' },
              { name: 'ビジネス', price: '月額 15万円〜', desc: '複数AI機能を統合', features: ['ヒアリング（2時間）', 'AI機能 3モジュールまで', '全チャネル対応', 'ダッシュボード', '優先サポート', '月次改善提案'], subsidy: '実質 月3.75万円〜', popular: true },
              { name: 'エンタープライズ', price: '月額 30万円〜', desc: 'フルカスタムAI基盤', features: ['要件定義（無制限）', 'AI機能 無制限', 'API連携開発', '専用ダッシュボード', '専任担当者', 'SLA保証'], subsidy: '実質 月7.5万円〜' },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-6 border ${plan.popular ? 'border-white bg-white/10' : 'border-white/10 bg-white/5'} relative`}>
                {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full font-medium">人気</span>}
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="text-2xl font-bold mt-2">{plan.price}</p>
                <p className="text-xs text-gray-500 mt-1">{plan.desc}</p>
                <div className="bg-green-500/10 text-green-400 text-xs px-3 py-1.5 rounded-lg mt-3 text-center font-medium">
                  補助金適用で {plan.subsidy}
                </div>
                <ul className="mt-4 space-y-2">
                  {plan.features.map(f => (
                    <li key={f} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="text-green-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-4">まずは無料相談から</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            「AIで何ができるか知りたい」だけでもOK。
            あなたの業務を聞いて、最適なAI活用プランをご提案します。
          </p>
          <Link href="/auth/register" className="inline-block bg-white text-black px-10 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
            無料相談を予約する
          </Link>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10 flex items-center justify-between text-xs text-gray-600">
          <div>
            <span className="font-bold text-gray-400">FOMUS AI</span>
            <span className="ml-2">Business Platform by 合同会社FOMUS</span>
          </div>
          <div className="flex gap-6">
            <span>IT導入支援事業者（申請予定）</span>
          </div>
        </footer>
      </main>
    </div>
  )
}

import type { Metadata } from 'next'
import { Noto_Sans_JP, Instrument_Serif } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const instrumentSerif = Instrument_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'FOMUS Creative Studio | 中小企業のための業務改善パートナー',
  description: 'AI導入・Web制作・クリエイティブ制作。御社の業務課題をヒアリングし、最適な仕組みを構築します。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${instrumentSerif.variable} font-[family-name:var(--font-body)] antialiased bg-[var(--bg)] text-[var(--text)]`}>
        {children}
      </body>
    </html>
  )
}

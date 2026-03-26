import type { Metadata } from 'next'
import { Noto_Sans_JP, Space_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

const instrumentSerif = Instrument_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
})

const spaceMono = Space_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'FOMUS Creative Studio',
  description: 'あなたの「困った」を、仕組みで解決する。AI・Web・クリエイティブで、中小企業の業務を変える。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${instrumentSerif.variable} ${spaceMono.variable} font-[family-name:var(--font-body)] antialiased`}>
        {children}
      </body>
    </html>
  )
}

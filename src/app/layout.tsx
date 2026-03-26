import type { Metadata } from 'next'
import { Instrument_Serif, DM_Sans, Space_Mono } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
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
  variable: '--font-mono-space',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'FOMUS Creative Studio',
  description: 'あなたの「困った」を、仕組みで解決する。AI・Web・クリエイティブで、中小企業の業務を変える。合同会社FOMUS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${dmSans.variable} ${instrumentSerif.variable} ${spaceMono.variable} font-[family-name:var(--font-body)] antialiased bg-[var(--bg)] text-[var(--text)]`}>
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Cormorant_Garamond, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
})
const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'FOMUS Creative Studio | つくる、届ける、加速する。',
  description: 'AI業務自動化、Web制作、漫画制作。中小企業のDXを構想から実装まで。合同会社FOMUS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${notoSansJP.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

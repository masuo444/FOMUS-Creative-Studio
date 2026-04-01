import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'サービス案内資料 | FOMUS Creative Studio',
  description: 'FOMUS Creative Studioのサービス案内資料。AI導入・Web制作・漫画制作・AI研修の詳細。',
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

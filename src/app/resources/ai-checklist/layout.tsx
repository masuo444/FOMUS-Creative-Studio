import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI導入チェックリスト | FOMUS Creative Studio',
  description: '中小企業向けAI導入チェックリスト。15項目のセルフ診断で、御社に最適なAI活用方法を特定します。',
  robots: { index: false, follow: false },
}

export default function AIChecklistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

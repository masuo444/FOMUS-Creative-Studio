import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ | 無料相談・お見積もり',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

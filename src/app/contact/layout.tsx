import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ | 無料相談・お見積もり',
  description: 'AI導入・Web制作・漫画制作・AI研修のご相談はこちら。ヒアリング後に最適なプランをお見積もりします。相談無料・営業電話なし・契約の義務なし。',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

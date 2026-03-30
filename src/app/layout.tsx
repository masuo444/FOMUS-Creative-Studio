import type { Metadata } from 'next'
import { Noto_Sans_JP, Instrument_Serif } from 'next/font/google'
import LineFloatingButton from '@/components/ui/LineFloatingButton'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
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

const siteUrl = 'https://fomusglobal.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'FOMUS Creative Studio | AI導入・Web制作・漫画制作・AI研修',
    template: '%s | FOMUS Creative Studio',
  },
  description: 'AIで事業を回している会社が、御社にも同じ仕組みを導入します。AI導入・Web制作・漫画制作（MangaX掲載無料）・AI研修。中小企業の業務課題をヒアリングし、最適な仕組みを構築。',
  keywords: ['AI導入', 'Web制作', '漫画制作', 'AI研修', 'MangaX', 'DX推進', '中小企業', '業務自動化', 'AIチャットボット', '採用漫画', 'FOMUS'],
  authors: [{ name: '増尾 圭亮', url: siteUrl }],
  creator: '合同会社FOMUS',
  publisher: '合同会社FOMUS',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName: 'FOMUS Creative Studio',
    title: 'FOMUS Creative Studio | AI導入・Web制作・漫画制作・AI研修',
    description: 'AIで事業を回している会社が、御社にも同じ仕組みを導入します。AI導入・Web制作・漫画制作（MangaX掲載無料）・AI研修。',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FOMUS Creative Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FOMUS Creative Studio | AI導入・Web制作・漫画制作・AI研修',
    description: 'AIで事業を回している会社が、御社にも同じ仕組みを導入します。',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${instrumentSerif.variable} font-[family-name:var(--font-body)] antialiased bg-[var(--bg)] text-[var(--text)]`}>
        {/* Organization + LocalBusiness 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'FOMUS Creative Studio',
              legalName: '合同会社FOMUS',
              url: siteUrl,
              logo: `${siteUrl}/fomus-logo.png`,
              description: 'AI導入・Web制作・漫画制作・AI研修を提供。自社でAIを活用した事業運営の実績をもとに、中小企業の業務課題を解決します。',
              founder: {
                '@type': 'Person',
                name: '増尾 圭亮',
                jobTitle: '代表',
              },
              sameAs: [
                'https://creative-manga.fomusglobal.com',
                'https://ai-training.fomus.jp',
                'https://shop.fomus.jp',
              ],
              knowsAbout: ['AI導入支援', 'Web制作', '漫画制作', 'AI研修', 'AIリスキリング', 'DXコンサルティング', '業務自動化', 'AIチャットボット'],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'サービス一覧',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI導入支援', description: 'AIチャットボット・業務自動化・多言語AI対応' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web制作', description: 'コーポレートサイト・LP・予約システム・ECサイト' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '漫画制作', description: '採用漫画・企業PR漫画・MangaX掲載無料' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI研修', description: '業務特化型AI研修・助成金で最大75%OFF' } },
                ],
              },
            }),
          }}
        />
        {/* LocalBusiness 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'FOMUS Creative Studio',
              url: siteUrl,
              logo: `${siteUrl}/fomus-logo.png`,
              description: 'AI導入支援・Web制作・漫画制作・AI研修を提供する京都のクリエイティブスタジオ。中小企業の業務課題をAIで解決。',
              address: {
                '@type': 'PostalAddress',
                addressRegion: '京都府',
                addressCountry: 'JP',
              },
              founder: {
                '@type': 'Person',
                name: '増尾 圭亮',
                url: `${siteUrl}/about/masuo`,
              },
              areaServed: {
                '@type': 'Country',
                name: 'Japan',
              },
              serviceType: ['AI導入支援', 'Web制作', '漫画制作', 'AI研修・リスキリング', 'DXコンサルティング', '保守運用'],
              priceRange: '$$',
            }),
          }}
        />
        <GoogleAnalytics />
        {children}
        <LineFloatingButton />
      </body>
    </html>
  )
}

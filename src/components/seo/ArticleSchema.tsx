interface ArticleSchemaProps {
  title: string
  description: string
  date: string
  image?: string
  slug: string
}

export default function ArticleSchema({ title, description, date, image, slug }: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    image: image ? `https://studio.fomus.jp${image}` : undefined,
    url: `https://studio.fomus.jp/blog/${slug}`,
    author: {
      '@type': 'Person',
      name: '増尾 圭亮',
      url: 'https://studio.fomus.jp/about/masuo',
      jobTitle: '合同会社FOMUS 代表',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FOMUS Creative Studio',
      url: 'https://studio.fomus.jp',
      logo: {
        '@type': 'ImageObject',
        url: 'https://studio.fomus.jp/fomus-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://studio.fomus.jp/blog/${slug}`,
    },
    inLanguage: 'ja',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

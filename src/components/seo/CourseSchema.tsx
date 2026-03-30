export default function CourseSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: '法人向けAIリスキリング研修',
    description: '御社の業務データを題材にした実務特化型AI研修。ChatGPT・Gemini・Claude等を10時間で業務実装レベルまで習得。人材開発支援助成金で最大75%OFF。',
    provider: {
      '@type': 'Organization',
      name: 'FOMUS Creative Studio',
      url: 'https://fomusglobal.com',
    },
    educationalLevel: '初級〜中級',
    coursePrerequisites: 'AIの知識不要。PC操作ができれば参加可能。',
    numberOfCredits: '10時間',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['オンライン', 'オフライン', 'ハイブリッド'],
      duration: 'PT10H',
      instructor: {
        '@type': 'Person',
        name: '増尾 圭亮',
        jobTitle: '合同会社FOMUS 代表',
        url: 'https://fomusglobal.com/about/masuo',
      },
    },
    teaches: [
      'ChatGPT・Gemini・Claudeの業務活用',
      'プロンプト設計（業務最適化）',
      '業務メール・報告書・議事録の自動生成',
      '社内データの分析・レポート自動化',
      '画像生成・資料デザインのAI活用',
      '社内AI活用ガイドラインの策定',
    ],
    financialAidEligible: '人材開発支援助成金（事業展開等リスキリング支援コース）対象。中小企業は経費の75%助成。',
    inLanguage: 'ja',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

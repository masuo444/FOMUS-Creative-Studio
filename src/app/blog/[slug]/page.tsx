import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ArticleSchema from '@/components/seo/ArticleSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import HowToSchema from '@/components/seo/HowToSchema'
import Breadcrumb from '@/components/ui/Breadcrumb'
import RelatedPosts from '@/components/ui/RelatedPosts'
import ShareButtons from '@/components/ui/ShareButtons'
import DownloadCTA from '@/components/ui/DownloadCTA'
import { getPostBySlug, getAllSlugs, getAllPosts } from '@/lib/blog'

const howToData: Record<string, { name: string; description: string; steps: { name: string; text: string }[] }> = {
  'ai-adoption-guide': {
    name: '中小企業のAI導入 5ステップ',
    description: 'AI導入を検討している中小企業が、何から始めるべきかを5ステップで解説します。',
    steps: [
      { name: '自動化すべき業務を特定する', text: '日々の業務を棚卸しし、人がやらなくていい仕事（問い合わせ対応、予約管理、レビュー返信等）を見つける。' },
      { name: '最も効果の高い1つに絞る', text: '頻度が高く、時間がかかり、ミスが起きやすい業務を1つ選ぶ。多くの場合「問い合わせ対応の自動化」が最もROIが高い。' },
      { name: '小さく始めて効果を測る', text: 'LINEのAI自動応答など小さなスタートで十分。導入前と後で対応時間の変化を数字で記録する。' },
      { name: '成果が出たら範囲を広げる', text: '最初の施策で効果確認後、レビュー返信→予約管理と段階的に展開。リスク最小化で効果最大化。' },
      { name: '社内にAI活用を定着させる', text: '社員がAIを業務に使えるレベルになるまで研修とフォローを実施。ツール導入だけでは定着しない。' },
    ],
  },
  'ai-reskilling-subsidy': {
    name: 'AIリスキリング助成金の申請方法',
    description: '人材開発支援助成金（事業展開等リスキリング支援コース）の申請フローを5ステップで解説します。',
    steps: [
      { name: '研修計画を策定する', text: '対象社員、研修内容、スケジュール、目標を明確にした研修計画を作成する。' },
      { name: '管轄の労働局に事前相談・申請', text: '研修開始の1ヶ月前までに管轄の労働局に計画届を提出。必要書類を揃える。' },
      { name: '研修を実施する', text: '計画通りに研修を実施。出席記録、研修資料、修了証等の証拠書類を保管。' },
      { name: '支給申請書を提出する', text: '研修終了後2ヶ月以内に支給申請書と証拠書類を労働局に提出。' },
      { name: '助成金を受給する', text: '審査通過後、経費助成（中小企業75%）＋賃金助成（1人1時間1,000円）が支給される。' },
    ],
  },
  'dx-first-steps': {
    name: '中小企業がDXを始める3ステップ',
    description: '中小企業がDXを始めるために最初にやるべき3つのことを解説します。',
    steps: [
      { name: '業務フローを可視化する', text: '現在の業務を書き出し、手作業・紙・電話で行っているプロセスを特定する。' },
      { name: '最もコスパの高い1つをデジタル化する', text: '頻度×時間×ミス率が高い業務から着手。月5万円以下で始められるツールから導入。' },
      { name: '効果を測定して次に展開する', text: '導入前後で時間・コスト・エラー率を比較。ROIが確認できたら次の業務に展開。' },
    ],
  },
  'business-automation-roi': {
    name: '業務自動化のROI計算方法',
    description: '業務自動化の投資対効果（ROI）を3ステップで計算する方法を解説します。',
    steps: [
      { name: '現状の業務コストを算出する', text: '時間単価 × 月間作業時間 × 12ヶ月 = 年間業務コスト。例：時給2,500円 × 月40時間 × 12 = 年間120万円。' },
      { name: '自動化後の削減効果を算出する', text: '年間業務コスト × 削減率 = 年間削減効果。問い合わせ対応なら80%削減で年間96万円の効果。' },
      { name: '投資回収期間を算出する', text: '導入コスト ÷ 月間削減効果 = 回収月数。50万円の導入で月8万円削減なら約6ヶ月で回収。' },
    ],
  },
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      images: post.image ? [{ url: post.image }] : [],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug)
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null

  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      <div className="bg-[#F0FDF4]">
        <Breadcrumb items={[
          { name: 'ホーム', href: '/' },
          { name: 'ブログ', href: '/blog' },
          { name: post.title, href: `/blog/${post.slug}` },
        ]} />
      </div>

      {/* Hero */}
      <section className="bg-[#F0FDF4]">
        <div className="max-w-[800px] mx-auto px-6 md:px-10 py-12 md:py-16">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-[11px] text-[#059669] bg-white border border-[#D1FAE5] px-3 py-1 rounded-full font-medium">{tag}</span>
              ))}
            </div>
            <h1 className="text-[24px] md:text-[32px] font-bold tracking-tight text-[#1F2937] mb-4 leading-[1.4]">{post.title}</h1>
            <div className="flex items-center gap-4">
              <time className="text-[14px] text-[#9CA3AF]">{post.date}</time>
              <Link href="/about/masuo" className="flex items-center gap-2 group">
                <div className="w-6 h-6 rounded-full bg-[#059669] flex items-center justify-center text-white text-[10px] font-bold">M</div>
                <span className="text-[14px] text-[#6B7280] group-hover:text-[#059669] transition-colors">増尾 圭亮</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {post.image && (
        <div className="max-w-[800px] mx-auto px-6 md:px-10 -mt-2">
          <Image src={post.image} alt={post.title} width={1200} height={675} className="w-full aspect-[16/9] object-cover rounded-2xl" />
        </div>
      )}

      {/* 記事本文 */}
      <article className="max-w-[800px] mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="prose prose-lg max-w-none prose-headings:text-[#1F2937] prose-headings:font-bold prose-headings:tracking-tight prose-p:text-[#4B5563] prose-p:leading-[2] prose-a:text-[#059669] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1F2937] prose-li:text-[#4B5563] prose-th:text-[#1F2937] prose-td:text-[#4B5563] prose-h2:text-[22px] prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-[#E5E7EB] prose-h2:pb-3 prose-h3:text-[18px] prose-h3:mt-8 prose-h3:mb-3 prose-table:border-collapse prose-th:bg-[#F0FDF4] prose-th:px-4 prose-th:py-3 prose-th:border prose-th:border-[#E5E7EB] prose-td:px-4 prose-td:py-3 prose-td:border prose-td:border-[#E5E7EB]">
          <MDXRemote source={post.content} />
        </div>
      </article>

      {/* ダウンロードCTA（AI関連記事のみ） */}
      {post.tags.some(t => ['AI導入', 'DX', '業務自動化', 'AI研修'].includes(t)) && <DownloadCTA />}

      {/* シェアボタン */}
      <ShareButtons title={post.title} slug={post.slug} />

      <ArticleSchema
        title={post.title}
        description={post.description}
        date={post.date}
        image={post.image}
        slug={post.slug}
      />
      <BreadcrumbSchema items={[
        { name: 'ホーム', href: '/' },
        { name: 'ブログ', href: '/blog' },
        { name: post.title, href: `/blog/${post.slug}` },
      ]} />

      {/* CTA */}
      <ScrollReveal>
        <div className="bg-gradient-to-r from-[#059669] to-[#10B981] py-12 px-6 text-center">
          <p className="text-white text-[18px] md:text-[22px] font-bold mb-2">この記事の内容を、御社に導入しませんか？</p>
          <p className="text-white/60 text-[14px] mb-6">ヒアリングは無料。御社に最適なプランをご提案します。</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#059669] px-8 py-3 rounded-full text-[15px] font-bold hover:bg-white/90 transition-colors min-h-[48px]">
            無料で相談する
          </Link>
        </div>
      </ScrollReveal>

      {/* 関連記事 */}
      <RelatedPosts currentSlug={post.slug} tags={post.tags} />

      {/* 前後の記事 */}
      <section className="max-w-[800px] mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-2 gap-6">
          {prevPost ? (
            <Link href={`/blog/${prevPost.slug}`} className="group">
              <p className="text-[12px] text-[#9CA3AF] mb-2">← 前の記事</p>
              <p className="text-[14px] text-[#1F2937] font-medium group-hover:text-[#059669] transition-colors leading-[1.5]">{prevPost.title}</p>
            </Link>
          ) : <div />}
          {nextPost ? (
            <Link href={`/blog/${nextPost.slug}`} className="group text-right">
              <p className="text-[12px] text-[#9CA3AF] mb-2">次の記事 →</p>
              <p className="text-[14px] text-[#1F2937] font-medium group-hover:text-[#059669] transition-colors leading-[1.5]">{nextPost.title}</p>
            </Link>
          ) : <div />}
        </div>
      </section>

      {/* HowTo Schema（ステップ記事のみ） */}
      {howToData[post.slug] && (
        <HowToSchema
          name={howToData[post.slug].name}
          description={howToData[post.slug].description}
          steps={howToData[post.slug].steps}
        />
      )}

      <SiteFooter />
    </div>
  )
}

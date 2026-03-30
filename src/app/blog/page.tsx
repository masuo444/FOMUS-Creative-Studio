import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'ブログ | AI導入・Web制作・漫画制作のノウハウ',
  description: '中小企業のAI導入、採用漫画の活用法、Webサイトリニューアルの判断基準など、経営者・担当者向けのノウハウを発信します。',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-[72px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 60%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#10B981] opacity-[0.06] blur-[120px]" />
          <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Blog</p>
            <h1 className="text-[36px] md:text-[48px] font-bold tracking-tight text-[#1F2937] mb-4">ブログ</h1>
            <p className="text-[#6B7280] text-[16px] leading-[2] max-w-[560px]">
              AI導入・Web制作・漫画制作・リスキリング。<br />
              中小企業の経営者・担当者向けにノウハウを発信します。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 記事一覧 */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 60}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="rounded-2xl border border-[#E5E7EB] overflow-hidden h-full flex flex-col hover:shadow-lg hover:border-[#059669]/30 transition-all duration-300">
                    {post.image && (
                      <div className="aspect-[16/9] overflow-hidden bg-[#F0FDF4]">
                        <Image src={post.image} alt={post.title} width={800} height={450} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <span key={tag} className="text-[11px] text-[#059669] bg-[#F0FDF4] border border-[#D1FAE5] px-2.5 py-0.5 rounded-full font-medium">{tag}</span>
                        ))}
                      </div>
                      <h2 className="text-[17px] font-bold text-[#1F2937] mb-2 leading-[1.5] group-hover:text-[#059669] transition-colors">{post.title}</h2>
                      <p className="text-[13px] text-[#6B7280] leading-[1.8] flex-1 mb-4">{post.description}</p>
                      <div className="flex items-center justify-between">
                        <time className="text-[12px] text-[#9CA3AF]">{post.date}</time>
                        <span className="text-[13px] text-[#059669] font-medium">読む →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#065F46] py-16 md:py-20 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-[22px] md:text-[28px] font-bold tracking-tight mb-4">御社の課題、まずはご相談ください</h2>
            <p className="text-white/60 text-[15px] leading-[2] mb-8">ブログで紹介した施策を、御社の業務に合わせて導入します。</p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#065F46] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-[#D1FAE5] transition-colors min-h-[52px]">
              無料で相談する
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

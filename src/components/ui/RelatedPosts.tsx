import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'

interface RelatedPostsProps {
  currentSlug: string
  tags: string[]
}

export default function RelatedPosts({ currentSlug, tags }: RelatedPostsProps) {
  const allPosts = getAllPosts()
  const related = allPosts
    .filter((p) => p.slug !== currentSlug && p.tags.some((t) => tags.includes(t)))
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <section className="max-w-[800px] mx-auto px-6 md:px-10 py-12 border-t border-[#E5E7EB]">
      <h2 className="text-[18px] font-bold text-[#1F2937] mb-6">関連記事</h2>
      <div className="grid sm:grid-cols-3 gap-5">
        {related.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <article className="rounded-xl border border-[#E5E7EB] overflow-hidden hover:shadow-md hover:border-[#059669]/30 transition-all">
              {post.image && (
                <div className="aspect-[16/9] overflow-hidden bg-[#F0FDF4]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[10px] text-[#059669] bg-[#F0FDF4] border border-[#D1FAE5] px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <h3 className="text-[13px] font-bold text-[#1F2937] leading-[1.5] group-hover:text-[#059669] transition-colors line-clamp-2">{post.title}</h3>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}

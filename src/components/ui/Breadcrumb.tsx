import Link from 'next/link'

interface BreadcrumbProps {
  items: { name: string; href: string }[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" className="max-w-[1200px] mx-auto px-6 md:px-10 pt-[84px] pb-2">
      <ol className="flex flex-wrap items-center gap-1 text-[12px] text-[#9CA3AF]">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1">
            {i > 0 && <span className="mx-1">/</span>}
            {i < items.length - 1 ? (
              <Link href={item.href} className="hover:text-[#059669] transition-colors">
                {item.name}
              </Link>
            ) : (
              <span className="text-[#6B7280]">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

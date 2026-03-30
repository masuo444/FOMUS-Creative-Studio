'use client'

interface ShareButtonsProps {
  title: string
  slug: string
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const url = `https://fomusglobal.com/blog/${slug}`
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shares = [
    {
      name: 'X',
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: '#000000',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'LINE',
      href: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
      color: '#06C755',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
      ),
    },
    {
      name: 'はてブ',
      href: `https://b.hatena.ne.jp/add?mode=confirm&url=${encodedUrl}&title=${encodedTitle}`,
      color: '#00A4DE',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M20.47 0C22.42 0 24 1.58 24 3.53v16.94c0 1.95-1.58 3.53-3.53 3.53H3.53C1.58 24 0 22.42 0 20.47V3.53C0 1.58 1.58 0 3.53 0h16.94zM14.05 16.81c.26-.7.39-1.52.39-2.45 0-1.14-.27-2.06-.8-2.76-.5-.65-1.2-1.06-2.11-1.24.77-.3 1.36-.73 1.77-1.3.42-.57.63-1.26.63-2.07 0-.78-.18-1.45-.55-2-.37-.55-.9-.95-1.6-1.2-.56-.19-1.46-.29-2.7-.29H5.43v13.85h4.06c1.04 0 1.85-.08 2.43-.22.72-.18 1.32-.49 1.79-.93.3-.28.53-.62.68-1.01.1-.24.16-.52.16-.82 0-.19-.02-.37-.06-.54zm-4.19-4.21h.76c.91 0 1.54.14 1.89.43.35.29.52.72.52 1.29 0 .57-.18 1-.55 1.3-.37.3-1.01.45-1.92.45h-.7v-3.47zm0-4.46h.59c.82 0 1.39.12 1.71.37.32.25.48.62.48 1.13 0 .51-.17.88-.52 1.11-.34.23-.91.34-1.69.34h-.57V8.14zm8.57 8.27c0-.83-.67-1.51-1.51-1.51s-1.51.68-1.51 1.51c0 .84.67 1.51 1.51 1.51s1.51-.67 1.51-1.51zm-.27-6.4V7h-2.49v3.01h2.49z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="max-w-[800px] mx-auto px-6 md:px-10 py-6">
      <div className="flex items-center gap-3">
        <span className="text-[12px] text-[#9CA3AF] font-medium">SHARE</span>
        <div className="flex gap-2">
          {shares.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#E5E7EB] text-[#6B7280] hover:text-white hover:border-transparent transition-all"
              style={{ ['--hover-bg' as string]: s.color }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = s.color }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#6B7280' }}
              aria-label={`${s.name}でシェア`}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

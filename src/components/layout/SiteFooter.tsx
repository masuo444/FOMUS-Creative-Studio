import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="py-16 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="gold-line mb-10" />
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          <div>
            <p className="text-[15px] font-bold mb-1">FOMUS Creative Studio</p>
            <p className="text-[13px] text-[var(--text-muted)]">合同会社FOMUS</p>
          </div>
          <div className="flex flex-wrap gap-6 text-[14px] text-[var(--text-sub)]">
            <Link href="/services" className="hover:text-[var(--text)] transition-colors">サービス</Link>
            <Link href="/work" className="hover:text-[var(--text)] transition-colors">実績</Link>
            <Link href="/company" className="hover:text-[var(--text)] transition-colors">会社概要</Link>
            <Link href="/contact" className="hover:text-[var(--text)] transition-colors">お問い合わせ</Link>
            <Link href="/privacy" className="hover:text-[var(--text)] transition-colors">プライバシーポリシー</Link>
          </div>
        </div>
        <p className="text-[13px] text-[var(--text-muted)]">&copy; 2026 合同会社FOMUS</p>
      </div>
    </footer>
  )
}

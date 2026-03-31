import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="bg-[#065F46] py-16 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          <div>
            <p className="text-[15px] font-bold mb-1 text-white">FOMUS Creative Studio</p>
            <p className="text-[13px] text-white/50">合同会社FOMUS</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-3 text-[14px] text-white/60">
            <Link href="/services" className="hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/10 min-h-[44px] flex items-center">サービス</Link>
            <Link href="/work" className="hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/10 min-h-[44px] flex items-center">実績</Link>
            <Link href="/company" className="hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/10 min-h-[44px] flex items-center">会社概要</Link>
            <Link href="/blog" className="hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/10 min-h-[44px] flex items-center">ブログ</Link>
            <Link href="/contact" className="hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/10 min-h-[44px] flex items-center">お問い合わせ</Link>
            <Link href="/privacy" className="hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/10 min-h-[44px] flex items-center">プライバシーポリシー</Link>
            <Link href="/tokushoho" className="hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/10 min-h-[44px] flex items-center">特定商取引法に基づく表記</Link>
          </div>
        </div>
        {/* 関連サイト */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 text-[12px] text-white/40">
          <span>関連サイト:</span>
          <a href="https://ai-training.fomus.jp" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">FOMUS AI Training</a>
          <a href="https://creative-manga.fomusglobal.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">FOMUS Manga Studio</a>
          <a href="https://sake.terroir-hub.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Terroir HUB SAKE</a>
          <a href="https://shop.fomus.jp" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">FOMUS SHOP</a>
        </div>
        <div className="h-px w-full bg-white/10 mb-8" />
        <p className="text-[13px] text-white/30">&copy; 2026 合同会社FOMUS</p>
      </div>
    </footer>
  )
}

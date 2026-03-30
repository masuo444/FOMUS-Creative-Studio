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
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-white/30">&copy; 2026 合同会社FOMUS</p>
          <div className="flex items-center gap-4">
            <a href="https://x.com/fomus_jp" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://note.com/fomus" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors" aria-label="note">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M22.904 6.075c-.36-1.2-1.12-1.92-2.32-2.28-.6-.18-1.2-.18-1.82-.18H5.244c-.62 0-1.22 0-1.82.18-1.2.36-1.96 1.08-2.32 2.28-.18.6-.18 1.2-.18 1.82v8.21c0 .62 0 1.22.18 1.82.36 1.2 1.12 1.92 2.32 2.28.6.18 1.2.18 1.82.18h13.52c.62 0 1.22 0 1.82-.18 1.2-.36 1.96-1.08 2.32-2.28.18-.6.18-1.2.18-1.82v-8.21c0-.62 0-1.22-.18-1.82zm-5.38 5.55l-4.4 2.72c-.52.32-1.18-.08-1.18-.68V8.965c0-.6.66-1 1.18-.68l4.4 2.72c.52.32.52 1.08 0 1.4v.17z" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/fomus" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

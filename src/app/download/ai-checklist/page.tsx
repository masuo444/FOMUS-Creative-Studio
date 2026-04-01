import type { Metadata } from 'next'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'
import ScrollReveal from '@/components/ui/ScrollReveal'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import Breadcrumb from '@/components/ui/Breadcrumb'
import DownloadForm from './DownloadForm'

export const metadata: Metadata = {
  title: '資料請求 | FOMUS Creative Studio サービス案内',
  description: 'FOMUS Creative Studioのサービス案内資料を無料でお届けします。AI導入・Web制作・漫画制作・AI研修の詳細をご確認いただけます。',
  alternates: { canonical: '/download/ai-checklist' },
}

const contents = [
  'AI導入・Web制作・漫画制作・AI研修の各サービス詳細',
  '自社事業での導入実績と成果',
  'FOMUSの強み（実務家が直接対応）',
  '導入の流れとスケジュール',
  'お問い合わせ方法',
]

export default function AIChecklistPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      <div className="bg-[#F0FDF4]">
        <Breadcrumb items={[
          { name: 'ホーム', href: '/' },
          { name: 'ダウンロード', href: '/download/ai-checklist' },
          { name: 'AI導入チェックリスト', href: '/download/ai-checklist' },
        ]} />
      </div>

      {/* Hero */}
      <section className="bg-[#F0FDF4]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-12 md:py-20">
          <ScrollReveal>
            <p className="text-[12px] uppercase tracking-[0.15em] text-[#059669] font-medium mb-4">Service Guide</p>
            <h1 className="mb-4">
              <span className="block text-[24px] md:text-[28px] font-bold text-[#1F2937] leading-tight">まずは</span>
              <span className="block text-[48px] md:text-[64px] font-bold text-[#059669] leading-tight tracking-tight">資料請求</span>
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#6B7280] leading-[1.8] max-w-[600px]">
              FOMUS Creative Studioのサービス案内資料を無料でお届けします。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content: Left + Right */}
      <section className="max-w-[1000px] mx-auto px-6 md:px-10 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left - Checklist description */}
          <ScrollReveal>
            <div>
              <h2 className="text-[22px] md:text-[24px] font-bold text-[#1F2937] mb-6">資料の内容</h2>
              <ul className="space-y-4">
                {contents.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D1FAE5] flex items-center justify-center mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7L6 10L11 4" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[15px] text-[#4B5563] leading-[1.8]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB]">
                <p className="text-[13px] text-[#6B7280] font-medium mb-1">資料送付後</p>
                <p className="text-[15px] text-[#1F2937] font-medium">30〜60分の無料ミーティングもご案内しています</p>
                <p className="text-[13px] text-[#6B7280] mt-1">御社の課題に合わせて、最適なプランをご提案します。</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Download form */}
          <ScrollReveal delay={200}>
            <DownloadForm />
          </ScrollReveal>
        </div>
      </section>

      <BreadcrumbSchema items={[
        { name: 'ホーム', href: '/' },
        { name: 'ダウンロード', href: '/download/ai-checklist' },
        { name: 'AI導入チェックリスト', href: '/download/ai-checklist' },
      ]} />

      <SiteFooter />
    </div>
  )
}

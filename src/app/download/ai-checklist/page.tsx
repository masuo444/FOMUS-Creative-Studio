import type { Metadata } from 'next'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'
import ScrollReveal from '@/components/ui/ScrollReveal'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import Breadcrumb from '@/components/ui/Breadcrumb'
import DownloadForm from './DownloadForm'

export const metadata: Metadata = {
  title: '無料ダウンロード | AI導入チェックリスト | FOMUS',
  description: '中小企業向けAI導入チェックリスト（PDF）を無料ダウンロード。自社に最適なAI活用方法が分かる15項目のセルフ診断。',
  alternates: { canonical: '/download/ai-checklist' },
}

const checklistItems = [
  '自社の業務でAIが活用できる領域',
  '最も効果の高い自動化ポイント',
  'AI導入の優先順位',
  '投資回収の目安',
  '避けるべき失敗パターン',
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
            <p className="text-[12px] uppercase tracking-[0.15em] text-[#059669] font-medium mb-4">Free Download</p>
            <h1 className="mb-4">
              <span className="block text-[24px] md:text-[28px] font-bold text-[#1F2937] leading-tight">御社のAI導入、</span>
              <span className="block text-[48px] md:text-[64px] font-bold text-[#059669] leading-tight tracking-tight">どこから？</span>
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#6B7280] leading-[1.8] max-w-[600px]">
              15項目のチェックリストで、自社に最適なAI活用方法が分かります。
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
              <h2 className="text-[22px] md:text-[24px] font-bold text-[#1F2937] mb-6">このチェックリストで分かること</h2>
              <ul className="space-y-4">
                {checklistItems.map((item) => (
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
                <p className="text-[13px] text-[#6B7280] font-medium mb-1">対象</p>
                <p className="text-[15px] text-[#1F2937] font-medium">中小企業の経営者・DX推進担当者</p>
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

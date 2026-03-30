import type { Metadata } from 'next'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
  description: '合同会社FOMUSの特定商取引法に基づく表記。販売業者情報、支払方法、返品・交換について。',
  alternates: { canonical: '/tokushoho' },
  robots: { index: true, follow: true },
}

const items = [
  { label: '販売業者', value: '合同会社FOMUS' },
  { label: '運営責任者', value: '増尾 圭亮' },
  { label: '所在地', value: '埼玉県坂戸市本町3-33' },
  { label: '電話番号', value: '080-5386-3983' },
  { label: 'メールアドレス', value: 'info@fomus.jp' },
  { label: '販売価格', value: '各サービス・商品ページに記載、またはお見積もり後にご提示' },
  { label: '商品代金以外の必要料金', value: '送料（国内1,000円〜）、振込手数料（銀行振込の場合）' },
  { label: '支払方法', value: 'クレジットカード（Visa, Mastercard, American Express, JCB）、銀行振込' },
  { label: '支払時期', value: 'クレジットカード：注文時 / 銀行振込：注文後3営業日以内' },
  { label: '商品の引渡時期', value: 'サービス：契約後、別途ご案内するスケジュールに準じます。物品：入金確認後、7営業日以内に発送。' },
  { label: '返品・交換', value: '商品到着後7日以内に限り、未使用品に限り返品・交換を承ります。お客様都合による返品の送料はお客様負担となります。サービスについては個別契約に準じます。' },
  { label: '不良品の取扱', value: '商品到着後7日以内にご連絡ください。送料当社負担にて交換いたします。' },
]

export default function TokushohoPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      <section className="pt-[72px]">
        <div className="max-w-[800px] mx-auto px-6 py-16 md:py-20">
          <ScrollReveal>
            <h1 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">
              特定商取引法に基づく表記
            </h1>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-2xl border border-[#E5E7EB] overflow-hidden">
              {items.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex flex-col md:flex-row ${i < items.length - 1 ? 'border-b border-[#E5E7EB]' : ''}`}
                >
                  <div className="md:w-[240px] flex-shrink-0 bg-[#F9FAFB] px-6 py-4 md:py-5">
                    <span className="text-[14px] font-bold text-[#1F2937]">{item.label}</span>
                  </div>
                  <div className="px-6 py-4 md:py-5 flex-1">
                    <span className="text-[14px] text-[#4B5563] leading-[1.8]">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

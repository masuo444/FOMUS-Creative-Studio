import ScrollReveal from '@/components/ui/ScrollReveal'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <div className="h-[72px]" />
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <h1 className="text-[28px] font-bold tracking-tight mb-12">プライバシーポリシー</h1>
          </ScrollReveal>
          <div className="text-[14px] text-[var(--text-sub)] leading-[2.2] space-y-8">
            <section>
              <h2 className="text-[16px] font-bold text-[var(--text)] mb-3">1. 個人情報の取得</h2>
              <p>当社は、お問い合わせフォーム等を通じて、お名前、メールアドレス、会社名、ご相談内容等の個人情報を取得することがあります。</p>
            </section>
            <section>
              <h2 className="text-[16px] font-bold text-[var(--text)] mb-3">2. 個人情報の利用目的</h2>
              <p>取得した個人情報は、以下の目的で利用します。</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>お問い合わせへのご回答・ご連絡</li>
                <li>サービスの提供・改善</li>
                <li>契約の履行・管理</li>
              </ul>
            </section>
            <section>
              <h2 className="text-[16px] font-bold text-[var(--text)] mb-3">3. 個人情報の第三者提供</h2>
              <p>当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。</p>
            </section>
            <section>
              <h2 className="text-[16px] font-bold text-[var(--text)] mb-3">4. 個人情報の安全管理</h2>
              <p>当社は、個人情報の漏えい、滅失またはき損の防止その他の安全管理のために必要な措置を講じます。</p>
            </section>
            <section>
              <h2 className="text-[16px] font-bold text-[var(--text)] mb-3">5. お問い合わせ</h2>
              <p>個人情報の取り扱いに関するお問い合わせは、お問い合わせフォームよりご連絡ください。</p>
            </section>
            <section>
              <p className="text-[var(--text-muted)]">制定日：2026年3月26日</p>
              <p className="text-[var(--text-muted)]">合同会社FOMUS 代表社員 増尾圭亮</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

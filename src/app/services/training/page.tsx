import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SubsidySimulator from '@/components/ui/SubsidySimulator'
import SiteNav from '@/components/layout/SiteNav'
import SiteFooter from '@/components/layout/SiteFooter'
import FAQ from '@/components/ui/FAQ'
import FaqSchema from '@/components/seo/FaqSchema'
import CourseSchema from '@/components/seo/CourseSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: '法人リスキリング | AI研修・助成金で最大75%OFF | FOMUS',
  description: '「わかる」で終わらせず「使える」まで。御社の業務データを題材にした実務特化型AI研修。ChatGPT・Gemini・Claude等を10時間で業務実装。人材開発支援助成金で最大75%OFF。',
  alternates: { canonical: '/services/training' },
  keywords: ['法人 AI研修', 'リスキリング 助成金', 'AI研修 法人', 'ChatGPT 研修', '業務 AI活用', '人材開発支援助成金'],
}

const painPoints = [
  { icon: '🔧', title: 'ツールだけ導入して放置されている', desc: 'ChatGPTのアカウントは全員に配った。でも日常業務で使っている人はほんの一部。「何に使えるか分からない」が本音。' },
  { icon: '📚', title: '研修を受けたが、翌日から何も変わらなかった', desc: '一般的なAI研修はツール操作の紹介だけ。自社の業務にどう使うかは教えてくれない。結局、研修前と同じ。' },
  { icon: '🤷', title: 'AI推進を任されたが、何から始めればいいか分からない', desc: 'DX担当に任命されたが、社内に知見がない。外部に相談しても提案書だけ出てきて終わる。' },
]

const comparison = [
  { item: '研修の題材', typical: '汎用デモデータ', fomus: '御社の実際の業務データ' },
  { item: 'ゴール', typical: 'ツールの操作方法を覚える', fomus: '御社の業務にAIを実装する' },
  { item: '翌日から使えるか', typical: '自分で応用が必要', fomus: '翌日から即実践可能' },
  { item: '講師', typical: '教育専門の講師', fomus: 'AIで事業を回している実務家' },
  { item: '研修後フォロー', typical: '研修当日で終了', fomus: '定着するまで質問対応・サポート' },
  { item: '助成金サポート', typical: '自己申請 or 非対応', fomus: '研修計画の策定・必要書類の案内までサポート' },
]

const curriculum = [
  {
    phase: 'PHASE 1', label: '基礎編', hours: '2時間',
    title: 'AIの全体像と御社の業務整理',
    items: ['生成AIの仕組みと「できること・できないこと」', '御社の業務フローの棚卸し', 'AIで効率化すべき業務の優先順位付け', 'AIリスクとセキュリティの基礎知識'],
  },
  {
    phase: 'PHASE 2', label: '実践編', hours: '6時間',
    title: '御社の業務データでAIを使い倒す',
    items: ['ChatGPT / Gemini / Claude の使い分け', '業務メール・報告書・議事録の自動生成', '社内データの分析・レポート自動化', 'プロンプト設計（御社の業務に最適化）', '画像生成・資料デザインのAI活用', '部門別ユースケースの実践ワーク'],
  },
  {
    phase: 'PHASE 3', label: '定着編', hours: '2時間',
    title: '組織にAIを定着させる仕組みづくり',
    items: ['社内AI活用ガイドラインの策定', '部門別の活用シナリオ設計', 'AI推進担当者の育成プラン', '研修後フォローアップの計画策定'],
  },
]

const tools = [
  { name: 'ChatGPT', desc: 'テキスト生成・対話', color: '#10A37F' },
  { name: 'Gemini', desc: 'Google連携・分析', color: '#4285F4' },
  { name: 'Claude', desc: '長文分析・コード', color: '#D97706' },
  { name: 'Midjourney', desc: '画像生成', color: '#7C3AED' },
  { name: 'NotebookLM', desc: '資料分析・要約', color: '#EA4335' },
  { name: 'SUNO', desc: '音楽・音声生成', color: '#EC4899' },
]

const faqItems = [
  { q: 'AIの知識がまったくない社員でも参加できますか？', a: 'はい。「AIを触ったことがない」状態から対応します。基礎編で全体像を理解してから実践に入るので、知識ゼロでも問題ありません。実際の受講者の8割以上がAI未経験からスタートしています。' },
  { q: '研修は何日間ですか？スケジュールは柔軟に組めますか？', a: '基本プログラムは全10時間です。1日集中、2日間×5時間、5日間×2時間など、御社の業務スケジュールに合わせて柔軟に分割できます。' },
  { q: '助成金の申請手続きが分からないのですが、サポートしてもらえますか？', a: 'はい。研修計画の策定、必要書類のリスト提示、記入例の提供など、申請に必要な準備をサポートします。初めての方でもスムーズに申請できるよう伴走します。' },
  { q: 'オンラインでの受講は可能ですか？', a: 'はい。オンライン・オフライン・ハイブリッドすべてに対応しています。拠点が複数ある企業や、リモートワーク中の社員も参加可能です。' },
  { q: '研修後に定着しない不安があります。フォローはありますか？', a: '研修終了後も一定期間、チャットでの質問対応と活用状況のフォローアップを行います。「研修を受けたけど結局使わなくなった」を防ぐ定着サポートが含まれています。' },
  { q: '何名から実施できますか？', a: '1名から実施可能です。少人数の方がきめ細かい指導ができるため、3〜10名での実施を推奨しています。大人数の場合は複数回に分けて実施することも可能です。' },
]

export default function ServiceTrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />
      <Breadcrumb items={[{ name: 'ホーム', href: '/' }, { name: 'サービス', href: '/services' }, { name: '法人リスキリング', href: '/services/training' }]} />

      {/* ===== Hero ===== */}
      <section className="relative pt-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/work-training.jpg" alt="FOMUS AI研修・リスキリング" fill className="object-cover" />
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">AI Reskilling for Business</p>
            <h1 className="font-bold tracking-tight mb-6 text-[#1F2937]">
              <span className="text-[24px] md:text-[28px]">「わかる」で終わらせず、</span>
              <br />
              <span className="text-[48px] md:text-[64px] text-[#059669]">「使える」</span>
              <span className="text-[24px] md:text-[28px]">まで伴走する。</span>
            </h1>
            <p className="text-[#6B7280] text-[16px] leading-[2] max-w-[600px] mb-8">
              御社の実際の業務データを題材にした、法人向けAIリスキリング研修。<br />
              ツール操作を教えるだけの研修とは違います。<br />
              翌日から業務で使えるレベルまで、10時間で到達させます。
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['助成金で実質80%OFF', '1人あたり実質4万円〜', '10時間完結', '1名から実施可能', '申請準備サポート付き'].map((tag) => (
                <span key={tag} className="text-[12px] text-[#059669] bg-[#D1FAE5] px-4 py-2 rounded-full font-bold">{tag}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#059669] text-white px-8 py-4 rounded-full text-[16px] font-bold hover:bg-[#047857] transition-all min-h-[52px]">
                無料で相談する
              </Link>
              <a href="https://ai-training.fomus.jp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-[#E5E7EB] text-[#1F2937] px-8 py-4 rounded-full text-[16px] font-medium hover:border-[#059669] hover:text-[#059669] transition-colors min-h-[52px]">
                詳細サイトを見る &#8599;
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 助成金（インパクト最大化） ===== */}
      <section className="bg-[#065F46] py-20 md:py-28 px-6 relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#10B981] opacity-[0.08] blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-[1100px] mx-auto">
          {/* メインメッセージ */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block bg-[#DC2626] text-white text-[12px] font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide">
                令和8年度で終了予定 — 早期申請を推奨
              </div>
              <p className="text-[#34D399] text-[13px] font-bold tracking-[0.25em] uppercase mb-4">人材開発支援助成金（事業展開等リスキリング支援コース）</p>
              <h2 className="text-white font-bold tracking-tight mb-4">
                <span className="text-[24px] md:text-[28px]">国の助成金で</span>
                <br />
                <span className="text-[clamp(56px,10vw,96px)] text-[#34D399] leading-none">実質80%OFF</span>
              </h2>
              <p className="text-white/50 text-[16px] leading-[2] max-w-[560px] mx-auto">
                経費助成75% + 賃金助成（1人1時間あたり1,000円）で、<br />
                AI研修の費用を実質80%削減。申請準備もFOMUSがサポートします。
              </p>
            </div>
          </ScrollReveal>

          {/* インタラクティブシミュレーター */}
          <ScrollReveal delay={100}>
            <SubsidySimulator />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 課題 ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Problem</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">こんな状態になっていませんか？</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-[#F9FAFB] rounded-2xl p-8 border border-[#E5E7EB] h-full">
                  <span className="text-[32px] mb-4 block">{item.icon}</span>
                  <h3 className="text-[17px] font-bold text-[#1F2937] mb-3 leading-[1.5]">{item.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-[1.9]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 比較表 ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Comparison</p>
            <h2 className="font-bold tracking-tight text-[#1F2937] mb-4">
              <span className="text-[24px] md:text-[28px]">一般的なAI研修と</span>
              <span className="text-[36px] md:text-[48px] text-[#059669]">何が違うのか</span>
            </h2>
            <p className="text-[#6B7280] text-[15px] leading-[2] mb-12">FOMUSの研修は「御社の業務が題材」。だから翌日から使える。</p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="rounded-2xl border border-[#E5E7EB] overflow-hidden bg-white">
              <div className="grid grid-cols-3 bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <div className="p-4 md:p-5 text-[13px] font-bold text-[#6B7280]" />
                <div className="p-4 md:p-5 text-[13px] font-bold text-[#9CA3AF] text-center">一般的なAI研修</div>
                <div className="p-4 md:p-5 text-[13px] font-bold text-[#059669] text-center">FOMUS</div>
              </div>
              {comparison.map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-b border-[#E5E7EB] last:border-b-0">
                  <div className="p-4 md:p-5 text-[14px] font-medium text-[#1F2937]">{row.item}</div>
                  <div className="p-4 md:p-5 text-[13px] md:text-[14px] text-[#9CA3AF] text-center">{row.typical}</div>
                  <div className="p-4 md:p-5 text-[13px] md:text-[14px] text-[#059669] font-bold text-center">{row.fomus}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 研修風景画像 ===== */}
      <ScrollReveal>
        <div className="relative">
          <Image src="/images/work-training.jpg" alt="FOMUS AI研修の様子 - 御社の業務データで実践的に学ぶ" width={1400} height={600} className="w-full aspect-[21/9] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
            <div className="max-w-[1200px] mx-auto px-6 md:px-10 pb-8 md:pb-12 w-full">
              <p className="text-white text-[20px] md:text-[28px] font-bold">御社の業務データで、実践的に学ぶ。</p>
              <p className="text-white/60 text-[14px] mt-2">オンライン・オフライン・ハイブリッドに対応</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ===== カリキュラム ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Curriculum</p>
            <h2 className="font-bold tracking-tight text-[#1F2937] mb-4">
              <span className="text-[36px] md:text-[48px] text-[#059669]">10時間</span>
              <span className="text-[24px] md:text-[28px]">で、ここまで到達する</span>
            </h2>
            <p className="text-[#6B7280] text-[15px] leading-[2] max-w-[600px] mb-12">基礎→実践→定着の3フェーズ。御社のスケジュールに合わせて分割実施も可能。1日集中 / 2日間 / 5日間から選べます。</p>
          </ScrollReveal>
          <div className="space-y-6">
            {curriculum.map((phase, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden">
                  <div className="md:flex">
                    {/* 左：フェーズ情報 */}
                    <div className="md:w-[280px] flex-shrink-0 p-8 flex flex-col justify-center" style={{ background: 'linear-gradient(135deg, #059669, #10B981)' }}>
                      <p className="text-white/70 text-[12px] font-bold tracking-[0.15em] uppercase mb-1">{phase.phase}</p>
                      <p className="text-white text-[20px] md:text-[24px] font-bold mb-2">{phase.label}</p>
                      <p className="text-white/80 text-[28px] font-bold">{phase.hours}</p>
                    </div>
                    {/* 右：内容 */}
                    <div className="flex-1 p-8">
                      <h3 className="text-[17px] font-bold text-[#1F2937] mb-5">{phase.title}</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.items.map((item, j) => (
                          <div key={j} className="flex items-start gap-2.5 text-[14px] text-[#4B5563] leading-[1.7]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#059669] flex-shrink-0 mt-2" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 対応ツール ===== */}
      <section className="bg-[#F0FDF4] py-16 md:py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4 text-center">Tools</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-8 text-center">研修で扱うツール</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {tools.map((tool) => (
                <div key={tool.name} className="bg-white rounded-2xl border border-[#E5E7EB] p-5 text-center hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-[14px] font-bold" style={{ backgroundColor: tool.color }}>
                    {tool.name[0]}
                  </div>
                  <p className="text-[15px] font-bold text-[#1F2937] mb-1">{tool.name}</p>
                  <p className="text-[11px] text-[#9CA3AF]">{tool.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[14px] text-[#6B7280] mt-6 text-center">御社の業務に合わせて最適なツールを選定。上記以外にも対応可能。</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 中間CTA ===== */}
      <ScrollReveal>
        <div className="bg-gradient-to-r from-[#059669] to-[#10B981] py-12 px-6 text-center">
          <p className="text-white text-[18px] md:text-[22px] font-bold mb-2">御社の社員、AIを「使える」レベルにしませんか？</p>
          <p className="text-white/60 text-[14px] mb-6">ヒアリングは無料。助成金の活用方法もその場でお伝えします。</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#059669] px-8 py-3 rounded-full text-[15px] font-bold hover:bg-white/90 transition-colors min-h-[48px]">
            無料で相談する
          </Link>
        </div>
      </ScrollReveal>

      {/* ===== 導入の流れ ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">Flow</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">導入の流れ</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'ヒアリング', desc: '御社の業務と課題を整理。AIで効率化すべきポイントを特定。', note: '無料', icon: '💬' },
              { step: '02', title: 'カリキュラム設計', desc: '御社の業務データを題材にしたオーダーメイドカリキュラムを作成。', note: '1週間', icon: '📝' },
              { step: '03', title: '助成金申請', desc: '申請書類の作成・手続きをFOMUSがサポート。', note: 'サポート付き', icon: '💰' },
              { step: '04', title: '研修実施', desc: '基礎→実践→定着。10時間で業務実装レベルに。', note: '10時間', icon: '🎓' },
              { step: '05', title: '定着フォロー', desc: '研修後も質問対応と活用状況のフォローアップ。', note: '一定期間', icon: '🤝' },
            ].map((item) => (
              <ScrollReveal key={item.step}>
                <div className="bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] p-6 h-full text-center">
                  <span className="text-[28px] mb-3 block">{item.icon}</span>
                  <p className="text-[#059669] text-[12px] font-bold tracking-[0.15em] mb-2">STEP {item.step}</p>
                  <h3 className="text-[15px] font-bold text-[#1F2937] mb-2">{item.title}</h3>
                  <p className="text-[13px] text-[#6B7280] leading-[1.9] mb-3">{item.desc}</p>
                  <span className="inline-block text-[11px] text-[#059669] bg-[#D1FAE5] px-3 py-1 rounded-full font-bold">{item.note}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-[#F0FDF4] py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <p className="text-[#059669] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">FAQ</p>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#1F2937] mb-12">よくある質問</h2>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#065F46] py-20 md:py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-[24px] md:text-[30px] font-bold tracking-tight mb-4">まずは無料でご相談ください</h2>
            <p className="text-white/60 text-[15px] leading-[2] mb-8">
              御社の業務内容をヒアリングし、最適な研修プランと<br />
              助成金の活用方法をご提案します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#065F46] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-[#D1FAE5] transition-colors min-h-[52px]">
                無料で相談する
              </Link>
              <a href="https://ai-training.fomus.jp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-10 py-4 rounded-full text-[16px] font-medium hover:bg-white/10 transition-colors min-h-[52px]">
                詳細サイト &#8599;
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-white/40 text-[13px]">
              <span>相談無料</span>
              <span>営業電話なし</span>
              <span>契約の義務なし</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FaqSchema items={faqItems} />
      <CourseSchema />
      <BreadcrumbSchema items={[
        { name: 'ホーム', href: '/' },
        { name: 'サービス', href: '/services' },
        { name: '法人リスキリング・AI研修', href: '/services/training' },
      ]} />
      <SiteFooter />
    </div>
  )
}

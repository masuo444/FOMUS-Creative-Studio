import Anthropic from '@anthropic-ai/sdk'

// お問い合わせの振り分け
// - client: こちらにお金を払ってくれる可能性がある（仕事の依頼・相談・導入検討など）→ 通す
// - sales:  こちらがお金を払う側になる売り込み・営業 → 止める
// - unknown: 判断できない → 通す
export type InquiryVerdict = 'client' | 'sales' | 'unknown'

const FILTER_PROMPT = `あなたは企業の問い合わせフォームの仕分け担当です。
送られてきた問い合わせが、次のどれに当たるかを判定してください。

client: 送信者が「お客さん」になりうる問い合わせ。こちらのサービスを利用・購入・発注したい、見積もりや相談をしたい、導入を検討している、既存の利用者からの質問やサポート依頼、こちらに仕事を依頼したい取材・講演・協業の相談など、送信者がお金を払う側・仕事を出す側のもの。

sales: 送信者が「売り手」で、こちらにお金を払わせようとしている問い合わせ。自社の商品やサービスの売り込み、SEO・広告・Web制作・システム開発・人材紹介・営業代行・リスト販売・補助金申請代行・資金調達・M&A仲介・オフショア開発などの営業、有料掲載が前提のメディア取材や広告枠の案内、「業務提携」「パートナー募集」と称した実質的な営業、テンプレート的な一斉送信の営業文など。

unknown: どちらとも言い切れないもの、内容が短すぎる・意味が取れないもの。

迷ったら必ず unknown にしてください。本物の仕事の依頼を sales と誤判定することが最も避けたい失敗です。

回答は client / sales / unknown のいずれか1語だけを返してください。`

const VERDICTS: InquiryVerdict[] = ['client', 'sales', 'unknown']

export async function classifyInquiry(fields: Record<string, string | undefined>): Promise<InquiryVerdict> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return 'unknown'

  const content = Object.entries(fields)
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')

  try {
    const anthropic = new Anthropic({ apiKey, timeout: 15000, maxRetries: 1 })
    const response = await anthropic.messages.create({
      model: 'claude-haiku-5-5',
      max_tokens: 10,
      system: FILTER_PROMPT,
      messages: [{ role: 'user', content: `<inquiry>\n${content.slice(0, 6000)}\n</inquiry>` }],
    })
    const text = response.content[0]?.type === 'text' ? response.content[0].text.trim().toLowerCase() : ''
    return VERDICTS.find(v => text.startsWith(v)) ?? 'unknown'
  } catch (error) {
    // 判定に失敗したら通す（仕事の依頼を取りこぼさないため）
    console.error('Inquiry filter error:', error)
    return 'unknown'
  }
}

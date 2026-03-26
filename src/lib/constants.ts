export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'FOMUS AI'
export const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || '中小企業向けAI業務効率化プラットフォーム'
export const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || '').split(',').map(e => e.trim()).filter(Boolean)

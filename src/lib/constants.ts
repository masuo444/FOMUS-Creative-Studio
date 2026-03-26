export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'OMOTE-AI'
export const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || '接客業向けAI多言語コンシェルジュ'
export const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || '').split(',').map(e => e.trim()).filter(Boolean)

// Unicode-based language detection (fast, no API call needed)
// Falls back to Claude Haiku for ambiguous text

const UNICODE_RANGES: Record<string, RegExp> = {
  ja: /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/,  // Hiragana, Katakana, CJK
  zh: /[\u4E00-\u9FFF]/,  // CJK only (no hiragana/katakana)
  ko: /[\uAC00-\uD7AF\u1100-\u11FF]/,  // Hangul
  th: /[\u0E00-\u0E7F]/,  // Thai
  ar: /[\u0600-\u06FF\u0750-\u077F]/,  // Arabic
}

export function detectLanguageFast(text: string): string | null {
  // Count character types
  const hasJapanese = UNICODE_RANGES.ja.test(text) && /[\u3040-\u309F\u30A0-\u30FF]/.test(text)
  if (hasJapanese) return 'ja'

  if (UNICODE_RANGES.ko.test(text)) return 'ko'
  if (UNICODE_RANGES.th.test(text)) return 'th'
  if (UNICODE_RANGES.ar.test(text)) return 'ar'

  // Chinese vs Japanese disambiguation: CJK without hiragana/katakana = Chinese
  if (UNICODE_RANGES.zh.test(text) && !hasJapanese) return 'zh'

  // Latin script - check common patterns
  const lower = text.toLowerCase()
  // French markers
  if (/\b(je|nous|vous|merci|bonjour|oui|est|avec|les|des|une|dans)\b/.test(lower)) return 'fr'
  // Spanish markers
  if (/\b(hola|gracias|por favor|buenas|está|usted|cómo|qué|muy|también)\b/.test(lower)) return 'es'
  // German markers
  if (/\b(ich|ist|das|die|der|und|ein|nicht|haben|bitte|danke)\b/.test(lower)) return 'de'

  // Default: assume English for Latin script
  if (/^[\x00-\x7F\s]+$/.test(text)) return 'en'

  return null // Unknown - needs Claude Haiku
}

export const SUPPORTED_LANGUAGES = {
  ja: '日本語',
  en: 'English',
  zh: '中文',
  ko: '한국어',
  th: 'ภาษาไทย',
  ar: 'العربية',
  fr: 'Français',
  es: 'Español',
  de: 'Deutsch',
} as const

export type SupportedLanguage = keyof typeof SUPPORTED_LANGUAGES

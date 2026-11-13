export interface Item { title: string, text: string, url?: string }

export interface SiteTexts {
  lang: 'uk' | 'en'
  meta: { title: string, description: string }
  nav: { directions: string, prices: string, how: string, cases: string, cta: string, switchLabel: string }
  hero: { kicker: string, title: string, lead: string, badges: string[], ctaPrimary: string, ctaSecondary: string }
  who: { kicker: string, title: string, items: Item[] }
  directions: { kicker: string, title: string, items: Item[], note: string }
  prices: { kicker: string, title: string, head: [string, string], rows: [string, string][], note: string }
  how: { kicker: string, title: string, steps: Item[], note: string }
  cases: { kicker: string, title: string, items: Item[] }
  about: { kicker: string, title: string, photoAlt: string, paras: string[], facts: string[] }
  contact: { title: string, lead: string, emailLabel: string, telegramLabel: string, whatsappLabel: string }
  footer: string
}

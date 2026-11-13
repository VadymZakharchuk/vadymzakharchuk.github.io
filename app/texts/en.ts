import type { SiteTexts } from './types'

const en: SiteTexts = {
  lang: 'en',
  meta: {
    title: 'Vadym Zakharchuk — External Development Partner for Digital Agencies',
    description: 'I deliver the technical side of client projects for marketing agencies and SEO/PPC specialists: Vue/Nuxt and Node.js development, technical SEO, integrations, support. White-label, fixed prices, estimates within 24 hours.',
  },
  nav: {
    directions: 'Services',
    prices: 'Pricing',
    how: 'How we work',
    cases: 'Work',
    cta: 'Send a task',
    switchLabel: 'Українська версія',
  },
  hero: {
    kicker: 'For agencies, studios and SEO/PPC specialists',
    title: 'External Development Partner for Digital Agencies',
    lead: 'Take on the technical projects you currently turn down. I help marketing agencies and independent SEO/PPC specialists deliver the technical side of client projects without hiring an in-house developer. I work as a white-label subcontractor or as a long-term technical partner.',
    badges: ['White-label', 'Fixed prices', 'Estimates within 24 hours', 'First order: pay after the result'],
    ctaPrimary: 'Send a task',
    ctaSecondary: 'See pricing',
  },
  who: {
    kicker: 'Who this is for',
    title: 'You sell the result to your client — I handle the technical side',
    items: [
      { title: 'Web and digital agencies', text: 'Extra development capacity when your own developers are busy or you don’t have any.' },
      { title: 'SEO agencies and freelancers', text: 'Technical SEO, Nuxt, performance, migrations — what can’t be fixed in a CMS admin panel.' },
      { title: 'Marketing studios', text: 'Websites, client portals, APIs and automation for your clients.' },
      { title: 'Technology partner', text: 'You sell marketing but don’t have technical expertise in-house — I become it.' },
    ],
  },
  directions: {
    kicker: 'What you can hand over to me',
    title: 'Five service areas',
    items: [
      { title: 'Web Development', text: 'Landing pages, corporate websites and portals built with Vue/Nuxt, technical SEO included.' },
      { title: 'Technical SEO', text: 'Fixing technical issues, SSR and prerendering, Core Web Vitals, SEO-safe site migrations.' },
      { title: 'Backend & Integration', text: 'APIs, CRMs, payment systems, n8n automation, third-party services.' },
      { title: 'Custom Development', text: 'Client portals, SaaS products, internal tools.' },
      { title: 'Maintenance & Rescue', text: 'Ongoing support, refactoring, fixing code someone else left behind.' },
    ],
    note: 'I work with sites on any CMS, including WordPress: front-end, technical SEO, performance and integrations. New sites and apps I build with Vue/Nuxt and Node.js. I don’t do PHP theme or plugin development.',
  },
  prices: {
    kicker: 'Pricing',
    title: 'Fixed prices — you add your own margin',
    head: ['Task', 'Price'],
    rows: [
      ['Small technical task (up to ~3 hours)', 'from €50'],
      ['Technical SEO: canonicals, sitemaps, meta tags, redirects', 'from €100'],
      ['Technical SEO: SSR or prerendering for a SPA', 'from €400'],
      ['Integration: form → CRM, webhook, n8n workflow', 'from €200'],
      ['Integration: two-way sync, payment system', 'from €450'],
      ['Landing page on Nuxt with technical SEO', 'from €350'],
      ['Larger development: client portals, internal tools', 'from €700'],
      ['Support: up to 2 hours/month, uptime and SSL monitoring', 'from €50/month'],
      ['Changes outside the agreed scope', '€30/hour'],
    ],
    note: 'Invoices are issued by my Ukrainian sole proprietorship (FOP).',
  },
  how: {
    kicker: 'How we work',
    title: 'Four steps',
    steps: [
      { title: 'You send the task', text: 'A link, a description, and access if needed.' },
      { title: 'Estimate within 24 hours', text: 'A fixed price and a deadline. Estimates are free.' },
      { title: 'Pay after the result', text: 'You pay for the first order after you see the result. After that, tasks over €300 require a 50% upfront payment.' },
      { title: 'White-label', text: 'Reports and code carry no branding of mine, an NDA if you need one, and no contact with your client without your consent.' },
    ],
    note: 'You talk directly to the person doing the work, with no account managers in between. I take one or two projects at a time, so deadlines are realistic.',
  },
  cases: {
    kicker: 'Recent work',
    title: 'Selected projects',
    items: [
      { title: 'compendium.com.ua', url: 'https://compendium.com.ua', text: 'Technical SEO for a Nuxt pharmaceutical platform: indexed pages grew from about 40–50k to 300–400k. Pharmacy map with real-time updates.' },
      { title: 'apteki.ua', url: 'https://apteki.ua', text: 'Medicine search with prices and pharmacy availability on Nuxt: front-end, REST APIs and technical SEO for a large catalogue.' },
      { title: 'Credit Agricole Ukraine', text: 'Online banking platform: secure, test-covered front-end for banking operations, refactoring of a legacy Nuxt 2 codebase.' },
      { title: 'umj.com.ua', url: 'https://umj.com.ua', text: 'Ukrainian Medical Journal: migration from WordPress to Nuxt. I built the entire front-end.' },
      { title: 'Vibe BI', url: 'https://vibe-bi.com.ua', text: 'Marketing analytics SaaS: dashboards, daily data pipelines from GA4, Google Ads and Meta, subscription billing.' },
      { title: 'Pagelean', url: 'https://pagelean.app', text: 'A system for technical website audits and outreach: audit queue, PDF reports in two languages, email campaigns with tracking.' },
      { title: 'Lead automation on n8n', text: 'Website form → AI lead qualification → HubSpot → Telegram alerts.' },
      { title: 'Medical website template on Nuxt', url: 'https://demo.pagelean.app', text: 'Treatment programmes with prices, doctors, reviews, articles. Live demo.' },
    ],
  },
  about: {
    kicker: 'About me',
    title: 'Vadym Zakharchuk',
    photoAlt: 'Vadym Zakharchuk',
    paras: [
      'Based in Kyiv, same working hours as Poland. 10 years in software development (Vue/Nuxt, Node.js). I worked on an educational media platform for the German Ministry of Education (Applied Methods GmbH), pharmaceutical platforms at Proxima Research and an e-banking platform at Credit Agricole.',
      'Before IT I spent 14 years in operations management in automotive logistics, so I understand your client’s business, not just the code.',
    ],
    facts: ['Vue / Nuxt', 'Node.js · NestJS', 'Technical SEO', 'n8n · APIs · CRM', 'MSc in Mathematics'],
  },
  contact: {
    title: 'Send me a task and get an estimate within 24 hours',
    lead: 'Describe the task in a few sentences and add a link to the site. I reply the same working day.',
    emailLabel: 'Email',
    telegramLabel: 'Telegram',
    whatsappLabel: 'WhatsApp',
  },
  footer: 'Vadym Zakharchuk · Kyiv, Ukraine · working remotely',
}

export default en

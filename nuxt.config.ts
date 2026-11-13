// Personal partner site: static HTML on GitHub Pages, no client JS.
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      meta: [{ name: 'theme-color', content: '#14213D' }],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  // The page has no interactivity: ship pure HTML + inlined CSS, zero JS.
  routeRules: {
    '/**': { noScripts: true },
  },

  nitro: {
    preset: 'github_pages',
    // Only two pages: list them instead of crawling (the crawler would follow the encoded mailto link).
    prerender: { routes: ['/', '/en/'], crawlLinks: false },
  },
})

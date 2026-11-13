<script setup lang="ts">
import type { SiteTexts } from '~/texts/types'

const props = defineProps<{ t: SiteTexts }>()

const SITE = 'https://vadymzakharchuk.github.io'
const EMAIL = 'vadym.zakharchuk@gmail.com'
const TELEGRAM = 'https://t.me/VAZAKHAR'
// WhatsApp Business short link (wa.me/message/…) keeps the phone number off the page.
// Empty = the WhatsApp contact is hidden.
const WHATSAPP = ''

const isUk = computed(() => props.t.lang === 'uk')
const selfUrl = computed(() => (isUk.value ? `${SITE}/` : `${SITE}/en/`))
const otherPath = computed(() => (isUk.value ? '/en/' : '/'))

useHead({
  htmlAttrs: { lang: () => (isUk.value ? 'uk' : 'en') },
  link: [
    { rel: 'canonical', href: selfUrl },
    { rel: 'alternate', hreflang: 'uk', href: `${SITE}/` },
    { rel: 'alternate', hreflang: 'en', href: `${SITE}/en/` },
    { rel: 'alternate', hreflang: 'x-default', href: `${SITE}/` },
  ],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': isUk.value ? 'Вадим Захарчук' : 'Vadym Zakharchuk',
      'jobTitle': props.t.hero.title,
      'url': selfUrl.value,
      'email': `mailto:${EMAIL}`,
      'address': { '@type': 'PostalAddress', 'addressLocality': 'Kyiv', 'addressCountry': 'UA' },
      'sameAs': ['https://www.linkedin.com/in/Vadym-Zakharchuk', 'https://github.com/VadymZakharchuk', TELEGRAM],
      'knowsAbout': ['Vue.js', 'Nuxt', 'Node.js', 'Technical SEO', 'n8n', 'API integrations'],
    }),
  }],
})

useSeoMeta({
  title: () => props.t.meta.title,
  description: () => props.t.meta.description,
  ogTitle: () => props.t.meta.title,
  ogDescription: () => props.t.meta.description,
  ogType: 'website',
  ogUrl: () => selfUrl.value,
  ogLocale: () => (isUk.value ? 'uk_UA' : 'en_US'),
})
</script>

<template>
  <header class="header">
    <div class="wrap row">
      <a class="logo" :href="otherPath === '/' ? '/en/' : '/'"><i aria-hidden="true">VZ</i>{{ t.about.title }}</a>
      <nav class="nav">
        <a href="#directions">{{ t.nav.directions }}</a>
        <a href="#prices">{{ t.nav.prices }}</a>
        <a href="#how">{{ t.nav.how }}</a>
        <a href="#cases">{{ t.nav.cases }}</a>
      </nav>
      <a class="lang" :href="otherPath" :hreflang="isUk ? 'en' : 'uk'" :aria-label="t.nav.switchLabel">{{ isUk ? 'EN' : 'UA' }}</a>
      <a class="btn btn-accent write" href="#contact">{{ t.nav.cta }}</a>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="wrap">
        <p class="kicker">{{ t.hero.kicker }}</p>
        <h1>{{ t.hero.title }}</h1>
        <p class="lead">{{ t.hero.lead }}</p>
        <ul class="badges">
          <li v-for="b in t.hero.badges" :key="b">{{ b }}</li>
        </ul>
        <div class="actions">
          <a class="btn btn-accent" href="#contact">{{ t.hero.ctaPrimary }}</a>
          <a class="btn btn-ghost" href="#prices">{{ t.hero.ctaSecondary }}</a>
        </div>
      </div>
    </section>

    <section id="who">
      <div class="wrap">
        <p class="kicker">{{ t.who.kicker }}</p>
        <h2>{{ t.who.title }}</h2>
        <div class="grid grid-4">
          <div v-for="it in t.who.items" :key="it.title" class="card">
            <h3>{{ it.title }}</h3>
            <p>{{ it.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="directions" class="alt">
      <div class="wrap">
        <p class="kicker">{{ t.directions.kicker }}</p>
        <h2>{{ t.directions.title }}</h2>
        <div class="grid grid-dirs">
          <div v-for="(it, i) in t.directions.items" :key="it.title" class="card dir">
            <span class="num">{{ i + 1 }}</span>
            <h3>{{ it.title }}</h3>
            <p>{{ it.text }}</p>
          </div>
        </div>
        <p class="note">{{ t.directions.note }}</p>
      </div>
    </section>

    <section id="prices">
      <div class="wrap">
        <p class="kicker">{{ t.prices.kicker }}</p>
        <h2>{{ t.prices.title }}</h2>
        <table class="prices">
          <thead>
            <tr><th>{{ t.prices.head[0] }}</th><th>{{ t.prices.head[1] }}</th></tr>
          </thead>
          <tbody>
            <tr v-for="r in t.prices.rows" :key="r[0]">
              <td>{{ r[0] }}</td><td class="price">{{ r[1] }}</td>
            </tr>
          </tbody>
        </table>
        <p class="note">{{ t.prices.note }}</p>
      </div>
    </section>

    <section id="how" class="dark">
      <div class="wrap">
        <p class="kicker">{{ t.how.kicker }}</p>
        <h2>{{ t.how.title }}</h2>
        <ol class="steps">
          <li v-for="s in t.how.steps" :key="s.title">
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
          </li>
        </ol>
        <p class="note">{{ t.how.note }}</p>
      </div>
    </section>

    <section id="cases">
      <div class="wrap">
        <p class="kicker">{{ t.cases.kicker }}</p>
        <h2>{{ t.cases.title }}</h2>
        <div class="grid grid-cases">
          <div v-for="it in t.cases.items" :key="it.title" class="card">
            <h3>
              <a v-if="it.url" :href="it.url" target="_blank" rel="noopener">{{ it.title }} ↗</a>
              <template v-else>{{ it.title }}</template>
            </h3>
            <p>{{ it.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="alt">
      <div class="wrap about">
        <img class="portrait" src="/img/vadym-portrait.webp" width="632" height="790" :alt="t.about.photoAlt" loading="lazy" decoding="async">
        <div>
          <p class="kicker">{{ t.about.kicker }}</p>
          <h2>{{ t.about.title }}</h2>
          <p v-for="p in t.about.paras" :key="p" class="para">{{ p }}</p>
          <div class="facts">
            <span v-for="f in t.about.facts" :key="f">{{ f }}</span>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="dark contact">
      <div class="wrap">
        <h2>{{ t.contact.title }}</h2>
        <p class="lead">{{ t.contact.lead }}</p>
        <div class="contacts">
          <a class="btn btn-accent" :href="`mailto:${EMAIL}`"><small>{{ t.contact.emailLabel }}</small>{{ EMAIL }}</a>
          <a class="btn btn-ghost" :href="TELEGRAM" target="_blank" rel="noopener"><small>{{ t.contact.telegramLabel }}</small>@VAZAKHAR</a>
          <a v-if="WHATSAPP" class="btn btn-ghost" :href="WHATSAPP" target="_blank" rel="noopener"><small>{{ t.contact.whatsappLabel }}</small>WhatsApp</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="wrap">{{ t.footer }}</div>
  </footer>
</template>

<style scoped>
.header { background: var(--navy); color: var(--on-dark); position: sticky; top: 0; z-index: 10; }
.row { display: flex; align-items: center; gap: 24px; height: 60px; }
.logo { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 17px; text-decoration: none; white-space: nowrap; }
.logo i {
  font-style: normal; font-size: 12px; font-weight: 800; color: var(--navy); background: var(--accent-on-dark);
  width: 28px; height: 28px; border-radius: 6px; display: grid; place-items: center;
}
.nav { display: flex; gap: 22px; margin-left: auto; }
.nav a, .lang { text-decoration: none; font-size: 15px; color: var(--on-dark-muted); }
.nav a:hover, .lang:hover { color: var(--on-dark); }
.lang { font-weight: 700; letter-spacing: .04em; }
.write { padding: 8px 16px; font-size: 14px; }
@media (max-width: 900px) { .nav { display: none; } .lang { margin-left: auto; } }
@media (max-width: 480px) { .logo { font-size: 0; gap: 0; } .write { font-size: 13px; padding: 7px 12px; } }

.hero { background: linear-gradient(160deg, var(--navy) 0%, var(--navy-2) 100%); color: var(--on-dark); padding: 88px 0 96px; }
.hero .kicker { color: var(--accent-on-dark); }
.hero h1 { font-size: clamp(34px, 5.4vw, 58px); font-weight: 800; max-width: 17em; }
.hero .lead { font-size: clamp(18px, 2vw, 21px); color: var(--on-dark-muted); max-width: 40em; margin: 24px 0 0; }
.badges { list-style: none; padding: 0; margin: 28px 0 0; display: flex; flex-wrap: wrap; gap: 10px; }
.badges li { border: 1px solid rgba(94, 234, 212, .4); color: var(--accent-on-dark); border-radius: 999px; padding: 5px 14px; font-size: 14px; font-weight: 600; }
.actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 36px; }

.alt { background: var(--paper); }
.alt .card { background: var(--bg); }

.grid { display: grid; gap: 16px; }
@media (min-width: 640px) { .grid-4, .grid-cases { grid-template-columns: repeat(2, 1fr); } .grid-dirs { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1000px) { .grid-4 { grid-template-columns: repeat(4, 1fr); } .grid-dirs, .grid-cases { grid-template-columns: repeat(3, 1fr); } }
.dir { position: relative; }
.num { display: inline-grid; place-items: center; width: 32px; height: 32px; border-radius: 8px; background: var(--accent-soft); color: var(--accent); font-weight: 800; margin-bottom: 14px; }
.card h3 a { text-decoration: none; color: var(--accent); }
.card h3 a:hover { text-decoration: underline; }

.note { margin: 28px 0 0; max-width: 46em; color: var(--ink-soft); border-left: 3px solid var(--accent); padding-left: 16px; }

.prices { width: 100%; border-collapse: collapse; background: var(--paper); border: 1px solid var(--line); border-radius: 10px; overflow: hidden; }
.prices th, .prices td { text-align: left; padding: 14px 18px; border-bottom: 1px solid var(--line); vertical-align: top; }
.prices th { font-size: 13px; text-transform: uppercase; letter-spacing: .06em; color: var(--muted); background: var(--bg); }
.prices tr:last-child td { border-bottom: 0; }
.price { white-space: nowrap; font-weight: 700; text-align: right !important; }
.prices th:last-child { text-align: right; }
@media (max-width: 520px) { .prices th, .prices td { padding: 12px; font-size: 15px; } .price { white-space: normal; } }

.dark { background: var(--navy); color: var(--on-dark); }
.dark .kicker { color: var(--accent-on-dark); }
.dark .note { color: var(--on-dark-muted); border-left-color: var(--accent-on-dark); }
.steps { list-style: none; counter-reset: step; padding: 0; margin: 0; display: grid; gap: 16px; }
@media (min-width: 760px) { .steps { grid-template-columns: repeat(4, 1fr); } }
.steps li { counter-increment: step; background: rgba(255, 255, 255, .05); border: 1px solid rgba(255, 255, 255, .1); border-radius: 10px; padding: 24px; }
.steps li::before { content: counter(step); display: block; font-size: 32px; font-weight: 800; color: var(--accent-on-dark); margin-bottom: 8px; }
.steps p { color: var(--on-dark-muted); margin: 8px 0 0; }

.about { display: grid; gap: 40px; align-items: center; }
@media (min-width: 860px) { .about { grid-template-columns: 300px 1fr; gap: 64px; } }
.portrait { width: 100%; max-width: 300px; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 12px; }
.about h2 { margin-bottom: 18px; }
.para { margin: 0 0 14px; max-width: 36em; color: var(--ink-soft); }
.facts { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
.facts span { background: var(--bg); border: 1px solid var(--line); border-radius: 999px; padding: 6px 14px; font-size: 14px; font-weight: 600; }

.contact { text-align: center; }
.contact h2 { margin-bottom: 14px; }
.contact .lead { color: var(--on-dark-muted); margin: 0 auto; max-width: 36em; }
.contacts { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; margin-top: 32px; }
.contacts .btn { display: flex; flex-direction: column; align-items: center; min-width: 240px; overflow-wrap: anywhere; }
.contacts small { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; opacity: .7; }

.footer { background: #0D1730; color: var(--on-dark-muted); font-size: 14px; padding: 24px 0; }
</style>

// nuxt.config.ts
// Configurazione Nuxt 3 — RS Lucchini landing pilota
// Scelte: dark mode default, fonts via @nuxt/fonts, immagini via @nuxt/image,
// motion via @vueuse/motion, animazioni custom via plugin GSAP.

export default defineNuxtConfig({
  compatibilityDate: '2024-10-01',
  devtools: { enabled: true },
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@pinia/nuxt'
  ],

  css: ['~/assets/styles/main.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'it', class: 'dark' },
      title: 'RS Lucchini — Mostriamo il lavoro reale',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#0B0F14' },
        {
          name: 'description',
          content:
            'Un progetto pilota per RS Lucchini: contenuti autentici, comunicazione moderna e metriche reali per attrarre talenti industriali di qualità.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'RS Lucchini — Mostriamo il lavoro reale' },
        {
          property: 'og:description',
          content:
            'Verifichiamo in modo concreto se mostrare il lavoro reale aumenta interesse e qualità delle candidature.'
        },
        { property: 'og:image', content: '/images/og-cover.svg' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
      ]
    }
  },

  fonts: {
    families: [
      { name: 'Space Grotesk', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Inter', provider: 'google', weights: [300, 400, 500, 600, 700] }
    ],
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal']
    }
  },

  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg'],
    screens: {
      xs: 360,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  experimental: {
    payloadExtraction: true
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  vite: {
    build: {
      target: 'esnext',
      cssMinify: 'lightningcss'
    }
  },

  typescript: {
    strict: true,
    typeCheck: false
  }
})

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

const year = new Date().getFullYear()
const links = [
  { label: 'Problema', href: '#problema' },
  { label: 'Metodo', href: '#metodo' },
  { label: 'Contenuti', href: '#contenuti' },
  { label: 'KPI', href: '#kpi' },
  { label: 'Quadro economico', href: '#economico' },
  { label: 'Contatto', href: '#contatto' }
]

const social = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/denanisrl/posts/?feedView=all',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@denanisrl',
    path: 'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z'
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/DENANISRL',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/denanisrl/',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@denanisrl',
    path: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z'
  }
]

const websites = [
  { label: 'denani.it', href: 'https://denani.it/' },
  { label: 'denani.odoo.com', href: 'https://denani.odoo.com/' }
]
</script>

<template>
  <footer class="relative pt-24 pb-10">
    <div class="container-x">
      <div class="divider-x" />
      <div class="mt-12 grid lg:grid-cols-12 gap-10">
        <!-- Brand Denani + RS Lucchini -->
        <div class="lg:col-span-5">
          <div class="flex items-center gap-4">
            <img
              src="/images/DENANI-LOGO-WHITE.webp"
              alt="Denani"
              class="h-7 sm:h-9 w-auto object-contain"
            />
            <span class="text-steel-600 text-xl font-light">|</span>
            <img
              src="https://lucchinirs.com/wp-content/uploads/2022/02/logo_lucchinirs-white.png"
              alt="Lucchini RS"
              class="h-5 sm:h-7 w-auto object-contain opacity-75"
            />
          </div>
          <p class="mt-6 text-ink-muted max-w-md text-pretty">
            Un esperimento concreto per misurare quanto vale, oggi, raccontare
            il lavoro industriale come è davvero.
          </p>
        </div>

        <!-- Nav -->
        <nav class="lg:col-span-4 grid grid-cols-2 gap-y-2">
          <a
            v-for="l in links"
            :key="l.href"
            :href="l.href"
            class="text-sm text-ink-muted hover:text-ink transition-colors"
          >
            {{ l.label }}
          </a>
        </nav>

        <!-- Contatti Denani -->
        <div class="lg:col-span-3">
          <p class="text-[11px] uppercase tracking-[0.18em] text-ink-muted">Contatti Denani</p>
          <a
            href="mailto:support@denani.it"
            class="mt-2 inline-flex items-center gap-2 text-ink hover:text-accent transition-colors"
          >
            support@denani.it
            <ArrowUpRight class="w-4 h-4" />
          </a>
          <div class="mt-5 flex items-center gap-2.5 flex-wrap">
            <a
              v-for="s in social"
              :key="s.label"
              :href="s.href"
              :aria-label="s.label"
              target="_blank"
              rel="noopener"
              class="w-9 h-9 rounded-lg bg-steel-800 ring-1 ring-steel-700/70 grid place-items-center text-ink-muted hover:text-accent hover:ring-accent/40 transition"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path :d="s.path" />
              </svg>
            </a>
          </div>
          <div class="mt-5 flex flex-col gap-1">
            <a
              v-for="w in websites"
              :key="w.href"
              :href="w.href"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-accent transition-colors"
            >
              <ArrowUpRight class="w-3 h-3" />
              {{ w.label }}
            </a>
          </div>
        </div>
      </div>

      <div class="mt-14 pt-6 border-t border-steel-700/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ink-muted">
        <p>© {{ year }} Denani · Proposta pilota per RS Lucchini · Tutti i diritti riservati.</p>
        <div class="flex items-center gap-5">
          <a href="#" class="hover:text-ink">Privacy</a>
          <a href="#" class="hover:text-ink">Cookie</a>
          <a href="#" class="hover:text-ink">Note legali</a>
        </div>
      </div>
    </div>
  </footer>
</template>
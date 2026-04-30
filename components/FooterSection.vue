<script setup lang="ts">
// FooterSection — minimale premium dark.
import { Linkedin, Instagram, Mail, ArrowUpRight } from 'lucide-vue-next'

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
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Mail, href: 'mailto:hello@rslucchini-pilot.it', label: 'Email' }
]
</script>

<template>
  <footer class="relative pt-24 pb-10">
    <div class="container-x">
      <div class="divider-x" />
      <div class="mt-12 grid lg:grid-cols-12 gap-10">
        <!-- Brand + claim -->
        <div class="lg:col-span-5">
          <div class="flex items-center gap-3">
            <span
              class="relative inline-flex w-10 h-10 rounded-lg items-center justify-center bg-steel-800 ring-1 ring-steel-700/70 overflow-hidden"
            >
              <span class="absolute inset-0 bg-grad-radial opacity-70" />
              <span class="relative font-display font-semibold text-ink">RS</span>
            </span>
            <div>
              <p class="font-display text-lg">Lucchini</p>
              <p class="text-xs uppercase tracking-[0.2em] text-ink-muted">Pilot · Employer Branding</p>
            </div>
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

        <!-- Contatti -->
        <div class="lg:col-span-3">
          <p class="text-[11px] uppercase tracking-[0.18em] text-ink-muted">Contatti</p>
          <a
            href="mailto:hello@rslucchini-pilot.it"
            class="mt-2 inline-flex items-center gap-2 text-ink hover:text-accent transition-colors"
          >
            hello@rslucchini-pilot.it
            <ArrowUpRight class="w-4 h-4" />
          </a>
          <div class="mt-5 flex items-center gap-2.5">
            <a
              v-for="s in social"
              :key="s.label"
              :href="s.href"
              :aria-label="s.label"
              target="_blank"
              rel="noopener"
              class="w-9 h-9 rounded-lg bg-steel-800 ring-1 ring-steel-700/70 grid place-items-center text-ink-muted hover:text-accent hover:ring-accent/40 transition"
            >
              <component :is="s.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-14 pt-6 border-t border-steel-700/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ink-muted">
        <p>© {{ year }} RS Lucchini · Progetto pilota · Tutti i diritti riservati.</p>
        <div class="flex items-center gap-5">
          <a href="#" class="hover:text-ink">Privacy</a>
          <a href="#" class="hover:text-ink">Cookie</a>
          <a href="#" class="hover:text-ink">Note legali</a>
        </div>
      </div>
    </div>
  </footer>
</template>

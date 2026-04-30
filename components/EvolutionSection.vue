<script setup lang="ts">
// EvolutionSection — possibile evoluzione post pilota.
import { Layers, CalendarRange, GraduationCap, Sparkles, ArrowUpRight } from 'lucide-vue-next'

const root = ref<HTMLElement | null>(null)
useReveal(root, { stagger: 0.08 })

const items = [
  {
    icon: Layers,
    tag: 'Estensione',
    title: 'Altri ruoli critici',
    text: 'Replicare il format su 2–3 ruoli con dinamiche di mercato simili.'
  },
  {
    icon: CalendarRange,
    tag: 'Continuità',
    title: 'Flusso mensile',
    text: 'Calendar editoriale con 4–6 contenuti al mese, sempre dal campo.'
  },
  {
    icon: GraduationCap,
    tag: 'Filiera formativa',
    title: 'Collegamento ITS',
    text: 'Ponte strutturato con istituti tecnici e ITS sul territorio.'
  },
  {
    icon: Sparkles,
    tag: 'Brand',
    title: 'Employer branding continuativo',
    text: 'Posizionamento di lungo periodo come datore di lavoro industriale moderno.'
  }
]
</script>

<template>
  <section ref="root" class="section-pad relative">
    <div class="container-x">
      <SectionTitle
        eyebrow="07 — Possibile evoluzione"
        title="Se il pilota funziona, c'è una roadmap pronta."
        accent-word="roadmap pronta"
        lead="Quattro direzioni naturali in cui estendere quanto imparato, con investimento progressivo."
      />

      <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <article
          v-for="(it, i) in items"
          :key="it.title"
          data-reveal
          class="group relative rounded-2xl glass grad-border p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elevate"
        >
          <div
            class="w-11 h-11 rounded-xl bg-steel-800 ring-1 ring-steel-700/70 grid place-items-center text-accent group-hover:bg-accent/10 transition-colors"
          >
            <component :is="it.icon" class="w-5 h-5" />
          </div>
          <p class="mt-6 text-[11px] uppercase tracking-[0.18em] text-accent">
            Step {{ i + 1 }} · {{ it.tag }}
          </p>
          <h3 class="mt-1 font-display text-xl">{{ it.title }}</h3>
          <p class="mt-2 text-sm text-ink-muted text-pretty">{{ it.text }}</p>

          <ArrowUpRight
            class="absolute top-5 right-5 w-4 h-4 text-ink-muted group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
          />

          <span
            aria-hidden="true"
            class="pointer-events-none absolute inset-x-6 -bottom-px h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </article>
      </div>
    </div>
  </section>
</template>

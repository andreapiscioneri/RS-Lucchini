<script setup lang="ts">
// ProblemSection — split layout 2 colonne con cards animate stagger.
import { TrendingDown, EyeOff, UserMinus, RefreshCcw } from 'lucide-vue-next'

const root = ref<HTMLElement | null>(null)
useReveal(root, { stagger: 0.1 })

const items = [
  {
    icon: TrendingDown,
    title: 'Difficoltà di recruiting',
    text: 'Annunci con poca risposta qualificata, tempi lunghi per coprire ruoli tecnici, costi crescenti per ogni assunzione.'
  },
  {
    icon: EyeOff,
    title: 'Mismatch di percezione',
    text: 'I candidati immaginano un ambiente di lavoro che non corrisponde alla realtà — in entrambe le direzioni.'
  },
  {
    icon: UserMinus,
    title: 'Scarso interesse qualificato',
    text: 'Tante visualizzazioni, poche candidature realmente in target rispetto al profilo richiesto.'
  },
  {
    icon: RefreshCcw,
    title: 'Turnover sotto soglia',
    text: 'Persone che escono nei primi mesi perché il ruolo si rivela diverso da come era stato comunicato.'
  }
]
</script>

<template>
  <section
    id="problema"
    ref="root"
    class="section-pad relative"
  >
    <div class="container-x grid lg:grid-cols-12 gap-10 lg:gap-16">
      <!-- Sinistra -->
      <div class="lg:col-span-5">
        <p data-reveal class="eyebrow mb-5">
          <span class="dot" />
          01 — Il problema
        </p>
        <h2
          data-reveal
          class="font-display text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05] tracking-tight"
        >
          <span class="text-gradient">Il problema non è solo</span>
          <br />
          <span class="text-accent-gradient">trovare persone.</span>
        </h2>
        <p data-reveal class="mt-6 text-ink-muted text-pretty text-base sm:text-lg">
          Molti ruoli industriali oggi soffrono una distanza crescente tra
          percezione esterna e realtà del lavoro. Le aziende comunicano poco
          il lavoro reale, mentre i candidati scelgono sempre più sulla base di
          autenticità, ambiente e prospettiva concreta.
        </p>

        <!-- Quote -->
        <figure data-reveal class="mt-10 relative pl-6 border-l border-accent/40">
          <blockquote class="text-ink/90 text-lg italic leading-relaxed">
            "Non è un problema di volume di candidati.
            È un problema di <span class="text-accent">qualità del segnale</span>
            che la nostra comunicazione manda al mercato."
          </blockquote>
          <figcaption class="mt-3 text-sm text-ink-muted">
            Osservazione ricorrente nei colloqui con HR industriali
          </figcaption>
        </figure>
      </div>

      <!-- Destra: cards -->
      <div class="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-5 content-start">
        <div
          v-for="(it, i) in items"
          :key="it.title"
          data-reveal
          class="group relative rounded-2xl glass grad-border p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevate"
        >
          <span
            aria-hidden="true"
            class="pointer-events-none absolute -top-1/2 left-1/2 -translate-x-1/2 w-[160%] h-[120%] bg-grad-radial opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
          <div class="relative">
            <div
              class="w-10 h-10 rounded-lg bg-steel-800 ring-1 ring-steel-700/70 grid place-items-center text-accent group-hover:bg-accent/10 transition-colors"
            >
              <component :is="it.icon" class="w-5 h-5" />
            </div>
            <p class="mt-5 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              0{{ i + 1 }}
            </p>
            <h3 class="mt-1 font-display text-xl">{{ it.title }}</h3>
            <p class="mt-2 text-sm text-ink-muted text-pretty">{{ it.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-x mt-24"><div class="divider-x" /></div>
  </section>
</template>

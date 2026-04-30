<script setup lang="ts">
// PilotGoalSection — grande statement centrale + 3 pillar cards.
import { Hammer, UserSearch, LineChart } from 'lucide-vue-next'

const root = ref<HTMLElement | null>(null)
useReveal(root, { stagger: 0.12 })

const pillars = [
  {
    icon: Hammer,
    label: 'Realtà del lavoro',
    text: 'Cosa succede davvero in turno: gesti, ambiente, attrezzatura, ritmo. Niente patinato, niente messinscena.'
  },
  {
    icon: UserSearch,
    label: 'Percezione candidato',
    text: 'Cosa pensa chi guarda un nostro contenuto: come reagisce, cosa lo incuriosisce, cosa lo respinge.'
  },
  {
    icon: LineChart,
    label: 'Risposta del mercato',
    text: 'Quante persone arrivano, da quali canali, con che qualità di interesse e con che tipo di domande.'
  }
]
</script>

<template>
  <section ref="root" class="section-pad relative">
    <div class="container-x">
      <div class="text-center max-w-4xl mx-auto">
        <p data-reveal class="eyebrow mb-5">
          <span class="dot" />
          02 — Obiettivo del pilota
        </p>
        <h2
          data-reveal
          class="font-display text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05] tracking-tight"
        >
          <span class="text-gradient">Verificare in modo concreto se mostrare il </span>
          <span class="text-accent-gradient">lavoro reale</span>
          <span class="text-gradient"> aumenta interesse e qualità delle candidature.</span>
        </h2>
        <p data-reveal class="mt-6 text-ink-muted max-w-2xl mx-auto text-pretty text-lg">
          Un esperimento misurabile: una sola variabile per volta, un solo ruolo,
          metriche definite all'inizio. Senza promesse, con i dati che parlano.
        </p>

        <!-- Ruoli target -->
        <div data-reveal class="mt-10 inline-flex flex-wrap justify-center gap-3">
          <span class="text-[11px] uppercase tracking-[0.18em] text-ink-muted self-center">Ruolo target · esempi:</span>
          <span class="rounded-full px-4 py-1.5 text-sm ring-1 ring-steel-700/70 bg-steel-800/60 text-ink">Operatore impianto acciaieria</span>
          <span class="rounded-full px-4 py-1.5 text-sm ring-1 ring-steel-700/70 bg-steel-800/60 text-ink">Manutentore meccanico</span>
          <span class="rounded-full px-4 py-1.5 text-sm ring-1 ring-steel-700/70 bg-steel-800/60 text-ink">Tecnico di produzione</span>
        </div>
        <p data-reveal class="mt-4 text-xs text-ink-muted">1 solo ruolo — nessuna dispersione. Il ruolo definitivo viene scelto insieme.</p>
      </div>

      <!-- Pillars -->
      <div class="mt-16 grid md:grid-cols-3 gap-5">
        <div
          v-for="(p, i) in pillars"
          :key="p.label"
          data-reveal
          class="group relative rounded-2xl glass grad-border p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elevate"
        >
          <div class="flex items-start justify-between">
            <div
              class="w-11 h-11 rounded-xl bg-accent/10 ring-1 ring-accent/30 grid place-items-center text-accent animate-floaty"
            >
              <component :is="p.icon" class="w-5 h-5" />
            </div>
            <span class="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              0{{ i + 1 }}
            </span>
          </div>
          <h3 class="mt-6 font-display text-2xl">{{ p.label }}</h3>
          <p class="mt-2 text-ink-muted text-pretty">{{ p.text }}</p>

          <span
            aria-hidden="true"
            class="pointer-events-none absolute inset-x-6 -bottom-px h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </div>
  </section>
</template>

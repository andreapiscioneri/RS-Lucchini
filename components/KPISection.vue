<script setup lang="ts">
// KPISection — dashboard premium con counter animati e mini-grafici minimal.
import { Users, MousePointerClick, MailCheck } from 'lucide-vue-next'

const root = ref<HTMLElement | null>(null)
useReveal(root, { stagger: 0.08 })

// Refs counter
const c1 = ref<HTMLElement | null>(null)
const c2 = ref<HTMLElement | null>(null)
const c3 = ref<HTMLElement | null>(null)

useCounter(c1, { from: 0, to: 50000, suffix: '' })
useCounter(c2, { from: 0, to: 1500 })
useCounter(c3, { from: 0, to: 40 })

// Mini bar chart points (range realistico: hi/lo)
const bars = [
  { label: 'S1', lo: 12, hi: 22 },
  { label: 'S2', lo: 28, hi: 44 },
  { label: 'S3', lo: 40, hi: 62 },
  { label: 'S4', lo: 55, hi: 78 },
  { label: 'S5', lo: 60, hi: 84 },
  { label: 'S6', lo: 68, hi: 92 },
  { label: 'S7', lo: 72, hi: 100 }
]

const chart = ref<HTMLElement | null>(null)
onMounted(() => {
  const { $gsap } = useNuxtApp() as any
  if (!$gsap || !chart.value) return
  const els = chart.value.querySelectorAll('.bar')
  $gsap.fromTo(
    els,
    { scaleY: 0, transformOrigin: 'bottom center' },
    {
      scaleY: 1,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.07,
      scrollTrigger: { trigger: chart.value, start: 'top 80%', once: true }
    }
  )
})
</script>

<template>
  <section id="kpi" ref="root" class="section-pad relative">
    <div class="container-x">
      <SectionTitle
        eyebrow="05 — KPI e risultati attesi"
        title="Numeri concreti, non vanity metrics."
        accent-word="non vanity metrics"
        lead="Stime indicative basate su benchmark del settore. L'obiettivo non è massimizzarle, ma capire qualità del segnale."
      />

      <div class="mt-14 grid lg:grid-cols-12 gap-5">
        <!-- Counter cards -->
        <div class="lg:col-span-7 grid sm:grid-cols-3 gap-5">
          <div data-reveal class="glass grad-border rounded-2xl p-6 sm:p-7 ring-steel">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 rounded-lg bg-accent/10 ring-1 ring-accent/30 grid place-items-center text-accent">
                <Users class="w-5 h-5" />
              </div>
              <span class="text-[11px] uppercase tracking-[0.18em] text-ink-muted">Reach</span>
            </div>
            <p class="mt-7 text-[11px] uppercase tracking-[0.18em] text-ink-muted">Persone raggiunte</p>
            <div class="mt-1 flex items-end gap-2">
              <span class="text-ink-muted text-base">20–</span>
              <span ref="c1" class="font-display text-5xl text-gradient">0</span>
            </div>
            <p class="mt-3 text-xs text-ink-muted">Su Meta + LinkedIn, target locale e settoriale.</p>
          </div>

          <div data-reveal class="glass grad-border rounded-2xl p-6 sm:p-7 ring-steel">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 rounded-lg bg-accent/10 ring-1 ring-accent/30 grid place-items-center text-accent">
                <MousePointerClick class="w-5 h-5" />
              </div>
              <span class="text-[11px] uppercase tracking-[0.18em] text-ink-muted">Engage</span>
            </div>
            <p class="mt-7 text-[11px] uppercase tracking-[0.18em] text-ink-muted">Interazioni</p>
            <div class="mt-1 flex items-end gap-2">
              <span class="text-ink-muted text-base">500–</span>
              <span ref="c2" class="font-display text-5xl text-gradient">0</span>
            </div>
            <p class="mt-3 text-xs text-ink-muted">Like, commenti, salvataggi, click verso landing.</p>
          </div>

          <div data-reveal class="glass grad-border rounded-2xl p-6 sm:p-7 ring-steel">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 rounded-lg bg-accent/10 ring-1 ring-accent/30 grid place-items-center text-accent">
                <MailCheck class="w-5 h-5" />
              </div>
              <span class="text-[11px] uppercase tracking-[0.18em] text-ink-muted">Lead</span>
            </div>
            <p class="mt-7 text-[11px] uppercase tracking-[0.18em] text-ink-muted">Candidature / contatti</p>
            <div class="mt-1 flex items-end gap-2">
              <span class="text-ink-muted text-base">10–</span>
              <span ref="c3" class="font-display text-5xl text-gradient">0</span>
            </div>
            <p class="mt-3 text-xs text-ink-muted">Di cui qualifichiamo manualmente i più rilevanti.</p>
          </div>
        </div>

        <!-- Mini chart -->
        <div data-reveal class="lg:col-span-5 glass grad-border rounded-2xl p-6 sm:p-7 ring-steel">
          <div class="flex items-center justify-between">
            <p class="text-[11px] uppercase tracking-[0.18em] text-ink-muted">Andamento atteso</p>
            <p class="text-[11px] uppercase tracking-[0.18em] text-accent">Reach settimanale</p>
          </div>

          <div ref="chart" class="mt-6 grid grid-cols-7 gap-3 items-end h-44">
            <div
              v-for="b in bars"
              :key="b.label"
              class="relative h-full flex items-end"
            >
              <div
                class="bar relative w-full rounded-t-md bg-gradient-to-t from-accent/70 to-accent/20"
                :style="{ height: `${b.hi}%` }"
              >
                <span
                  class="absolute -top-2 left-0 right-0 mx-auto h-0.5 w-full rounded bg-accent shadow-glow-soft"
                />
              </div>
              <div
                aria-hidden="true"
                class="absolute bottom-0 left-0 right-0 mx-auto rounded-b-md bg-steel-700/50"
                :style="{ height: `${b.lo}%`, width: '100%' }"
              />
            </div>
          </div>

          <div class="mt-3 grid grid-cols-7 text-[10px] uppercase tracking-[0.18em] text-ink-muted text-center">
            <span v-for="b in bars" :key="b.label">{{ b.label }}</span>
          </div>

          <div class="mt-6 grid grid-cols-3 gap-3 text-xs">
            <div class="flex items-center gap-2 text-ink-muted">
              <span class="inline-block w-2.5 h-2.5 rounded-sm bg-accent" /> Stima alta
            </div>
            <div class="flex items-center gap-2 text-ink-muted">
              <span class="inline-block w-2.5 h-2.5 rounded-sm bg-steel-500" /> Stima base
            </div>
            <div class="text-right text-ink-muted">7 settimane attive</div>
          </div>
        </div>
      </div>

      <p class="mt-10 max-w-2xl text-ink-muted text-pretty">
        L'obiettivo non è fare numeri vuoti, ma capire la
        <span class="text-ink">qualità della risposta</span>, la percezione del
        ruolo e il reale interesse generato.
      </p>
    </div>
  </section>
</template>

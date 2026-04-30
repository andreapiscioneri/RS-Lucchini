<script setup lang="ts">
// WhyPilotSection — sezione storytelling: "Prima validiamo, poi si scala".
// Background con linee industriali SVG animate (stroke-dashoffset).
import { ShieldCheck, Target, Gauge, Feather } from 'lucide-vue-next'

const root = ref<HTMLElement | null>(null)
useReveal(root, { stagger: 0.1 })

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Rischio basso',
    text: 'Investimento contenuto, perimetro chiaro, possibilità di stop dopo i primi dati.'
  },
  {
    icon: Target,
    title: 'Approccio concreto',
    text: 'Un solo ruolo, una sola variabile. Niente esperimenti dispersivi.'
  },
  {
    icon: Gauge,
    title: 'Risultati misurabili',
    text: 'KPI fissati prima, dati raccolti durante, decisione informata alla fine.'
  },
  {
    icon: Feather,
    title: 'Non invasiva',
    text: 'Mezza giornata in stabilimento. Nessun impatto operativo, nessuna struttura interna da attivare.'
  }
]

onMounted(() => {
  const { $gsap, $ScrollTrigger } = useNuxtApp() as any
  if (!$gsap) return
  const lines = root.value?.querySelectorAll('.svg-line') ?? []
  lines.forEach((l: any) => {
    const len = l.getTotalLength?.() ?? 800
    $gsap.set(l, { strokeDasharray: len, strokeDashoffset: len })
    $gsap.to(l, {
      strokeDashoffset: 0,
      duration: 2.4,
      ease: 'power2.out',
      scrollTrigger: { trigger: root.value, start: 'top 70%', once: true }
    })
  })
})
</script>

<template>
  <section ref="root" class="section-pad relative overflow-hidden">
    <!-- Industrial lines background -->
    <svg
      aria-hidden="true"
      class="absolute inset-0 -z-10 w-full h-full opacity-[0.18]"
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
    >
      <g fill="none" stroke="#94A3B8" stroke-width="1">
        <path class="svg-line" d="M0,140 L420,140 L460,180 L1200,180" />
        <path class="svg-line" d="M0,300 L300,300 L340,260 L800,260 L840,300 L1200,300" />
        <path class="svg-line" d="M0,460 L520,460 L560,420 L1200,420" />
      </g>
      <g fill="#F97316">
        <circle cx="460" cy="180" r="3" />
        <circle cx="840" cy="300" r="3" />
        <circle cx="560" cy="420" r="3" />
      </g>
    </svg>

    <div class="container-x">
      <div class="grid lg:grid-cols-12 gap-12 items-end">
        <div class="lg:col-span-7">
          <p data-reveal class="eyebrow mb-5">
            <span class="dot" />
            06 — Perché partire da un pilota
          </p>
          <h2
            data-reveal
            class="font-display text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05] tracking-tight"
          >
            <span class="text-gradient">Prima validiamo il mercato.</span>
            <br />
            <span class="text-accent-gradient">Poi si scala.</span>
          </h2>
          <p data-reveal class="mt-6 text-ink-muted max-w-xl text-pretty text-lg">
            Un pilota non sostituisce una strategia di employer branding. La
            anticipa: ci dice cosa funziona davvero per RS Lucchini, prima di
            allocare budget importanti.
          </p>
          <figure data-reveal class="mt-8 relative pl-6 border-l border-accent/40">
            <blockquote class="text-ink/90 text-base italic leading-relaxed">
              "Non ha senso partire con un progetto ampio senza vedere prima
              come risponde il mercato su un ruolo concreto."
            </blockquote>
          </figure>
        </div>

        <div class="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <div
            v-for="(r, i) in reasons"
            :key="r.title"
            data-reveal
            class="group flex items-start gap-5 p-5 rounded-2xl glass grad-border transition-all duration-500 hover:-translate-y-1"
          >
            <div
              class="shrink-0 w-11 h-11 rounded-xl bg-accent/10 ring-1 ring-accent/30 grid place-items-center text-accent"
            >
              <component :is="r.icon" class="w-5 h-5" />
            </div>
            <div>
              <p class="text-[11px] uppercase tracking-[0.18em] text-ink-muted">0{{ i + 1 }}</p>
              <h3 class="mt-1 font-display text-lg">{{ r.title }}</h3>
              <p class="mt-1 text-sm text-ink-muted text-pretty">{{ r.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

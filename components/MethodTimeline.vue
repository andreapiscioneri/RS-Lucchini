<script setup lang="ts">
// MethodTimeline — timeline verticale moderna con linea che si "riempie"
// progressivamente durante lo scroll. ScrollTrigger collega il progress
// alla linea SVG e attiva i singoli step.
import { Search, Camera, Megaphone, Inbox, BarChart3 } from 'lucide-vue-next'

const root = ref<HTMLElement | null>(null)
const line = ref<SVGRectElement | null>(null)

const steps = [
  {
    icon: Search,
    week: 'Settimana 1',
    title: 'Analisi iniziale',
    text: 'Definiamo insieme il ruolo target, raccogliamo materiali esistenti, mappiamo i punti reali da raccontare.'
  },
  {
    icon: Camera,
    week: 'Settimane 2–3',
    title: 'Produzione contenuti',
    text: 'Mezza giornata in stabilimento. Riprese autentiche, niente attori, niente storyboard finto. 4–6 contenuti finiti.'
  },
  {
    icon: Megaphone,
    week: 'Settimane 4–6',
    title: 'Attivazione campagne',
    text: 'Distribuzione su Meta + LinkedIn (più eventuali canali utili al target). A/B sui creatives, copy e segmenti.'
  },
  {
    icon: Inbox,
    week: 'Settimane 5–7',
    title: 'Raccolta interesse',
    text: 'Form/landing dedicata, tracciamento provenienza, qualificazione manuale dei contatti più rilevanti.'
  },
  {
    icon: BarChart3,
    week: 'Settimana 8',
    title: 'Analisi risultati',
    text: 'Report con metriche, qualità del traffico, profilo dei candidati e raccomandazioni concrete per scalare.'
  }
]

onMounted(() => {
  const { $gsap, $ScrollTrigger } = useNuxtApp() as any
  if (!$gsap || !root.value) return

  // Animazione progress line
  $gsap.fromTo(
    line.value,
    { scaleY: 0, transformOrigin: 'top center' },
    {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: root.value,
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: 0.6
      }
    }
  )

  // Step entry
  const items = root.value.querySelectorAll('.step')
  items.forEach((el) => {
    $gsap.fromTo(
      el,
      { opacity: 0, x: -20, filter: 'blur(6px)' },
      {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        scrollTrigger: { trigger: el, start: 'top 80%', once: true }
      }
    )
  })
})
</script>

<template>
  <section id="metodo" ref="root" class="section-pad relative">
    <div class="container-x">
      <SectionTitle
        eyebrow="03 — Il metodo"
        title="Cinque passaggi chiari, niente magia."
        accent-word="cinque passaggi"
        lead="Un percorso lineare di 6–8 settimane, costruito per validare l'ipotesi senza disperdere risorse."
      />

      <!-- Timeline -->
      <div class="relative mt-16 lg:mt-20 max-w-3xl mx-auto">
        <!-- Background line -->
        <div
          aria-hidden="true"
          class="absolute left-[19px] sm:left-6 top-2 bottom-2 w-px bg-steel-700/60"
        />
        <!-- Progress line (svg) -->
        <svg
          aria-hidden="true"
          class="absolute left-[18px] sm:left-[22px] top-2 bottom-2 w-1 overflow-visible"
          preserveAspectRatio="none"
        >
          <rect
            ref="line"
            x="0"
            y="0"
            width="2"
            height="100%"
            fill="url(#g)"
            rx="2"
          />
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#F97316" />
              <stop offset="100%" stop-color="#A8480A" />
            </linearGradient>
          </defs>
        </svg>

        <ol class="relative space-y-10 sm:space-y-12">
          <li
            v-for="(s, i) in steps"
            :key="s.title"
            class="step relative pl-14 sm:pl-20"
          >
            <!-- Node -->
            <span
              class="absolute left-0 top-0 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-bg-deep ring-1 ring-accent/40 text-accent shadow-glow-soft"
            >
              <component :is="s.icon" class="w-5 h-5" />
            </span>

            <div class="glass grad-border rounded-2xl p-5 sm:p-6">
              <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span
                  class="text-[11px] uppercase tracking-[0.2em] text-accent font-medium"
                >
                  Step 0{{ i + 1 }}
                </span>
                <span class="text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                  {{ s.week }}
                </span>
              </div>
              <h3 class="mt-2 font-display text-2xl">{{ s.title }}</h3>
              <p class="mt-2 text-ink-muted text-pretty">{{ s.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

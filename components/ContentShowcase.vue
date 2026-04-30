<script setup lang="ts">
// ContentShowcase — bento grid molto visual con preview video,
// hover cinematico, tilt effect leggero, autoplay muted on hover.
import { Play, Clapperboard, Wrench, Coffee, Eye, Factory } from 'lucide-vue-next'

interface Card {
  id: string
  title: string
  caption: string
  icon: any
  poster: string
  video?: string
  span: string
  tone?: 'accent' | 'steel'
}

const cards: Card[] = [
  {
    id: 'reportage',
    title: 'Una giornata in turno',
    caption: 'Reportage video di 60–90 secondi: cosa fa davvero un operatore, dall’inizio del turno alla fine.',
    icon: Clapperboard,
    poster: '/images/showcase/turno.svg',
    video: '/videos/showcase-turno.mp4',
    span: 'lg:col-span-7 lg:row-span-2',
    tone: 'accent'
  },
  {
    id: 'tech',
    title: 'Attività tecnica',
    caption: 'Close-up su attrezzatura, gesti precisi, competenza visibile.',
    icon: Wrench,
    poster: '/images/showcase/tech.svg',
    video: '/videos/showcase-tech.mp4',
    span: 'lg:col-span-5'
  },
  {
    id: 'life',
    title: 'Vita fuori dal lavoro',
    caption: 'Persone vere, fuori dal contesto produttivo. Niente storyboard.',
    icon: Coffee,
    poster: '/images/showcase/life.svg',
    span: 'lg:col-span-5'
  },
  {
    id: 'voices',
    title: 'Voci interne',
    caption: 'Parlano i colleghi: cosa li ha sorpresi quando sono entrati in azienda.',
    icon: Eye,
    poster: '/images/showcase/voices.svg',
    span: 'lg:col-span-4'
  },
  {
    id: 'env',
    title: 'Ambiente reale',
    caption: 'Lo stabilimento come è davvero: luci, suoni, scala, materia.',
    icon: Factory,
    poster: '/images/showcase/env.svg',
    span: 'lg:col-span-3'
  }
]

const root = ref<HTMLElement | null>(null)
useReveal(root, { stagger: 0.07 })

// Tilt + autoplay video controllati per card
const tilts = ref<Array<HTMLElement | null>>([])
const videoRefs = ref<Array<HTMLVideoElement | null>>([])

onMounted(() => {
  tilts.value.forEach((el, i) => {
    if (!el) return
    if (window.matchMedia('(hover: none)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      const rx = (py - 0.5) * -4
      const ry = (px - 0.5) * 4
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`
    }
    const onLeave = () => {
      el.style.transition = 'transform 0.7s cubic-bezier(.2,.8,.2,1)'
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
      const v = videoRefs.value[i]
      v?.pause?.()
      setTimeout(() => (el.style.transition = ''), 720)
    }
    const onEnter = () => {
      const v = videoRefs.value[i]
      v?.play?.().catch(() => {})
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('mouseenter', onEnter)
  })
})
</script>

<template>
  <section id="contenuti" ref="root" class="section-pad relative">
    <div class="container-x">
      <SectionTitle
        eyebrow="04 — Contenuti del pilota"
        title="Tre video per far vedere il lavoro reale."
        accent-word="lavoro reale"
        lead="Core del pilota: giornata reale, attività tecnica, vita fuori dal lavoro. Cosa fai, come lavori, cosa ti permette."
      />

      <div class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 auto-rows-[260px] sm:auto-rows-[240px] lg:auto-rows-[220px]">
        <article
          v-for="(c, i) in cards"
          :key="c.id"
          data-reveal
          :class="[
            'tilt group relative overflow-hidden rounded-2xl glass grad-border',
            c.span,
            'will-change-transform'
          ]"
          :ref="(el) => (tilts[i] = el as HTMLElement)"
        >
          <!-- Media -->
          <div class="absolute inset-0">
            <NuxtImg
              v-if="c.poster"
              :src="c.poster"
              :alt="c.title"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <video
              v-if="c.video"
              :ref="(el) => (videoRefs[i] = el as HTMLVideoElement)"
              :src="c.video"
              muted
              loop
              playsinline
              preload="none"
              class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
          <div
            v-if="c.tone === 'accent'"
            class="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-transparent mix-blend-screen"
          />

          <!-- Play badge -->
          <div
            v-if="c.video"
            class="absolute top-4 right-4 inline-flex items-center justify-center w-11 h-11 rounded-full bg-bg/60 backdrop-blur-md ring-1 ring-white/10 text-ink translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
          >
            <Play class="w-4 h-4 fill-current" />
          </div>

          <!-- Content -->
          <div class="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6">
            <div class="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              <component :is="c.icon" class="w-3.5 h-3.5 text-accent" />
              {{ c.id }}
            </div>
            <h3 class="mt-2 font-display text-xl sm:text-2xl text-balance">
              {{ c.title }}
            </h3>
            <p class="mt-1 text-sm text-ink-muted text-pretty max-w-md">
              {{ c.caption }}
            </p>
          </div>

          <!-- Hover border glow -->
          <span
            aria-hidden="true"
            class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-accent/0 group-hover:ring-accent/40 transition rounded-2xl"
          />
        </article>
      </div>

      <p class="mt-8 text-sm text-ink-muted max-w-2xl">
        Ogni clip è pensata per durare tra 15 e 90 secondi. I file sorgente
        restano di proprietà di Lucchini RS e possono essere riutilizzati su
        canali interni, eventi e materiali HR.
      </p>
    </div>
  </section>
</template>

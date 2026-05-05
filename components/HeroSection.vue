<script setup lang="ts">
// HeroSection — fullscreen video industriale, parallax leggero, text stagger,
// scroll indicator animato. Performance: poster + video lazy + autoplay muted.
import { ChevronDown } from 'lucide-vue-next'

const { isDark } = useTheme()
const brochureHref = computed(() =>
  isDark.value
    ? '/images/Denani%20Lucchini%20RS%20proposal%20dark.pdf'
    : '/images/Denani%20Lucchini%20RS%20proposal%20light.pdf'
)
const root = ref<HTMLElement | null>(null)
const headline = ref<HTMLElement | null>(null)
const sub = ref<HTMLElement | null>(null)
const ctas = ref<HTMLElement | null>(null)
const media = ref<HTMLElement | null>(null)

onMounted(() => {
  const { $gsap, $ScrollTrigger } = useNuxtApp() as any
  if (!$gsap) return

  // Stagger entry
  const tl = $gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.7 })
    .from(
      headline.value?.querySelectorAll('.line') ?? [],
      { y: 64, opacity: 0, duration: 1, stagger: 0.08, filter: 'blur(8px)' },
      '-=0.4'
    )
    .from(sub.value, { y: 24, opacity: 0, duration: 0.8 }, '-=0.55')
    .from(ctas.value?.children ?? [], { y: 16, opacity: 0, duration: 0.6, stagger: 0.08 }, '-=0.5')
    .from('.hero-scroll-hint', { opacity: 0, duration: 0.6 }, '-=0.2')

  // Parallax bg + slow zoom controlled by scroll
  $gsap.to(media.value, {
    yPercent: 14,
    scale: 1.06,
    ease: 'none',
    scrollTrigger: {
      trigger: root.value,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.6
    }
  })

  // Particles glow drift (subtle)
  $gsap.to('.hero-particle', {
    y: -10,
    x: 6,
    opacity: 0.6,
    duration: 4,
    yoyo: true,
    repeat: -1,
    stagger: { each: 0.4, from: 'random' },
    ease: 'sine.inOut'
  })
})

const handleNav = (href: string) => {
  const app = useNuxtApp() as any
  if (app.$scrollTo) app.$scrollTo(href, { offset: -80, duration: 1.2 })
  else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    ref="root"
    class="relative min-h-[100svh] flex items-end overflow-hidden isolate"
  >
    <!-- Background media -->
    <div ref="media" class="absolute inset-0 -z-10 will-change-transform">
      <!-- Video fullscreen industriale (sostituire con asset reale in /public/videos) -->
      <video
        :key="isDark ? 'dark' : 'light'"
        class="absolute inset-0 w-full h-full object-cover animate-slowZoom"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        poster="/images/hero-poster.svg"
      >
        <source
          :src="isDark ? '/images/hero-foundry.mp4' : '/images/0_Train_Railroad_1920x1080.mp4'"
          type="video/mp4"
        />
      </video>

      <!-- Overlays cinematici -->
      <div class="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/55 to-bg" />
      <div class="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-transparent" />
      <div class="absolute inset-0 bg-grad-radial mix-blend-screen opacity-70" />
      <div class="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
    </div>

    <!-- Floating particles -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-0">
      <span
        v-for="n in 14"
        :key="n"
        class="hero-particle absolute rounded-full bg-accent/50 blur-[1px]"
        :style="{
          width: `${2 + (n % 3)}px`,
          height: `${2 + (n % 3)}px`,
          top: `${(n * 7) % 100}%`,
          left: `${(n * 13) % 100}%`,
          opacity: 0.25 + (n % 5) * 0.05
        }"
      />
    </div>

    <!-- Content -->
    <div class="relative container-x w-full pb-20 sm:pb-24 lg:pb-32 pt-32 sm:pt-40">
      <h1
        ref="headline"
        class="font-display text-hero text-balance leading-[0.98] tracking-tight max-w-5xl"
      >
        <span class="block line text-gradient">Attrarre talenti industriali</span>
        <span class="block line text-gradient">oggi richiede mostrare</span>
        <span class="block line"><span class="text-accent-gradient">il lavoro reale.</span></span>
      </h1>

      <p
        ref="sub"
        class="mt-7 max-w-2xl text-base sm:text-lg lg:text-xl text-ink-muted text-pretty"
      >
        Un progetto pilota concreto per verificare se autenticità, contenuti reali
        e comunicazione moderna possono migliorare qualità e interesse delle
        candidature in <span class="text-ink">Lucchini RS</span>.
      </p>

      <div ref="ctas" class="mt-9 flex flex-wrap items-center gap-3">
        <AnimatedButton variant="primary" icon="arrow" @click="handleNav('#metodo')">
          Scopri il progetto
        </AnimatedButton>
        <AnimatedButton
          :href="brochureHref"
          target="_blank"
          variant="secondary"
          icon="arrow"
        >
          Scarica brochure
        </AnimatedButton>
      </div>

      <!-- Meta micro-strip -->
      <dl class="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-8 max-w-3xl">
        <div>
          <dt class="text-[11px] uppercase tracking-[0.18em] text-ink-muted">Durata</dt>
          <dd class="mt-1 font-display text-lg">6 settimane</dd>
        </div>
        <div>
          <dt class="text-[11px] uppercase tracking-[0.18em] text-ink-muted">Investimento</dt>
          <dd class="mt-1 font-display text-lg">5,5–6k €</dd>
        </div>
        <div>
          <dt class="text-[11px] uppercase tracking-[0.18em] text-ink-muted">Reach attesa</dt>
          <dd class="mt-1 font-display text-lg">20–50k</dd>
        </div>
        <div>
          <dt class="text-[11px] uppercase tracking-[0.18em] text-ink-muted">Output</dt>
          <dd class="mt-1 font-display text-lg">Dati reali</dd>
        </div>
      </dl>
    </div>

    <!-- Scroll indicator -->
    <button
      aria-label="Scorri"
      class="hero-scroll-hint absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex flex-col items-center gap-1.5 text-ink-muted hover:text-ink transition-colors"
      @click="handleNav('#problema')"
    >
      <span class="text-[10px] uppercase tracking-[0.24em]">Scroll</span>
      <span class="relative w-[1px] h-10 bg-ink-muted/40 overflow-hidden">
        <span class="absolute inset-x-0 top-0 h-3 bg-accent animate-scrollHint" />
      </span>
      <ChevronDown class="w-4 h-4" />
    </button>

    <!-- Bottom fade to next section -->
    <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg pointer-events-none" />
  </section>
</template>

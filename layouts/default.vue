<script setup lang="ts">
// Layout di default — header sticky minimale + slot per pagine.
import { Menu, X } from 'lucide-vue-next'

const open = ref(false)
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 16
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

const links = [
  { href: '#problema', label: 'Problema' },
  { href: '#metodo', label: 'Metodo' },
  { href: '#contenuti', label: 'Contenuti' },
  { href: '#kpi', label: 'KPI' },
  { href: '#economico', label: 'Economico' },
  { href: '#contatto', label: 'Contatto' }
]

const handleNav = (href: string) => {
  open.value = false
  // smooth scroll via Lenis se disponibile, altrimenti fallback nativo
  const app = useNuxtApp() as any
  if (app.$scrollTo) {
    app.$scrollTo(href, { offset: -80, duration: 1.2 })
  } else {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <div class="relative z-10">
    <header
      :class="[
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'backdrop-blur-xl bg-bg/70 border-b border-steel-700/40'
          : 'bg-transparent'
      ]"
    >
      <div class="container-x flex items-center justify-between h-16 sm:h-20">
        <!-- Brand -->
        <a href="#top" class="flex items-center gap-2.5 group" @click.prevent="handleNav('#top')">
          <span
            class="relative inline-flex w-9 h-9 rounded-lg items-center justify-center bg-steel-800 ring-1 ring-steel-700/70 overflow-hidden"
          >
            <span class="absolute inset-0 bg-grad-radial opacity-70" />
            <span class="relative font-display font-semibold text-ink">RS</span>
          </span>
          <div class="leading-tight">
            <p class="font-display font-semibold tracking-tight">Lucchini</p>
            <p class="text-[10px] uppercase tracking-[0.18em] text-ink-muted">Pilot · 2026</p>
          </div>
        </a>

        <!-- Desktop nav -->
        <nav class="hidden lg:flex items-center gap-8">
          <a
            v-for="l in links"
            :key="l.href"
            :href="l.href"
            class="text-sm text-ink-muted hover:text-ink transition-colors"
            @click.prevent="handleNav(l.href)"
          >
            {{ l.label }}
          </a>
        </nav>

        <!-- CTA -->
        <div class="hidden lg:flex items-center gap-3">
          <a
            href="/brochure/RS-Lucchini-Pilot.pdf"
            download
            class="text-sm text-ink-muted hover:text-ink transition-colors"
          >
            Brochure
          </a>
          <a
            href="#contatto"
            class="btn-shine inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-accent text-white shadow-glow-soft hover:shadow-glow transition-shadow"
            @click.prevent="handleNav('#contatto')"
          >
            Prenota confronto
          </a>
        </div>

        <!-- Mobile toggle -->
        <button
          aria-label="Apri menu"
          class="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg ring-1 ring-steel-700/70 bg-steel-800/60"
          @click="open = !open"
        >
          <component :is="open ? X : Menu" class="w-5 h-5" />
        </button>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="open" class="lg:hidden border-t border-steel-700/40 bg-bg/95 backdrop-blur-xl">
          <nav class="container-x py-4 flex flex-col gap-1">
            <a
              v-for="l in links"
              :key="l.href"
              :href="l.href"
              class="py-2.5 text-base text-ink"
              @click.prevent="handleNav(l.href)"
            >
              {{ l.label }}
            </a>
            <a
              href="#contatto"
              class="mt-3 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 font-medium bg-accent text-white"
              @click.prevent="handleNav('#contatto')"
            >
              Prenota confronto
            </a>
          </nav>
        </div>
      </Transition>
    </header>

    <main id="top">
      <slot />
    </main>
  </div>
</template>

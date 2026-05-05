// composables/useReveal.ts
// Reveal animations on scroll con GSAP ScrollTrigger.
// Cerca elementi [data-reveal] dentro al ref passato e li anima
// con stagger e opzioni configurabili.

import type { Ref } from 'vue'

interface RevealOptions {
  selector?: string
  y?: number
  opacity?: number
  duration?: number
  stagger?: number
  ease?: string
  start?: string
  once?: boolean
  scrub?: boolean | number
}

export function useReveal(target: Ref<HTMLElement | null>, opts: RevealOptions = {}) {
  const {
    selector = '[data-reveal]',
    y = 0,
    opacity = 1,
    duration = 0.01,
    stagger = 0,
    ease = 'power3.out',
    start = 'top 82%',
    once = true,
    scrub = false
  } = opts

  const { $gsap, $ScrollTrigger } = useNuxtApp() as unknown as {
    $gsap: typeof import('gsap').gsap
    $ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger
  }

  let triggers: any[] = []

  const init = () => {
    if (!target.value || !$gsap) return
    const els = target.value.querySelectorAll<HTMLElement>(selector)
    if (!els.length) return

    els.forEach((el) => {
      const tween = $gsap.fromTo(
        el,
        { y, opacity, filter: 'blur(0px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration,
          ease,
          stagger,
          scrollTrigger: {
            trigger: el,
            start,
            once,
            scrub,
            toggleActions: scrub ? undefined : 'play none none reverse'
          }
        }
      )
      triggers.push(tween.scrollTrigger)
    })
  }

  onMounted(() => {
    nextTick(() => init())
  })

  onBeforeUnmount(() => {
    triggers.forEach((t) => t?.kill?.())
    triggers = []
  })

  return { init }
}

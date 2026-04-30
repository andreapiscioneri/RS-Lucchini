// plugins/lenis.client.ts
// Smooth scrolling con Lenis. Sincronizza il loop con GSAP ticker così
// ScrollTrigger continua a funzionare correttamente.

import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  if (!process.client) return

  // Rispetto preferenze utente
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (reduce) return

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.2
  })

  // Integrazione con GSAP ticker
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)

  // Espone helper per anchor scroll
  return {
    provide: {
      lenis,
      scrollTo(target: string | number | HTMLElement, opts?: Record<string, unknown>) {
        lenis.scrollTo(target as never, opts as never)
      }
    }
  }
})

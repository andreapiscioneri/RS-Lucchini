// plugins/gsap.client.ts
// Registriamo ScrollTrigger e SplitText (se disponibile) lato client.
// Esponiamo $gsap per usarlo via useNuxtApp().

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)

    // Defaults global per coerenza
    gsap.defaults({
      ease: 'power3.out',
      duration: 0.9
    })

    // Refresh ScrollTrigger quando tutto il DOM è pronto (immagini lazy ecc.)
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        ScrollTrigger.refresh()
      })
    }
  }

  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})

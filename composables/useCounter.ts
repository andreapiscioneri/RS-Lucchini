// composables/useCounter.ts
// Counter animato con easing, attivato quando l'elemento entra in viewport.
// Usato nella sezione KPI per i big numbers.

import type { Ref } from 'vue'

interface CounterOptions {
  from?: number
  to: number
  duration?: number
  decimals?: number
  suffix?: string
  prefix?: string
}

export function useCounter(target: Ref<HTMLElement | null>, opts: CounterOptions) {
  const { from = 0, to, duration = 1.6, decimals = 0, suffix = '', prefix = '' } = opts
  const value = ref(from)
  let started = false

  const formatter = (n: number) =>
    `${prefix}${n.toLocaleString('it-IT', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    })}${suffix}`

  const animate = () => {
    if (started || !target.value) return
    started = true

    const { $gsap } = useNuxtApp() as unknown as { $gsap: typeof import('gsap').gsap }
    if (!$gsap) {
      // Fallback se gsap non disponibile
      target.value.textContent = formatter(to)
      value.value = to
      return
    }

    const obj = { v: from }
    $gsap.to(obj, {
      v: to,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        value.value = obj.v
        if (target.value) target.value.textContent = formatter(obj.v)
      }
    })
  }

  onMounted(() => {
    if (!target.value) return
    target.value.textContent = formatter(from)

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate()
            io.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )
    io.observe(target.value)

    onBeforeUnmount(() => io.disconnect())
  })

  return { value, animate }
}

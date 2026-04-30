// composables/useMagnetic.ts
// Effetto magnetic per bottoni e CTA premium. Il cursore "attira" lievemente
// l'elemento. Disabilitato su touch e con prefers-reduced-motion.

import type { Ref } from 'vue'

export function useMagnetic(target: Ref<HTMLElement | null>, strength = 0.25) {
  let raf = 0
  let bounds: DOMRect | null = null
  let active = false

  const onEnter = () => {
    if (!target.value) return
    bounds = target.value.getBoundingClientRect()
    active = true
  }

  const onMove = (e: MouseEvent) => {
    if (!active || !target.value || !bounds) return
    cancelAnimationFrame(raf)
    raf = requestAnimationFrame(() => {
      const x = (e.clientX - (bounds!.left + bounds!.width / 2)) * strength
      const y = (e.clientY - (bounds!.top + bounds!.height / 2)) * strength
      target.value!.style.transform = `translate3d(${x}px, ${y}px, 0)`
    })
  }

  const onLeave = () => {
    if (!target.value) return
    active = false
    cancelAnimationFrame(raf)
    target.value.style.transition = 'transform 0.5s cubic-bezier(.2,.8,.2,1)'
    target.value.style.transform = 'translate3d(0,0,0)'
    setTimeout(() => {
      if (target.value) target.value.style.transition = ''
    }, 520)
  }

  onMounted(() => {
    if (!target.value) return
    if (window.matchMedia('(hover: none)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    target.value.addEventListener('mouseenter', onEnter)
    target.value.addEventListener('mousemove', onMove)
    target.value.addEventListener('mouseleave', onLeave)
  })

  onBeforeUnmount(() => {
    if (!target.value) return
    target.value.removeEventListener('mouseenter', onEnter)
    target.value.removeEventListener('mousemove', onMove)
    target.value.removeEventListener('mouseleave', onLeave)
    cancelAnimationFrame(raf)
  })
}

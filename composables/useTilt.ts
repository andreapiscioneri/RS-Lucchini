// composables/useTilt.ts
// Tilt 3D leggero per le card del Bento layout (ContentShowcase).

import type { Ref } from 'vue'

export function useTilt(target: Ref<HTMLElement | null>, max = 6) {
  const onMove = (e: MouseEvent) => {
    if (!target.value) return
    const rect = target.value.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (py - 0.5) * -2 * max
    const ry = (px - 0.5) * 2 * max
    target.value.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`
  }

  const reset = () => {
    if (!target.value) return
    target.value.style.transition = 'transform 0.6s cubic-bezier(.2,.8,.2,1)'
    target.value.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
    setTimeout(() => {
      if (target.value) target.value.style.transition = ''
    }, 600)
  }

  onMounted(() => {
    if (!target.value) return
    if (window.matchMedia('(hover: none)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    target.value.addEventListener('mousemove', onMove)
    target.value.addEventListener('mouseleave', reset)
  })

  onBeforeUnmount(() => {
    if (!target.value) return
    target.value.removeEventListener('mousemove', onMove)
    target.value.removeEventListener('mouseleave', reset)
  })
}

<script setup lang="ts">
// AnimatedButton — bottone premium con shine, glow e magnetic effect.
// Variant: primary (accento arancio) | secondary (steel ghost) | ghost.
import { ArrowRight, Download } from 'lucide-vue-next'

interface Props {
  href?: string
  to?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'md' | 'lg'
  icon?: 'arrow' | 'download' | 'none'
  download?: boolean
  magnetic?: boolean
  type?: 'button' | 'submit'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'lg',
  icon: 'arrow',
  magnetic: true,
  type: 'button'
})

const emit = defineEmits<{ (e: 'click', ev: MouseEvent): void }>()

const root = ref<HTMLElement | null>(null)
const inner = ref<HTMLElement | null>(null)

if (props.magnetic) {
  useMagnetic(root, 0.18)
}

const sizes = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-14 px-7 text-[15px]'
}

const variants = {
  primary:
    'bg-accent text-white shadow-glow-soft hover:shadow-glow ring-1 ring-accent/40',
  secondary:
    'bg-steel-800/70 text-ink ring-1 ring-steel-700/70 hover:bg-steel-700/70',
  ghost:
    'bg-transparent text-ink ring-1 ring-steel-700/60 hover:bg-steel-800/40'
}

const IconComp = computed(() => {
  if (props.icon === 'arrow') return ArrowRight
  if (props.icon === 'download') return Download
  return null
})

const onClick = (ev: MouseEvent) => emit('click', ev)
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    ref="root"
    :href="href"
    :type="href ? undefined : type"
    :download="download || undefined"
    class="btn-shine inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-all duration-300 will-change-transform"
    :class="[sizes[size], variants[variant]]"
    @click="onClick"
  >
    <span ref="inner" class="inline-flex items-center gap-2.5">
      <slot />
      <component :is="IconComp" v-if="IconComp" class="w-4 h-4" />
    </span>
  </component>
</template>

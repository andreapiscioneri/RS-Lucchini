<script setup lang="ts">
// GlowCard — card riusabile con border glow, glass background e hover elevate.
interface Props {
  as?: string
  hover?: boolean
  padded?: boolean
  bordered?: boolean
}
withDefaults(defineProps<Props>(), {
  as: 'div',
  hover: true,
  padded: true,
  bordered: true
})
</script>

<template>
  <component
    :is="as"
    :class="[
      'relative rounded-2xl glass grad-border overflow-hidden',
      padded ? 'p-6 sm:p-7' : '',
      hover ? 'transition-all duration-500 hover:-translate-y-1 hover:shadow-elevate' : ''
    ]"
  >
    <!-- Soft inner glow on hover -->
    <span
      v-if="hover"
      aria-hidden="true"
      class="pointer-events-none absolute -top-1/2 left-1/2 -translate-x-1/2 w-[140%] h-[120%] bg-grad-radial opacity-0 group-hover:opacity-100 transition-opacity duration-700"
    />
    <slot />
  </component>
</template>

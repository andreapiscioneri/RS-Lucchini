<script setup lang="ts">
const { isDark, init } = useTheme()

useHead({
  bodyAttrs: {
    class: 'bg-bg text-ink antialiased font-sans selection:bg-accent/30 selection:text-ink'
  }
})

onMounted(() => {
  init()
})
</script>

<template>
  <div class="relative min-h-screen overflow-x-clip">
    <!-- Background ambient layers — adapt to theme -->
    <div aria-hidden="true" class="pointer-events-none fixed inset-0 z-0">
      <!-- Orange radial glow: strong in dark, subtle in light -->
      <div
        class="absolute inset-0 transition-opacity duration-500"
        :class="isDark ? 'bg-grad-radial opacity-90' : 'bg-grad-radial-light opacity-70'"
      />
      <!-- Noise grain -->
      <div
        class="absolute inset-0 bg-noise mix-blend-overlay transition-opacity duration-500"
        :class="isDark ? 'opacity-[0.35]' : 'opacity-[0.15]'"
      />
      <!-- Top steel gradient -->
      <div
        class="absolute inset-x-0 top-0 h-[60vh] transition-opacity duration-500"
        :class="isDark ? 'bg-grad-steel opacity-100' : 'bg-grad-steel-light opacity-60'"
      />
    </div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>

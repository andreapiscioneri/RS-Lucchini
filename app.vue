<script setup lang="ts">
// Root app — applica grain overlay globale e gradient radiale di sfondo.
useHead({
  bodyAttrs: { class: 'bg-bg text-ink antialiased font-sans selection:bg-accent/30 selection:text-ink' }
})
</script>

<template>
  <div class="relative min-h-screen overflow-x-clip">
    <!-- Background ambient layers -->
    <div aria-hidden="true" class="pointer-events-none fixed inset-0 z-0">
      <div class="absolute inset-0 bg-grad-radial opacity-90" />
      <div class="absolute inset-0 bg-noise opacity-[0.35] mix-blend-overlay" />
      <div class="absolute inset-x-0 top-0 h-[60vh] bg-grad-steel" />
    </div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* Page transitions */
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

<script setup lang="ts">
// pages/index.vue — composizione finale di tutte le sezioni.
// Le sezioni sono component "screen-sized" pensate per scroll cinematografico.

useSeoMeta({
  title: 'RS Lucchini — Mostriamo il lavoro reale',
  description:
    'Un progetto pilota concreto per verificare se autenticità, contenuti reali e comunicazione moderna possono migliorare qualità e interesse delle candidature in RS Lucchini.',
  ogTitle: 'RS Lucchini — Mostriamo il lavoro reale',
  ogDescription:
    'Verifichiamo in modo concreto se mostrare il lavoro reale aumenta interesse e qualità delle candidature.',
  ogImage: '/images/og-cover.svg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="relative">
    <HeroSection />
    <ProblemSection />
    <PilotGoalSection />
    <MethodTimeline />
    <ContentShowcase />
    <KPISection />
    <WhyPilotSection />
    <EvolutionSection />
    <PricingSection />
    <FinalCTA />
    <FooterSection />
  </div>
</template>

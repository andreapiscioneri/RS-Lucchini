<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
const props = defineProps<{ error: { statusCode: number; message?: string } }>()

const handle = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen grid place-items-center px-6">
    <div class="text-center max-w-xl">
      <p class="eyebrow"><span class="dot" />Errore</p>
      <h1 class="mt-4 font-display text-7xl text-accent-gradient">
        {{ props.error?.statusCode || 500 }}
      </h1>
      <p class="mt-4 text-ink-muted text-lg">
        {{ props.error?.message || 'Qualcosa non è andato come previsto.' }}
      </p>
      <button
        class="mt-8 inline-flex items-center gap-2 rounded-full px-5 h-12 bg-accent text-white shadow-glow-soft btn-shine"
        @click="handle"
      >
        <ArrowLeft class="w-4 h-4" /> Torna alla home
      </button>
    </div>
  </div>
</template>

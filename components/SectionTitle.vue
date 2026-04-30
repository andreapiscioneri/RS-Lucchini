<script setup lang="ts">
// SectionTitle — eyebrow + headline + opzionale lead.
// Usato in tutte le sezioni per coerenza di tipografia.
interface Props {
  eyebrow?: string
  title: string
  lead?: string
  align?: 'left' | 'center'
  accentWord?: string // parola/frase da evidenziare con gradient arancio
}

const props = withDefaults(defineProps<Props>(), {
  align: 'left'
})

const renderedTitle = computed(() => {
  if (!props.accentWord) return null
  const i = props.title.indexOf(props.accentWord)
  if (i === -1) return null
  return {
    before: props.title.slice(0, i),
    accent: props.accentWord,
    after: props.title.slice(i + props.accentWord.length)
  }
})
</script>

<template>
  <header
    :class="[
      'max-w-3xl',
      align === 'center' ? 'mx-auto text-center' : 'text-left'
    ]"
  >
    <p v-if="eyebrow" data-reveal class="eyebrow mb-5">
      <span class="dot" />
      {{ eyebrow }}
    </p>

    <h2
      data-reveal
      class="font-display text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05] tracking-tight"
    >
      <template v-if="renderedTitle">
        <span class="text-gradient">{{ renderedTitle.before }}</span>
        <span class="text-accent-gradient">{{ renderedTitle.accent }}</span>
        <span class="text-gradient">{{ renderedTitle.after }}</span>
      </template>
      <template v-else>
        <span class="text-gradient">{{ title }}</span>
      </template>
    </h2>

    <p
      v-if="lead"
      data-reveal
      class="mt-5 text-base sm:text-lg text-ink-muted text-pretty max-w-2xl"
      :class="align === 'center' ? 'mx-auto' : ''"
    >
      {{ lead }}
    </p>
  </header>
</template>

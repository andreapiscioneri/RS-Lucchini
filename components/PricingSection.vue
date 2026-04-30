<script setup lang="ts">
// PricingSection — quadro economico con tabella premium dark glass.
const root = ref<HTMLElement | null>(null)
useReveal(root, { stagger: 0.07 })

const rows = [
  {
    label: 'Analisi + setup',
    desc: 'Allineamento strategico, definizione ruolo target, KPI, struttura tracciamento.',
    value: '1.000 €'
  },
  {
    label: 'Produzione contenuti',
    desc: '1 mezza giornata in stabilimento, 4–6 contenuti finiti (video + foto), editing premium.',
    value: '2.000 €'
  },
  {
    label: 'Gestione campagna',
    desc: 'Setup ads, creatives multipli, A/B test, ottimizzazione settimanale, qualificazione lead.',
    value: '1.500 €'
  },
  {
    label: 'Investimento ADS',
    desc: 'Budget media erogato direttamente sulle piattaforme. Tracciato e rendicontato.',
    value: '1.000–1.500 €'
  }
]
</script>

<template>
  <section id="economico" ref="root" class="section-pad relative">
    <div class="container-x">
      <SectionTitle
        eyebrow="08 — Quadro economico"
        title="Investimento contenuto, perimetro chiaro."
        accent-word="perimetro chiaro"
        lead="Tutto incluso: analisi, produzione, distribuzione e reportistica finale. Niente costi nascosti."
      />

      <div class="mt-14 grid lg:grid-cols-12 gap-6">
        <!-- Tabella -->
        <div data-reveal class="lg:col-span-8 glass grad-border rounded-2xl overflow-hidden ring-steel">
          <div class="hidden sm:grid grid-cols-12 px-6 sm:px-8 py-4 text-[11px] uppercase tracking-[0.18em] text-ink-muted border-b border-steel-700/50">
            <div class="col-span-7">Voce</div>
            <div class="col-span-5 text-right">Importo</div>
          </div>
          <ul>
            <li
              v-for="r in rows"
              :key="r.label"
              class="grid grid-cols-1 sm:grid-cols-12 gap-2 px-6 sm:px-8 py-6 border-b border-steel-700/40 last:border-0 hover:bg-steel-800/30 transition-colors"
            >
              <div class="sm:col-span-7">
                <p class="font-display text-lg">{{ r.label }}</p>
                <p class="mt-1 text-sm text-ink-muted text-pretty">{{ r.desc }}</p>
              </div>
              <div class="sm:col-span-5 sm:text-right">
                <span class="font-display text-xl text-ink">{{ r.value }}</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Totale highlight -->
        <aside data-reveal class="lg:col-span-4">
          <div class="relative h-full glass-strong grad-border rounded-2xl p-7 ring-steel overflow-hidden">
            <div class="absolute -top-1/2 -right-1/3 w-[90%] h-[120%] bg-grad-radial opacity-90" />
            <div class="relative">
              <p class="text-[11px] uppercase tracking-[0.18em] text-accent">Investimento totale</p>
              <div class="mt-3 flex items-baseline gap-2">
                <span class="font-display text-5xl sm:text-6xl text-gradient">5.500</span>
                <span class="text-ink-muted">–</span>
                <span class="font-display text-5xl sm:text-6xl text-accent-gradient">6.000 €</span>
              </div>
              <p class="mt-2 text-sm text-ink-muted">IVA esclusa · 6–8 settimane di lavoro</p>

              <ul class="mt-6 space-y-2 text-sm text-ink-muted">
                <li class="flex items-start gap-2">
                  <span class="mt-1 w-1.5 h-1.5 rounded-full bg-accent" />
                  Output: report finale + materiali video di proprietà
                </li>
                <li class="flex items-start gap-2">
                  <span class="mt-1 w-1.5 h-1.5 rounded-full bg-accent" />
                  Pagamento per fasi (40 / 40 / 20)
                </li>
                <li class="flex items-start gap-2">
                  <span class="mt-1 w-1.5 h-1.5 rounded-full bg-accent" />
                  Possibilità di stop dopo la fase contenuti
                </li>
              </ul>

              <AnimatedButton
                href="#contatto"
                variant="primary"
                icon="arrow"
                size="md"
                class="mt-7 w-full justify-center"
              >
                Approfondiamo
              </AnimatedButton>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

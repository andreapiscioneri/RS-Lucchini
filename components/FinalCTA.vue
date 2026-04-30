<script setup lang="ts">
// FinalCTA — sezione di chiusura premium con gradient glow,
// upload/logo area placeholder per RS Lucchini, download brochure, magnetic CTAs.
import { CalendarCheck, Download, Upload, FileText } from 'lucide-vue-next'

const root = ref<HTMLElement | null>(null)
useReveal(root, { stagger: 0.08 })

// Logo upload (placeholder client-side, solo demo: il logo finale può essere
// inserito in /public/images/logo-rs-lucchini.svg)
const logoFile = ref<File | null>(null)
const logoSrc = ref<string>('/images/lucchini.png')
const fileInput = ref<HTMLInputElement | null>(null)

const onPick = () => fileInput.value?.click()

const onLogoChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const f = target.files?.[0]
  if (!f) return
  logoFile.value = f
  const reader = new FileReader()
  reader.onload = () => (logoSrc.value = reader.result as string)
  reader.readAsDataURL(f)
}
</script>

<template>
  <section id="contatto" ref="root" class="section-pad relative overflow-hidden">
    <!-- Background -->
    <div aria-hidden="true" class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-grad-radial opacity-100" />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg" />
      <div
        class="absolute inset-x-10 top-10 bottom-10 rounded-[40px] bg-steel-800/30 blur-3xl"
      />
      <svg
        aria-hidden="true"
        class="absolute inset-0 w-full h-full opacity-[0.10]"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
      >
        <g stroke="#94A3B8" stroke-width="1" fill="none">
          <path d="M0,500 L300,500 L350,440 L900,440 L950,380 L1200,380" />
          <path d="M0,200 L420,200 L470,260 L1200,260" />
        </g>
      </svg>
    </div>

    <div class="container-x">
      <div class="relative glass-strong grad-border rounded-[28px] p-8 sm:p-12 lg:p-16 ring-steel">
        <!-- Soft glow blob -->
        <span
          aria-hidden="true"
          class="pointer-events-none absolute -top-1/3 right-0 w-[60%] h-[120%] bg-grad-radial opacity-90"
        />

        <div class="relative grid lg:grid-cols-12 gap-10 items-end">
          <!-- Left: messaggio -->
          <div class="lg:col-span-7">
            <p data-reveal class="eyebrow mb-5">
              <span class="dot" />
              09 — Partiamo
            </p>
            <p data-reveal class="mb-5 text-sm font-medium tracking-wide text-accent uppercase">
              Non è marketing · Non è teoria · È un test operativo su un problema reale
            </p>
            <h2
              data-reveal
              class="font-display text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05] tracking-tight"
            >
              <span class="text-gradient">Rendiamo visibile il </span>
              <span class="text-accent-gradient">lavoro reale</span>
              <span class="text-gradient">. E vediamo cosa succede.</span>
            </h2>
            <p data-reveal class="mt-6 text-ink-muted text-pretty text-lg max-w-xl">
              Scegliamo un ruolo che oggi è critico, lo rendiamo visibile in
              modo concreto e vediamo che tipo di risposta genera. Se funziona,
              lo strutturiamo. Se non funziona, abbiamo comunque capito qualcosa
              di utile.
            </p>

            <div data-reveal class="mt-8 flex flex-wrap items-center gap-3">
              <AnimatedButton
                href="mailto:hello@rslucchini-pilot.it?subject=Pilot%20Employer%20Branding%20RS%20Lucchini"
                variant="primary"
                icon="arrow"
              >
                <CalendarCheck class="w-4 h-4 -ml-1" />
                Prenota confronto
              </AnimatedButton>

              <AnimatedButton
                href="/brochure/RS-Lucchini-Pilot.pdf"
                download
                variant="secondary"
                icon="download"
              >
                Scarica brochure PDF
              </AnimatedButton>
            </div>

            <p data-reveal class="mt-5 text-xs text-ink-muted flex items-center gap-2">
              <FileText class="w-3.5 h-3.5" />
              Brochure aggiornata · ~1.2 MB · PDF
            </p>

            <!-- Criticità — trasparenza che aumenta credibilità -->
            <figure data-reveal class="mt-8 relative pl-5 border-l border-steel-600/50">
              <blockquote class="text-ink-muted text-sm italic leading-relaxed">
                "Funziona solo se riusciamo a raccontare il lavoro in modo reale,
                senza filtri. Se questo non è possibile, il risultato si riduce."
              </blockquote>
            </figure>
          </div>

          <!-- Right: logo upload area -->
          <div class="lg:col-span-5">
            <div data-reveal class="relative glass grad-border rounded-2xl p-6 sm:p-7">
              <div class="flex items-center justify-between">
                <p class="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                  Brand area
                </p>
                <button
                  type="button"
                  class="text-[11px] uppercase tracking-[0.18em] text-accent hover:text-accent/80 inline-flex items-center gap-1.5"
                  @click="onPick"
                >
                  <Upload class="w-3.5 h-3.5" />
                  Carica logo
                </button>
                <input
                  ref="fileInput"
                  type="file"
                  accept="image/png,image/svg+xml,image/jpeg"
                  class="hidden"
                  @change="onLogoChange"
                />
              </div>

              <div class="mt-6 aspect-[16/10] rounded-xl bg-bg-deep ring-1 ring-steel-700/60 grid place-items-center overflow-hidden">
                <!-- Img standard: gestisce sia path statici sia data-URL del FileReader -->
                <img
                  v-if="logoSrc"
                  :src="logoSrc"
                  alt="RS Lucchini logo"
                  class="max-w-[60%] max-h-[60%] object-contain opacity-90"
                />
                <div v-else class="text-ink-muted text-sm">Nessun logo</div>
              </div>

              <p class="mt-4 text-xs text-ink-muted">
                Placeholder logo RS Lucchini. Sostituire il file in
                <code class="text-ink">/public/images/logo-rs-lucchini.svg</code>
                oppure usare "Carica logo" per anteprima.
              </p>

              <div class="mt-6 grid grid-cols-2 gap-3 text-xs">
                <div class="rounded-lg bg-bg-deep/60 ring-1 ring-steel-700/60 p-3">
                  <p class="text-[10px] uppercase tracking-[0.18em] text-ink-muted">Inizio</p>
                  <p class="mt-1 font-display">Entro 2 settimane</p>
                </div>
                <div class="rounded-lg bg-bg-deep/60 ring-1 ring-steel-700/60 p-3">
                  <p class="text-[10px] uppercase tracking-[0.18em] text-ink-muted">Setup</p>
                  <p class="mt-1 font-display">Zero attrito interno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

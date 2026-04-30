# RS Lucchini — Landing Pilot

Landing page premium per la presentazione del **progetto pilota di employer branding industriale** RS Lucchini.

Stack: **Nuxt 3 · TypeScript · TailwindCSS · GSAP · Lenis · @vueuse/motion**.
Mood: dark industrial premium, cinematico, accenti acciaio + arancio caldo.

---

## Quick start

```bash
# 1. Installazione
npm install

# 2. Dev server (http://localhost:3000)
npm run dev

# 3. Build di produzione
npm run build
npm run preview

# 4. Static generate (SSG)
npm run generate
```

Richiede **Node 18.18+**. Funziona anche con `pnpm` o `bun` cambiando comando.

---

## Struttura

```
.
├── app.vue                 # Root: ambient layers (grain, gradient, noise)
├── error.vue               # Pagina errori coerente col dark theme
├── nuxt.config.ts          # Moduli, fonts, image, SEO, prerender
├── tailwind.config.ts      # Tema custom: palette industrial premium
├── tsconfig.json
├── postcss.config.js
│
├── assets/
│   └── styles/
│       └── main.css        # Reset, glass, grad-border, btn-shine, utility
│
├── plugins/
│   ├── gsap.client.ts      # Registra GSAP + ScrollTrigger
│   └── lenis.client.ts     # Smooth scrolling agganciato al ticker GSAP
│
├── composables/
│   ├── useReveal.ts        # Reveal on scroll con stagger
│   ├── useMagnetic.ts      # Effetto magnetic per CTA
│   ├── useTilt.ts          # Tilt 3D per le card del Bento
│   └── useCounter.ts       # Counter animati (KPI)
│
├── layouts/
│   └── default.vue         # Header sticky + nav + CTA brochure
│
├── pages/
│   └── index.vue           # Composizione di tutte le sezioni
│
├── components/
│   ├── HeroSection.vue           # 01 — Hero fullscreen video + parallax
│   ├── ProblemSection.vue        # 02 — Problema (split + cards)
│   ├── PilotGoalSection.vue      # 03 — Obiettivo del pilota (3 pillar)
│   ├── MethodTimeline.vue        # 04 — Timeline verticale animata
│   ├── ContentShowcase.vue       # 05 — Bento layout contenuti
│   ├── KPISection.vue            # 06 — Counter + mini-chart
│   ├── WhyPilotSection.vue       # 07 — Perché un pilota
│   ├── EvolutionSection.vue      # 08 — Possibile evoluzione
│   ├── PricingSection.vue        # 09 — Quadro economico + totale
│   ├── FinalCTA.vue              # 10 — CTA finale + brochure + logo upload
│   ├── FooterSection.vue         # 11 — Footer minimale premium
│   ├── AnimatedButton.vue        # CTA premium: shine + magnetic + glow
│   ├── GlowCard.vue              # Card riusabile glass + grad-border
│   └── SectionTitle.vue          # Eyebrow + headline + lead coerenti
│
└── public/
    ├── favicon.svg
    ├── brochure/
    │   ├── RS-Lucchini-Pilot.pdf            ← (da inserire)
    │   └── RS-Lucchini-Pilot.pdf.placeholder
    ├── images/
    │   ├── hero-poster.svg                  ← Placeholder (sostituire con jpg)
    │   ├── logo-rs-lucchini.svg
    │   ├── og-cover.svg
    │   └── showcase/{turno,tech,life,voices,env}.svg
    └── videos/
        ├── hero-foundry.mp4                 ← (da inserire)
        ├── showcase-turno.mp4               ← (da inserire)
        └── showcase-tech.mp4                ← (da inserire)
```

---

## Sostituzione asset reali

Tutti i visual sono **placeholder SVG** dark/industrial coerenti col tema.
Per il render finale:

| Path | Sostituire con |
|---|---|
| `/public/images/hero-poster.svg` | `hero-poster.jpg` (1920×1080, scena reale) — poi aggiorna il prop `poster` in `HeroSection.vue` |
| `/public/images/showcase/*.svg` | Foto reali in stabilimento (1200×800 / 4:3) — aggiorna `poster` in `ContentShowcase.vue` |
| `/public/videos/hero-foundry.mp4` | Video industriale di 8–15 sec, loop, muto |
| `/public/videos/showcase-*.mp4` | Mini clip 5–8 sec per card del Bento |
| `/public/brochure/RS-Lucchini-Pilot.pdf` | Brochure finale del pilota |
| `/public/images/logo-rs-lucchini.svg` | Logo ufficiale RS Lucchini |

In `FinalCTA.vue` esiste anche un **upload logo lato client** (preview locale)
per testare al volo loghi alternativi.

---

## Stile e palette

```css
--bg:        #0B0F14   /* background */
--bg-deep:   #070A0F
--steel-800: #1A1F29
--ink:       #F5F7FA   /* testo */
--ink-muted: #94A3B8
--accent:    #F97316   /* arancio caldo */
--glow:      rgba(249,115,22,0.25)
```

Tipografia:
- **Headline**: Space Grotesk (600/700)
- **Body**: Inter (400/500)

Caricate via `@nuxt/fonts` (`google` provider) — zero dipendenza da CDN esterno a runtime.

---

## Animazioni

- **GSAP + ScrollTrigger**: reveal stagger, parallax hero, timeline progress, bar chart KPI.
- **Lenis**: smooth scrolling sincronizzato col ticker GSAP per non rompere `ScrollTrigger`.
- **Composables custom**: `useReveal`, `useMagnetic`, `useTilt`, `useCounter`.
- **CSS keyframes**: `floaty`, `shine`, `glowPulse`, `scrollHint`, `slowZoom`.
- **Reduced motion**: rispetto totale di `prefers-reduced-motion: reduce` (CSS + JS gate).

---

## SEO

- `useSeoMeta` su index per OG / Twitter card.
- `nuxt.config.ts` definisce title/description/theme-color globali.
- Prerender abilitato (`nitro.prerender.routes: ['/']`) — la home è statica.
- Alt text presenti su tutte le immagini, focus visibile, contrasto AA garantito.

---

## Performance

- `@nuxt/image` con format `webp/avif/jpg` e `quality: 80`.
- Video con `preload="metadata"` + `playsinline` + `muted` (mobile-friendly).
- Bundle splitting di default Nuxt 3.
- CSS minify via `lightningcss`.
- Compressione asset statici via Nitro.

Suggerimento: caricare i video lunghi su Cloudflare Stream / Mux invece che `/public`.

---

## Browser support

- Ultime 2 versioni di Chrome, Edge, Firefox, Safari.
- iOS Safari 15+ / Android Chrome 100+.
- Niente IE / legacy Edge.

---

## Personalizzazione testi

Tutti i copy sono inline nei singoli component sotto `/components`.
Cercare la stringa da modificare e cambiarla direttamente — non è stato
introdotto un layer i18n perché la landing è single-language (it).

Se in futuro servisse i18n, la via consigliata è `@nuxtjs/i18n`.

---

## Licenza

Codice prodotto su misura per RS Lucchini — uso interno.
Asset di terze parti (Lucide, Tailwind, GSAP) sotto le rispettive licenze open source.

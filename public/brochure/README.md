# /public/brochure

Inserire qui la brochure PDF finale del progetto pilota.

## File atteso

`RS-Lucchini-Pilot.pdf`

Questo è il path referenziato:

- nel layout (header → bottone "Brochure")
- nell'hero (CTA secondaria "Scarica brochure")
- nella FinalCTA ("Scarica brochure PDF")

## Specifiche consigliate

- Formato: PDF/A se possibile
- Peso: < 2 MB
- Accessibilità: testo selezionabile, non solo immagini
- Pagine consigliate: 6–10
- Coerenza visiva con la palette del sito (dark, accenti arancio)

Se il file viene rinominato, aggiornare i path in:

- `layouts/default.vue`
- `components/HeroSection.vue`
- `components/FinalCTA.vue`

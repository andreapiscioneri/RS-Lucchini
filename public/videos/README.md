# /public/videos

Cartella destinata ai video reali del progetto pilota.

## File attesi

| Nome file | Uso | Note |
|---|---|---|
| `hero-foundry.mp4` | Background hero fullscreen | 8–15 sec, loop seamless, ~1080p, max 2–3 MB. H.264, niente audio. |
| `showcase-turno.mp4` | Bento "Una giornata in turno" | 5–8 sec autoplay hover. ~1 MB. |
| `showcase-tech.mp4` | Bento "Attività tecnica" | 5–8 sec autoplay hover. ~1 MB. |

## Linee guida produzione

- Esportare in MP4 (H.264) + WebM se possibile, profile main, 30fps.
- Mute obbligatorio (autoplay browser).
- Loop nativo, niente fade-in/out interno (lo gestisce il CSS).
- Mantenere bitrate basso per non penalizzare LCP / mobile.
- Per asset > 5 MB usare un CDN esterno (Mux, Cloudflare Stream) e referenziarli via URL diretta.

## Fallback

Finché i file MP4 non sono caricati, l'hero mostrerà il poster `/images/hero-poster.svg`
e le card del bento mostreranno solo l'immagine poster (i video falliscono silenziosamente).

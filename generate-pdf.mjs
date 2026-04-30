import puppeteer from 'puppeteer'
import { spawn } from 'child_process'
import { setTimeout as wait } from 'timers/promises'

// Avvia dev server
console.log('Avvio dev server...')
const server = spawn('yarn', ['dev', '--port', '3099'], {
  cwd: process.cwd(),
  stdio: 'pipe'
})

let ready = false
server.stdout.on('data', (d) => {
  const out = d.toString()
  process.stdout.write(out)
  if (out.includes('localhost') || out.includes('3099')) ready = true
})
server.stderr.on('data', (d) => process.stderr.write(d.toString()))

for (let i = 0; i < 30; i++) {
  await wait(2000)
  if (ready) break
}
await wait(3000)

console.log('\nGenerazione PDF...')
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()

await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 })

// Inietta CSS per forzare colori dark prima del caricamento
await page.evaluateOnNewDocument(() => {
  const style = document.createElement('style')
  style.textContent = `
    * { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; print-color-adjust: exact !important; }
  `
  document.head?.appendChild(style)
})

await page.goto('http://localhost:3099', { waitUntil: 'networkidle0', timeout: 30000 })
await wait(2500)

await page.evaluate(() => {
  // Forza dark background su tutto
  document.documentElement.style.background = '#0B0F14'
  document.body.style.background = '#0B0F14'

  // Nasconde navbar
  const header = document.querySelector('header')
  if (header) header.style.display = 'none'

  // Nasconde pulsanti brochure/download
  document.querySelectorAll('a[download], a[href*="Proposta-Denani"]').forEach(el => {
    el.style.display = 'none'
  })
  // Nasconde anche la riga con l'icona FileText
  document.querySelectorAll('p.flex.items-center.gap-2').forEach(el => {
    if (el.textContent?.includes('Brochure')) el.style.display = 'none'
  })

  // Nasconde scroll indicator
  document.querySelectorAll('.hero-scroll-hint').forEach(el => el.remove())

  // Fix padding-top hero
  const main = document.querySelector('main')
  if (main) main.style.paddingTop = '0'

  // Sostituisce il video hero con PDFHERO.png
  document.querySelectorAll('video').forEach(v => {
    v.style.display = 'none'
    const img = document.createElement('img')
    img.src = '/images/PDFHERO.png'
    img.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;'
    v.parentNode?.insertBefore(img, v)
  })

  // Forza visibilità elementi animati
  document.querySelectorAll('[data-reveal]').forEach(el => {
    el.style.opacity = '1'
    el.style.transform = 'none'
    el.style.filter = 'none'
  })
})

await wait(1000)

// Misura altezza reale della pagina per una singola pagina PDF
const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight)
const pageWidth = 1440

await page.pdf({
  path: 'public/images/RS-Lucchini-Proposta-Denani.pdf',
  width: `${pageWidth}px`,
  height: `${pageHeight}px`,
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  pageRanges: '1'
})

console.log('PDF generato: public/images/RS-Lucchini-Proposta-Denani.pdf')

await browser.close()
server.kill()
process.exit(0)
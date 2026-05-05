// Light mode is the default. Dark class added only if user explicitly toggled to dark.
// Key 'rs-theme-v2' — resets any old stored preference.
export default defineNuxtPlugin(() => {
  const stored = localStorage.getItem('rs-theme-v2')
  if (stored === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

const _isDark = ref(false)

export const useTheme = () => {
  const disableTransitionsTemporarily = () => {
    const root = document.documentElement
    root.classList.add('theme-switching')
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        root.classList.remove('theme-switching')
      })
    })
  }

  const apply = (dark: boolean) => {
    if (!process.client) return
    disableTransitionsTemporarily()
    _isDark.value = dark
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('rs-theme-v2', dark ? 'dark' : 'light')
  }

  const toggle = () => apply(!_isDark.value)

  const init = () => {
    if (!process.client) return
    const stored = localStorage.getItem('rs-theme-v2')
    if (stored === null) {
      _isDark.value = document.documentElement.classList.contains('dark')
      return
    }

    const dark = stored === 'dark'
    _isDark.value = dark
    document.documentElement.classList.toggle('dark', dark)
  }

  return { isDark: _isDark, toggle, init }
}

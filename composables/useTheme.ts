const _isDark = ref(false)

export const useTheme = () => {
  const apply = (dark: boolean) => {
    if (!process.client) return
    _isDark.value = dark
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('rs-theme-v2', dark ? 'dark' : 'light')
  }

  const toggle = () => apply(!_isDark.value)

  const init = () => {
    if (!process.client) return
    const stored = localStorage.getItem('rs-theme-v2')
    apply(stored === 'dark')
  }

  return { isDark: _isDark, toggle, init }
}

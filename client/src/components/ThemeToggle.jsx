import { useState } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'dark',
  )
  const isDark = theme === 'dark'

  const toggle = () => {
    const next = isDark ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    setTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be blocked; the theme still applies for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-pill"
    >
      {isDark ? <HiSun size={19} /> : <HiMoon size={19} />}
    </button>
  )
}

export default ThemeToggle

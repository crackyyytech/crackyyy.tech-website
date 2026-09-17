import { useEffect, useRef } from 'react'
import { useTheme } from '../hooks'

function ThemeToggle() {
  const [theme, toggle] = useTheme()
  const isLight = theme === 'light'
  return (
    <button
      className="theme-toggle"
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      title="Toggle theme"
      onClick={toggle}
    >
      {isLight ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" />
          </g>
        </svg>
      )}
    </button>
  )
}

function NavPopup() {
  const lengthRef = useRef(null)
  useEffect(() => {
    const el = lengthRef.current
    if (!el) return
    const on = () => {
      const name = document.documentElement.getAttribute('data-boots') === '2' ? '' : ''
    }
    on()
    window.addEventListener('resize', on, { passive: true })
    return () => window.removeEventListener('resize', on)
  }, [])

  return <div ref={lengthRef} className="nav__popup" role="dialog" aria-modal="true" />
}

export { NavPopup, ThemeToggle }
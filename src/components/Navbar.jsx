import { useEffect, useState } from 'react'
import { useScrollSpy, useTheme } from '../hooks'

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Process', href: '#process', id: 'process' },
  { label: 'Internships', href: '#internships', id: 'internships' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const navIds = links.map((l) => l.id)

function ThemeToggle() {
  const [theme, toggle] = useTheme()
  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      title="Toggle theme"
    >
      <svg
        className={`theme-icon theme-icon--sun${theme !== 'light' ? ' is-off' : ''}`}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" />
        </g>
      </svg>
      <svg
        className={`theme-icon theme-icon--moon${theme === 'dark' ? ' is-on' : ''}`}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(navIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className={scrolled ? 'nav nav--scrolled' : 'nav'}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          <img src="/brand-name.png" alt="Crackyyy.tech" />
          <span className="nav__dot" aria-hidden="true" />
        </a>

        <nav className={open ? 'nav__links is-open' : 'nav__links'} aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <ThemeToggle />
          <a href="#contact" className="btn btn--primary btn--sm">
            Start a project
          </a>
          <button
            className={open ? 'nav__toggle is-open' : 'nav__toggle'}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
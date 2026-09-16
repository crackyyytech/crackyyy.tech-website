import { useEffect, useRef, useState } from 'react'
import { NavPopup, ThemeToggle } from './NavbarParts'
import { useScrollSpy } from '../hooks'

export const navIds = ['about', 'services', 'work', 'process', 'internships', 'contact']

export const navLinks = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Work / Case Studies', href: '#work', id: 'work' },
  { label: 'Process', href: '#process', id: 'process' },
  { label: 'Internships', href: '#internships', id: 'internships' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)
  const active = useScrollSpy(navIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const first = menuRef.current?.querySelector('a')
    first?.focus()

    const focusables = () =>
      Array.from(menuRef.current?.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])') || [])

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab') return
      const items = focusables()
      if (items.length === 0) return
      const firstEl = items[0]
      const lastEl = items[items.length - 1]
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault()
        lastEl.focus()
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault()
        firstEl.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      toggleRef.current?.focus()
    }
  }, [open])

  return (
    <header className={scrolled ? 'nav nav--scrolled' : 'nav'}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          <img src="/brand_logo.png" alt="Crackyyy.tech" />
          <span className="nav__dot" aria-hidden="true" />
        </a>

        <nav
          ref={menuRef}
          id="site-menu"
          className={open ? 'nav__links is-open' : 'nav__links'}
          aria-label="Main"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.id ? 'is-active' : ''}
              aria-current={active === l.id ? 'true' : undefined}
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
            ref={toggleRef}
            className={open ? 'nav__toggle is-open' : 'nav__toggle'}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <NavPopup open={open} />
    </header>
  )
}

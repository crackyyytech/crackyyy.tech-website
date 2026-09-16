import { useEffect, useRef, useState } from 'react'
import {
  useInView,
  usePageScrollProgress,
  usePointerGlow,
  usePrefersReducedMotion,
  useScrollSpy,
} from './hooks'

/* ---------------------------------------------------------------- Reveal */
export function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`rv rv--${variant} ${inView ? 'rv--in' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* --------------------------------------------------------------- Marquee */
export function Marquee({ items, speed = 30, className = '', ariaLabel }) {
  const row = [...items, ...items]
  return (
    <div
      className={`marquee ${className}`}
      style={{ '--speed': `${speed}s` }}
      aria-label={ariaLabel ?? 'Capabilities'}
    >
      <div className="marquee__track">
        {row.map((item, i) => (
          <span key={i} className="marquee__item" aria-hidden={i >= items.length}>
            <span className="marquee__word">{item}</span>
            <span className="marquee__sep" aria-hidden="true">
              →
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* -------------------------------------------------------- Scroll progress */
export function ScrollProgress() {
  const progress = usePageScrollProgress()
  return (
    <div
      className="scr-progress"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  )
}

/* ------------------------------------------------------------------ Tilt */
export function Tilt({ children, max = 5, className = '', glow = true }) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef(null)

  const onMove = (e) => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`
    el.style.setProperty('--px', `${e.clientX - rect.left}px`)
    el.style.setProperty('--py', `${e.clientY - rect.top}px`)
  }

  const onLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={ref}
      className={`tilt${glow ? ' tilt--glow' : ''} ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  )
}

/* -------------------------------------------------------------- Magnetic */
export function Magnetic({ children, strength = 0.32, className = '' }) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef(null)

  const onMove = (e) => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) * strength
    const dy = (e.clientY - (rect.top + rect.height / 2)) * strength
    el.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`
  }

  const onLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'translate(0px, 0px)'
  }

  return (
    <div
      ref={ref}
      className={`magnetic ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  )
}

/* ---------------------------------------------------------- PointerGlow */
export function PointerGlow({ children, className = '' }) {
  const ref = usePointerGlow()
  return (
    <div ref={ref} className={`pointer-glow ${className}`}>
      {children}
    </div>
  )
}

/* --------------------------------------------------------- RotatingWord */
export function RotatingWord({ words, interval = 2400, className = '' }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, interval)
    return () => clearInterval(id)
  }, [interval, words.length])

  const word = words[index]

  return (
    <span className={`rotword ${className}`} aria-label={words.join(', ')}>
      <span className="rotword__item" data-label={word}>
        {word}
      </span>
    </span>
  )
}

/* ----------------------------------------------------------- (removed: CustomCursor) */

/* ------------------------------------------------------------ SectionRail */
export function SectionRail({ ids }) {
  const active = useScrollSpy(ids)

  return (
    <nav className="rail" aria-label="Sections">
      {ids.map((id, i) => (
        <a
          key={id}
          href={`#${id}`}
          className={active === id ? 'rail__item is-active' : 'rail__item'}
          style={{ animationDelay: `${i * 40}ms` }}
        >
          <span className="rail__dot" aria-hidden="true" />
          <span className="rail__label">{id.replace('-', ' ')}</span>
        </a>
      ))}
    </nav>
  )
}
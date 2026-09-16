import { useElementProgress } from '../hooks'
import { Reveal } from '../motion'

const steps = [
  {
    n: '01',
    title: 'Discuss',
    meta: '1–2 days',
    body: 'Tell us what you are building and why. A short email or call is enough to start.',
  },
  {
    n: '02',
    title: 'Plan',
    meta: 'Fixed quote',
    body: 'You get a written scope: what we will build, what it costs, and when you will see it.',
  },
  {
    n: '03',
    title: 'Build',
    meta: 'Weekly check-ins',
    body: 'Development happens in the open. Working previews as we go — no surprises at handover.',
  },
  {
    n: '04',
    title: 'Ship',
    meta: 'Support included',
    body: 'We launch, hand over the codebase and docs, and stay available for fixes and improvements.',
  },
]

export default function Process() {
  const [zoomRef, zoomProgress] = useElementProgress({ start: 0.3 })
  const [tlRef, tlProgress] = useElementProgress({ start: 0.3 })

  const scale = 0.94 + 0.06 * zoomProgress

  return (
    <section id="process" className="section">
      <div className="container process__zoom" ref={zoomRef}>
        <div
          className="process__grid"
          style={{ transform: `scale(${scale.toFixed(3)})` }}
        >
          <div className="process__intro">
            <Reveal>
              <p className="kicker">03 / Process</p>
            </Reveal>
            <Reveal variant="up" delay={90}>
              <h2>Four steps. No surprises.</h2>
            </Reveal>
            <Reveal variant="up" delay={180}>
              <p className="process__note">
                The process is deliberately small. Scope first, then build in the open, then
                hand over something you can maintain.
              </p>
            </Reveal>
          </div>

          <ol className="timeline" ref={tlRef}>
            <span className="timeline__track" aria-hidden="true">
              <span
                className="timeline__fill"
                style={{ transform: `scaleY(${tlProgress})` }}
              />
            </span>
            {steps.map((s, i) => (
              <Reveal key={s.n} as="li" variant="up" delay={i * 110} className="timeline__step">
                <div className="timeline__meta">
                  <span className="timeline__n">{s.n}</span>
                  <span className="timeline__time">{s.meta}</span>
                </div>
                <div className="timeline__body">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
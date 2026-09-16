import { ArrowUpRightIcon } from './icons'
import { Magnetic, Reveal } from '../motion'

const tracks = [
  {
    title: 'Frontend',
    body: 'React, responsive layouts, and the design-to-code flow behind real client sites.',
  },
  {
    title: 'Backend & apps',
    body: 'APIs, databases, integrations, and the mobile apps sitting on top of them.',
  },
  {
    title: 'AI / applied ML',
    body: 'Python, model pipelines, and automation that makes products actually useful.',
  },
]

export default function Internships() {
  return (
    <section id="internships" className="section section--dark">
      <div className="band-grid" aria-hidden="true">
        <span className="orb orb--1" />
        <span className="orb orb--2" />
        <span className="orb orb--3" />
      </div>

      <div className="container internships__grid">
        <div className="internships__lead">
          <Reveal>
            <p className="kicker kicker--dark">04 / Internships</p>
          </Reveal>
          <Reveal variant="up" delay={90}>
            <h2>Learn by building real things.</h2>
          </Reveal>
          <Reveal variant="up" delay={170}>
            <p className="internships__body">
              We run internships for students and aspiring developers. You work directly on
              client projects with a mentor — not busywork, not tutorials. Three months,
              fully remote.
            </p>
          </Reveal>
          <Reveal variant="up" delay={250}>
            <ul className="internships__list">
              <li>Work on ongoing client projects</li>
              <li>Weekly mentor sessions and code review</li>
              <li>Certificate and letter of recommendation</li>
            </ul>
          </Reveal>
          <Reveal variant="up" delay={330} className="internships__cta">
            <Magnetic>
              <a href="#contact" className="btn btn--outline btn--light">
                Apply now
                <ArrowUpRightIcon size={18} />
              </a>
            </Magnetic>
            <span className="internships__hint">
              Tell us what you have built and what you want to learn.
            </span>
          </Reveal>
        </div>

        <div className="internships__tracks">
          <Reveal variant="fade" delay={150}>
            <p className="internships__label">Open tracks</p>
          </Reveal>
          {tracks.map((t, i) => (
            <Reveal key={t.title} variant="clip" delay={220 + i * 120}>
              <article className="track">
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
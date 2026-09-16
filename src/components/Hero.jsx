import { ArrowUpRightIcon, MailIcon } from './icons'
import { Magnetic, Reveal, RotatingWord, Tilt } from '../motion'

const lines = [
  { text: 'Small team.', delay: '0.18s' },
  { text: 'Serious code.', delay: '0.34s' },
  { text: 'Real results.', delay: '0.5s', accent: true },
]

function Equalizer() {
  return (
    <div className="eq" aria-hidden="true">
      <span style={{ '--d': '0s' }} />
      <span style={{ '--d': '0.18s' }} />
      <span style={{ '--d': '0.36s' }} />
      <span style={{ '--d': '0.12s' }} />
      <span style={{ '--d': '0.28s' }} />
      <span style={{ '--d': '0.08s' }} />
      <span style={{ '--d': '0.4s' }} />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__main">
          <Reveal variant="fade" delay={80}>
            <p className="kicker">Remote software studio</p>
          </Reveal>

          <h1>
            {lines.map((l) => (
              <span key={l.text} className="line">
                <span className="line__inner" style={{ animationDelay: l.delay }}>
                  {l.accent ? (
                    <span className="swash-wrap">
                      {l.text}
                      <svg className="swash" viewBox="0 0 220 12" aria-hidden="true">
                        <path d="M4 8 C 62 2, 158 2, 216 7" fill="none" />
                      </svg>
                    </span>
                  ) : (
                    l.text
                  )}
                </span>
              </span>
            ))}
          </h1>

          <Reveal variant="up" delay={700} className="hero__lede-wrap">
            <p className="hero__lede">
              A remote studio building{' '}
              <RotatingWord
                words={['websites', 'mobile apps', 'automations', 'AI systems']}
                className="hero__rotator"
              />
              , with internships for students who learn by shipping.
            </p>
          </Reveal>

          <Reveal variant="up" delay={850} className="hero__cta">
            <Magnetic>
              <a href="#contact" className="btn btn--primary">
                Start a project
                <ArrowUpRightIcon size={18} />
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href="#services" className="link">
                What we build
                <ArrowUpRightIcon size={16} />
              </a>
            </Magnetic>
          </Reveal>

          <Reveal variant="up" delay={1000} className="hero__meta">
            <MailIcon size={15} />
            <a href="mailto:crackyyy.tech@gmail.com">crackyyy.tech@gmail.com</a>
            <span className="hero__meta-sep" aria-hidden="true" />
            Freelance · Project · Part-time
          </Reveal>
        </div>

        <div className="hero__side">
          <Reveal variant="scale" delay={450} className="hero__panel-wrap">
            <Tilt max={3.5} className="tilt--panel">
              <div className="hero__panel">
                <div className="hero__mesh" aria-hidden="true" />
                <div className="hero__status">
                  <span className="hero__pulse" aria-hidden="true" />
                  Accepting new projects
                </div>
                <img src="/brand_logo.png" alt="Crackyyy.tech" className="hero__mark" />
                <div className="panel-rows">
                  <div className="panel-row">
                    <span className="panel-row__k">Model</span>
                    <span className="panel-row__v">Freelance · Part-time</span>
                  </div>
                  <div className="panel-row">
                    <span className="panel-row__k">On since</span>
                    <span className="panel-row__v">Watching inbox 7 days</span>
                  </div>
                  <div className="panel-row">
                    <span className="panel-row__k">Builds</span>
                    <span className="panel-row__v panel-row__v--eq">
                      <Equalizer />
                      live right now
                    </span>
                  </div>
                </div>
              </div>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
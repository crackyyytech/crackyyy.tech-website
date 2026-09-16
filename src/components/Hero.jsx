import { ArrowUpRightIcon, MailIcon } from './icons'
import { RotatingWord } from '../motion'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__main">
          <p className="kicker">Remote software studio</p>

          <h1>
            <span className="hero__title-line">
              Websites, apps &amp; AI systems that{' '}
              <span className="hero__title-accent">move your business forward</span>
            </span>
          </h1>

          <p className="hero__lede">
            For freelancers, startups, and small brands that need software delivered on
            time �?"{' '}
            <RotatingWord
              words={['websites', 'mobile apps', 'automations', 'AI systems']}
              className="hero__rotator"
            />
            {' '}
            �?" built by a small senior-focused remote team.
          </p>

          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary">
              Start a project
              <ArrowUpRightIcon size={18} />
            </a>
            <a href="#work" className="link">
              View our work
              <ArrowUpRightIcon size={16} />
            </a>
          </div>

          <div className="hero__meta">
            <MailIcon size={15} />
            <a href="mailto:crackyyy.tech@gmail.com">crackyyy.tech@gmail.com</a>
            <span className="hero__meta-sep" aria-hidden="true" />
            Freelance · Project · Part-time
          </div>
        </div>

        <div className="hero__side">
          <div className="hero__panel-wrap">
            <div className="hero__panel">
              <div className="hero__status">
                <span className="hero__pulse" aria-hidden="true" />
                Accepting new projects
              </div>
              <img src="/brand_logo.png" alt="Crackyyy.tech" className="hero__mark" />
              <div className="panel-rows">
                <div className="panel-row">
                  <span className="panel-row__k">Email</span>
                  <span className="panel-row__v">
                    <a href="mailto:crackyyy.tech@gmail.com">crackyyy.tech@gmail.com</a>
                  </span>
                </div>
                <div className="panel-row">
                  <span className="panel-row__k">Model</span>
                  <span className="panel-row__v">Freelance · Project · Part-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
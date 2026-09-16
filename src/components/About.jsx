import { Reveal } from '../motion'

export default function About() {
  const principles = [
    {
      n: '01',
      title: 'Small, senior team',
      body: 'No account managers, no hand-offs. The people you speak to are the people who build your software.',
    },
    {
      n: '02',
      title: 'Remote by default',
      body: 'The whole studio works remotely. That keeps our costs low, your timeline short, and progress visible.',
    },
    {
      n: '03',
      title: 'Written scope',
      body: 'Every engagement starts as a short written document: what we build, what it costs, when you see it.',
    },
  ]

  return (
    <section id="about" className="section">
      <div className="container about__grid">
        <div className="about__lead">
          <Reveal>
            <p className="kicker">01 / About</p>
          </Reveal>
          <Reveal variant="up" delay={90}>
            <h2>
              Good software shouldn't need a big team or a big budget.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={180}>
            <p className="about__statement">
              We started Crackyyy.tech on that belief. We're a small team that builds and
              maintains software for growing businesses — websites, apps, tools, and
              automations that people actually use every day. The same projects double as
              training ground for our interns, who work on them with a mentor.
            </p>
          </Reveal>
        </div>

        <div className="about__principles">
          {principles.map((p, i) => (
            <Reveal key={p.n} variant="clip" delay={i * 110}>
              <article className="principle">
                <span className="principle__n">{p.n}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
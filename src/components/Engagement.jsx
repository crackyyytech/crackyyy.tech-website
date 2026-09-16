const steps = [
  {
    n: '01',
    title: 'Tell us your idea',
    body: 'Reach out on email or LinkedIn with your project brief, requirements, and timeline.',
  },
  {
    n: '02',
    title: 'Get a tailored plan',
    body: 'We scope the work, agree on approach and pricing, and define clear milestones.',
  },
  {
    n: '03',
    title: 'Collaborate flexibly',
    body: 'Our team builds on a freelance, part-time, or project basis — around your schedule.',
  },
  {
    n: '04',
    title: 'Launch & grow',
    body: 'We deliver, test, deploy, and provide the guidance you need to keep scaling.',
  },
]

export default function Engagement() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How We Work</p>
          <h2>A flexible model that fits your project</h2>
          <p className="section-sub">
            Collaboration on your terms — freelance engagements, part-time teams, or
            dedicated project sprints, all fully remote.
          </p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div key={s.n} className="step">
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
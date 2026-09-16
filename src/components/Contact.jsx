import { useState } from 'react'
import { ArrowUpRightIcon, LinkedinIcon, MailIcon } from './icons'
import { Magnetic, Reveal } from '../motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `${form.topic || 'New enquiry'} — ${form.name || 'crackyyy.tech'}`
    )
    const body = encodeURIComponent(
      `Hi Crackyyy.tech,\n\n${form.message}\n\n— ${form.name}\n${form.email}`
    )
    window.location.href = `mailto:crackyyy.tech@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section">
      <div className="container contact__grid">
        <div className="contact__info">
          <Reveal>
            <p className="kicker">05 / Contact</p>
          </Reveal>
          <Reveal variant="up" delay={90}>
            <h2>Tell us what you're building.</h2>
          </Reveal>
          <Reveal variant="up" delay={170}>
            <p className="contact__note">
              A short note is enough. We reply within a day, and usually we can tell you
              within the first exchange whether the project is a fit.
            </p>
          </Reveal>

          <Reveal variant="clip" delay={240}>
            <a href="mailto:crackyyy.tech@gmail.com" className="contact__row">
              <span className="contact__icon">
                <MailIcon size={18} />
              </span>
              <span>
                <strong>Email</strong>
                <small>crackyyy.tech@gmail.com</small>
              </span>
              <ArrowUpRightIcon size={18} className="contact__arrow" />
            </a>
          </Reveal>
          <Reveal variant="clip" delay={310}>
            <a
              href="https://www.linkedin.com/company/crackyyy-tech"
              target="_blank"
              rel="noreferrer"
              className="contact__row"
            >
              <span className="contact__icon">
                <LinkedinIcon size={18} />
              </span>
              <span>
                <strong>LinkedIn</strong>
                <small>Company — Crackyyy Tech</small>
              </span>
              <ArrowUpRightIcon size={18} className="contact__arrow" />
            </a>
          </Reveal>

          <Reveal variant="fade" delay={380}>
            <p className="contact__divider">Prefer a form?</p>
          </Reveal>
        </div>

        <Reveal variant="up" delay={150}>
          <form className="form" onSubmit={onSubmit}>
            <div className="form__row">
              <label className="form__field">
                <span>Name</span>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={update('name')}
                />
              </label>
              <label className="form__field">
                <span>Email</span>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={update('email')}
                />
              </label>
            </div>
            <label className="form__field">
              <span>This is about</span>
              <select value={form.topic} onChange={update('topic')}>
                <option value="">Choose one…</option>
                <option>Business website</option>
                <option>Mobile application</option>
                <option>Custom software</option>
                <option>Automation — WhatsApp / Instagram</option>
                <option>AI/ML project</option>
                <option>Internship</option>
                <option>Part-time collaboration</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="form__field">
              <span>Project in short</span>
              <textarea
                rows="4"
                required
                placeholder="What are you building, for whom, and by when?"
                value={form.message}
                onChange={update('message')}
              />
            </label>
            <Magnetic strength={0.15}>
              <button type="submit" className="btn btn--primary form__submit">
                Send the note
                <ArrowUpRightIcon size={18} />
              </button>
            </Magnetic>
            <p className="form__fineprint">
              Opens your email client with everything pre-filled.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
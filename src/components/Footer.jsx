import { LinkedinIcon, MailIcon } from './icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/brand-name.png" alt="Crackyyy.tech" className="footer__logo" />
          <p className="footer__blurb">
            Remote software studio. Websites, apps, automation, and AI/ML — with
            internships for the people building the next version of everything.
          </p>
        </div>

        <nav className="footer__col" aria-label="Explore">
          <h4>Explore</h4>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#internships">Internships</a>
        </nav>

        <nav className="footer__col" aria-label="Services">
          <h4>Services</h4>
          <a href="#services">Websites</a>
          <a href="#services">Mobile apps</a>
          <a href="#services">Automation</a>
          <a href="#services">AI/ML projects</a>
        </nav>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href="mailto:crackyyy.tech@gmail.com">crackyyy.tech@gmail.com</a>
          <a
            href="https://www.linkedin.com/company/crackyyy-tech"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/company/crackyyy-tech
          </a>
          <div className="footer__social">
            <a
              href="mailto:crackyyy.tech@gmail.com"
              aria-label="Email"
              className="footer__social-btn"
            >
              <MailIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/crackyyy-tech"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="footer__social-btn"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>© {new Date().getFullYear()} Crackyyy.tech</span>
          <span>Built remotely, shipped everywhere.</span>
        </div>
      </div>

      <div className="footer__mark" aria-hidden="true">
        <div className="container">
          <span>crackyyy.tech</span>
        </div>
      </div>
    </footer>
  )
}
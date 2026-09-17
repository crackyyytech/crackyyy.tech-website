import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Engagement from './components/Engagement'
import Internships from './components/Internships'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Marquee, ScrollProgress, SectionRail } from './motion'

const marqueeItems = [
  'Websites',
  'Mobile apps',
  'Automation',
  'AI/ML systems',
  'Dashboards & APIs',
  'WhatsApp & Instagram',
  'Custom software',
]

const railIds = ['about', 'services', 'process', 'work', 'internships', 'contact']

export default function App() {
  return (
    <>
      <ScrollProgress />
      <SectionRail ids={railIds} />
      <Navbar />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <main id="main">
        <Hero />
        <Marquee items={marqueeItems} speed={32} ariaLabel="Capabilities" />
        <About />
        <Services />
        <Process />
        <Engagement />
        <Internships />
        <Contact />
      </main>
      <nav className="sticky-actions" aria-label="Quick actions">
        <a className="btn btn--primary sticky-actions__btn" href="#contact">
          Start a project
        </a>
        <a className="btn btn--outline sticky-actions__btn" href="mailto:crackyyy.tech@gmail.com">
          Email us
        </a>
      </nav>
      <Footer />
    </>
  )
}
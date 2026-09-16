import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Internships from './components/Internships'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { CustomCursor, Marquee, ScrollProgress, SectionRail } from './motion'

const marqueeItems = [
  'Websites',
  'Mobile apps',
  'Automation',
  'AI/ML systems',
  'Dashboards & APIs',
  'WhatsApp & Instagram',
  'Custom software',
]

const railIds = ['about', 'services', 'process', 'internships', 'contact']

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <SectionRail ids={railIds} />
      <Navbar />
      <main>
        <Hero />
        <Marquee items={marqueeItems} speed={32} ariaLabel="Capabilities" />
        <About />
        <Services />
        <Process />
        <Internships />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
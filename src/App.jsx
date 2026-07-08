import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Stats from './components/Stats.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Research from './components/Research.jsx'
import OpenSource from './components/OpenSource.jsx'
import Certifications from './components/Certifications.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import FloatingBlobs from './components/FloatingBlobs.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-void text-ink overflow-hidden">
      <div className="noise-overlay bg-grain" />
      <CursorGlow />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Stats />
        <Experience />

        <div className="relative">
          <FloatingBlobs />
          <div className="relative">
            <Projects />
            <Skills />
          </div>
        </div>

        <Research />
        <OpenSource />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

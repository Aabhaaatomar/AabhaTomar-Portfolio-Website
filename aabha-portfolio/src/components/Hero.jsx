import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
import FloatingBlobs from './FloatingBlobs.jsx'
import { profile } from '../data/portfolioData.js'

const FULL_LINE = 'import aabha as data_scientist'

function TerminalTyping() {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i++
      setTyped(FULL_LINE.slice(0, i))
      if (i >= FULL_LINE.length) {
        clearInterval(id)
        setDone(true)
      }
    }, 45)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="font-mono text-[13px] sm:text-sm text-muted flex items-center gap-2">
      <span className="text-violet-400">&gt;&gt;&gt;</span>
      <span className="text-ink/80">{typed}</span>
      <span className={`inline-block w-[7px] h-[15px] bg-violet-400 ${done ? 'animate-caret' : ''}`} />
    </div>
  )
}

function RippleButton({ children, className = '', as: Comp = 'button', ...props }) {
  const handleClick = (e) => {
    const btn = e.currentTarget
    const circle = document.createElement('span')
    const d = Math.max(btn.clientWidth, btn.clientHeight)
    circle.style.width = circle.style.height = `${d}px`
    const rect = btn.getBoundingClientRect()
    circle.style.left = `${e.clientX - rect.left - d / 2}px`
    circle.style.top = `${e.clientY - rect.top - d / 2}px`
    circle.className = 'ripple'
    btn.appendChild(circle)
    setTimeout(() => circle.remove(), 650)
    props.onClick?.(e)
  }
  return (
    <Comp className={`ripple-btn ${className}`} {...props} onClick={handleClick}>
      {children}
    </Comp>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <FloatingBlobs variant="hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.10),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center w-full">
        {/* left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <TerminalTyping />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="section-label mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-5"
          >
            {profile.name.split(' ')[0]}{' '}
            <span className="text-gradient">{profile.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display text-xl sm:text-2xl text-muted mb-4"
          >
            {profile.role}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-mono text-sm text-violet-300/80 mb-10"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Link to="projects" spy smooth duration={600} offset={-80}>
              <RippleButton className="relative px-6 py-3 rounded-xl bg-violet-500 text-white font-medium hover:bg-violet-400 transition-colors shadow-glow-md">
                View Projects
              </RippleButton>
            </Link>
            <RippleButton
              as="a"
              href={profile.resumeUrl}
              download
              className="px-6 py-3 rounded-xl glass glass-hover flex items-center gap-2 font-medium text-ink"
            >
              <Download size={16} /> Download Resume
            </RippleButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex items-center gap-4"
          >
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-muted hover:text-violet-300 transition-colors" aria-label="GitHub">
              <Github size={19} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-violet-300 transition-colors" aria-label="LinkedIn">
              <Linkedin size={19} />
            </a>
          </motion.div>
        </div>

        {/* right - profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="relative mx-auto md:mx-0"
        >
          <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-[2rem] overflow-hidden glass shadow-glow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-700/40 via-violet-900/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-8xl font-semibold text-white/10 select-none">AT</span>
            </div>
            {/* Replace this block with: <img src="/your-photo.jpg" className="w-full h-full object-cover" /> */}
            <div className="absolute bottom-5 left-5 right-5 glass rounded-xl px-4 py-3 font-mono text-[11px] text-muted">
              <span className="text-violet-300">status:</span> open_to_work = <span className="text-violet-200">True</span>
            </div>
          </div>
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-violet-600/10 blur-2xl" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <Link to="about" spy smooth duration={600} offset={-80} className="cursor-pointer text-dim hover:text-violet-300 transition-colors">
          <ArrowDown size={18} className="animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}

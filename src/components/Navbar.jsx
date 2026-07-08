import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { Menu, X, Terminal } from 'lucide-react'

const links = [
  { to: 'about', label: 'About' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'skills', label: 'Skills' },
  { to: 'research', label: 'Research' },
  { to: 'certifications', label: 'Certs' },
  { to: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 transition-all duration-500 ${
            scrolled ? 'glass py-2.5 shadow-glow-sm' : 'py-2'
          }`}
        >
          <Link
            to="hero"
            spy
            smooth
            duration={600}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-violet-800 flex items-center justify-center shadow-glow-sm">
              <Terminal size={16} className="text-white" />
            </span>
            <span className="font-display font-semibold tracking-tight text-ink">Aabha<span className="text-violet-400">.</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-1 font-mono text-[13px]">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                spy
                smooth
                duration={600}
                offset={-90}
                activeClass="!text-violet-300 !bg-white/5"
                className="cursor-pointer px-3 py-2 rounded-lg text-muted hover:text-ink hover:bg-white/5 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link to="contact" spy smooth duration={600} offset={-90}>
              <button className="font-mono text-[13px] px-4 py-2 rounded-lg bg-violet-500/10 border border-violet-500/40 text-violet-200 hover:bg-violet-500/20 hover:border-violet-400/60 transition-colors">
                Say hi
              </button>
            </Link>
          </div>

          <button
            className="md:hidden text-ink p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-2 glass rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col p-3 font-mono text-sm">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    spy
                    smooth
                    duration={600}
                    offset={-90}
                    onClick={() => setOpen(false)}
                    className="cursor-pointer px-4 py-3 rounded-lg text-muted hover:text-ink hover:bg-white/5 transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

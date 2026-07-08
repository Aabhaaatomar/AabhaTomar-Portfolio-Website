import { Mail, Github, Linkedin, Download, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import FloatingBlobs from './FloatingBlobs.jsx'
import { profile } from '../data/portfolioData.js'

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'GitHub', value: '@aabhatomar', href: profile.github, icon: Github },
  { label: 'LinkedIn', value: '/in/aabhatomar', href: profile.linkedin, icon: Linkedin },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <FloatingBlobs />
      <div className="max-w-4xl mx-auto px-6 relative">
        <Reveal>
          <p className="section-label mb-3 text-center">09 · Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-center mb-4">
            Let's build something <span className="text-gradient">worth measuring</span>.
          </h2>
          <p className="text-muted text-center max-w-md mx-auto mb-14">
            Open to research collaborations, ML roles, and interesting datasets. Reach out — I reply fast.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass rounded-2xl p-4 sm:p-6 shadow-glow-md">
            <div className="grid sm:grid-cols-3 gap-3 mb-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.label === 'Email' ? undefined : '_blank'}
                  rel="noreferrer"
                  className="group flex flex-col gap-3 rounded-xl border border-line p-5 hover:border-violet-400/50 hover:bg-white/[0.03] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <l.icon size={18} className="text-violet-300" />
                    <ArrowUpRight size={14} className="text-dim group-hover:text-violet-300 transition-colors" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-dim uppercase tracking-wider mb-1">{l.label}</p>
                    <p className="text-sm text-ink/90 break-all">{l.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <a
              href={profile.resumeUrl}
              download
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-violet-500 hover:bg-violet-400 transition-colors text-white font-medium py-4"
            >
              <Download size={17} /> Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

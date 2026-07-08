import { Award } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { certifications } from '../data/portfolioData.js'

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-3">07 · Certifications</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-16">
            Verified, not just claimed.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="glass glass-hover rounded-2xl p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center shrink-0">
                  <Award size={18} className="text-violet-300" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base mb-1">{c.name}</h3>
                  <p className="text-muted text-sm mb-1">{c.issuer}</p>
                  <p className="font-mono text-xs text-violet-300">{c.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

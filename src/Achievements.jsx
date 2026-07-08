import Reveal from './Reveal.jsx'
import { achievements } from '../data/portfolioData.js'

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-3">08 · Achievements</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-16">
            A few marks worth pointing at.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {achievements.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.08} className="bg-surface h-full">
              <div className="p-7 h-full hover:bg-white/[0.03] transition-colors">
                <p className="font-display text-2xl sm:text-3xl font-semibold text-gradient mb-3">{a.label}</p>
                <p className="text-muted text-sm leading-relaxed">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

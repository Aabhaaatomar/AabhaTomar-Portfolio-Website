import Reveal from './Reveal.jsx'
import { experience } from '../data/portfolioData.js'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-3">02 · Experience</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-16">
            A short, dense timeline.
          </h2>
        </Reveal>

        <div className="relative pl-8 sm:pl-12">
          <div className="absolute left-[5px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/60 via-line2 to-transparent" />

          <div className="flex flex-col gap-14">
            {experience.map((e, i) => (
              <Reveal key={e.title + e.year} delay={i * 0.08}>
                <div className="relative">
                  <span className="absolute -left-8 sm:-left-12 top-1.5 w-3 h-3 rounded-full bg-violet-400 shadow-glow-sm ring-4 ring-void" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3">
                    <span className="font-mono text-xs text-violet-300">{e.year}</span>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold">{e.title}</h3>
                  </div>
                  <p className="text-muted mb-1">{e.org}</p>
                  <p className="text-muted/90 leading-relaxed max-w-2xl mb-4">{e.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-line2 text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

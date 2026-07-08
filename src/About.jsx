import Reveal from './Reveal.jsx'
import { about } from '../data/portfolioData.js'

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-3">01 · About</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-14 max-w-2xl">
            Not a resume line. A working theory.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-10 lg:gap-0">
          <Reveal delay={0.05}>
            <p className="font-display text-2xl sm:text-3xl leading-snug text-ink/90 max-w-lg">
              {about.summary}
            </p>
            <div className="flex flex-wrap gap-2 mt-10">
              {about.focusAreas.map((f) => (
                <span
                  key={f}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-line2 text-violet-200/90 bg-violet-500/5"
                >
                  {f}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="hidden lg:block bg-gradient-to-b from-transparent via-line2 to-transparent" />

          <div className="lg:pl-14 flex flex-col gap-8">
            {about.narrative.map((n, i) => (
              <Reveal key={n.k} delay={0.1 + i * 0.1}>
                <div className="relative pl-6 border-l border-line2">
                  <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-violet-500 shadow-glow-sm" />
                  <p className="font-mono text-xs text-violet-300 mb-2 uppercase tracking-wider">{n.k}</p>
                  <p className="text-muted leading-relaxed">{n.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

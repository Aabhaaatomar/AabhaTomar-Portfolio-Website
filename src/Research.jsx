import { ScrollText } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { research } from '../data/portfolioData.js'

export default function Research() {
  return (
    <section id="research" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-3">05 · Research</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-16">
            When the question matters more than the model.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-2xl p-8 sm:p-12 grid md:grid-cols-[auto_1fr] gap-8 items-start shadow-glow-sm">
            <div className="w-14 h-14 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center shrink-0">
              <ScrollText size={24} className="text-violet-300" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold mb-3">{research.title}</h3>
              <p className="text-muted leading-relaxed max-w-2xl mb-7">{research.desc}</p>
              <div className="flex flex-wrap gap-2">
                {research.tags.map((t) => (
                  <span key={t} className="font-mono text-xs px-3 py-1.5 rounded-full border border-line2 text-violet-200/90 bg-violet-500/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { ArrowRight, ArrowDown } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { openSource } from '../data/portfolioData.js'

export default function OpenSource() {
  return (
    <section id="open-source" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-3">06 · Open Source</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-16">
            From first commit to maintainer.
          </h2>
        </Reveal>

        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
          {openSource.map((o, i) => (
            <div key={o.name} className="flex flex-col md:flex-row items-center gap-4 flex-1">
              <Reveal delay={i * 0.12} className="w-full">
                <div className="glass glass-hover rounded-2xl p-6 h-full">
                  <p className="font-mono text-xs text-violet-300 mb-3">Stage {i + 1}</p>
                  <h3 className="font-display text-lg font-semibold mb-2">{o.name}</h3>
                  <p className="text-muted text-sm leading-relaxed">{o.desc}</p>
                </div>
              </Reveal>
              {i < openSource.length - 1 && (
                <div className="text-violet-400/60 shrink-0">
                  <ArrowRight size={20} className="hidden md:block" />
                  <ArrowDown size={20} className="md:hidden" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

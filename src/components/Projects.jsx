import { motion } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { projects } from '../data/portfolioData.js'

// Small abstract "visual signature" per project — grounded in what the project
// actually does, instead of a stock photo placeholder.
function ProjectVisual({ index }) {
  if (index === 0) {
    // FraudX — confusion-matrix / risk-score motif
    return (
      <div className="relative w-full h-full grid grid-cols-4 grid-rows-3 gap-1.5 p-5">
        {Array.from({ length: 12 }).map((_, i) => {
          const intensity = [0.7, 0.15, 0.9, 0.2, 0.3, 0.85, 0.1, 0.6, 0.95, 0.25, 0.4, 0.75][i]
          return (
            <div
              key={i}
              className="rounded-md"
              style={{ background: `rgba(168,85,247,${intensity * 0.5})` }}
            />
          )
        })}
      </div>
    )
  }
  if (index === 1) {
    // Mental health — waveform / feedback motif
    return (
      <div className="w-full h-full flex items-center justify-center gap-1.5 px-6">
        {[40, 70, 30, 90, 55, 20, 80, 45, 65, 35, 75, 25].map((h, i) => (
          <div key={i} className="w-1.5 rounded-full bg-violet-400/50" style={{ height: `${h}%` }} />
        ))}
      </div>
    )
  }
  if (index === 2) {
    // BI dashboard — bar chart motif
    return (
      <div className="w-full h-full flex items-end gap-2.5 px-6 pb-6">
        {[30, 55, 40, 75, 60, 90, 45].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-600/60 to-violet-300/30"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    )
  }
  // Healthcare EDA — scatter motif
  return (
    <div className="relative w-full h-full">
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-violet-300/60"
          style={{
            width: 5 + (i % 3) * 2,
            height: 5 + (i % 3) * 2,
            left: `${(i * 37) % 90 + 5}%`,
            top: `${(i * 53) % 80 + 8}%`,
          }}
        />
      ))}
    </div>
  )
}

function ProjectCard({ p, index, className = '' }) {
  return (
    <Reveal delay={index * 0.06} className={`${className} h-full`}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35 }}
        className="glass glass-hover rounded-2xl overflow-hidden h-full flex flex-col"
      >
        <div className="h-40 sm:h-48 bg-gradient-to-br from-violet-900/20 to-transparent border-b border-line relative overflow-hidden">
          <ProjectVisual index={index} />
          <span className="absolute top-4 right-5 font-mono text-4xl font-semibold text-white/[0.06]">
            {p.id}
          </span>
        </div>

        <div className="p-6 sm:p-7 flex flex-col flex-1">
          <p className="font-mono text-xs text-violet-300 mb-2">{p.type}</p>
          <h3 className="font-display text-xl sm:text-2xl font-semibold mb-3">{p.name}</h3>
          <p className="text-muted text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {p.stack.map((s) => (
              <span key={s} className="font-mono text-[11px] px-2 py-1 rounded-md bg-white/5 text-muted border border-line">
                {s}
              </span>
            ))}
          </div>

          <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-6 text-xs text-muted/90">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-violet-400 shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-line">
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-ink hover:text-violet-300 transition-colors"
            >
              <Github size={15} /> Code
            </a>
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-violet-300 hover:text-violet-200 transition-colors ml-auto"
            >
              Live demo <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </motion.div>
    </Reveal>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-3">03 · Featured Work</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-16">
            Shipped, not just started.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          <ProjectCard p={featured} index={0} className="lg:col-span-2" />
          {rest.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

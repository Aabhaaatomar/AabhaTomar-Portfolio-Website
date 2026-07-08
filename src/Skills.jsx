import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { skills } from '../data/portfolioData.js'

export default function Skills() {
  const categories = Object.entries(skills)
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-3">04 · Skills</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-16">
            The toolkit, laid flat.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map(([cat, items], ci) => (
            <Reveal key={cat} delay={ci * 0.08}>
              <div className="glass glass-hover rounded-2xl p-6 h-full">
                <p className="font-mono text-[11px] text-violet-300 uppercase tracking-wider mb-5">
                  {String(ci + 1).padStart(2, '0')} / {cat}
                </p>
                <div className="flex flex-col gap-3">
                  {items.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: ci * 0.08 + i * 0.05 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-ink/90">{item}</span>
                      </div>
                      <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${78 + ((i * 7 + ci * 5) % 20)}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: ci * 0.08 + i * 0.05 + 0.2, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-violet-300"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

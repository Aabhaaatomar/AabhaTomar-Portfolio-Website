import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { stats } from '../data/portfolioData.js'

export default function Stats() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="glass rounded-2xl overflow-hidden shadow-glow-sm">
            {/* terminal chrome */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-line bg-white/[0.02]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-xs text-dim">aabha.stats()</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full font-mono text-sm min-w-[560px]">
                <thead>
                  <tr className="text-left text-dim border-b border-line">
                    <th className="px-5 py-3 font-normal">#</th>
                    <th className="px-5 py-3 font-normal">metric</th>
                    <th className="px-5 py-3 font-normal">value</th>
                    <th className="px-5 py-3 font-normal">dtype</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.map((s, i) => (
                    <motion.tr
                      key={s.label}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.45, delay: i * 0.08 }}
                      className="border-b border-line/60 last:border-0 hover:bg-white/[0.03] transition-colors"
                    >
                      <td className="px-5 py-4 text-dim">{i}</td>
                      <td className="px-5 py-4 text-muted">{s.label}</td>
                      <td className="px-5 py-4">
                        <span className="text-violet-200 font-semibold">{s.value}</span>{' '}
                        <span className="text-dim">{s.sub}</span>
                      </td>
                      <td className="px-5 py-4 text-violet-400/70">{s.dtype}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-3 border-t border-line font-mono text-xs text-dim bg-white/[0.02]">
              [{stats.length} rows × 4 columns]
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

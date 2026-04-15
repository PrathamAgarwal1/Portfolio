import { motion } from 'framer-motion';

const experienceItems = [
  'Built real-time competitor strategy tracking system',
  'Implemented time-series forecasting models',
  'Developed LLM-based sentiment analysis pipeline',
  'Built decision system for actionable business insights',
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-night/30 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-mint font-mono text-sm tracking-[0.15em] block mb-3">
            03 / EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-snow mb-4 tracking-tight">
            Experience
          </h2>
          <div className="w-12 h-px bg-mint/30 mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-[9px] top-3 bottom-0 w-px bg-glass" />

          <div className="pl-8 md:pl-12 relative">
            {/* Timeline dot */}
            <div
              className="absolute left-[4px] md:left-[6px] top-2 w-[7px] h-[7px] rounded-full bg-mint"
              style={{ boxShadow: '0 0 12px rgba(0, 212, 170, 0.4)' }}
            />

            <div className="bg-carbon border border-glass rounded-2xl p-6 md:p-8 hover:border-glass transition-colors duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-snow">
                    Artificial Intelligence Intern
                  </h3>
                  <p className="text-mint font-mono text-sm mt-1">
                    Infosys Springboard
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {experienceItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3 text-sm text-ash"
                  >
                    <span className="text-mint mt-0.5 text-xs shrink-0">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

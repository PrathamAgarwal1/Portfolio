import { motion } from 'framer-motion';

const experienceItems = [
  'Built real-time competitor strategy tracking system',
  'Implemented time-series forecasting models',
  'Developed LLM-based sentiment analysis pipeline',
  'Built decision system for actionable business insights',
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <span className="text-mint font-mono text-xs md:text-sm tracking-[0.5em] uppercase">
              03 / Experience
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-snow mb-12 tracking-tight">
            Experience
          </h2>
          <div className="w-16 h-[2px] bg-mint/30 mb-16 -mt-8" />

          {/* Simple Clean Card based on Screenshot 3 */}
          <div className="relative group">
            {/* Minimal vertical line decoration */}
            <div className="absolute top-0 bottom-0 -left-6 md:-left-12 w-[1px] bg-white/5">
              <div className="absolute top-10 left-[-2px] w-[5px] h-[5px] rounded-full bg-mint shadow-[0_0_10px_#00f0ff]" />
            </div>

            <div className="bg-[#0a0a0a] border border-glass rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md">
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-snow mb-3 tracking-tight">
                  Artificial Intelligence Intern
                </h3>
                <p className="text-mint font-mono text-base tracking-widest uppercase font-medium">
                  Infosys Springboard
                </p>
              </div>

              <ul className="space-y-6">
                {experienceItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-ash text-lg leading-relaxed">
                    <span className="text-mint mt-1.5 text-[10px] shrink-0">
                      ▶
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

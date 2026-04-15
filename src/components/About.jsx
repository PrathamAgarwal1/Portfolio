import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6">
      {/* Subtle tonal shift gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-night/50 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-mint font-mono text-sm tracking-[0.15em] block mb-3">
            01 / ABOUT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-snow mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-px bg-mint/30 mb-10" />
        </motion.div>

        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-ash text-base md:text-lg leading-relaxed"
          >
            I&apos;m a Computer Science student who enjoys building systems that
            solve real problems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-ash text-base md:text-lg leading-relaxed"
          >
            My work focuses on{' '}
            <span className="text-snow font-medium">
              real-time collaboration
            </span>
            ,{' '}
            <span className="text-snow font-medium">
              AI-driven decision systems
            </span>
            , and{' '}
            <span className="text-snow font-medium">developer tooling</span>. I
            like combining backend engineering, system design, and practical
            machine learning.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-ash text-base md:text-lg leading-relaxed"
          >
            Recently, I&apos;ve been building platforms like{' '}
            <span className="text-mint font-medium">SkillSkirmish</span> — a
            real-time collaborative coding system with skill-based matchmaking —
            and tools like{' '}
            <span className="text-mint font-medium">Ghost</span> that analyze
            and clean large codebases.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

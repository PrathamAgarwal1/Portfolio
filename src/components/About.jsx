import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <span className="text-mint font-mono text-xs md:text-sm tracking-[0.5em] uppercase">
              01 / About
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-snow mb-12 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-[2px] bg-mint/30 mb-16 -mt-8" />

          <div className="space-y-10 text-ash text-lg md:text-xl leading-relaxed">
            <p>
              I&apos;m a Computer Science student who enjoys building systems that solve real problems.
            </p>
            
            <p>
              My work focuses on <span className="text-snow font-bold">real-time collaboration</span>, <span className="text-snow font-bold">AI-driven decision systems</span>, and <span className="text-snow font-bold">developer tooling</span>. I like combining backend engineering, system design, and practical machine learning.
            </p>
            
            <p>
              Recently, I&apos;ve been building platforms like <span className="text-mint font-bold hover:underline cursor-default">SkillSkirmish</span> — a real-time collaborative coding system with skill-based matchmaking — and tools like <span className="text-mint font-bold hover:underline cursor-default">Ghost</span> that analyze and clean large codebases.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

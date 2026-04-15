import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, 80]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-mint font-mono text-sm mb-6 tracking-[0.2em] uppercase"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-snow tracking-tighter leading-[1.05]">
              Pratham Agarwal<span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-iris">.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-ash mb-4 leading-relaxed max-w-2xl mx-auto"
          >
            I build real-time systems, AI-powered applications, and developer
            tools.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="text-sm md:text-base text-smoke mb-10 leading-relaxed max-w-xl mx-auto"
          >
            Currently working on collaborative coding platforms, intelligent
            matchmaking systems, and scalable backend architectures.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="group relative px-8 py-4 rounded-xl font-bold text-snow tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-1"
            id="hero-view-projects"
          >
            {/* Subtle premium gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-mint/10 to-iris/10 border border-white/10 rounded-xl transition-all duration-300 group-hover:from-mint/20 group-hover:to-iris/20 group-hover:border-mint/50" />
            
            {/* Glowing effect inside the button on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-mint/0 via-snow/5 to-iris/0 transition-opacity duration-500" />
            
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <span className="text-mint opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                →
              </span>
            </span>
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="px-7 py-3 border border-glass hover:border-halo text-ash hover:text-mint rounded-lg transition-all duration-300 text-sm tracking-wide cursor-pointer"
            id="hero-contact-me"
          >
            Contact Me
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-smoke/40 flex items-start justify-center pt-1.5"
        >
          <div className="w-0.5 h-1.5 bg-smoke/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

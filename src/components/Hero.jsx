import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-12 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-mint font-mono text-xs md:text-sm mb-6 tracking-[0.5em] uppercase block">
            Hi, I&apos;m
          </span>

          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-snow tracking-tighter leading-none mb-12">
            Pratham Agarwal<span className="text-iris">.</span>
          </h1>

          <div className="space-y-6 mb-12">
            <p className="text-lg md:text-2xl text-snow font-medium max-w-2xl mx-auto leading-relaxed">
              I build real-time systems, AI-powered applications, and developer tools.
            </p>
            <p className="text-base md:text-lg text-ash max-w-xl mx-auto leading-relaxed">
              Currently working on collaborative coding platforms, intelligent matchmaking systems, and scalable backend architectures.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => scrollTo('#projects')}
              className="px-10 py-4 bg-white/5 border border-glass text-snow font-bold tracking-widest uppercase text-xs rounded-xl hover:bg-white hover:text-void transition-all duration-300 w-full sm:w-auto"
            >
              View Projects
            </button>
            
            <button
              onClick={() => scrollTo('#contact')}
              className="px-10 py-4 border border-glass text-smoke font-bold tracking-widest uppercase text-xs rounded-xl hover:text-mint hover:border-mint transition-all duration-300 w-full sm:w-auto"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative background depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-mint/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}

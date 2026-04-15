import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Contact() {
  const email = "prathamagarwalvikas@gmail.com";

  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-void py-32 overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <h2 className="text-[25vw] font-bold tracking-tighter select-none uppercase">CONNECT</h2>
      </div>

      <div className="max-w-6xl w-full text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-mint font-mono text-xs md:text-sm tracking-[0.5em] uppercase mb-12 block"
        >
          Available for new opportunities // 2026
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl sm:text-8xl md:text-9xl font-bold text-snow tracking-tighter leading-none mb-20"
        >
          Let&apos;s build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint via-iris to-glow">something.</span>
        </motion.h2>

        <div className="flex flex-col items-center gap-16">
          <MagneticButton 
            onClick={() => window.location.href = `mailto:${email}`}
            className="group relative w-48 h-48 rounded-full bg-mint text-void flex items-center justify-center overflow-hidden transition-transform active:scale-95 shadow-[0_0_50px_rgba(0,240,255,0.3)]"
          >
            <span className="relative z-10 text-lg font-bold tracking-widest uppercase">Start Talk</span>
            <div className="absolute inset-0 bg-snow scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full origin-center" />
          </MagneticButton>
        </div>
      </div>

      {/* Subtle Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-iris/5 rounded-full blur-[100px] animate-pulse [animation-delay:2s]" />
    </section>
  );
}

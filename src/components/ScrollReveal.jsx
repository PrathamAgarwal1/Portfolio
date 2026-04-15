import { motion } from 'framer-motion';

export default function ScrollReveal({ children, direction = 'up', delay = 0 }) {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction],
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' // Noise wipe starting state
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' // Noise wipe end state (full reveal)
      }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 1.2, 
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // Premium ease-out-expo
      }}
    >
      {children}
    </motion.div>
  );
}

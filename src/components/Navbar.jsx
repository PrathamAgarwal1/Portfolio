import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';
import Core3D from './Core3D';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full bg-void/40 backdrop-blur-xl border border-glass shadow-2xl shadow-black/40"
          >
            {/* Logo Dot */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors group relative overflow-hidden"
            >
              <Core3D />
            </button>

            <div className="flex items-center gap-1 mx-2 relative">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={cn(
                    "px-4 py-2 text-xs font-medium tracking-widest uppercase transition-colors duration-300 relative z-10",
                    hoveredLink === link.name ? "text-snow" : "text-ash"
                  )}
                >
                  {link.name}
                </button>
              ))}
              
              {/* Sliding Highlight Underline / Background */}
              <AnimatePresence>
                {hoveredLink && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute inset-y-0 rounded-full bg-mint/10 border border-mint/20 -z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    style={{
                      width: `${100 / links.length}%`,
                      left: `${(links.findIndex(l => l.name === hoveredLink) * (100 / links.length))}%`
                    }}
                  />
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => scrollTo('#contact')}
              className="px-5 py-2 rounded-full bg-mint text-void text-xs font-bold tracking-widest uppercase hover:brightness-110 transition-all active:scale-95"
            >
              Contact
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

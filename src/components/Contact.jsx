import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const socials = [
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:prathamagarwalvikas@gmail.com',
    label: 'prathamagarwalvikas@gmail.com',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/PrathamAgarwal1',
    label: 'PrathamAgarwal1',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/pratham-agarwal1/',
    label: 'pratham-agarwal1',
  },
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    href: 'https://leetcode.com/u/Pratham_Agarwal1/',
    label: 'Pratham_Agarwal1',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-night/40 to-void pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-mint font-mono text-sm tracking-[0.15em] block mb-3">
            05 / CONTACT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-snow mb-4 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-12 h-px bg-mint/30 mx-auto mb-8" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-ash text-base md:text-lg mb-12 leading-relaxed"
        >
          I&apos;m always interested in discussing new projects, collaborations,
          or opportunities. Feel free to reach out.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-16">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.href}
              target={social.name !== 'Email' ? '_blank' : undefined}
              rel={
                social.name !== 'Email' ? 'noopener noreferrer' : undefined
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className="group flex items-center gap-4 bg-carbon border border-glass rounded-xl p-4
                         hover:bg-gradient-to-r hover:from-mint/10 hover:to-iris/10 hover:border-mint/30 transition-all duration-300"
              id={`contact-${social.name.toLowerCase()}`}
            >
              <div
                className="w-10 h-10 rounded-lg bg-white/5 border border-glass flex items-center justify-center shrink-0
                            group-hover:border-halo transition-all duration-300"
              >
                <social.icon className="text-lg text-ash group-hover:text-mint transition-colors duration-300" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-xs font-mono text-smoke uppercase tracking-wider">
                  {social.name}
                </p>
                <p className="text-sm text-ash group-hover:text-snow transition-colors duration-200 truncate">
                  {social.label}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-glass"
        >
          <p className="text-smoke text-xs font-mono tracking-wider">
            Built by Pratham Agarwal · {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

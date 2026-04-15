import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/PrathamAgarwal1", label: "Github" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/pratham-agarwal1/", label: "LinkedIn" },
    { icon: <SiLeetcode />, href: "https://leetcode.com/u/Pratham_Agarwal1/", label: "LeetCode" },
    { icon: <FaEnvelope />, href: "mailto:prathamagarwalvikas@gmail.com", label: "Email" }
  ];

  return (
    <footer className="relative py-12 px-6 border-t border-glass bg-void/50 backdrop-blur-md overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-ash hover:text-mint transition-all duration-300 hover:scale-125"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        <div className="text-[10px] font-mono text-smoke tracking-[0.4em] uppercase text-center">
            © 2026 Pratham Agarwal
        </div>
      </div>
    </footer>
  );
}

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'SkillSkirmish',
    featured: true,
    description:
      'A real-time collaborative coding platform with intelligent skill-based matchmaking, adaptive assessments, and AI-assisted collaboration.',
    bullets: [
      'Two-way matchmaking system using ELO + vector similarity',
      'Real-time editor powered by CodeMirror + WebSockets',
      'Adaptive coding assessments that scale with user skill',
      'AI-assisted collaboration features',
    ],
    tags: ['Real-time systems', 'Matchmaking', 'System design'],
    github: 'https://github.com/PrathamAgarwal1/SkillSkirmish',
  },
  {
    title: 'RoadSight',
    featured: false,
    description:
      'Intelligent road damage detection and reporting system using computer vision and geospatial analysis.',
    bullets: [
      'YOLOv8 + ResNet18 detection pipeline',
      'GPS clustering + duplicate filtering',
      'Weather-based damage predictions',
      'Real-time monitoring dashboard',
    ],
    tags: ['Computer vision', 'AI', 'Scalability'],
    github:
      'https://github.com/PrathamAgarwal1/Road-Damage-Detection-and-Reporting-System',
  },
  {
    title: 'Ghost',
    featured: false,
    description:
      'A codebase analysis tool for detecting and safely cleaning dead code across multiple languages.',
    bullets: [
      'Dependency graph across Python/JS/TS',
      'Dead code detection engine',
      'Interactive cleanup system',
      'Safe + reversible operations',
    ],
    tags: ['Developer tools', 'Static analysis'],
    github: 'https://github.com/PrathamAgarwal1/ghost',
  },
  {
    title: 'RealTime Competitor Strategy Dashboard',
    featured: false,
    description:
      'An AI-driven decision support dashboard providing price forecasting, sentiment analysis, and purchasing recommendations for e-commerce products.',
    bullets: [
      'Price forecasting using Facebook Prophet and Amazon Chronos',
      'LLM-powered sentiment analysis via Groq',
      'Real-time scraping from Flipkart for prices and reviews',
      'Buy vs Wait decision engine from combined price-sentiment data',
    ],
    tags: ['AI/ML', 'Forecasting', 'Full-stack'],
    github: 'https://github.com/PrathamAgarwal1/RealTimeCompetitorStrategyTracker',
  },
  {
    title: 'DeployPilot',
    featured: false,
    description:
      'A production-ready CLI tool that helps developers detect, configure, and deploy their projects to free hosting platforms — effortlessly.',
    bullets: [
      'Auto-detects project type and framework',
      'Configures deployment to free-tier platforms',
      'Streamlines the entire deploy workflow from CLI',
    ],
    tags: ['DevOps', 'CLI', 'Node.js'],
    github: 'https://github.com/PrathamAgarwal1/deploypilot',
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setRotation({
      x: (y - 0.5) * -6,
      y: (x - 0.5) * 6,
    });
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group ${project.featured ? 'md:col-span-2' : ''}`}
      style={{ perspective: '800px' }}
    >
      <div
        className="relative h-full bg-carbon border border-glass rounded-2xl p-6 md:p-8
                   transition-[border-color,box-shadow] duration-300 overflow-hidden
                   hover:border-halo"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition:
            'transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s',
          boxShadow: '0 0 0 rgba(0,0,0,0)',
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow =
            '0 0 50px rgba(0, 229, 255, 0.08)')
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.boxShadow = '0 0 0 rgba(0,0,0,0)')
        }
      >
        {/* Cursor-following glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, rgba(176, 38, 255, 0.1), transparent 60%)`,
          }}
        />

        {project.featured && (
          <span className="inline-block text-xs font-mono text-mint bg-mint/10 px-3 py-1 rounded-full mb-5 border border-mint/15 tracking-wider">
            FEATURED
          </span>
        )}

        <h3 className="text-xl md:text-2xl font-semibold text-snow mb-3 tracking-tight">
          {project.title}
        </h3>

        <p className="text-ash text-sm md:text-base mb-5 leading-relaxed">
          {project.description}
        </p>

        <ul className="space-y-2.5 mb-6">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-ash">
              <span className="text-mint mt-0.5 text-xs shrink-0">▸</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-mono text-smoke bg-white/5 px-3 py-1.5 rounded-lg border border-glass"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 text-sm text-ash hover:text-mint transition-colors duration-200 group/link"
        >
          <FaGithub className="text-lg" />
          <span>View on GitHub</span>
          <FaExternalLinkAlt className="text-[10px] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-mint font-mono text-sm tracking-[0.15em] block mb-3">
            02 / WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-snow mb-4 tracking-tight">
            Projects
          </h2>
          <div className="w-12 h-px bg-mint/30 mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

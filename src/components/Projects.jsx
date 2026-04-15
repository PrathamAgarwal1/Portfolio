import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

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
    color: '#00f0ff'
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
    github: 'https://github.com/PrathamAgarwal1/Road-Damage-Detection-and-Reporting-System',
    color: '#b026ff'
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
    color: '#00d4aa'
  },
  {
    title: 'Competitor Dashboard',
    featured: false,
    description:
      'An AI-driven decision support dashboard providing price forecasting, sentiment analysis, and purchasing recommendations.',
    bullets: [
      'Price forecasting using Facebook Prophet and Amazon Chronos',
      'LLM-powered sentiment analysis via Groq',
      'Real-time scraping from Flipkart',
      'Buy vs Wait decision engine',
    ],
    tags: ['AI/ML', 'Forecasting', 'Full-stack'],
    github: 'https://github.com/PrathamAgarwal1/RealTimeCompetitorStrategyTracker',
    color: '#ffcc00'
  },
  {
    title: 'DeployPilot',
    featured: false,
    description:
      'A production-ready CLI tool that helps developers detect, configure, and deploy their projects to free hosting platforms.',
    bullets: [
      'Auto-detects project type and framework',
      'Configures deployment to free-tier platforms',
      'Streamlines the entire deploy workflow from CLI',
    ],
    tags: ['DevOps', 'CLI', 'Node.js'],
    github: 'https://github.com/PrathamAgarwal1/deploypilot',
    color: '#ff0055'
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative flex flex-col h-full bg-void/50 border border-glass rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-mint/30 backdrop-blur-xl ${project.featured ? 'md:col-span-2' : ''}`}
    >
      {/* Background Index Number */}
      <span className="absolute right-6 top-6 text-8xl font-bold text-white/[0.02] select-none leading-none z-0">
        0{index + 1}
      </span>

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="mb-6">
          <h3 className="text-3xl md:text-4xl font-bold text-snow mb-4 tracking-tight">
            {project.title}
          </h3>
          <p className="text-ash text-base md:text-lg mb-8 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        <ul className="space-y-3 mb-12 flex-1">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-smoke leading-relaxed">
              <span className="text-mint mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-mint opacity-40" />
              <span className="break-words">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-glass">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-mono text-smoke bg-white/5 px-3 py-1.5 rounded-lg border border-glass uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-glass text-snow font-bold text-xs tracking-widest uppercase hover:bg-snow hover:text-void transition-all duration-300 shrink-0"
          >
            <FaGithub className="text-lg" />
            Repo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-mint font-mono text-xs tracking-[0.3em] uppercase block mb-4">
            WORKS // 02
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-snow tracking-tighter">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

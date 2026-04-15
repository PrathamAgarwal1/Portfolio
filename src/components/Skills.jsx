import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C++', 'Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Django', 'REST APIs'],
  },
  {
    title: 'Frontend',
    skills: ['React.js'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'AI / ML',
    skills: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'],
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'],
  },
  {
    title: 'Core',
    skills: ['DSA', 'System Design', 'Operating Systems'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-mint font-mono text-sm tracking-[0.15em] block mb-3">
            04 / SKILLS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-snow mb-4 tracking-tight">
            Skills & Technologies
          </h2>
          <div className="w-12 h-px bg-mint/30 mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: catIndex * 0.07 }}
            >
              <h3 className="text-sm font-mono text-mint mb-4 tracking-wider uppercase">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-ash bg-carbon border border-glass px-3 py-1.5 rounded-lg
                               hover:border-halo hover:text-snow hover:bg-steel
                               transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

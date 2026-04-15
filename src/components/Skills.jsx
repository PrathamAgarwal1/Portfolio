import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "LANGUAGES",
    skills: ["C++", "Java", "Python", "JavaScript", "SQL"]
  },
  {
    category: "BACKEND",
    skills: ["Node.js", "Express.js", "Django", "REST APIs"]
  },
  {
    category: "FRONTEND",
    skills: ["React.js"]
  },
  {
    category: "DATABASES",
    skills: ["MongoDB", "MySQL"]
  },
  {
    category: "AI / ML",
    skills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP"]
  },
  {
    category: "DEVOPS",
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions"]
  },
  {
    category: "CORE",
    skills: ["DSA", "System Design", "Operating Systems"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-mint font-mono text-xs md:text-sm tracking-[0.5em] uppercase block mb-4">
            04 / Skills
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-snow tracking-tighter">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-mint/20 mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {skillsData.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-mint font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-8">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 rounded-lg bg-white/[0.03] border border-glass text-ash text-sm md:text-base font-medium hover:bg-white/[0.08] hover:text-snow transition-all duration-300"
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

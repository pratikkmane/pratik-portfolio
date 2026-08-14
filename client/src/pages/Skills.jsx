import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'C/C++', 'Java', 'C#', 'SQL', 'R', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Node.js', 'Vue.js', 'Express', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    category: 'AI & Machine Learning',
    skills: ['OpenCV', 'CNN', 'BLIP', 'Image Processing', 'scikit-learn'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Figma', 'Power BI', 'Google Analytics', 'Google Tag Manager', 'Unity', 'Jupyter Notebook'],
  },
]

function Skills() {
  return (
    <main
      id="skills"
      className="mx-auto max-w-5xl scroll-mt-20 px-5 pt-10 pb-40 sm:px-6 md:pt-12 md:pb-48"
    >
      <motion.h2
        className="mb-4 text-3xl font-bold tracking-tight text-[#1f2937] sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="mb-10 h-1 w-12 bg-[#1769aa]"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {skillCategories.map((group, index) => (
          <motion.article
            key={group.category}
            className="rounded-2xl border border-[#dedbd3] bg-[#fbfaf7] p-5 shadow-[0_10px_30px_rgba(37,44,52,0.07)] transition-all duration-200 hover:border-[#b8cde0] hover:shadow-[0_14px_34px_rgba(37,44,52,0.10)] sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.4) }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#1769aa]">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#dedbd3] bg-[#f4f3ef] px-3 py-1.5 text-sm text-[#4d5560]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </main>
  )
}

export default Skills
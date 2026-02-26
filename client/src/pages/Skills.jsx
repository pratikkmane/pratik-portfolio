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
    <main className="max-w-4xl mx-auto px-6 py-24">

      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="w-12 h-1 bg-blue-600 mb-10"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />

      {/* Skill Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((group, index) => (
          <motion.div
            key={index}
            className="p-6 border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-sm transition-all duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </main>
  )
}

export default Skills
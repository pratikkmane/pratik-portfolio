import { motion } from 'framer-motion'

const education = [
  {
    degree: 'MS in Applied Data Science',
    school: 'Indiana University',
    year: 'Jan 2026 – Present',
  },
  {
    degree: 'MS in Computer Science',
    school: 'Purdue University',
    year: 'Jan 2024 – Dec 2025',
  },
  {
    degree: 'MS in Computer Applications',
    school: 'Pune University',
    year: 'June 2020 – May 2022',
  },
  {
    degree: 'Bachelor of Science in Physics',
    school: 'Pune University',
    year: 'June 2017 – May 2020',
  },
]

function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">

      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="w-12 h-1 bg-blue-600 mb-10"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />

      {/* Bio */}
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Text */}
        <div className="space-y-5 text-gray-500 leading-relaxed">
          <p>
            I'm Pratik Mane, a graduate student pursuing my Master's in Applied 
            Data Science at Indiana University Indianapolis. With a background in 
            Computer Science, I bring both engineering rigor and analytical thinking 
            to every problem I tackle.
          </p>
          <p>
            My passion lies at the intersection of machine learning, data 
            visualization, and real-world impact. I love building systems that don't 
            just process data — they tell a story with it.
          </p>
          <p>
            When I'm not coding or analyzing datasets, you'll find me exploring new 
            tools, reading about AI research, or working on side projects that 
            challenge me to grow.
          </p>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-blue-600 pl-4">
                <p className="text-sm text-blue-600 font-medium mb-1">{edu.year}</p>
                <p className="font-semibold text-gray-900">{edu.degree}</p>
                <p className="text-sm text-gray-400">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </main>
  )
}

export default About
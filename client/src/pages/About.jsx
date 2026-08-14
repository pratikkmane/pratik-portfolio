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
    <main
      id="about"
      className="mx-auto max-w-5xl scroll-mt-20 px-5 pt-10 pb-40 sm:px-6 md:pt-12 md:pb-48"
    >

      {/* Section Heading */}
      <motion.h2
        className="mb-4 text-3xl font-bold tracking-tight text-[#1f2937] sm:text-4xl"
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
        className="grid items-start gap-10 md:grid-cols-2 md:gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Text */}
        <div className="space-y-5 leading-relaxed text-[#5f6670]">
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
        <div className="md:-mt-14">
          <h3 className="mb-6 text-lg font-semibold text-[#1f2937]">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-[#1769aa] pl-4">
                <p className="mb-1 text-sm font-medium text-[#1769aa]">{edu.year}</p>
                <p className="font-semibold text-[#1f2937]">{edu.degree}</p>
                <p className="text-sm text-[#8d9298]">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </main>
  )
}

export default About
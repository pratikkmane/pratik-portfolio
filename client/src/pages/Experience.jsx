import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'XR4RAP LLC',
    date: 'June 2025 – Aug 2025',
    type: 'Internship',
    bullets: [
      'Architected an AI-powered asset pipeline integrating API-based services for ambient music, sound, video, and voice into Unity for a 3-minute pilot VR experience.',
      'Engineered a therapeutic VR simulation on Meta Quest with AI narration and dynamic scene timing using C# scripting with Unity XR Toolkit.',
      'Configured XR Origin locomotion and teleportation, resolving camera conflicts and establishing stable interaction boundaries on Meta Quest.',
      'Authored technical documentation and integration guides for AI service evaluation and Unity pipeline setup.',
    ],
    tags: ['Unity', 'C#', 'Meta Quest', 'VR/XR', 'AI Integration'],
  },
  {
    title: 'Software Developer',
    company: 'RBK Technologies Limited',
    date: 'Sept 2022 – Dec 2023',
    type: 'Full-time',
    bullets: [
      'Designed and prototyped the company\'s primary website in Figma, translating business requirements into responsive UI layouts.',
      'Developed and deployed the production website using Next.js, React, and Headless UI with optimized performance across desktop and mobile.',
      'Integrated Google Analytics (GA4) and Tag Manager for traffic monitoring and behavior insights supporting data-driven decisions.',
      'Reduced page load times by 25% through asset optimization, caching, and cross-functional collaboration with a team of 5.',
    ],
    tags: ['Next.js', 'React', 'Figma', 'Google Analytics', 'Git'],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Maharashtra Knowledge Corporation Limited',
    date: 'March 2022 – Sept 2022',
    type: 'Internship',
    bullets: [
      'Developed a Digital University platform using Vue.js frontend with MongoDB and MySQL backend, supporting 1,000+ concurrent users during peak registration.',
      'Built a real-time feedback system using WebSocket and Node.js with 99.9% message delivery rate between students and instructors.',
      'Optimized responsive layout with CSS Grid and Flexbox, lowering bounce rate and improving accessibility.',
    ],
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'MySQL', 'WebSocket'],
  },
]

function Experience() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">

      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="w-12 h-1 bg-blue-600 mb-10"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />

      {/* Timeline */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="p-8 border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Top Row */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {exp.title}
                </h3>
                <p className="text-blue-600 font-medium mt-1">
                  {exp.company}
                </p>
              </div>
              <div className="mt-2 md:mt-0 md:text-right">
                <p className="text-sm text-gray-400">{exp.date}</p>
                <span className="inline-block mt-1 text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2 mb-5">
              {exp.bullets.map((point, i) => (
                <li key={i} className="flex gap-3 text-gray-500 text-sm leading-relaxed">
                  <span className="text-blue-400 mt-1 shrink-0">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>

    </main>
  )
}

export default Experience
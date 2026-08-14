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
    <main
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-20 px-5 pt-10 pb-40 sm:px-6 md:pt-12 md:pb-48"
    >

      {/* Heading */}
      <motion.h2
        className="mb-4 text-3xl font-bold tracking-tight text-[#1f2937] sm:text-4xl"
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
            className="rounded-2xl border border-[#dedbd3] bg-[#fbfaf7] p-5 shadow-[0_10px_30px_rgba(37,44,52,0.07)] transition-all duration-200 hover:border-[#b8cde0] hover:shadow-[0_14px_34px_rgba(37,44,52,0.10)] sm:p-7 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Top Row */}
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#1f2937] sm:text-xl">
                  {exp.title}
                </h3>
                <p className="mt-1 font-medium text-[#1769aa]">
                  {exp.company}
                </p>
              </div>
              <div className="mt-2 md:mt-0 md:text-right">
                <p className="text-sm text-[#8d9298]">{exp.date}</p>
                <span className="mt-1 inline-block rounded-full bg-[#dce9f3] px-2.5 py-1 text-xs font-medium text-[#1769aa]">
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2 mb-5">
              {exp.bullets.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#5f6670]">
                <span className="mt-1 shrink-0 text-[#1769aa]">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#dedbd3] bg-[#f4f3ef] px-3 py-1 text-xs text-[#5f6670]"
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
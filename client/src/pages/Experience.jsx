import Reveal from '../components/Reveal'

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
    <section id="experience" className="px-5 pb-24 pt-20 sm:px-8 md:pt-32">
      <Reveal className="mb-10 font-mono text-xs uppercase tracking-wide">
        <h2>Experience</h2>
      </Reveal>

      <ul className="border-t border-black">
        {experiences.map((exp) => (
          <Reveal as="li" key={exp.title + exp.company} className="border-b border-[#e6e6e6] py-10 md:py-14">
            <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-wide text-[#6b6b6b]">
                  {exp.date} · {exp.type}
                </p>
                <h3 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  {exp.title}
                </h3>
                <p className="mt-2 text-lg text-[#555]">{exp.company}</p>
              </div>

              <div>
                <ul className="mb-6 space-y-3">
                  {exp.bullets.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-[#444]">
                      <span aria-hidden="true" className="mt-[0.15em] font-mono">+</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f3f3f3] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

export default Experience

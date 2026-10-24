import Reveal from '../components/Reveal'

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
    <section id="skills" className="px-5 pb-24 pt-20 sm:px-8 md:pt-32">
      <Reveal className="mb-10 font-mono text-xs uppercase tracking-wide">
        <h2>Skills</h2>
      </Reveal>

      <dl className="border-t border-fg">
        {skillCategories.map((group) => (
          <Reveal
            key={group.category}
            className="grid gap-4 border-b border-line py-8 md:grid-cols-[1fr_2fr] md:gap-16"
          >
            <dt className="font-mono text-xs uppercase tracking-wide text-muted">
              {group.category}
            </dt>
            <dd className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-pill px-4 py-2 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}

export default Skills

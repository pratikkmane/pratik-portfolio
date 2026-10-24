import Reveal from '../components/Reveal'

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Python', 'R', 'C++', 'Java', 'JavaScript', 'C#', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Backend & APIs',
    skills: ['REST APIs', 'Node.js', 'JWT/OAuth', 'Express'],
  },
  {
    category: 'Data and Cloud',
    skills: ['Airflow', 'Kafka', 'dbt', 'BigQuery', 'Google Cloud Storage', 'Docker', 'Terraform', 'AWS', 'Databricks'],
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Next.js', 'Vue.js'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Tools and Platforms',
    skills: ['Git', 'GitHub', 'RStudio', 'Figma', 'Google Analytics', 'Power BI', 'Quarto'],
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

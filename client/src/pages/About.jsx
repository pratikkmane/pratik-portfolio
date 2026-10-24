import Reveal from '../components/Reveal'

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
]

function About() {
  return (
    <section id="about" className="px-5 pb-24 pt-28 sm:px-8 md:pt-40">
      <Reveal className="mb-10 font-mono text-xs uppercase tracking-wide">
        <h2>About</h2>
      </Reveal>

      <div className="grid gap-14 md:grid-cols-[1.6fr_1fr] md:gap-20">
        <Reveal className="space-y-7">
          <p className="text-[clamp(1.6rem,3.4vw,2.75rem)] font-medium leading-[1.12] tracking-tight">
            I&apos;m Pratik Mane, a software engineer with experience across
            full-stack web development, VR/XR systems, and machine learning.
          </p>
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-[#555] sm:text-lg">
            <p>
              I&apos;ve built production websites used by real users, real-time
              systems handling thousands of concurrent connections, and immersive
              experiences on Meta Quest — and I bring the same engineering rigor
              to each.
            </p>
            <p>
              I&apos;m currently deepening my data science and ML skills through a
              Master&apos;s at Indiana University Indianapolis, which sharpens how
              I think about performance, evaluation, and building systems that
              hold up under real conditions — not just in a demo.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new tools,
              reading about AI research, or working on side projects that push me
              to grow.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="mb-6 font-mono text-xs uppercase tracking-wide text-[#6b6b6b]">
            Education
          </h3>
          <ul className="divide-y divide-[#e6e6e6] border-y border-[#e6e6e6]">
            {education.map((edu) => (
              <li key={edu.degree} className="py-6">
                <p className="mb-2 font-mono text-xs uppercase tracking-wide text-[#6b6b6b]">
                  {edu.year}
                </p>
                <p className="text-xl font-semibold tracking-tight">{edu.degree}</p>
                <p className="text-[#555]">{edu.school}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export default About

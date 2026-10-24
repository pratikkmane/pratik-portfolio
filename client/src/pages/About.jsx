import Reveal from '../components/Reveal'

const education = [
  {
    degree: 'Master of Science in Data Science',
    school: 'Indiana University',
    year: 'Expected Dec 2026',
    logo: { light: '/logos/iu-crimson.png', dark: '/logos/iu-white.png', size: 'h-12' },
  },
  {
    degree: 'Master of Science in Computer Science',
    school: 'Purdue University',
    year: 'Jan 2024 – Dec 2025',
    logo: { light: '/logos/purdue-p.png', dark: '/logos/purdue-p-rev.png', size: 'h-9' },
  },
]

function About() {
  return (
    <section id="about" className="px-5 pb-24 pt-28 sm:px-8 md:pt-40">
      <Reveal className="mb-10 font-mono text-xs uppercase tracking-wide">
        <h2>About</h2>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="space-y-7 lg:col-span-7">
          <p className="text-[clamp(1.6rem,3.4vw,2.75rem)] font-medium leading-[1.12] tracking-tight">
            I&apos;m Pratik Mane, a software engineer with experience across
            full-stack web development, VR/XR systems, and machine learning.
          </p>
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-subtle sm:text-lg">
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

        {/* The photo stretches to the height of the text beside it */}
        <Reveal
          delay={0.1}
          className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] lg:col-span-5 lg:mx-0 lg:aspect-auto lg:max-w-none"
        >
          <img
            src="/about.jpg"
            alt="Pratik smiling in front of a lit Ferris wheel at dusk"
            width="1227"
            height="1227"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
          />
        </Reveal>
      </div>

      <Reveal className="mt-20 md:mt-28">
        <h3 className="mb-6 font-mono text-xs uppercase tracking-wide text-muted">
          Education
        </h3>
        <ul className="grid gap-4 md:grid-cols-2">
          {education.map((edu) => (
            <li
              key={edu.degree}
              className="flex items-center gap-5 rounded-3xl border border-line p-6 sm:p-7"
            >
              <span className="flex h-16 w-20 shrink-0 items-center justify-center rounded-2xl bg-pill">
                <img
                  src={edu.logo.light}
                  alt=""
                  className={`${edu.logo.size} w-auto object-contain dark:hidden`}
                />
                <img
                  src={edu.logo.dark}
                  alt=""
                  className={`${edu.logo.size} hidden w-auto object-contain dark:block`}
                />
              </span>
              <div>
                <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted">
                  {edu.year}
                </p>
                <p className="text-xl font-semibold leading-snug tracking-tight">
                  {edu.degree}
                </p>
                <p className="text-subtle">{edu.school}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}

export default About

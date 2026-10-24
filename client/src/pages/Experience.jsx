import Reveal from '../components/Reveal'

const experiences = [
  {
    title: 'Data Engineer',
    company: 'COMET Lab',
    date: 'Aug 2026 – Present',
    type: 'Current',
    bullets: [
      'Prevented wrong crime figures by validating against 2021 data and official FBI figures, catching an agency ORI code error that undercounted incidents by nearly 99% and confirming all offense categories within 3-7%.',
      'Combined separate FBI crime data files into one clean, incident-level dataset in R (dplyr), keeping only the most serious offense per incident so researchers could analyze Indiana crime without double counting.',
      'Built a population-coverage pipeline joining FBI agency data with U.S. Census estimates across all 92 Indiana counties, finding 62.6% average coverage and 49 counties meeting the 85% coverage threshold.',
    ],
    tags: ['R', 'dplyr', 'Data Validation', 'FBI Crime Data', 'U.S. Census'],
  },
  {
    title: 'Backend Developer',
    company: 'The Polis Center',
    date: 'Jan 2026 – Aug 2026',
    type: 'Part-time',
    bullets: [
      'Removed the manual work of writing ADA-compliant alt text by building the backend that connects AI vision models to uploaded PDF, PPTX and DOCX files and generates the text automatically for screen readers.',
      'Built JWT authentication from scratch (FastAPI, SQLAlchemy, bcrypt) so each user\'s documents stay private.',
      'Built forgot-password and reset-password endpoints backed by a token table with 15-minute expiry and single-use enforcement, managing schema changes via versioned Alembic migrations on PostgreSQL.',
      'Linked uploaded documents to their owners via a user_id foreign key and built a history endpoint returning a user\'s full document and processing history, enabling secure per-user data retrieval and easy access to past results.',
      'Collaborated with the lead developer via Git branching, pull requests, and code review; diagnosed and fixed a PDF extraction bug, contributing to a three-strategy image-extraction pipeline for uploaded documents.',
    ],
    tags: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Alembic', 'JWT'],
  },
  {
    title: 'Software Engineering Intern',
    company: 'XR4RAP LLC',
    date: 'Jun 2025 – Aug 2025',
    type: 'Internship',
    bullets: [
      'Built a therapeutic VR pilot for Meta Quest (C#, Unity XR Toolkit, XR Origin) for guided rehab experiences.',
      'Integrated AI APIs for narration, music, sound effects and visuals, vetting sources for IP-safe usage.',
      'Implemented locomotion, teleportation, and interaction systems with timed scenes for guided therapeutic exercises.',
      'Debugged camera-tracking and UI conflicts, improving user stability and comfort in extended VR sessions.',
    ],
    tags: ['Unity', 'C#', 'Meta Quest', 'VR/XR', 'AI Integration'],
  },
  {
    title: 'Software Engineer',
    company: 'RBK Technologies Limited',
    date: 'Sep 2022 – Dec 2023',
    type: 'Full-time',
    bullets: [
      'Gathered requirements from business and engineering teams and turned them into responsive page structures and reusable components, acting as the technical point of contact from Figma prototype to engineering signoff.',
      'Built and deployed a responsive Next.js, React and Headless UI website, optimizing rendering performance, accessibility and cross-browser compatibility across desktop and mobile, supporting consistent user engagement.',
      'Set up Hostinger deployment and GA4 tracking for traffic, user-behavior and content decisions.',
      'Cut page load times 25% with asset optimization and caching; used Git and GitHub for reviews and releases.',
    ],
    tags: ['Next.js', 'React', 'Headless UI', 'Figma', 'GA4'],
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

      <ul className="border-t border-fg">
        {experiences.map((exp) => (
          <Reveal as="li" key={exp.title + exp.company} className="border-b border-line py-10 md:py-14">
            <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-wide text-muted">
                  {exp.date} · {exp.type}
                </p>
                <h3 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  {exp.title}
                </h3>
                <p className="mt-2 text-lg text-subtle">{exp.company}</p>
              </div>

              <div>
                <ul className="mb-6 space-y-3">
                  {exp.bullets.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-subtle">
                      <span aria-hidden="true" className="mt-[0.15em] font-mono">+</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-pill px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide"
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

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import ProjectArt from '../components/ProjectArt'

const projects = [
  {
    title: 'Neural Option Pricing: Accurate but Inconsistent',
    date: 'In progress · DSCI-515',
    current: true,
    category: 'Current Project',
    art: 'surface',
    description:
      'DSCI-515 Statistical Learning project asking whether neural option-pricing surrogates that are accurate on average still violate static no-arbitrage conditions (Carr and Madan, 2005), and why. Reproduces the Deep Learning Volatility models (Horvath, Muguruza and Tomas, 2021) as the baseline.',
    highlights: [
      'Question: can a pricer with low average error still break static no-arbitrage rules, and what causes it?',
      'Baseline: reproduction of the Deep Learning Volatility models (Horvath, Muguruza and Tomas, 2021).',
      'Data: 12,000 Heston samples, each with 5 model parameters and 88 implied volatilities.',
    ],
    background:
      'radial-gradient(circle at 85% 20%, rgba(255,190,90,.55), transparent 45%), radial-gradient(circle at 15% 90%, rgba(40,150,130,.55), transparent 50%), linear-gradient(135deg,#1c2b4a 0%,#0e1a33 55%,#070d1c 100%)',
    tags: ['Python', 'Neural Networks', 'Option Pricing', 'No-Arbitrage', 'Heston Model'],
    github: 'https://github.com/pratikkmane/dsci515-neural-option-pricing',
  },
  {
    title: 'Ames Housing Market Intelligence',
    date: 'Jan 2026 – May 2026',
    category: 'Data Analysis',
    art: 'housing',
    description:
      'Analyzed 2,930 home sales in Ames, Iowa (2006–2010) in R, using hypothesis tests, multiple regression and time series to show what drives price and the best time to buy or sell, then published the results as a Quarto website for a real-estate investment audience.',
    highlights: [
      'Overall quality is the strongest price driver: about +$32,000 per quality point (r = 0.80).',
      'Regression on quality, living area, garage area and age explains R² = 0.76 (RMSE about $39K).',
      'About a $20,000 seasonal swing between summer peak and winter trough listings.',
      'Prices fell 22% from the 2007 peak to the 2009 trough before recovering.',
    ],
    background:
      'radial-gradient(circle at 30% 35%, rgba(120,190,215,.55), transparent 45%), linear-gradient(180deg,#3c7c98 0%,#14384c 60%,#0a1d2a 100%)',
    tags: ['R', 'Regression', 'Time Series', 'Hypothesis Testing', 'Quarto'],
    github: 'https://github.com/pratikkmane/ames-housing-project',
    links: [
      { label: 'Live site', href: 'https://pratikkmane.github.io/ames-housing-project/' },
    ],
  },
  {
    title: 'Student Performance Analysis',
    date: 'Jan 2026 – May 2026',
    category: 'Machine Learning',
    art: 'grades',
    description:
      'Designed a data pipeline to preprocess, explore, and model student-performance data end to end, from raw records through feature engineering to a trained predictive system. Structured for reuse across different target variables.',
    background:
      'radial-gradient(circle at 70% 85%, rgba(70,60,140,.8), transparent 55%), linear-gradient(180deg,#d9633f 0%,#c25a45 45%,#3c2d5c 100%)',
    tags: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Data Visualization', 'Machine Learning'],
    github: 'https://github.com/pratikkmane/student-performance',
  },
  {
    title: 'Image Processing Toolkit for Edge Detection and Enhancement',
    date: 'Jan 2025 – May 2025',
    category: 'Image Processing',
    art: 'edges',
    description:
      'Developed a Python-based image processing toolkit utilizing OpenCV for advanced edge detection, noise reduction, and image enhancement. Implemented Sobel, Canny, and Gaussian Blurring algorithms to improve visual clarity in medical image datasets.',
    background:
      'radial-gradient(circle at 50% 70%, rgba(230,70,60,.55), transparent 45%), linear-gradient(180deg,#3a2540 0%,#4a2230 55%,#160f1c 100%)',
    tags: ['Python', 'OpenCV', 'Image Processing', 'Medical Imaging'],
    github: 'https://github.com/pratikkmane/image-processing-project',
  },
  {
    title: 'AI-Based Image Captioning using CNN and BLIP',
    date: 'Sept 2024 – Dec 2024',
    category: 'Deep Learning',
    art: 'caption',
    description:
      'Engineered an image-captioning system combining a CNN feature-extraction stage with a BLIP-based language model, wiring the two into a single inference pipeline that takes an image and returns natural-language captions.',
    background:
      'radial-gradient(circle at 80% 15%, rgba(120,190,255,.7), transparent 40%), linear-gradient(160deg,#3d86e6 0%,#1d4c9e 50%,#08183a 100%)',
    tags: ['Python', 'CNN', 'BLIP', 'Deep Learning', 'NLP'],
    github: 'https://github.com/pratikkmane/ImageCaptioning-CNN-BLIP',
  },
  {
    title: 'Computer Vision: Edge, Corner, and Shape Detection',
    date: 'July 2024 – Aug 2024',
    category: 'Computer Vision',
    art: 'hough',
    description:
      'Built a computer-vision project that implements gradient-based edge detection, Harris corner detection, and Hough Transform techniques to identify boundaries, lines, and circles in images using custom image-processing algorithms.',
    background:
      'radial-gradient(circle at 25% 80%, rgba(90,200,170,.5), transparent 45%), linear-gradient(180deg,#2f7a6a 0%,#14443b 60%,#081f1b 100%)',
    tags: ['Python', 'NumPy', 'Matplotlib', 'scikit-image', 'SciPy', 'Computer Vision'],
    github: 'https://github.com/pratikkmane/computer-vision-edge-detection-hough-transform',
  },
  {
    title: 'IRCTC Rail Connect App Redesign',
    date: 'Feb 2024 – May 2024',
    category: 'UX Design',
    art: 'phone',
    description:
      'Redesigned the IRCTC Rail Connect experience to simplify train-ticket booking, reduce interface clutter, and improve accessibility. Created streamlined flows for train search, PNR updates, train status, sign-up, Google login, and WhatsApp notifications.',
    highlights: [
      'Simplified navigation: less clutter and better accessibility.',
      'Focused on the core jobs: train booking, PNR updates and train status.',
      'Combined several screens into one flow to reduce user effort.',
      'Added direct sign-up, Google login and WhatsApp notifications.',
    ],
    background:
      'radial-gradient(circle at 70% 30%, rgba(190,150,255,.55), transparent 45%), linear-gradient(180deg,#7656d6 0%,#3a2784 55%,#140d33 100%)',
    tags: ['Figma', 'UX Research', 'UI Design', 'Prototyping', 'User Experience', 'Mobile Design'],
    github: 'https://github.com/pratikkmane/IRCTC-App-Redesign',
  },
]

function ProjectCard({ project, onOpen }) {
  const featured = project.current

  return (
    <button
      type="button"
      onClick={(event) => onOpen(project, event.currentTarget)}
      aria-haspopup="dialog"
      aria-label={`${project.title}, view details`}
      className={`grain group relative flex w-full flex-col justify-between overflow-hidden rounded-3xl p-5 text-left text-white ${
        featured ? 'min-h-[22rem] sm:p-8 lg:aspect-[3.2/1] lg:min-h-0' : 'aspect-[5/4] md:p-6'
      }`}
      style={{ background: project.background }}
    >
      <ProjectArt
        name={project.art}
        className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 flex items-start justify-between gap-3">
        <span className="flex items-center gap-2 rounded-full bg-black/35 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide backdrop-blur">
          {featured && <span className="h-2 w-2 rounded-full bg-emerald-400" />}
          {project.category}
        </span>
        <span
          aria-hidden="true"
          className="rounded-full bg-white/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 max-md:opacity-100"
        >
          View +
        </span>
      </div>

      <div className={`relative z-10 ${featured ? 'lg:max-w-[52%]' : ''}`}>
        <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-white/75">
          {project.date} · {project.tags.slice(0, 3).join(' / ')}
        </p>
        <h3
          className={`font-medium leading-[1.05] tracking-tight ${
            featured ? 'text-[clamp(1.75rem,3.4vw,3rem)]' : 'text-[clamp(1.2rem,1.9vw,1.6rem)]'
          }`}
        >
          {project.title}
        </h3>
      </div>
    </button>
  )
}

function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return
      const focusable = dialogRef.current?.querySelectorAll('a[href], button:not([disabled])')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const links = [
    { label: 'View on GitHub', href: project.github, primary: true },
    ...(project.links ?? []),
  ]

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-bg text-fg sm:rounded-3xl"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="grain relative h-60 overflow-hidden text-white sm:h-72"
          style={{ background: project.background }}
        >
          <ProjectArt name={project.art} fit="meet" className="absolute inset-0 h-full w-full" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/45 px-4 py-2 font-mono text-xs uppercase tracking-wide backdrop-blur transition-colors hover:bg-black/70"
          >
            Close ✕
          </button>
        </div>

        <div className="p-6 sm:p-10">
          <p className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wide text-muted">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.date}</span>
          </p>

          <h3 className="mb-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {project.title}
          </h3>

          <p className="max-w-3xl leading-relaxed text-subtle sm:text-lg">
            {project.description}
          </p>

          {project.highlights && (
            <ul className="mt-7 max-w-3xl space-y-3">
              {project.highlights.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed">
                  <span aria-hidden="true" className="font-mono">+</span>
                  <span className="text-subtle">{point}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-pill px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full px-6 py-3 font-mono text-xs uppercase tracking-wide transition-opacity hover:opacity-70 ${
                  link.primary ? 'bg-fg text-bg' : 'bg-pill'
                }`}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Projects() {
  const [selected, setSelected] = useState(null)
  const triggerRef = useRef(null)

  const open = (project, trigger) => {
    triggerRef.current = trigger
    setSelected(project)
  }

  const close = () => {
    setSelected(null)
    triggerRef.current?.focus()
  }

  return (
    <section id="projects" className="px-3 sm:px-3">
      <div className="mb-4 flex items-end justify-between px-2 font-mono text-xs uppercase tracking-wide sm:px-5">
        <h2>Selected Work</h2>
        <span className="text-muted">
          {String(projects.length).padStart(2, '0')} Projects
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={(index % 3) * 0.06}
            className={project.current ? 'sm:col-span-2 lg:col-span-3' : undefined}
          >
            <ProjectCard project={project} onOpen={open} />
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal key={selected.title} project={selected} onClose={close} />}
      </AnimatePresence>
    </section>
  )
}

export default Projects

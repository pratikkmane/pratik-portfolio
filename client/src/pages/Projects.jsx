import Reveal from '../components/Reveal'

const projects = [
  {
    title: 'Neural Option Pricing: Accurate but Inconsistent',
    date: 'In progress · DSCI-515',
    current: true,
    category: 'Current Project',
    description:
      'DSCI-515 Statistical Learning project asking whether neural option-pricing surrogates that are accurate on average still violate static no-arbitrage conditions (Carr and Madan, 2005), and why. Reproduces the Deep Learning Volatility models (Horvath, Muguruza and Tomas, 2021) as the baseline.',
    background:
      'radial-gradient(circle at 85% 20%, rgba(255,190,90,.55), transparent 45%), radial-gradient(circle at 15% 90%, rgba(40,150,130,.55), transparent 50%), linear-gradient(135deg,#1c2b4a 0%,#0e1a33 55%,#070d1c 100%)',
    tags: ['Python', 'Neural Networks', 'Option Pricing', 'No-Arbitrage', 'Heston Model'],
    github: 'https://github.com/pratikkmane/dsci515-neural-option-pricing',
  },
  {
    title: 'Ames Housing Price Prediction',
    date: 'Jan 2026 – May 2026',
    category: 'Machine Learning',
    background:
      'radial-gradient(circle at 30% 35%, rgba(120,190,215,.55), transparent 45%), linear-gradient(180deg,#3c7c98 0%,#14384c 60%,#0a1d2a 100%)',
    description:
      'Built an end-to-end ML pipeline — data ingestion, feature engineering, model training, and evaluation — to predict residential sale prices from the Ames Housing dataset. Focused on a clean, reproducible workflow over any single model’s accuracy.',
    tags: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Data Analysis', 'Machine Learning'],
    github: 'https://github.com/pratikkmane/ames-housing-project',
  },
  {
    title: 'Student Performance Analysis',
    date: 'Jan 2026 – May 2026',
    category: 'Machine Learning',
    background:
      'radial-gradient(circle at 70% 85%, rgba(70,60,140,.8), transparent 55%), linear-gradient(180deg,#d9633f 0%,#c25a45 45%,#3c2d5c 100%)',
    description:
      'Designed a data pipeline to preprocess, explore, and model student-performance data end to end, from raw records through feature engineering to a trained predictive system. Structured for reuse across different target variables.',
    tags: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Data Visualization', 'Machine Learning'],
    github: 'https://github.com/pratikkmane/student-performance',
  },
  {
    title: 'Image Processing Toolkit for Edge Detection and Enhancement',
    date: 'Jan 2025 – May 2025',
    category: 'Image Processing',
    background:
      'radial-gradient(circle at 50% 70%, rgba(230,70,60,.55), transparent 45%), linear-gradient(180deg,#3a2540 0%,#4a2230 55%,#160f1c 100%)',
    description:
      'Developed a Python-based image processing toolkit utilizing OpenCV for advanced edge detection, noise reduction, and image enhancement. Implemented Sobel, Canny, and Gaussian Blurring algorithms to improve visual clarity in medical image datasets.',
    tags: ['Python', 'OpenCV', 'Image Processing', 'Medical Imaging'],
    github: 'https://github.com/pratikkmane/image-processing-project',
  },
  {
    title: 'AI-Based Image Captioning using CNN and BLIP',
    date: 'Sept 2024 – Dec 2024',
    category: 'Deep Learning',
    background:
      'radial-gradient(circle at 80% 15%, rgba(120,190,255,.7), transparent 40%), linear-gradient(160deg,#3d86e6 0%,#1d4c9e 50%,#08183a 100%)',
    description:
      'Engineered an image-captioning system combining a CNN feature-extraction stage with a BLIP-based language model, wiring the two into a single inference pipeline that takes an image and returns natural-language captions.',
    tags: ['Python', 'CNN', 'BLIP', 'Deep Learning', 'NLP'],
    github: 'https://github.com/pratikkmane/ImageCaptioning-CNN-BLIP',
  },
  {
    title: 'Computer Vision: Edge, Corner, and Shape Detection',
    date: 'July 2024 – Aug 2024',
    category: 'Computer Vision',
    background:
      'radial-gradient(circle at 25% 80%, rgba(90,200,170,.5), transparent 45%), linear-gradient(180deg,#2f7a6a 0%,#14443b 60%,#081f1b 100%)',
    description:
      'Built a computer-vision project that implements gradient-based edge detection, Harris corner detection, and Hough Transform techniques to identify boundaries, lines, and circles in images using custom image-processing algorithms.',
    tags: ['Python', 'NumPy', 'Matplotlib', 'scikit-image', 'SciPy', 'Computer Vision'],
    github: 'https://github.com/pratikkmane/computer-vision-edge-detection-hough-transform',
  },
  {
    title: 'IRCTC Rail Connect App Redesign',
    date: 'Feb 2024 – May 2024',
    category: 'UX Design',
    background:
      'radial-gradient(circle at 70% 30%, rgba(190,150,255,.55), transparent 45%), linear-gradient(180deg,#7656d6 0%,#3a2784 55%,#140d33 100%)',
    description:
      'Redesigned the IRCTC Rail Connect experience to simplify train-ticket booking, reduce interface clutter, and improve accessibility. Created streamlined flows for train search, PNR updates, train status, sign-up, Google login, and WhatsApp notifications.',
    tags: ['Figma', 'UX Research', 'UI Design', 'Prototyping', 'User Experience', 'Mobile Design'],
    github: 'https://github.com/pratikkmane/IRCTC-App-Redesign',
  },
]

function ProjectCard({ project }) {
  const featured = project.current

  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className={`grain group relative flex flex-col justify-between overflow-hidden rounded-3xl p-5 text-white ${
        featured
          ? 'min-h-[22rem] sm:p-8 lg:aspect-[3.2/1] lg:min-h-0'
          : 'min-h-[18rem] md:aspect-[5/4] md:min-h-0 md:p-6'
      }`}
      style={{ background: project.background }}
    >
      <div className="relative z-10 flex items-start justify-between gap-3">
        <span className="flex items-center gap-2 rounded-full bg-black/35 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide backdrop-blur">
          {featured && <span className="h-2 w-2 rounded-full bg-emerald-400" />}
          {project.category}
        </span>
        <span
          aria-hidden="true"
          className="font-mono text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          ↗
        </span>
      </div>

      <div className="relative z-10">
        <p
          className={`mb-3 text-sm leading-relaxed text-white/90 transition-all duration-300 ${
            featured
              ? 'max-w-2xl'
              : 'max-w-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 max-md:translate-y-0 max-md:opacity-100'
          }`}
        >
          {project.description}
        </p>
        <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-white/70">
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

      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </a>
  )
}

function Projects() {
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
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Projects

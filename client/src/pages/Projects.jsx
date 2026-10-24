import Reveal from '../components/Reveal'

const projects = [
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

function Projects() {
  return (
    <section id="projects" className="px-3 sm:px-3">
      <div className="mb-4 flex items-end justify-between px-2 font-mono text-xs uppercase tracking-wide sm:px-5">
        <h2>Selected Work</h2>
        <span className="text-[#6b6b6b]">
          {String(projects.length).padStart(2, '0')} Projects
        </span>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 0.08}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="grain group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[1.75rem] p-5 text-white sm:aspect-square sm:p-7"
              style={{ background: project.background }}
            >
              <div className="relative z-10 flex items-start justify-between gap-3">
                <span className="rounded-full bg-black/35 px-4 py-2 font-mono text-xs uppercase tracking-wide backdrop-blur">
                  {project.category}
                </span>
                <span
                  aria-hidden="true"
                  className="font-mono text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  ↗
                </span>
              </div>

              <div className="relative z-10">
                <p className="mb-3 max-w-md translate-y-2 text-sm leading-relaxed text-white/90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 max-md:translate-y-0 max-md:opacity-100 max-md:line-clamp-4">
                  {project.description}
                </p>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-white/70">
                  {project.date} · {project.tags.slice(0, 3).join(' / ')}
                </p>
                <h3 className="text-[clamp(1.75rem,3.4vw,3rem)] font-medium leading-[1.02] tracking-tight">
                  {project.title}
                </h3>
              </div>

              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Projects

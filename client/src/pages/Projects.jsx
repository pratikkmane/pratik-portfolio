import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Ames Housing Price Prediction',
    date: 'Jan 2026 – May 2026',
    description:
      'Built an end-to-end ML pipeline — data ingestion, feature engineering, model training, and evaluation — to predict residential sale prices from the Ames Housing dataset. Focused on a clean, reproducible workflow over any single models accuracy.',
    tags: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Data Analysis', 'Machine Learning'],
    github: 'https://github.com/pratikkmane/ames-housing-project',
  },
  {
    title: 'Student Performance Analysis' ,
    date: 'Jan 2026 – May 2026',
    description:
      'Designed a data pipeline to preprocess, explore, and model student-performance data end to end, from raw records through feature engineering to a trained predictive system. Structured for reuse across different target variables.',
    tags: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Data Visualization', 'Machine Learning'],
    github: 'https://github.com/pratikkmane/student-performance',
  },
  {
    title: 'Image Processing Toolkit for Edge Detection and Enhancement',
    date: 'Jan 2025 – May 2025',
    description:
      'Developed a Python-based image processing toolkit utilizing OpenCV for advanced edge detection, noise reduction, and image enhancement. Implemented Sobel, Canny, and Gaussian Blurring algorithms to improve visual clarity in medical image datasets.',
    tags: ['Python', 'OpenCV', 'Image Processing', 'Medical Imaging'],
    github: 'https://github.com/pratikkmane/image-processing-project',
  },
  {
    title: 'AI-Based Image Captioning using CNN and BLIP',
    date: 'Sept 2024 – Dec 2024',
    description:
      'Engineered an image-captioning system combining a CNN feature-extraction stage with a BLIP-based language model, wiring the two into a single inference pipeline that takes an image and returns natural-language captions.',
    tags: ['Python', 'CNN', 'BLIP', 'Deep Learning', 'NLP'],
    github: 'https://github.com/pratikkmane/ImageCaptioning-CNN-BLIP',
  },
  {
    title: 'Computer Vision: Edge, Corner, and Shape Detection',
    date: 'July 2024 – Aug 2024',
    description:
      'Built a computer-vision project that implements gradient-based edge detection, Harris corner detection, and Hough Transform techniques to identify boundaries, lines, and circles in images using custom image-processing algorithms.',
    tags: ['Python', 'NumPy', 'Matplotlib', 'scikit-image', 'SciPy', 'Computer Vision'],
    github: 'https://github.com/pratikkmane/computer-vision-edge-detection-hough-transform',
  },
  {
    title: 'IRCTC Rail Connect App Redesign',
    date: 'Feb 2024 – May 2024',
    description:
      'Redesigned the IRCTC Rail Connect experience to simplify train-ticket booking, reduce interface clutter, and improve accessibility. Created streamlined flows for train search, PNR updates, train status, sign-up, Google login, and WhatsApp notifications.',
    tags: ['Figma', 'UX Research', 'UI Design', 'Prototyping', 'User Experience', 'Mobile Design'],
    github: 'https://github.com/pratikkmane/IRCTC-App-Redesign',
  },
]

function Projects() {
  return (
    <main
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-20 px-5 pt-10 pb-40 sm:px-6 md:pt-12 md:pb-48"
    >
      <motion.h2
        className="mb-4 text-3xl font-bold tracking-tight text-[#1f2937] sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="mb-10 h-1 w-12 bg-[#1769aa]"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="flex h-full flex-col rounded-2xl border border-[#dedbd3] bg-[#fbfaf7] p-5 shadow-[0_10px_30px_rgba(37,44,52,0.07)] transition-all duration-200 hover:border-[#b8cde0] hover:shadow-[0_14px_34px_rgba(37,44,52,0.10)] sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.35) }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#1769aa]">
              {project.date}
            </p>

            <h3 className="mb-3 text-lg font-bold leading-snug text-[#1f2937]">
              {project.title}
            </h3>

            <p className="mb-5 text-sm leading-relaxed text-[#5f6670]">
              {project.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#dedbd3] bg-[#f4f3ef] px-3 py-1 text-xs text-[#5f6670]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex min-h-11 items-center text-sm font-semibold text-[#1769aa] transition-colors hover:text-[#0f5288]"
            >
              View on GitHub <span aria-hidden="true">&nbsp;→</span>
            </a>
          </motion.article>
        ))}
      </div>
    </main>
  )
}

export default Projects
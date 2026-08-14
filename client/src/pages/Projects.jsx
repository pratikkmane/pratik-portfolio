import { motion } from 'framer-motion'

const projects = [
  {
  title: 'Ames Housing Price Prediction',
  date: 'Jan 2026 - May 2026',
  description:
    'Developed a machine-learning workflow to analyze residential-property features and predict home sale prices using the Ames Housing dataset. Applied data preparation, exploratory analysis, feature engineering, and regression-model evaluation.',
  tags: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Data Analysis', 'Machine Learning'],
  github: 'https://github.com/pratikkmane/ames-housing-project',
  },
  {
    title: 'Student Performance Analysis',
    date: 'Jan 2026 - May 2026',
    description:
      'Built a data-analysis and machine-learning project to examine student-related factors and model academic performance, using preprocessing, exploratory analysis, and predictive modeling to identify meaningful performance patterns.',
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
      'Built an AI-driven image captioning system leveraging Convolutional Neural Networks (CNN) for feature extraction and BLIP (Bootstrapping Language-Image Pretraining) for natural language caption generation.',
    tags: ['Python', 'CNN', 'BLIP', 'Deep Learning', 'NLP'],
    github: 'https://github.com/pratikkmane/ImageCaptioning-CNN-BLIP',
  },
  {
  title: 'Computer Vision: Edge, Corner, and Shape Detection',
  date: 'July 2024 - Aug 2024',
  description:
    'Built a computer-vision project that implements gradient-based edge detection, Harris corner detection, and Hough Transform techniques to identify boundaries, lines, and circles in images using custom image-processing algorithms.',
  tags: ['Python', 'NumPy', 'Matplotlib', 'scikit-image', 'SciPy', 'Computer Vision'],
  github: 'https://github.com/pratikkmane/computer-vision-edge-detection-hough-transform',
  },
  {
    title: 'IRCTC Rail Connect App Redesign',
    date: 'Feb 2024 - May 2024',
    description:
      'Redesigned the IRCTC Rail Connect experience to simplify train-ticket booking, reduce interface clutter, and improve accessibility. Created streamlined flows for train search, PNR updates, train status, sign-up, Google login, and WhatsApp notifications.',
    tags: ['Figma', 'UX Research', 'UI Design', 'Prototyping', 'User Experience', 'Mobile Design'],
    github: 'https://github.com/pratikkmane/IRCTC-App-Redesign',
  },
  
]

function Projects() {
  return (
    <main id="projects" className="max-w-4xl mx-auto px-6 pt-2 pb-48 scroll-mt-20" text-center>

      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="w-12 h-1 bg-blue-600 mb-10"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />

      {/* Project Cards */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-8 border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Date */}
            <p className="text-xs text-blue-600 font-medium tracking-widest uppercase mb-2">
              {project.date}
            </p>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>

    </main>
  )
}

export default Projects
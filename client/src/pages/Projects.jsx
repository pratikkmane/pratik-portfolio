import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI-Based Image Captioning using CNN and BLIP',
    date: 'Sept 2024 – Dec 2024',
    description:
      'Built an AI-driven image captioning system leveraging Convolutional Neural Networks (CNN) for feature extraction and BLIP (Bootstrapping Language-Image Pretraining) for natural language caption generation.',
    tags: ['Python', 'CNN', 'BLIP', 'Deep Learning', 'NLP'],
    github: '#',
  },
  {
    title: 'Image Processing Toolkit for Edge Detection and Enhancement',
    date: 'Jan 2025 – May 2025',
    description:
      'Developed a Python-based image processing toolkit utilizing OpenCV for advanced edge detection, noise reduction, and image enhancement. Implemented Sobel, Canny, and Gaussian Blurring algorithms to improve visual clarity in medical image datasets.',
    tags: ['Python', 'OpenCV', 'Image Processing', 'Medical Imaging'],
    github: '#',
  },
  {
    title: 'Therapeutic VR Simulation — XR4RAP LLC',
    date: 'June 2025 – Aug 2025',
    description:
      'Engineered a therapeutic VR simulation on Meta Quest with AI-powered narration, ambient music, and dynamic scene timing. Integrated AI API services into Unity using C# scripting with XR Toolkit for locomotion and interaction.',
    tags: ['Unity', 'C#', 'Meta Quest', 'VR', 'AI Integration', 'XR'],
    github: '#',
  },
]

function Projects() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">

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
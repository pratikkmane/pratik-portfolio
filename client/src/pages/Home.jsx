import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      {/* Greeting Tag */}
      <motion.p
        className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I'm
      </motion.p>

      {/* Your Name */}
      <motion.h1
        className="text-6xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Pratik Mane
      </motion.h1>

      {/* Your Title */}
      <motion.h2
        className="text-2xl font-medium text-gray-500 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        MS Applied Data Science · Indiana University Indianapolis
      </motion.h2>

      {/* Short Bio */}
      <motion.p
        className="max-w-xl text-gray-400 text-base leading-relaxed mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        I turn messy data into clear decisions. Passionate about machine learning, 
        data visualization, and building intelligent systems that make an impact.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link
          to="/projects"
          className="px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200"
        >
          View My Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border border-gray-200 text-gray-700 text-sm font-semibold rounded-full hover:border-gray-400 transition-colors duration-200"
        >
          Get In Touch
        </Link>
      </motion.div>

    </main>
  )
}

export default Home
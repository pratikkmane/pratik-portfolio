import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      {/* Profile Photo with Ring Animation */}
      <motion.div
      className="mb-8 relative flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      >
      {/* Animated Ring
      <div className="absolute w-44 h-44 rounded-full border-2 border-blue-400 opacity-40 animate-ping" />
      <div className="absolute w-40 h-40 rounded-full border-2 border-blue-300 opacity-30 animate-pulse" /> */}

      {/* Photo */}
      <img
      src="/src/assets/profile.jpeg"
      alt="Pratik Mane"
      className="w-56 h-56 rounded-full object-cover object-top border-4 border-white shadow-xl relative z-10"
      />
      </motion.div>

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
        className="flex gap-4 mb-10"
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

      {/* Social Icons */}
      <motion.div
        className="flex gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a
          href="https://github.com/pratikkmane"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/pratikmane316"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:pratikkmanee@gmail.com"
          className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
          aria-label="Email"
        >
          <HiOutlineMail size={24} />
        </a>
      </motion.div>

    </main>
  )
}

export default Home
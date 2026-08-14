import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaMicrophone } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

function Home() {
  const openAssistant = () => {
    window.dispatchEvent(new Event('open-voice-assistant'))
  }

  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-20 flex-col items-center justify-center px-6 pt-2 text-center"
    >
      <motion.div
        className="relative mb-8 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/profile.jpeg"
          alt="Pratik Mane"
          className="relative z-10 h-56 w-56 rounded-full border-4 border-white object-cover object-top shadow-xl"
        />
      </motion.div>

      <motion.p
        className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I&apos;m
      </motion.p>

      <motion.h1
        className="mb-4 text-5xl font-bold text-gray-900 md:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Pratik Mane
      </motion.h1>

      <motion.h2
        className="mb-6 text-xl font-medium text-gray-500 md:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        MS Applied Data Science · Indiana University Indianapolis
      </motion.h2>

      <motion.p
        className="mb-10 max-w-xl text-base leading-relaxed text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        I turn messy data into clear decisions. Passionate about machine learning,
        data visualization, and building intelligent systems that make an impact.
      </motion.p>

      <motion.div
        className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <button
          type="button"
          onClick={openAssistant}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
        >
          <FaMicrophone size={15} />
          Talk with my AI assistant
        </button>

        <a
          href="#contact"
          className="rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:border-gray-400"
        >
          Get In Touch
        </a>
      </motion.div>

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
          className="text-gray-400 transition-colors duration-200 hover:text-gray-900"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://linkedin.com/in/pratikmane316"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 transition-colors duration-200 hover:text-blue-600"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="mailto:pratikkmanee@gmail.com"
          className="text-gray-400 transition-colors duration-200 hover:text-blue-600"
          aria-label="Email"
        >
          <HiOutlineMail size={24} />
        </a>
      </motion.div>
    </section>
  )
}

export default Home
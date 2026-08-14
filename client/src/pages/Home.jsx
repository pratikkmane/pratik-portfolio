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
      className="flex min-h-[calc(100svh-73px)] scroll-mt-20 flex-col items-center justify-center px-5 py-16 text-center sm:px-6 md:py-20"
    >
      <motion.div
        className="relative mb-7 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/profile.jpeg"
          alt="Pratik Mane"
          className="relative z-10 h-36 w-36 rounded-full border-4 border-[#fbfaf7] object-cover object-top shadow-[0_10px_30px_rgba(37,44,52,0.14)] sm:h-44 sm:w-44"
        />
      </motion.div>

      <motion.p
        className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#1769aa] sm:text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I&apos;m
      </motion.p>

      <motion.h1
        className="mb-4 text-4xl font-bold tracking-tight text-[#1f2937] sm:text-5xl md:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Pratik Mane
      </motion.h1>

      <motion.h2
        className="mb-6 max-w-3xl text-lg font-medium text-[#5f6670] sm:text-xl md:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        MS Applied Data Science · Indiana University Indianapolis
      </motion.h2>

      <motion.p
        className="mb-9 max-w-xl text-base leading-relaxed text-[#6d737b]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        I turn messy data into clear decisions. Passionate about machine learning,
        data visualization, and building intelligent systems that make an impact.
      </motion.p>

      <motion.div
        className="mb-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <button
          type="button"
          onClick={openAssistant}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1769aa] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0f5288]"
        >
          <FaMicrophone size={15} />
          Talk with my AI assistant
        </button>

        <a
          href="#contact"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#dedbd3] bg-[#fbfaf7] px-6 py-3 text-sm font-semibold text-[#364152] transition-colors hover:bg-[#eeece6]"
        >
          Get In Touch
        </a>
      </motion.div>

      <motion.div
        className="flex items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a
          href="https://github.com/pratikkmane"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md p-2 text-[#7b828b] transition-colors hover:text-[#1f2937]"
          aria-label="GitHub"
        >
          <FaGithub size={23} />
        </a>

        <a
          href="https://linkedin.com/in/pratikmane316"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md p-2 text-[#7b828b] transition-colors hover:text-[#1769aa]"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={23} />
        </a>

        <a
          href="mailto:pratikkmanee@gmail.com"
          className="rounded-md p-2 text-[#7b828b] transition-colors hover:text-[#1769aa]"
          aria-label="Email"
        >
          <HiOutlineMail size={23} />
        </a>
      </motion.div>
    </section>
  )
}

export default Home
import { motion } from 'framer-motion'

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

function Home() {
  return (
    <section
      id="home"
      className="flex min-h-[78svh] flex-col items-center justify-center px-5 pb-16 pt-32 text-center sm:px-8"
    >
      <motion.p
        {...fade(0)}
        className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-[#555] sm:text-sm"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-black" />
        Open to new opportunities
      </motion.p>

      <motion.h1
        {...fade(0.1)}
        className="text-[clamp(3.25rem,13vw,10rem)] font-black uppercase leading-[0.88] tracking-[-0.03em]"
      >
        Software
        <br />
        Engineer
      </motion.h1>

      <motion.p
        {...fade(0.25)}
        className="mt-8 max-w-xl text-base leading-relaxed text-[#555] sm:text-lg"
      >
        Full-stack software engineer with a data science edge. I build things
        that work, then use data to make them work better.
      </motion.p>

      <motion.div {...fade(0.35)} className="mt-9 flex flex-wrap justify-center gap-3">
        <a
          href="/Resume.pdf"
          download
          className="rounded-full bg-black px-6 py-3 font-mono text-xs uppercase tracking-wide text-white transition-opacity hover:opacity-70"
        >
          Download Resume ↓
        </a>
        <a
          href="#contact"
          className="rounded-full bg-[#f3f3f3] px-6 py-3 font-mono text-xs uppercase tracking-wide transition-colors hover:bg-[#e6e6e6]"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  )
}

export default Home

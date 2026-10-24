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
      className="flex min-h-[82svh] flex-col items-center justify-center px-5 pb-16 pt-32 text-center sm:px-8 md:pt-28"
    >
      <motion.img
        {...fade(0)}
        src="/hero.jpg"
        alt="Pratik Mane"
        width="900"
        height="1350"
        className="mb-8 h-[17.5rem] w-56 rounded-[2rem] border border-line-strong object-cover object-[50%_15%] sm:h-[20rem] sm:w-64 md:h-[23rem] md:w-72"
      />

      <motion.p
        {...fade(0.05)}
        className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-subtle sm:text-sm"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-fg" />
        Open to new opportunities
      </motion.p>

      <motion.h1
        {...fade(0.1)}
        className="text-[clamp(2.75rem,11.5vw,9.5rem)] font-black uppercase leading-[0.9] tracking-[-0.03em]"
      >
        Pratik Mane
      </motion.h1>

      <motion.h2
        {...fade(0.2)}
        className="mt-6 max-w-3xl font-mono text-xs uppercase leading-relaxed tracking-wide sm:text-sm md:text-base"
      >
        Software Engineer · MS Data Science, IU Indianapolis
      </motion.h2>

      <motion.p
        {...fade(0.3)}
        className="mt-6 max-w-xl text-base leading-relaxed text-subtle sm:text-lg"
      >
        Full-stack software engineer with a data science edge. I build things
        that work, then use data to make them work better.
      </motion.p>

      <motion.div {...fade(0.4)} className="mt-9 flex flex-wrap justify-center gap-3">
        <a
          href="/Resume.pdf"
          download="Pratik_Mane_Resume.pdf"
          className="rounded-full bg-fg px-6 py-3 font-mono text-xs uppercase tracking-wide text-bg transition-opacity hover:opacity-70"
        >
          Download Resume ↓
        </a>
        <a
          href="#contact"
          className="rounded-full bg-pill px-6 py-3 font-mono text-xs uppercase tracking-wide transition-colors hover:bg-line"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  )
}

export default Home

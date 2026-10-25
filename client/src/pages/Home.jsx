import { motion } from 'framer-motion'
import HeroSignals from '../components/HeroSignals'

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

function Home() {
  return (
    <section
      id="home"
      className="grid min-h-[88svh] items-center gap-10 px-5 pb-16 pt-32 sm:px-8 md:pt-28 lg:grid-cols-12 lg:gap-8 2xl:grid-cols-[auto_minmax(0,1fr)_auto] 2xl:gap-12"
    >
      <motion.figure
        {...fade(0)}
        className="relative order-first mx-auto aspect-[4/5] w-[min(100%,calc(52svh*0.8),21rem)] lg:order-3 lg:col-span-5 lg:mx-0 lg:w-[min(100%,calc(70svh*0.8),34rem)] lg:justify-self-end 2xl:col-span-1 2xl:w-[min(calc(70svh*0.8),34rem,28vw)]"
      >
        <img
          src="/hero.jpg"
          alt="Pratik Mane"
          width="900"
          height="1350"
          className="h-full w-full rounded-[2rem] border border-line object-cover object-[50%_18%]"
        />
        <figcaption className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-full bg-black/55 px-4 py-2 font-mono text-[11px] uppercase tracking-wide text-white backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Open to new opportunities
        </figcaption>
      </motion.figure>

      <div className="text-center lg:order-1 lg:col-span-7 lg:text-left 2xl:col-span-1">
        <motion.h1
          {...fade(0.1)}
          className="text-[clamp(2.75rem,12vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] lg:text-[clamp(5rem,12vw,14rem)] 2xl:text-[clamp(8rem,10.5vw,14rem)]"
        >
          Pratik
          <br className="hidden lg:block" /> Mane
        </motion.h1>

        <motion.h2
          {...fade(0.2)}
          className="mt-6 max-w-3xl font-mono text-xs uppercase leading-relaxed tracking-wide sm:text-sm md:text-base lg:mt-8"
        >
          Software Engineer · MS Data Science, IU Indianapolis
        </motion.h2>

        <motion.p
          {...fade(0.3)}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-subtle sm:text-lg lg:mx-0"
        >
          Full-stack software engineer with a data science edge. I build things
          that work, then use data to make them work better.
        </motion.p>

        <motion.div
          {...fade(0.4)}
          className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start"
        >
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
      </div>

      <HeroSignals />
    </section>
  )
}

export default Home

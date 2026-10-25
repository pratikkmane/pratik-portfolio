import { useEffect, useState } from 'react'
import { animate, motion, useReducedMotion } from 'framer-motion'

// Everything shown here comes from the resume and the Experience section.
const status = [
  { label: 'Now', value: 'Data Engineer · COMET Lab' },
  { label: 'Studying', value: 'MS Data Science · Indiana University' },
  { label: 'Building', value: 'Neural option pricing', href: '#projects' },
]

const stats = [
  { to: 1000, suffix: '+', caption: 'concurrent users supported' },
  { to: 25, suffix: '%', caption: 'page load time cut' },
  { to: 92, suffix: '', caption: 'Indiana counties analyzed' },
]

const stack = [
  'Python',
  'R',
  'SQL',
  'React',
  'Next.js',
  'Node.js',
  'FastAPI',
  'PostgreSQL',
  'Airflow',
  'dbt',
  'Docker',
  'Unity',
]

function CountUp({ to, suffix }) {
  const reduceMotion = useReducedMotion()
  const [value, setValue] = useState(reduceMotion ? to : 0)

  useEffect(() => {
    if (reduceMotion) return undefined
    const controls = animate(0, to, {
      duration: 1.8,
      delay: 0.7,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(Math.round(latest)),
    })
    return () => controls.stop()
  }, [to, reduceMotion])

  return (
    <>
      {value.toLocaleString('en-US')}
      {suffix}
    </>
  )
}

function Ticker({ hidden }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center font-mono text-xs uppercase tracking-wide"
    >
      {stack.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-5">{item}</span>
          <span aria-hidden="true" className="text-muted">✦</span>
        </li>
      ))}
    </ul>
  )
}

function HeroSignals() {
  return (
    <motion.aside
      aria-label="At a glance"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="@container relative hidden min-w-0 flex-col justify-between gap-10 py-2 2xl:order-2 2xl:flex 2xl:h-[min(70svh,42.5rem,35vw)] 2xl:self-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(var(--line-strong)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,#000_25%,transparent_75%)]"
      />

      <div>
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-wide">
          <span className="h-2 w-2 animate-pulse rounded-full bg-fg" />
          Currently
        </p>
        <ul className="border-t border-fg">
          {status.map((item) => (
            <li
              key={item.label}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-4"
            >
              <span className="font-mono text-[11px] uppercase tracking-wide text-muted">
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm font-medium underline-offset-4 transition-opacity hover:underline hover:opacity-70"
                >
                  {item.value} ↗
                </a>
              ) : (
                <span className="text-sm font-medium">{item.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <dl className="space-y-6">
        {stats.map((stat) => (
          <div key={stat.caption} className="flex items-baseline gap-5">
            <dt className="order-2 font-mono text-[11px] uppercase leading-snug tracking-wide text-muted">
              {stat.caption}
            </dt>
            <dd className="order-1 min-w-[5.5ch] text-[clamp(2.75rem,4vw,4.5rem)] font-black leading-none tracking-[-0.04em] tabular-nums">
              <CountUp to={stat.to} suffix={stat.suffix} />
            </dd>
          </div>
        ))}
      </dl>

      <div
        className="overflow-hidden border-y border-line py-4 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
      >
        <div className="marquee-track">
          <Ticker />
          <Ticker hidden />
        </div>
      </div>
    </motion.aside>
  )
}

export default HeroSignals

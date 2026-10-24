import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

function Star({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    const onKey = (event) => event.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-white/85 px-5 py-5 backdrop-blur sm:px-8">
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 font-mono text-sm uppercase tracking-wide"
          aria-label="Go to top"
        >
          <Star className="h-8 w-8" />
          Pratik
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="site-menu"
          className="font-mono text-sm uppercase tracking-wide transition-opacity hover:opacity-60"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="site-menu"
            className="fixed inset-0 z-40 flex flex-col justify-center bg-white px-5 sm:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul>
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 * index }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-5xl font-extrabold uppercase leading-[1.05] tracking-tighter transition-opacity hover:opacity-40 sm:text-7xl md:text-8xl"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Projects', id: 'projects' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
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

function NavLinks({ activeId, className, linkClassName }) {
  return (
    <ul className={className}>
      {navLinks.map((link) => (
        <li key={link.id} className="shrink-0">
          <a
            href={`#${link.id}`}
            aria-current={activeId === link.id ? 'true' : undefined}
            className={`${linkClassName} ${
              activeId === link.id ? 'text-fg' : 'text-muted hover:text-fg'
            }`}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

function Navbar() {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const sections = ['home', ...navLinks.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id === 'home' ? '' : visible.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0.01 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg/85 backdrop-blur">
      <div className="flex items-center justify-between px-5 py-4 sm:px-8 md:py-5">
        <a
          href="#home"
          onClick={() => setActiveId('')}
          className="flex items-center gap-3 font-mono text-sm uppercase tracking-wide"
          aria-label="Go to top"
        >
          <Star className="h-8 w-8" />
          Pratik
        </a>

        <div className="flex items-center gap-6 lg:gap-10">
          <NavLinks
            activeId={activeId}
            className="hidden items-center gap-6 md:flex lg:gap-9"
            linkClassName="font-mono text-sm uppercase tracking-wide transition-colors"
          />
          <ThemeToggle />
        </div>
      </div>

      {/* Phones: the same links in a swipeable row so no menu tap is needed */}
      <nav aria-label="Sections" className="md:hidden">
        <NavLinks
          activeId={activeId}
          className="no-scrollbar flex gap-6 overflow-x-auto px-5 pb-3 sm:px-8"
          linkClassName="block font-mono text-xs uppercase tracking-wide transition-colors"
        />
      </nav>
    </header>
  )
}

export default Navbar

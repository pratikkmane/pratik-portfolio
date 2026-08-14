import { useEffect, useState } from 'react'

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -55% 0px',
        threshold: 0.01,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white px-6 py-5 md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-gray-900"
          aria-label="Go to home section"
        >
          Pratik<span className="text-blue-600">.</span>
        </a>

        <ul className="flex items-center gap-4 overflow-x-auto text-sm md:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id

            return (
              <li key={link.name} className="shrink-0">
                <a
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
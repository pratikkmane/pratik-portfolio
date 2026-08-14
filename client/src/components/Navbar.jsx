import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#dedbd3] bg-[#f4f3ef]/95 px-5 py-4 backdrop-blur md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-[#1f2937]"
          aria-label="Go to home section"
          onClick={handleNavClick}
        >
          Pratik<span className="text-[#1769aa]">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id

            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-md px-1 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#1769aa]'
                      : 'text-[#5f6670] hover:text-[#1f2937]'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#dedbd3] text-[#1f2937] transition-colors hover:bg-[#eeece6] md:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <HiX size={23} /> : <HiMenu size={23} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mx-auto mt-4 max-w-6xl border-t border-[#dedbd3] pt-3 md:hidden">
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id

              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex min-h-11 items-center rounded-lg px-4 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#dce9f3] text-[#1769aa]'
                        : 'bg-[#fbfaf7] text-[#5f6670] hover:bg-[#eeece6] hover:text-[#1f2937]'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
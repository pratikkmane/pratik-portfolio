const links = [
  { label: 'GitHub', href: 'https://github.com/pratikkmane' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/pratikmane316' },
  { label: 'Email', href: 'mailto:pratikkmanee@gmail.com' },
]

function Footer() {
  return (
    <footer className="flex flex-col gap-6 px-5 pb-8 pt-16 font-mono text-xs uppercase tracking-wide sm:px-8 md:flex-row md:items-end md:justify-between">
      <div className="space-y-2 text-[#6b6b6b]">
        <p>
          Portfolio of <span className="text-black">Pratik Mane</span>
        </p>
        <p>
          © 2026 · Built with <span className="text-black">React</span>
        </p>
      </div>

      <ul className="flex flex-wrap gap-x-7 gap-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-50"
            >
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>

      <a href="#home" className="transition-opacity hover:opacity-50">
        Back to top
      </a>
    </footer>
  )
}

export default Footer

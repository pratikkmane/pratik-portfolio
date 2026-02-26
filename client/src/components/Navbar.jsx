import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const location = useLocation()

  return (
    <nav className="w-full px-10 py-5 flex justify-between items-center border-b border-gray-100 bg-white sticky top-0 z-50">
      
      {/* Your Name / Logo */}
      <Link to="/" className="text-xl font-bold tracking-tight text-gray-900">
        Pratik<span className="text-blue-600">.</span>
      </Link>

      {/* Nav Links */}
      <ul className="flex gap-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

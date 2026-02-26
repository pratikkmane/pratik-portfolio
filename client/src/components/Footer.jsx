import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

function Footer() {
  return (
    <footer className="w-full py-8 border-t border-gray-100">
      <div className="flex flex-col items-center gap-4">

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/pratikkmane"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/pratikmane316"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:pratikkmanee@gmail.com"
            className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
            aria-label="Email"
          >
            <HiOutlineMail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © 2026 Pratik Mane · Built with React & ❤️
        </p>

      </div>
    </footer>
  )
}

export default Footer

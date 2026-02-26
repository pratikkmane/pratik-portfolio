import { motion } from 'framer-motion'

function Contact() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24">

      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="w-12 h-1 bg-blue-600 mb-6"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />

      <motion.p
        className="text-gray-500 mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I'm currently open to new opportunities, collaborations, and interesting 
        conversations. Whether you have a question or just want to say hi — my 
        inbox is always open.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        className="space-y-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows={5}
            placeholder="What's on your mind?"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
        >
          Send Message
        </button>
      </motion.form>

      {/* Direct Links */}
      <motion.div
        className="mt-12 pt-8 border-t border-gray-100 flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a
          href="mailto:pratikkmanee@gmail.com"
          className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
        >
          pratikkmanee@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/pratikmane316"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
        >
          LinkedIn →
        </a>
      </motion.div>

    </main>
  )
}

export default Contact
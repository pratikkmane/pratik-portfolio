import { motion } from 'framer-motion'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClassName =
    'w-full rounded-xl border border-[#dedbd3] bg-[#fbfaf7] px-4 py-3 text-sm text-[#1f2937] outline-none transition-colors placeholder:text-[#8d9298] focus:border-[#1769aa] focus:ring-2 focus:ring-[#dce9f3]'

  return (
    <main
      id="contact"
      className="mx-auto max-w-3xl scroll-mt-20 px-5 pt-10 pb-40 sm:px-6 md:pt-12 md:pb-48"
    >
      <motion.h2
        className="mb-4 text-3xl font-bold tracking-tight text-[#1f2937] sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="mb-6 h-1 w-12 bg-[#1769aa]"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />

      <motion.p
        className="mb-9 max-w-2xl leading-relaxed text-[#5f6670]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I&apos;m currently open to new opportunities, collaborations, and interesting
        conversations. Whether you have a question or just want to say hi, my inbox
        is always open.
      </motion.p>

      {status === 'success' && (
        <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          Message sent! I&apos;ll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Something went wrong. Please try again or email me directly.
        </div>
      )}

      <motion.form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-[#dedbd3] bg-[#fbfaf7] p-5 shadow-[0_10px_30px_rgba(37,44,52,0.07)] sm:p-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#364152]">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#364152]">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#364152]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="What's on your mind?"
              required
              className={`${inputClassName} resize-y`}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex min-h-12 w-full items-center justify-center rounded-xl bg-[#1769aa] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f5288] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </motion.form>

      <motion.div
        className="mt-8 flex flex-col gap-3 border-t border-[#dedbd3] pt-7 text-sm sm:flex-row sm:gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a
          href="mailto:pratikkmanee@gmail.com"
          className="min-h-11 text-[#5f6670] transition-colors hover:text-[#1769aa]"
        >
          pratikkmanee@gmail.com
        </a>

        <a
          href="https://linkedin.com/in/pratikmane316"
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-11 text-[#5f6670] transition-colors hover:text-[#1769aa]"
        >
          LinkedIn →
        </a>
      </motion.div>
    </main>
  )
}

export default Contact
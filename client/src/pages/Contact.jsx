import Reveal from '../components/Reveal'
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
    'w-full border-0 border-b border-line-strong bg-transparent px-0 py-3 text-lg text-fg outline-none transition-colors placeholder:text-muted focus:border-fg'
  const labelClassName =
    'mb-1 block font-mono text-xs uppercase tracking-wide text-muted'

  return (
    <section id="contact" className="px-5 pb-10 pt-20 sm:px-8 md:pt-32">
      <Reveal className="mb-10 font-mono text-xs uppercase tracking-wide">
        <h2>Contact</h2>
      </Reveal>

      <div className="grid gap-14 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <Reveal>
          <p className="text-[clamp(2.5rem,7vw,6rem)] font-black uppercase leading-[0.92] tracking-[-0.03em]">
            Let&apos;s work
            <br />
            together
          </p>
          <p className="mt-8 max-w-md leading-relaxed text-subtle">
            I&apos;m currently open to new opportunities, collaborations, and
            interesting conversations. Whether you have a question or just want
            to say hi, my inbox is always open.
          </p>
          <div className="mt-8 flex flex-col gap-3 font-mono text-xs uppercase tracking-wide">
            <a href="mailto:pratikkmanee@gmail.com" className="transition-opacity hover:opacity-50">
              pratikkmanee@gmail.com ↗
            </a>
            <a
              href="https://linkedin.com/in/pratikmane316"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-50"
            >
              LinkedIn ↗
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {status === 'success' && (
            <div role="status" className="mb-6 rounded-2xl bg-pill p-4 text-sm">
              Message sent! I&apos;ll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div role="alert" className="mb-6 rounded-2xl bg-red-500/10 p-4 text-sm text-red-500">
              Something went wrong. Please try again or email me directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label htmlFor="name" className={labelClassName}>Name</label>
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
              <label htmlFor="email" className={labelClassName}>Email</label>
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
              <label htmlFor="message" className={labelClassName}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="What's on your mind?"
                required
                className={`${inputClassName} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full rounded-full bg-fg px-6 py-4 font-mono text-xs uppercase tracking-wide text-bg transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact

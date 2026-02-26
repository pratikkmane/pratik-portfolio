import express from 'express'
import Contact from '../models/Contact.js'

const router = express.Router()

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  try {
    const newContact = new Contact({ name, email, message })
    await newContact.save()
    res.status(201).json({ success: true, message: 'Message received!' })
  } catch (err) {
    res.status(500).json({ error: 'Server error. Please try again.' })
  }
})

export default router

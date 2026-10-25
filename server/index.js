import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import rateLimit from 'express-rate-limit'
import contactRoute from './routes/contact.js'
import { createVisitRouter } from './routes/visit.js'
import Visitor from './models/Visitor.js'
import { createNotifier } from './lib/notify.js'

const app = express()
const PORT = process.env.PORT || 5000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const clientDistPath = path.join(__dirname, '../client/dist')

// Render sits behind a proxy; this makes rate limiting use the real client address.
app.set('trust proxy', 1)

app.use(cors())
app.use(express.json({ limit: '10kb' }))

app.use('/api/contact', contactRoute)

app.use(
  '/api/visit',
  rateLimit({ windowMs: 60 * 1000, limit: 30, standardHeaders: true, legacyHeaders: false }),
  createVisitRouter({
    Visitor,
    notify: createNotifier({ topic: process.env.NTFY_TOPIC }),
    statsKey: process.env.STATS_KEY,
  })
)

app.use(express.static(clientDistPath))

app.get('/{*splat}', (req, res) => {
  if (req.originalUrl.startsWith('/api')) return res.status(404).send('API route not found')
  res.sendFile(path.join(clientDistPath, 'index.html'))
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected ✅')
    app.listen(PORT, () => console.log(`Server running on port ${PORT} ✅`))
  })
  .catch((err) => console.log('MongoDB connection error:', err))
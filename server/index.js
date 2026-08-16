import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 5000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const clientDistPath = path.join(__dirname, '../client/dist')

app.use(cors())
app.use(express.json())

app.use('/api/contact', contactRoute)

app.use(express.static(clientDistPath))

app.get('*', (req, res) => {
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
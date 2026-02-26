import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import contactRoute from './routes/contact.js'

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/contact', contactRoute)

// Test Route
app.get('/', (req, res) => {
  res.send('Backend is running ✅')
})

// Connect to MongoDB then start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected ✅')
    app.listen(PORT, () => console.log(`Server running on port ${PORT} ✅`))
  })
  .catch((err) => console.log('MongoDB connection error:', err))
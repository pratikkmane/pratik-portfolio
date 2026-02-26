import express from 'express'
import fetch from 'node-fetch'

const router = express.Router()

// POST /api/hume/token
router.get('/token', async (req, res) => {
  try {
    const response = await fetch('https://api.hume.ai/oauth2-cc/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.HUME_API_KEY,
        client_secret: process.env.HUME_SECRET_KEY,
      }),
    })

    const data = await response.json()
    res.json({ accessToken: data.access_token })
  } catch (err) {
    res.status(500).json({ error: 'Failed to get Hume token' })
  }
})

export default router
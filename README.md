# Pratik Mane — Portfolio

A full-stack personal portfolio website built with the MERN stack, featuring an AI-powered voice assistant using Hume AI's Empathic Voice Interface (EVI).

🌐 **Live Site:** [Coming Soon]
📁 **GitHub:** [github.com/YOUR-USERNAME/pratik-portfolio](https://github.com/YOUR-USERNAME/pratik-portfolio)

---

## Features

- Animated, responsive UI built with React + Vite + Tailwind CSS
- 6-page portfolio: Home, About, Experience, Projects, Skills, Contact
- Working contact form connected to MongoDB Atlas
- AI voice assistant (Hume EVI) — visitors can talk to an AI that knows Pratik's background
- Framer Motion animations throughout
- Social links: GitHub, LinkedIn, Email

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS, Framer Motion |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (Mongoose) |
| AI | Hume AI EVI (Empathic Voice Interface) |
| Icons | React Icons |
| Deployment | Vercel (frontend), Render (backend) |
| Version Control | Git + GitHub |

---

## Project Structure

pratik-portfolio/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # Navbar, Footer, VoiceAssistant, ScrollToTop
│ │ ├── pages/ # Home, About, Experience, Projects, Skills, Contact
│ │ └── App.jsx
│ └── vite.config.js
├── server/ # Node/Express backend
│ ├── models/ # MongoDB schemas
│ ├── routes/ # API routes (contact, hume)
│ └── index.js
└── README.md

---

## Getting Started Locally

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Hume AI account

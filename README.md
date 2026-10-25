# Pratik Mane — Portfolio

A single-page personal portfolio with a dark/light theme, illustrated project cards, and a small Express + MongoDB backend for the contact form and a private visitor counter.

**GitHub:** [github.com/pratikkmane/pratik-portfolio](https://github.com/pratikkmane/pratik-portfolio)

---

## Features

- One-page layout: Home, Projects, About, Experience, Skills, Contact, with a header that smooth-scrolls to each section and highlights the current one
- Dark mode by default, with a light/dark switch that remembers the choice
- Project cards with hand-built SVG illustrations that open a detail dialog (description, highlights, tags, GitHub and live-site links)
- Downloadable resume (`client/public/Resume.pdf`)
- Contact form that stores messages in MongoDB
- Private visitor counter with push notifications (see below). Nothing about it is shown on the site
- Responsive from phones to ultra-wide screens; Framer Motion animations that respect reduced-motion settings

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite 7, Tailwind CSS 4, Framer Motion |
| Backend | Node.js, Express 5 |
| Database | MongoDB Atlas (Mongoose) |
| Notifications | [ntfy](https://ntfy.sh) (optional) |
| Icons | React Icons |
| Deployment | Vercel (frontend), Render (backend) |

---

## Project Structure

```
pratik-portfolio/
├── client/                  # React frontend
│   ├── public/              # Resume.pdf, photos, university logos
│   ├── src/
│   │   ├── components/      # Navbar, ThemeToggle, HeroSignals, ProjectArt, Reveal, Footer
│   │   ├── lib/             # trackVisit.js (anonymous visitor counting)
│   │   ├── pages/           # Home, Projects, About, Experience, Skills, Contact
│   │   └── App.jsx
│   └── vercel.json
├── server/                  # Express backend
│   ├── lib/                 # notify.js (ntfy push notifications)
│   ├── models/              # Contact, Visitor
│   ├── routes/              # contact.js, visit.js
│   ├── test/                # node:test suite for the visitor counter
│   └── index.js
└── README.md
```

---

## Getting Started Locally

### Prerequisites
- Node.js 20.19 or newer
- A MongoDB database (MongoDB Atlas free tier works)

### 1. Backend

```bash
cd server
npm install
cp .env.example .env     # then fill in MONGO_URI (and optionally NTFY_TOPIC / STATS_KEY)
npm run dev              # http://localhost:5000
```

### 2. Frontend

```bash
cd client
npm install
cp .env.example .env     # VITE_API_URL=http://localhost:5000
npm run dev              # http://localhost:5173
```

Useful commands: `npm run lint` and `npm run build` in `client/`, `npm test` in `server/`.

---

## Environment Variables

| Where | Variable | Purpose |
|---|---|---|
| `server` | `MONGO_URI` | MongoDB connection string (required) |
| `server` | `NTFY_TOPIC` | Secret ntfy topic for new-visitor push notifications (optional) |
| `server` | `STATS_KEY` | Secret key for the private stats page (optional; the page is disabled without it) |
| `client` | `VITE_API_URL` | Base URL of the backend. Used by the contact form and the visitor counter |

Never commit real values: `.env` files are git-ignored, and only the `.env.example` templates are tracked.

---

## Private Visitor Counter

Tracks how many different people open the portfolio, so you can tell whether a job application link was actually clicked. It is never displayed on the site.

**How it works**
- On a browser's first visit, the site creates a random ID, stores it in `localStorage`, and sends it to `POST /api/visit` once. After that the browser sends nothing.
- The server keeps one document per ID behind a unique index and uses an atomic upsert, so the same browser can never be counted or notified about twice, even with simultaneous requests.
- Only a random ID, the `?ref=` label, the referring site's hostname and a device type are stored. IP addresses are not stored.
- Crawlers and link-preview bots (LinkedIn, Slack and similar) are ignored. Requests are rate limited.
- Counting only runs in production builds, so local development never counts.

**What counts as "unique"**
One count per *browser*. Opening the site twice on a laptop and twice on a phone gives 2, and doing it all again still gives 2. Clearing site data, using a private window or another browser on the same device counts as a new visitor, and the same person on two devices counts twice. No website can tell people apart beyond that.

**Set up notifications**
1. Install the [ntfy](https://ntfy.sh) app on your phone.
2. Pick an unguessable topic, for example the output of `node -e "console.log('portfolio-' + require('crypto').randomBytes(10).toString('hex'))"`, and subscribe to it in the app.
3. Set `NTFY_TOPIC` to that topic in the server's environment (on Render: Environment tab), then redeploy.

Each new visitor then sends a push such as **"New portfolio visitor #7"**, including the running total, the `?ref=` label, where they came from and their device type.

**Tag each application link.** Add `?ref=` to the link you put in each application, for example `https://your-site.com/?ref=acme-corp`. The notification and the stats page then show which application was opened.

**See the count any time.** Set `STATS_KEY`, then open `https://<your-api>/api/visit/stats?key=<STATS_KEY>` in a browser for a page with the total, the last 24 hours and 7 days, a breakdown by `ref`, and the most recent visitors. Send the key as an `x-stats-key` header with `Accept: application/json` for raw JSON. Without the right key the route answers 404.

**Exclude your own devices.** Open the site once with `?notrack` (for example `https://your-site.com/?notrack`) on each of your own browsers. Open `?notrack=0` to turn tracking back on.

> If you expect visitors from the EU or UK, note that storing an ID in the browser for analytics can require a consent notice there.

---

## Deployment

- **Frontend (Vercel):** set the project root to `client`, and add `VITE_API_URL` pointing at the deployed backend. `client/vercel.json` rewrites all routes to `index.html`.
- **Backend (Render):** set the root to `server`, the start command to `npm start`, and add `MONGO_URI`, and optionally `NTFY_TOPIC` and `STATS_KEY`, as environment variables.

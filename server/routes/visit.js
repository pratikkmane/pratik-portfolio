import crypto from 'crypto'
import express from 'express'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
// Link-preview fetchers, crawlers and monitors should never count as visitors.
const BOT = /bot|crawl|spider|slurp|preview|facebookexternalhit|embed|headless|lighthouse|pingdom|uptime|monitor|curl|wget|python-requests/i

const clean = (value, max = 60) =>
  typeof value === 'string'
    ? value.replace(/[^\w\-. @/:+]/g, '').trim().slice(0, max)
    : ''

const deviceFrom = (userAgent = '') =>
  /ipad|tablet/i.test(userAgent) ? 'tablet' : /mobi|iphone|android/i.test(userAgent) ? 'mobile' : 'desktop'

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

const sameKey = (a, b) => {
  const hash = (v) => crypto.createHash('sha256').update(String(v)).digest()
  return crypto.timingSafeEqual(hash(a), hash(b))
}

export function createVisitRouter({ Visitor, notify = async () => {}, statsKey }) {
  const router = express.Router()

  // POST /api/visit: records a browser the first time it is seen.
  router.post('/', async (req, res) => {
    const { visitorId, ref, referrer } = req.body ?? {}
    const userAgent = req.get('user-agent') || ''

    if (typeof visitorId !== 'string' || !UUID.test(visitorId)) return res.sendStatus(400)
    if (BOT.test(userAgent)) return res.sendStatus(204)

    try {
      // Atomic upsert: only the request that creates the document sees upsertedCount === 1,
      // so a visitor can never be counted (or notified about) twice, even with parallel requests.
      const result = await Visitor.updateOne(
        { visitorId: visitorId.toLowerCase() },
        {
          $setOnInsert: {
            ref: clean(ref),
            referrerHost: clean(referrer, 80),
            device: deviceFrom(userAgent),
          },
        },
        { upsert: true }
      )

      if (result.upsertedCount === 1) {
        const total = await Visitor.countDocuments()
        const details = [
          ref && `Link: ?ref=${clean(ref)}`,
          referrer && `Came from: ${clean(referrer, 80)}`,
          `Device: ${deviceFrom(userAgent)}`,
        ].filter(Boolean)
        // Fire and forget so a slow notification never delays the page.
        notify({
          title: `New portfolio visitor #${total}`,
          message: details.join('\n'),
          tags: ['eyes'],
        })
      }
      res.sendStatus(204)
    } catch (err) {
      // Two simultaneous first requests can race on the unique index; the loser just means "already seen".
      if (err.code === 11000) return res.sendStatus(204)
      console.log('Visit tracking error:', err.message)
      res.sendStatus(500)
    }
  })

  // GET /api/visit/stats?key=...: private summary for the site owner.
  router.get('/stats', async (req, res) => {
    if (!statsKey) return res.sendStatus(404)
    const supplied = req.get('x-stats-key') || req.query.key
    if (typeof supplied !== 'string' || !sameKey(supplied, statsKey)) return res.sendStatus(404)

    res.set({ 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' })

    const rows = await Visitor.find({}, 'ref referrerHost device createdAt').sort({ createdAt: -1 }).limit(1000).lean()
    const total = await Visitor.countDocuments()
    const now = Date.now()
    const since = (ms) => rows.filter((r) => now - new Date(r.createdAt).getTime() < ms).length
    const byRef = {}
    for (const r of rows) {
      const key = r.ref || '(no ref)'
      byRef[key] = (byRef[key] || 0) + 1
    }
    const stats = {
      uniqueVisitors: total,
      last24h: since(24 * 3600e3),
      last7d: since(7 * 24 * 3600e3),
      byRef: Object.entries(byRef).sort((a, b) => b[1] - a[1]).map(([ref, count]) => ({ ref, count })),
      recent: rows.slice(0, 25).map((r) => ({
        when: new Date(r.createdAt).toISOString(),
        ref: r.ref || '',
        cameFrom: r.referrerHost || '',
        device: r.device,
      })),
    }

    if (!req.accepts(['json', 'html']) || req.accepts(['json', 'html']) === 'json') return res.json(stats)

    const tr = (cells) => `<tr>${cells.map((c) => `<td>${escapeHtml(c)}</td>`).join('')}</tr>`
    res.type('html').send(`<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>Visitors</title>
<style>body{font:15px/1.5 system-ui,sans-serif;background:#000;color:#fff;max-width:720px;margin:2rem auto;padding:0 1rem}
td,th{padding:.4rem .8rem;border-bottom:1px solid #333;text-align:left}h1{font-size:4rem;margin:0}small{color:#999}</style>
<h1>${stats.uniqueVisitors}</h1><p>unique visitors &middot; ${stats.last24h} in the last 24h &middot; ${stats.last7d} in the last 7 days</p>
<h3>By link</h3><table>${stats.byRef.map((r) => tr([r.ref, r.count])).join('')}</table>
<h3>Recent</h3><table>${stats.recent.map((r) => tr([r.when.replace('T', ' ').slice(0, 16), r.ref, r.cameFrom, r.device])).join('')}</table>
<p><small>One count per browser. Clearing site data or using another browser counts as a new visitor.</small></p>`)
  })

  return router
}

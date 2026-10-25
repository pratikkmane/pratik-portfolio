import { test } from 'node:test'
import assert from 'node:assert/strict'
import express from 'express'
import { createVisitRouter } from '../routes/visit.js'
import { createNotifier } from '../lib/notify.js'

// In-memory stand-in for the Mongoose model, with the same upsert semantics.
function fakeVisitor() {
  const docs = new Map()
  return {
    docs,
    async updateOne(filter, update, opts) {
      if (docs.has(filter.visitorId)) return { upsertedCount: 0, matchedCount: 1 }
      assert.ok(opts.upsert)
      docs.set(filter.visitorId, { ...filter, ...update.$setOnInsert, createdAt: new Date() })
      return { upsertedCount: 1, matchedCount: 0 }
    },
    async countDocuments() {
      return docs.size
    },
    find() {
      const rows = [...docs.values()]
      const chain = { sort: () => chain, limit: () => chain, lean: async () => rows.reverse() }
      return chain
    },
  }
}

async function start(options = {}) {
  const Visitor = fakeVisitor()
  const sent = []
  const app = express()
  app.use(express.json())
  app.use('/api/visit', createVisitRouter({ Visitor, notify: async (n) => sent.push(n), statsKey: 'secret-key', ...options }))
  const server = app.listen(0)
  const base = `http://127.0.0.1:${server.address().port}/api/visit`
  const post = (body, headers = {}) =>
    fetch(base, { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body) })
  return { Visitor, sent, base, post, close: () => server.close() }
}

const A = '3b1f6c0e-8a4d-4f1a-9c53-1d2e7a9b0c11'
const B = '9d2e5a77-0b3c-4e8f-a1d4-6c7b8e9f0a22'

test('the same browser is counted and notified once, however often it visits', async (t) => {
  const s = await start()
  t.after(s.close)
  for (let i = 0; i < 4; i++) assert.equal((await s.post({ visitorId: A })).status, 204)
  assert.equal(s.Visitor.docs.size, 1)
  assert.equal(s.sent.length, 1)
  assert.equal(s.sent[0].title, 'New portfolio visitor #1')
})

test('a second device counts once more, and repeating both stays at 2', async (t) => {
  const s = await start()
  t.after(s.close)
  for (const id of [A, A, B, B, A, B]) await s.post({ visitorId: id })
  assert.equal(s.Visitor.docs.size, 2)
  assert.deepEqual(s.sent.map((n) => n.title), ['New portfolio visitor #1', 'New portfolio visitor #2'])
})

test('parallel requests from one new browser still produce a single count and notification', async (t) => {
  const s = await start()
  t.after(s.close)
  await Promise.all(Array.from({ length: 10 }, () => s.post({ visitorId: A })))
  assert.equal(s.Visitor.docs.size, 1)
  assert.equal(s.sent.length, 1)
})

test('losing the unique-index race in MongoDB (E11000) is treated as already seen, not an error', async (t) => {
  const Visitor = fakeVisitor()
  Visitor.updateOne = async () => Object.assign(new Error('E11000 duplicate key'), { code: 11000 })
  const sent = []
  const app = express()
  app.use(express.json())
  app.use('/api/visit', createVisitRouter({ Visitor, notify: async (n) => sent.push(n) }))
  const server = app.listen(0)
  t.after(() => server.close())
  const res = await fetch(`http://127.0.0.1:${server.address().port}/api/visit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ visitorId: A }),
  })
  assert.equal(res.status, 204)
  assert.equal(sent.length, 0)
})

test('the ref link and referrer appear in the notification', async (t) => {
  const s = await start()
  t.after(s.close)
  await s.post({ visitorId: A, ref: 'google', referrer: 'www.linkedin.com' }, { 'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0) Mobile' })
  assert.match(s.sent[0].message, /Link: \?ref=google/)
  assert.match(s.sent[0].message, /Came from: www\.linkedin\.com/)
  assert.match(s.sent[0].message, /Device: mobile/)
})

test('bots and malformed ids are never counted', async (t) => {
  const s = await start()
  t.after(s.close)
  assert.equal((await s.post({ visitorId: A }, { 'User-Agent': 'LinkedInBot/1.0' })).status, 204)
  assert.equal((await s.post({ visitorId: 'not-a-uuid' })).status, 400)
  assert.equal((await s.post({})).status, 400)
  assert.equal(s.Visitor.docs.size, 0)
  assert.equal(s.sent.length, 0)
})

test('untrusted ref text is sanitised before it reaches the notification', async (t) => {
  const s = await start()
  t.after(s.close)
  await s.post({ visitorId: A, ref: '<script>alert(1)</script>\nINJECT' })
  assert.doesNotMatch(s.sent[0].message, /[<>]/)
})

test('stats need the secret key and are hidden otherwise', async (t) => {
  const s = await start()
  t.after(s.close)
  await s.post({ visitorId: A, ref: 'acme' })
  await s.post({ visitorId: B })
  assert.equal((await fetch(`${s.base}/stats`)).status, 404)
  assert.equal((await fetch(`${s.base}/stats?key=wrong`)).status, 404)
  const ok = await fetch(`${s.base}/stats?key=secret-key`)
  assert.equal(ok.status, 200)
  const body = await ok.json()
  assert.equal(body.uniqueVisitors, 2)
  assert.equal(body.last24h, 2)
  assert.ok(body.byRef.some((r) => r.ref === 'acme' && r.count === 1))
  const header = await fetch(`${s.base}/stats`, { headers: { 'x-stats-key': 'secret-key' } })
  assert.equal(header.status, 200)
  const html = await fetch(`${s.base}/stats?key=secret-key`, { headers: { Accept: 'text/html' } })
  assert.match(await html.text(), /unique visitors/)
})

test('stats are disabled entirely when STATS_KEY is not configured', async (t) => {
  const s = await start({ statsKey: undefined })
  t.after(s.close)
  assert.equal((await fetch(`${s.base}/stats?key=anything`)).status, 404)
})

test('the notifier posts JSON to ntfy and never throws when ntfy is down', async () => {
  const calls = []
  const ok = createNotifier({ topic: 't-123', fetchImpl: async (url, init) => (calls.push({ url, body: JSON.parse(init.body) }), { ok: true }) })
  await ok({ title: 'Hi · there', message: 'm' })
  assert.equal(calls[0].body.topic, 't-123')
  assert.equal(calls[0].body.title, 'Hi · there')
  const down = createNotifier({ topic: 't', fetchImpl: async () => { throw new Error('network down') } })
  await assert.doesNotReject(down({ title: 'x', message: 'y' }))
  await assert.doesNotReject(createNotifier({})({ title: 'x', message: 'y' }))
})

// Counts this browser once per site, anonymously. A random id is kept in localStorage and sent
// to the API the first time only; the server also dedupes on that id, so repeat visits from the
// same browser never add to the count.
//
// Opt out on your own devices by opening the site once with ?notrack (undo with ?notrack=0).

const KEYS = { id: 'visitor-id', sent: 'visit-sent', skip: 'notrack' }

let started = false

function getStorage() {
  try {
    const probe = '__probe__'
    window.localStorage.setItem(probe, '1')
    window.localStorage.removeItem(probe)
    return window.localStorage
  } catch {
    // Blocked or private mode: without a stable id we could not avoid double counting, so skip.
    return null
  }
}

function newId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID()
  const b = window.crypto.getRandomValues(new Uint8Array(16))
  b[6] = (b[6] & 0x0f) | 0x40
  b[8] = (b[8] & 0x3f) | 0x80
  const h = [...b].map((x) => x.toString(16).padStart(2, '0')).join('')
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`
}

export function trackVisit() {
  const api = import.meta.env.VITE_API_URL
  // Only real deployments count, not local development or previews without a backend.
  if (started || !import.meta.env.PROD || !api) return
  started = true

  const store = getStorage()
  if (!store) return

  const params = new URLSearchParams(window.location.search)
  if (params.has('notrack')) {
    if (params.get('notrack') === '0') store.removeItem(KEYS.skip)
    else store.setItem(KEYS.skip, '1')
  }
  if (store.getItem(KEYS.skip) || store.getItem(KEYS.sent)) return

  let visitorId = store.getItem(KEYS.id)
  if (!visitorId) {
    visitorId = newId()
    store.setItem(KEYS.id, visitorId)
  }

  let referrer = ''
  try {
    const host = new URL(document.referrer).hostname
    if (host && host !== window.location.hostname) referrer = host
  } catch {
    // No referrer.
  }

  fetch(`${api}/api/visit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ visitorId, ref: params.get('ref') || params.get('utm_source') || '', referrer }),
    keepalive: true,
  })
    .then((res) => {
      if (res.ok) store.setItem(KEYS.sent, '1')
    })
    .catch(() => {
      // Offline or API asleep: try again on the next visit. The server dedupes by id.
    })
}

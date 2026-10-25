// Push notifications through ntfy (https://ntfy.sh). Install the ntfy app and
// subscribe to NTFY_TOPIC; treat the topic name as a secret.
export function createNotifier({ topic, baseUrl = 'https://ntfy.sh', fetchImpl = fetch } = {}) {
  if (!topic) return async () => {}

  return async function notify({ title, message, tags = [] }) {
    try {
      const res = await fetchImpl(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, title, message, tags }),
        signal: AbortSignal.timeout(5000),
      })
      if (!res.ok) console.log('ntfy responded with', res.status)
    } catch (err) {
      console.log('ntfy notification failed:', err.message)
    }
  }
}

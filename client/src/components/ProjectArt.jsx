// Hand-built SVG illustrations, one per project. They draw on the card's
// gradient with white strokes and a single amber accent, so they work in
// both themes without any image assets.

const ACCENT = '#ffc857'

// Small deterministic PRNG so the scatter plot is identical on every render.
function rng(seed) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function Frame({ viewBox, align = 'xMidYMid', fit = 'slice', children, className }) {
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio={fit === 'meet' ? 'xMidYMid meet' : `${align} slice`}
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

// Implied-volatility surface with a few points that break no-arbitrage.
function Surface({ className, fit }) {
  const nu = 16
  const nv = 11
  const flaws = [
    [0.3, 0.2],
    [0.72, 0.45],
    [0.5, 0.78],
  ]
  const height = (u, v) => {
    const smile = 0.34 * (u - 0.5) ** 2 * (1.25 - 0.7 * v)
    const term = 0.2 + 0.05 * Math.exp(-3 * v)
    const bump = flaws.reduce(
      (sum, [fu, fv]) =>
        sum + 0.03 * Math.exp(-((u - fu) ** 2 + (v - fv) ** 2) / 0.004),
      0,
    )
    return term + smile + bump
  }
  const point = (u, v) => [
    715 + (u - v) * 235,
    232 + (u + v) * 44 - height(u, v) * 400,
  ]
  const line = (pts) =>
    pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')

  const rows = Array.from({ length: nv }, (_, j) =>
    line(Array.from({ length: nu }, (_, i) => point(i / (nu - 1), j / (nv - 1)))),
  )
  const cols = Array.from({ length: nu }, (_, i) =>
    line(Array.from({ length: nv }, (_, j) => point(i / (nu - 1), j / (nv - 1)))),
  )

  return (
    <Frame viewBox="0 0 960 300" align="xMaxYMid" fit={fit} className={className}>
      <g strokeWidth="1" opacity="0.14">
        {[60, 120, 180, 240].map((y) => (
          <path key={y} d={`M0 ${y}H520`} />
        ))}
        {[80, 200, 320, 440].map((x) => (
          <path key={x} d={`M${x} 0V300`} />
        ))}
      </g>
      <g strokeWidth="1.1" opacity="0.5">
        {cols.map((d, i) => (
          <path key={`c${i}`} d={d} />
        ))}
      </g>
      <g strokeWidth="1.3" opacity="0.8">
        {rows.map((d, i) => (
          <path key={`r${i}`} d={d} />
        ))}
      </g>
      {flaws.map(([u, v]) => {
        const [x, y] = point(u, v)
        return (
          <g key={`${u}-${v}`} stroke={ACCENT}>
            <circle cx={x} cy={y} r="11" strokeWidth="1.6" opacity="0.9" />
            <circle cx={x} cy={y} r="3.4" fill={ACCENT} />
          </g>
        )
      })}
      <g fill="white" stroke="none" fontFamily="'Roboto Mono', monospace" fontSize="12" opacity="0.6">
        <text x="470" y="282">strike K</text>
        <text x="868" y="282">maturity T</text>
        <text x="520" y="40">σ(K, T)</text>
      </g>
    </Frame>
  )
}

// Price vs. quality scatter with the fitted regression line.
function Housing({ className, fit }) {
  const rand = rng(7)
  const pts = Array.from({ length: 42 }, (_, i) => {
    const x = 78 + (i / 41) * 262
    return [x, 196 - (x - 78) * 0.52 + (rand() - 0.5) * 46]
  })
  return (
    <Frame viewBox="0 0 400 320" fit={fit} className={className}>
      <path d="M62 36V206H356" strokeWidth="1.4" opacity="0.55" />
      <g strokeWidth="1" opacity="0.15">
        {[76, 116, 156].map((y) => (
          <path key={y} d={`M62 ${y}H356`} />
        ))}
      </g>
      <g fill="white" stroke="none" opacity="0.8">
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.6" />
        ))}
      </g>
      <path d="M70 200L346 62" stroke={ACCENT} strokeWidth="2.4" />
      <g strokeWidth="1.5">
        <rect x="86" y="40" width="86" height="26" rx="13" opacity="0.8" />
        <text
          x="129"
          y="58"
          textAnchor="middle"
          fill="white"
          stroke="none"
          fontFamily="'Roboto Mono', monospace"
          fontSize="12"
        >
          R² 0.76
        </text>
      </g>
    </Frame>
  )
}

// Bars of final grades, with the at-risk students flagged.
function Grades({ className, fit }) {
  const heights = [62, 88, 74, 110, 96, 132, 118, 150, 142]
  const atRisk = new Set([0, 2])
  return (
    <Frame viewBox="0 0 400 320" fit={fit} className={className}>
      <path d="M52 206H356" strokeWidth="1.4" opacity="0.55" />
      <g strokeWidth="1" opacity="0.15">
        {[56, 96, 136, 176].map((y) => (
          <path key={y} d={`M52 ${y}H356`} />
        ))}
      </g>
      {heights.map((h, i) => {
        const x = 64 + i * 32
        const risk = atRisk.has(i)
        return (
          <rect
            key={i}
            x={x}
            y={206 - h}
            width="22"
            height={h}
            rx="4"
            fill={risk ? 'none' : 'white'}
            fillOpacity="0.22"
            stroke={risk ? ACCENT : 'white'}
            strokeWidth={risk ? 2 : 1.4}
            strokeDasharray={risk ? '4 4' : undefined}
            opacity={risk ? 1 : 0.85}
          />
        )
      })}
      <path
        d={heights
          .map((h, i) => `${i ? 'L' : 'M'}${75 + i * 32} ${206 - h - 14}`)
          .join(' ')}
        strokeWidth="2"
        opacity="0.9"
      />
      <text
        x="64"
        y="42"
        fill={ACCENT}
        stroke="none"
        fontFamily="'Roboto Mono', monospace"
        fontSize="12"
      >
        ◌ at-risk
      </text>
    </Frame>
  )
}

function Scene({ x, y, w, h, outline }) {
  const common = outline
    ? { fill: 'none', stroke: 'white', strokeWidth: 2 }
    : { fill: 'white', fillOpacity: 0.28, stroke: 'none' }
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        width={w}
        height={h}
        rx="6"
        fill="none"
        stroke="white"
        strokeWidth="1.2"
        opacity="0.55"
      />
      <circle cx={w * 0.7} cy={h * 0.32} r={h * 0.17} {...common} />
      <path d={`M${w * 0.08} ${h * 0.88}L${w * 0.38} ${h * 0.42}L${w * 0.62} ${h * 0.88}Z`} {...common} />
      <path d={`M${w * 0.5} ${h * 0.88}L${w * 0.72} ${h * 0.6}L${w * 0.92} ${h * 0.88}Z`} {...common} />
    </g>
  )
}

// Original image, Sobel kernel, edge map.
function Edges({ className, fit }) {
  const kernel = [-1, 0, 1, -2, 0, 2, -1, 0, 1]
  return (
    <Frame viewBox="0 0 400 320" fit={fit} className={className}>
      <Scene x={36} y={44} w={140} h={104} />
      <Scene x={224} y={44} w={140} h={104} outline />
      <path d="M186 96H214M206 88L214 96L206 104" strokeWidth="1.8" />
      <g transform="translate(150 166)">
        {kernel.map((v, i) => (
          <g key={i} transform={`translate(${(i % 3) * 32} ${Math.floor(i / 3) * 22})`}>
            <rect width="28" height="18" rx="4" opacity="0.5" strokeWidth="1.1" />
            <text
              x="14"
              y="13"
              textAnchor="middle"
              fill="white"
              stroke="none"
              fontFamily="'Roboto Mono', monospace"
              fontSize="11"
            >
              {v}
            </text>
          </g>
        ))}
      </g>
      <text
        x="36"
        y="198"
        fill="white"
        stroke="none"
        opacity="0.6"
        fontFamily="'Roboto Mono', monospace"
        fontSize="11"
      >
        Sobel
      </text>
    </Frame>
  )
}

// Image → CNN feature maps → caption.
function Caption({ className, fit }) {
  return (
    <Frame viewBox="0 0 400 320" fit={fit} className={className}>
      <Scene x={28} y={62} w={96} h={80} />
      <path d="M130 102H146" strokeWidth="1.8" />
      <g strokeWidth="1.6">
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={152 + i * 11}
            y={72 + i * 4}
            width="42"
            height={60 - i * 8}
            rx="4"
            fill="white"
            fillOpacity={0.1 + i * 0.05}
            opacity="0.9"
          />
        ))}
      </g>
      <path d="M214 102H232M226 96L232 102L226 108" strokeWidth="1.8" />
      <g>
        <rect x="238" y="62" width="136" height="80" rx="14" strokeWidth="1.6" opacity="0.9" />
        <path d="M262 142L254 158L280 142" strokeWidth="1.6" opacity="0.9" />
        <g stroke={ACCENT} strokeWidth="5">
          <path d="M254 86H322" />
        </g>
        <g strokeWidth="5" opacity="0.7">
          <path d="M254 104H350M254 122H306" />
        </g>
      </g>
      <text
        x="28"
        y="196"
        fill="white"
        stroke="none"
        opacity="0.6"
        fontFamily="'Roboto Mono', monospace"
        fontSize="11"
      >
        CNN features → BLIP caption
      </text>
    </Frame>
  )
}

// Detected corners on a shape, and the Hough accumulator beside it.
function Hough({ className, fit }) {
  const corners = [
    [58, 78],
    [172, 62],
    [182, 168],
    [70, 178],
  ]
  const wave = (phase, amp) =>
    Array.from({ length: 31 }, (_, i) => {
      const x = 222 + (i / 30) * 140
      return `${i ? 'L' : 'M'}${x.toFixed(1)} ${(120 + amp * Math.sin((i / 30) * Math.PI * 2 + phase)).toFixed(1)}`
    }).join(' ')
  return (
    <Frame viewBox="0 0 400 320" fit={fit} className={className}>
      <path
        d={`M${corners.map((c) => c.join(' ')).join('L')}Z`}
        strokeWidth="2"
        opacity="0.9"
      />
      {corners.map(([x, y]) => (
        <g key={`${x}-${y}`} stroke={ACCENT}>
          <circle cx={x} cy={y} r="10" strokeWidth="1.8" />
          <circle cx={x} cy={y} r="2.6" fill={ACCENT} />
        </g>
      ))}
      <rect x="214" y="46" width="156" height="148" rx="8" strokeWidth="1.2" opacity="0.45" />
      <g strokeWidth="1.6" opacity="0.85">
        <path d={wave(0, 56)} />
        <path d={wave(1.1, 46)} />
        <path d={wave(2.2, 62)} />
        <path d={wave(3.3, 38)} />
      </g>
      <g stroke={ACCENT}>
        <circle cx="292" cy="120" r="9" strokeWidth="1.8" />
        <circle cx="292" cy="120" r="2.6" fill={ACCENT} />
      </g>
    </Frame>
  )
}

// Phone wireframe of the redesigned booking flow.
function Phone({ className, fit }) {
  return (
    <Frame viewBox="0 0 400 320" fit={fit} className={className}>
      <rect x="138" y="24" width="124" height="198" rx="20" strokeWidth="2" opacity="0.9" />
      <rect x="184" y="34" width="32" height="6" rx="3" fill="white" stroke="none" opacity="0.6" />
      <rect x="152" y="54" width="96" height="20" rx="10" strokeWidth="1.4" opacity="0.8" />
      {[84, 118, 152].map((y, i) => (
        <g key={y}>
          <rect x="152" y={y} width="96" height="28" rx="8" strokeWidth="1.3" opacity="0.7" />
          <circle cx="166" cy={y + 14} r="5" fill="white" stroke="none" opacity={0.5 - i * 0.1} />
          <path d={`M178 ${y + 10}H232M178 ${y + 19}H212`} strokeWidth="2" opacity="0.55" />
        </g>
      ))}
      <rect
        x="152"
        y="190"
        width="96"
        height="20"
        rx="10"
        fill={ACCENT}
        stroke="none"
      />
    </Frame>
  )
}

const art = {
  surface: Surface,
  housing: Housing,
  grades: Grades,
  edges: Edges,
  caption: Caption,
  hough: Hough,
  phone: Phone,
}

function ProjectArt({ name, className, fit }) {
  const Art = art[name]
  return Art ? <Art className={className} fit={fit} /> : null
}

export default ProjectArt

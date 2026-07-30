/** Full-bleed twin/IoT topology: radar rings, constellation, contour field. */
export function HeroVisual() {
  const nodes = [
    [1080, 180],
    [1220, 280],
    [980, 320],
    [1140, 420],
    [860, 240],
    [1280, 360],
  ] as const

  return (
    <div className="hero-visual" aria-hidden="true">
      <svg
        className="hero-visual__svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="field" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#F0F7FF" />
            <stop offset="100%" stopColor="#DCEBFF" />
          </linearGradient>
          <radialGradient id="radar" cx="70%" cy="38%" r="45%">
            <stop offset="0%" stopColor="#2563FF" stopOpacity="0.22" />
            <stop offset="55%" stopColor="#38BDF8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#2563FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2563FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#2563FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFD60A" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="1440" height="900" fill="url(#field)" />
        <rect width="1440" height="900" fill="url(#radar)" />

        <g
          className="hero-visual__contours"
          fill="none"
          stroke="#2563FF"
          strokeOpacity="0.12"
          strokeWidth="1.2"
        >
          <path d="M-40 640 C200 560, 420 700, 680 620 S1100 540, 1480 650" />
          <path d="M-40 700 C240 620, 460 760, 720 680 S1120 600, 1480 710" />
          <path d="M-40 760 C220 690, 480 820, 760 740 S1160 670, 1480 770" />
          <path d="M-40 820 C260 760, 500 880, 800 800 S1200 740, 1480 830" />
        </g>

        <g transform="translate(1080 320)">
          <g
            className="hero-visual__rings"
            fill="none"
            stroke="#2563FF"
            strokeOpacity="0.4"
            strokeWidth="1.25"
          >
            <circle className="hero-visual__ring" r="70" />
            <circle className="hero-visual__ring hero-visual__ring--2" r="140" />
            <circle className="hero-visual__ring hero-visual__ring--3" r="220" />
            <circle className="hero-visual__ring hero-visual__ring--4" r="310" />
            <path
              className="hero-visual__sweep"
              d="M0 0 L220 -40"
              stroke="#FFD60A"
              strokeOpacity="0.85"
              strokeWidth="1.75"
            />
          </g>
        </g>

        <g stroke="#0F172A" strokeOpacity="0.14" strokeWidth="1">
          <path d="M1080 180 L1220 280 L1140 420 L980 320 Z" fill="none" />
          <path d="M1080 180 L980 320 L860 240" fill="none" />
          <path d="M1220 280 L1280 360 L1140 420" fill="none" />
        </g>

        <rect y="318" width="1440" height="1.5" fill="url(#beam)" opacity="0.8" />

        {nodes.map(([x, y], i) => (
          <g key={`${x}-${y}`} className={`hero-visual__node hero-visual__node--${i}`}>
            <circle cx={x} cy={y} r="10" fill="#2563FF" fillOpacity="0.14" />
            <circle cx={x} cy={y} r="3.5" fill={i === 0 ? '#FFD60A' : '#0F172A'} />
          </g>
        ))}
      </svg>
      <div className="hero-visual__haze" />
      <div className="hero-visual__grain" />
    </div>
  )
}

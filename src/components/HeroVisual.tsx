/**
 * 首屏装饰：深色星空 + 星座连线 + 缓闪（无产品/系统语义）
 */
import { useEffect, useMemo, useRef, type CSSProperties } from 'react'

type Star = {
  x: number
  y: number
  r: number
  o: number
  delay: number
  dur: number
  twinkle: boolean
  glow: boolean
}

type Link = {
  x1: number
  y1: number
  x2: number
  y2: number
  o: number
}

function rng(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function buildStars(seed: number): Star[] {
  const rand = rng(seed)
  const stars: Star[] = []

  for (let i = 0; i < 140; i++) {
    const x = rand() * 1440
    const y = rand() * 900
    // 左侧给文案留空：丢掉大部分近点
    if (x < 520 && rand() > 0.38) continue
    const glow = rand() > 0.955
    const r = glow ? 1.6 + rand() * 1.4 : 0.35 + rand() * 1.15
    stars.push({
      x,
      y,
      r,
      o: glow ? 0.95 : 0.22 + rand() * 0.55,
      delay: rand() * 6,
      dur: 3.2 + rand() * 5.5,
      twinkle: glow || rand() > 0.62,
      glow,
    })
  }

  return stars
}

function buildLinks(stars: Star[], seed: number): Link[] {
  const rand = rng(seed)
  const bright = stars.filter((s) => s.r > 0.85).slice(0, 28)
  const links: Link[] = []

  for (let i = 0; i < bright.length; i++) {
    const a = bright[i]
    let nearest = -1
    let best = 180
    for (let j = i + 1; j < bright.length; j++) {
      const b = bright[j]
      const d = Math.hypot(a.x - b.x, a.y - b.y)
      if (d < best && d > 48) {
        best = d
        nearest = j
      }
    }
    if (nearest >= 0 && rand() > 0.35) {
      const b = bright[nearest]
      links.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, o: 0.12 + rand() * 0.16 })
    }
  }

  return links.slice(0, 16)
}

export function HeroVisual() {
  const rootRef = useRef<HTMLDivElement>(null)
  const stars = useMemo(() => buildStars(42), [])
  const links = useMemo(() => buildLinks(stars, 99), [stars])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const io = new IntersectionObserver(
      ([entry]) => root.classList.toggle('is-paused', !entry.isIntersecting),
      { rootMargin: '40px 0px', threshold: 0.01 },
    )
    io.observe(root)
    return () => io.disconnect()
  }, [])

  return (
    <div className="hero-visual" ref={rootRef} aria-hidden="true">
      <svg
        className="hero-visual__svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {links.map((l, i) => (
          <line
            key={`link-${i}`}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="#7dd3fc"
            strokeOpacity={l.o}
            strokeWidth="0.8"
          />
        ))}
        {stars.map((s, i) => (
          <g key={`star-${i}`}>
            {s.glow ? (
              <circle
                cx={s.x}
                cy={s.y}
                r={s.r * 6}
                fill="#38bdf8"
                fillOpacity="0.28"
              />
            ) : null}
            <circle
              className={s.twinkle ? 'hero-visual__star' : undefined}
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill={s.glow ? '#bae6fd' : '#f8fbff'}
              fillOpacity={s.twinkle ? undefined : s.o}
              style={
                s.twinkle
                  ? ({
                      '--o': s.o,
                      animationDuration: `${s.dur}s`,
                      animationDelay: `${s.delay}s`,
                    } as CSSProperties)
                  : undefined
              }
            />
          </g>
        ))}
      </svg>
      <div className="hero-visual__haze" />
    </div>
  )
}

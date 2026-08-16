/**
 * 未来 AI 拓扑：轨道环 + 数据粒子流 + 节点呼吸
 */
import { useNavigate } from 'react-router-dom'
import { brandPalette, workPalettes } from '../data/palettes'

const platformMeta = [
  {
    id: 'yunqi',
    slug: 'yunqi-admin',
    name: '云起应用平台',
    x: 900,
    y: 300,
    palette: workPalettes['minimal-white'],
  },
  {
    id: 'wanxiang',
    slug: 'wanxiang-hydro',
    name: '万象监测平台',
    x: 1125,
    y: 315,
    palette: workPalettes['tech-blue'],
  },
  {
    id: 'iot',
    slug: 'smart-iot-ai',
    name: '数智AI工业物联网平台',
    x: 1105,
    y: 470,
    palette: workPalettes['industrial-cyan'],
  },
  {
    id: 'lingshu',
    slug: 'lingshu-market',
    name: '灵枢行业应用市场',
    x: 880,
    y: 455,
    palette: workPalettes['lingshu-slate'],
  },
] as const

/** 核心周围的 AI 轨道卫星 */
const satellites = [
  { r: 110, angle: 0, dur: '14s' },
  { r: 110, angle: 120, dur: '14s' },
  { r: 110, angle: 240, dur: '14s' },
  { r: 178, angle: 40, dur: '22s' },
  { r: 178, angle: 160, dur: '22s' },
  { r: 178, angle: 280, dur: '22s' },
] as const

export function HeroVisual() {
  const navigate = useNavigate()
  const hub = { x: 1000, y: 385 }
  const brand = brandPalette.hex
  const ink = '#17141f'
  const signal = '#E8B923'

  return (
    <div className="hero-visual">
      <svg
        className="hero-visual__svg"
        viewBox="740 220 580 430"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="core-field" cx="45%" cy="45%" r="62%">
            <stop offset="0%" stopColor={brand} stopOpacity="0.028" />
            <stop offset="55%" stopColor={brand} stopOpacity="0.01" />
            <stop offset="100%" stopColor={brand} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="fade-left" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="12%" stopColor="#fff" stopOpacity="0.7" />
            <stop offset="30%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="hero-right-mask">
            <rect width="1440" height="900" fill="#fff" />
            <rect width="560" height="900" fill="url(#fade-left)" />
          </mask>

          <radialGradient id="glow-hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={brand} stopOpacity="0.36" />
            <stop offset="55%" stopColor={brand} stopOpacity="0.1" />
            <stop offset="100%" stopColor={brand} stopOpacity="0" />
          </radialGradient>
          {platformMeta.map((p) => (
            <radialGradient key={`glow-${p.id}`} id={`glow-${p.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={p.palette.hex} stopOpacity="0.32" />
              <stop offset="60%" stopColor={p.palette.hex} stopOpacity="0.08" />
              <stop offset="100%" stopColor={p.palette.hex} stopOpacity="0" />
            </radialGradient>
          ))}

          {platformMeta.map((p) => (
            <path
              key={`edge-${p.id}`}
              id={`edge-${p.id}`}
              d={`M${p.x} ${p.y} L${hub.x} ${hub.y}`}
              fill="none"
            />
          ))}

          <symbol id="logo-yunqi" viewBox="0 0 40 40">
            <path
              d="M12 18 L20 11 L28 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 29c-2.4 0-4-1.8-4-4s1.6-3.8 4-3.8c.7-3.6 4-6.2 8-6.2s7.2 2.8 7.9 6.4c2.4.2 4.3 2.2 4.3 4.6 0 2.6-2.1 4.9-4.6 4.9H10z"
              fill="currentColor"
            />
          </symbol>
          <symbol id="logo-wanxiang" viewBox="0 0 40 40">
            <path
              d="M12 27V13h3.2l4.8 9.6L24.8 13H28v14h-2.8V17.6L21.2 27h-2.4l-4-9.4V27H12z"
              fill="currentColor"
            />
          </symbol>
          <symbol id="logo-iot" viewBox="0 0 40 40">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 11c2.2-3 4.4-4.4 6-4.4s3.8 1.4 6 4.4" />
              <path d="M14 29c2.2 3 4.4 4.4 6 4.4s3.8-1.4 6-4.4" />
              <path d="M20 10.5 L28 15.2 V24.8 L20 29.5 L12 24.8 V15.2 Z" />
              <line x1="20" y1="16" x2="20" y2="10.5" />
              <line x1="20" y1="29.5" x2="20" y2="24" />
              <line x1="12" y1="20" x2="17" y2="20" />
              <line x1="28" y1="20" x2="23" y2="20" />
            </g>
            <circle cx="20" cy="9" r="1.6" fill="currentColor" />
            <circle cx="20" cy="31" r="1.6" fill="currentColor" />
            <circle cx="10" cy="20" r="1.6" fill="currentColor" />
            <circle cx="30" cy="20" r="1.6" fill="currentColor" />
            <path d="M20 15.5 L24 17.8 V22.2 L20 24.5 L16 22.2 V17.8 Z" fill="currentColor" />
          </symbol>
          <symbol id="logo-lingshu" viewBox="0 0 40 40">
            <circle
              cx="20"
              cy="20"
              r="3.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            />
            <rect x="9" y="9" width="5.5" height="5.5" rx="1.2" fill="currentColor" />
            <rect x="25.5" y="9" width="5.5" height="5.5" rx="1.2" fill="currentColor" />
            <rect x="9" y="25.5" width="5.5" height="5.5" rx="1.2" fill="currentColor" />
            <rect x="25.5" y="25.5" width="5.5" height="5.5" rx="1.2" fill="currentColor" />
          </symbol>
          <symbol id="logo-portal" viewBox="0 0 40 40">
            <polygon points="8,8 32,8 32,26 26,32 8,32" fill="currentColor" />
            <polygon points="14,14 26,14 26,22 22,26 14,26" fill="#E8B923" />
          </symbol>
        </defs>

        <g mask="url(#hero-right-mask)">
          <rect
            className="hero-visual__core-field"
            x="740"
            y="220"
            width="580"
            height="430"
            fill="url(#core-field)"
          />

          {/* AI 核心：双层反相轨道 */}
          <g transform={`translate(${hub.x} ${hub.y})`}>
            <g className="hero-visual__orbit hero-visual__orbit--a" fill="none">
              <circle r="110" stroke={ink} strokeOpacity="0.12" strokeWidth="1.1" />
              <circle
                r="110"
                stroke={brand}
                strokeOpacity="0.28"
                strokeWidth="1.4"
                strokeDasharray="18 42"
              />
            </g>
            <g className="hero-visual__orbit hero-visual__orbit--b" fill="none">
              <circle r="178" stroke={ink} strokeOpacity="0.08" strokeWidth="1" />
              <circle
                r="178"
                stroke={brand}
                strokeOpacity="0.18"
                strokeWidth="1.2"
                strokeDasharray="10 28"
              />
            </g>
            <circle
              className="hero-visual__orbit-ring"
              r="235"
              fill="none"
              stroke={ink}
              strokeOpacity="0.06"
              strokeWidth="1"
              strokeDasharray="2 14"
            />

            {satellites.map((s, i) => (
              <g key={`sat-${i}`} className="hero-visual__satellite">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`${s.angle} 0 0`}
                  to={`${s.angle + 360} 0 0`}
                  dur={s.dur}
                  repeatCount="indefinite"
                />
                <circle
                  cx={s.r}
                  cy="0"
                  r={i < 3 ? 3.2 : 2.4}
                  fill={i % 2 === 0 ? brand : signal}
                  fillOpacity={i < 3 ? 0.7 : 0.45}
                />
              </g>
            ))}
          </g>

          {/* 神经网络连线 */}
          <g fill="none" strokeWidth="1.05" strokeOpacity="0.22">
            {platformMeta.map((p) => (
              <path
                key={`${p.id}-link`}
                d={`M${p.x} ${p.y} L${hub.x} ${hub.y}`}
                stroke={p.palette.hex}
                strokeDasharray="4 8"
              />
            ))}
          </g>

          {/* 数据粒子：沿链路汇入核心 */}
          {platformMeta.map((p, i) => (
            <g key={`flow-${p.id}`} className="hero-visual__packet">
              <circle r="3.2" fill={p.palette.hex} fillOpacity="0.85">
                <animateMotion
                  dur={`${4.8 + i * 0.55}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.7}s`}
                >
                  <mpath href={`#edge-${p.id}`} />
                </animateMotion>
              </circle>
              <circle r="1.4" fill={signal} fillOpacity="0.55">
                <animateMotion
                  dur={`${4.8 + i * 0.55}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.7 + 1.6}s`}
                >
                  <mpath href={`#edge-${p.id}`} />
                </animateMotion>
              </circle>
            </g>
          ))}

          {/* 核心品牌节点 */}
          <g transform={`translate(${hub.x} ${hub.y})`}>
            <g className="hero-visual__badge hero-visual__badge--hub">
              <circle r="28" fill="url(#glow-hub)" />
              <circle r="18" fill={brand} />
              <g transform="translate(-9 -9)" style={{ color: '#FFFFFF' }}>
                <use href="#logo-portal" width="18" height="18" />
              </g>
            </g>
          </g>
        </g>

        {/* 四平台节点：放在 mask 外，避免羽化/裁切遮挡 */}
        {platformMeta.map((p) => (
          <a
            key={p.id}
            className="hero-visual__node-link"
            href={`/works/${p.slug}`}
            aria-label={p.name}
            onClick={(e) => {
              e.preventDefault()
              navigate(`/works/${p.slug}`)
            }}
          >
            <g transform={`translate(${p.x} ${p.y})`}>
              <g className="hero-visual__badge">
                <circle r="22" fill={`url(#glow-${p.id})`} />
                <circle r="15" fill="#ffffff" fillOpacity="0.95" />
                <circle
                  r="13.5"
                  fill={p.palette.hex}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
                <g
                  transform="translate(-6 -6)"
                  style={{ color: '#FFFFFF' }}
                  pointerEvents="none"
                >
                  <use href={`#logo-${p.id}`} width="12" height="12" />
                </g>
              </g>
            </g>
          </a>
        ))}
      </svg>

      <div className="hero-visual__haze" aria-hidden="true" />
    </div>
  )
}

/**
 * 雷达拓扑 + 工坊色系：
 * 未来紫核心 · 云起极简白 · 万象科技蓝 · AI IoT 工业青 · 灵枢石板灰
 */
export function HeroVisual() {
  const hub = { x: 1080, y: 320 }
  // 不规则星座排布：距离与方位错开，避免四角正方形
  const platforms = [
    { id: 'yunqi', x: 940, y: 155, color: '#171717', soft: '23, 23, 23' },
    { id: 'wanxiang', x: 1325, y: 210, color: '#2563EB', soft: '37, 99, 235' },
    { id: 'iot', x: 1210, y: 530, color: '#0F766E', soft: '15, 118, 110' },
    { id: 'lingshu', x: 820, y: 390, color: '#475569', soft: '71, 85, 105' },
  ] as const

  const ambience = [
    [990, 255],
    [1185, 170],
    [1340, 390],
    [1005, 480],
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
            <stop offset="45%" stopColor="#F6F3FB" />
            <stop offset="100%" stopColor="#E8E0F5" />
          </linearGradient>
          <radialGradient id="radar" cx="70%" cy="38%" r="45%">
            <stop offset="0%" stopColor="#5B21B6" stopOpacity="0.18" />
            <stop offset="55%" stopColor="#6D28D9" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#5B21B6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5B21B6" stopOpacity="0" />
            <stop offset="30%" stopColor="#5B21B6" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#2563EB" stopOpacity="0.28" />
            <stop offset="70%" stopColor="#0F766E" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#475569" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ring-spectrum" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5B21B6" />
            <stop offset="25%" stopColor="#171717" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="75%" stopColor="#0F766E" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="sweep-fan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8B923" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#5B21B6" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#5B21B6" stopOpacity="0" />
          </linearGradient>

          {/* 各系统主题色光晕：叠在图标节点背后 */}
          <radialGradient id="glow-hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5B21B6" stopOpacity="0.42" />
            <stop offset="55%" stopColor="#5B21B6" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#5B21B6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-yunqi" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#171717" stopOpacity="0.38" />
            <stop offset="55%" stopColor="#171717" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#171717" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-wanxiang" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#2563EB" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-iot" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0F766E" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#0F766E" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#0F766E" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-lingshu" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.42" />
            <stop offset="55%" stopColor="#475569" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#475569" stopOpacity="0" />
          </radialGradient>

          {/* 云起：云朵标（极简白 → 墨色） */}
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

          {/* 万象：M 标（字形，底色由节点实心圆提供） */}
          <symbol id="logo-wanxiang" viewBox="0 0 40 40">
            <path
              d="M12 27V13h3.2l4.8 9.6L24.8 13H28v14h-2.8V17.6L21.2 27h-2.4l-4-9.4V27H12z"
              fill="currentColor"
            />
          </symbol>

          {/* AI IoT：物联六边形（工业青） */}
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

          {/* 灵枢：枢纽环 + 应用格（字形，中空露出实心底色） */}
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

          {/* 门户：切角品牌标（字形 + 信号金点缀） */}
          <symbol id="logo-portal" viewBox="0 0 40 40">
            <polygon points="8,8 32,8 32,26 26,32 8,32" fill="currentColor" />
            <polygon points="14,14 26,14 26,22 22,26 14,26" fill="#E8B923" />
          </symbol>
        </defs>

        <rect width="1440" height="900" fill="url(#field)" />
        <rect className="hero-visual__radar-glow" width="1440" height="900" fill="url(#radar)" />

        <g
          className="hero-visual__contours"
          fill="none"
          stroke="#5B21B6"
          strokeOpacity="0.1"
          strokeWidth="1.2"
        >
          <path d="M-40 640 C200 560, 420 700, 680 620 S1100 540, 1480 650" />
          <path d="M-40 700 C240 620, 460 760, 720 680 S1120 600, 1480 710" />
          <path d="M-40 760 C220 690, 480 820, 760 740 S1160 670, 1480 770" />
          <path d="M-40 820 C260 760, 500 880, 800 800 S1200 740, 1480 830" />
        </g>

        {/* 雷达环 + 扫掠扇：绕核心持续旋转 */}
        <g transform={`translate(${hub.x} ${hub.y})`}>
          <g
            className="hero-visual__rings"
            fill="none"
            stroke="#5B21B6"
            strokeOpacity="0.32"
            strokeWidth="1.25"
          >
            <circle className="hero-visual__ring" r="70" />
            <circle className="hero-visual__ring hero-visual__ring--2" r="140" />
            <circle className="hero-visual__ring hero-visual__ring--3" r="220" />
            <circle
              className="hero-visual__ring hero-visual__ring--4"
              r="310"
              stroke="url(#ring-spectrum)"
              strokeOpacity="0.45"
            />
          </g>
          <g className="hero-visual__sweep">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 0"
              to="360 0 0"
              dur="6s"
              repeatCount="indefinite"
            />
            <path
              d="M0 0 L260 0 A260 260 0 0 1 183.8 183.8 Z"
              fill="url(#sweep-fan)"
            />
            <path d="M0 0 L260 0" stroke="#E8B923" strokeOpacity="0.85" strokeWidth="1.75" />
          </g>
        </g>

        {/* 拓扑连线：核心 ↔ 作品；作品间仅少量非闭合旁路，避免方形轮廓 */}
        <g className="hero-visual__links" fill="none" strokeWidth="1.15" strokeOpacity="0.28">
          {platforms.map((p) => (
            <path
              key={`${p.id}-link`}
              className="hero-visual__link"
              d={`M${hub.x} ${hub.y} L${p.x} ${p.y}`}
              stroke={p.color}
            />
          ))}
          <path
            className="hero-visual__link hero-visual__link--soft"
            d={`M${platforms[0].x} ${platforms[0].y} L${platforms[1].x} ${platforms[1].y}`}
            stroke="#5B21B6"
            strokeOpacity="0.12"
          />
          <path
            className="hero-visual__link hero-visual__link--soft"
            d={`M${platforms[2].x} ${platforms[2].y} L${platforms[3].x} ${platforms[3].y}`}
            stroke="#5B21B6"
            strokeOpacity="0.1"
          />
        </g>

        <rect className="hero-visual__beam" y="318" width="1440" height="1.5" fill="url(#beam)" />

        {/* 氛围小点 */}
        {ambience.map(([x, y], i) => (
          <g key={`${x}-${y}`} className={`hero-visual__node hero-visual__node--${i}`}>
            <circle cx={x} cy={y} r="8" fill="#5B21B6" fillOpacity="0.1" />
            <circle cx={x} cy={y} r="2.5" fill={i === 0 ? '#E8B923' : '#5B21B6'} fillOpacity="0.55" />
          </g>
        ))}

        {/* 门户核心 logo：未来紫实心底 */}
        <g transform={`translate(${hub.x} ${hub.y})`}>
          <g className="hero-visual__badge hero-visual__badge--hub">
            <circle r="24" fill="url(#glow-hub)" />
            <circle r="18" fill="#5B21B6" />
            <g transform="translate(-9 -9)" style={{ color: '#FFFFFF' }}>
              <use href="#logo-portal" width="18" height="18" />
            </g>
          </g>
        </g>

        {/* 作品 logo 节点：各自主题色实心底 */}
        {platforms.map((p, i) => (
          <g key={p.id} transform={`translate(${p.x} ${p.y})`}>
            <g className={`hero-visual__badge hero-visual__badge--${i}`}>
              <circle r="22" fill={`url(#glow-${p.id})`} />
              <circle r="14.5" fill={`rgba(${p.soft}, 0.18)`} />
              <circle r="13" fill={p.color} />
              <g transform="translate(-7.5 -7.5)" style={{ color: '#FFFFFF' }}>
                <use href={`#logo-${p.id}`} width="15" height="15" />
              </g>
            </g>
          </g>
        ))}
      </svg>
      <div className="hero-visual__haze" />
      <div className="hero-visual__grain" />
    </div>
  )
}

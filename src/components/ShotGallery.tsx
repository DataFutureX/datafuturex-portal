import { useEffect, useState } from 'react'

type Shot = { src: string; alt: string }

const INTERVAL_MS = 3500

export function ShotGallery({ shots }: { shots: Shot[] }) {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [pausedByHover, setPausedByHover] = useState(false)

  const current = shots[active] ?? shots[0]
  const autoplay = playing && !pausedByHover && shots.length > 1

  useEffect(() => {
    setActive(0)
    setPlaying(true)
  }, [shots])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) setPlaying(false)
  }, [])

  useEffect(() => {
    if (!autoplay) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % shots.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [autoplay, shots.length])

  if (!current) {
    return <p className="shot-placeholder">截图采集中，请先通过演示站预览界面。</p>
  }

  return (
    <div
      className="shot-viewer"
      onMouseEnter={() => setPausedByHover(true)}
      onMouseLeave={() => setPausedByHover(false)}
    >
      <div className="shot-viewer__toolbar">
        <p className="shot-viewer__status mono">
          {String(active + 1).padStart(2, '0')} / {String(shots.length).padStart(2, '0')}
          {autoplay ? ' · 自动播放' : ' · 已暂停'}
        </p>
        {shots.length > 1 ? (
          <button
            type="button"
            className="shot-viewer__toggle"
            onClick={() => setPlaying((v) => !v)}
            aria-pressed={playing}
          >
            {playing ? '暂停' : '播放'}
          </button>
        ) : null}
      </div>

      <figure className="shot shot--featured">
        <img key={current.src} src={current.src} alt={current.alt} className="shot--featured-img" />
        <figcaption>{current.alt}</figcaption>
        {autoplay ? (
          <span
            key={`${current.src}-progress`}
            className="shot-progress"
            style={{ animationDuration: `${INTERVAL_MS}ms` }}
            aria-hidden="true"
          />
        ) : null}
      </figure>

      <div className="shot-thumbs" role="list">
        {shots.map((shot, index) => (
          <button
            key={shot.src}
            type="button"
            role="listitem"
            className={`shot-thumb${index === active ? ' is-active' : ''}`}
            aria-label={`查看：${shot.alt}`}
            aria-pressed={index === active}
            onClick={() => {
              setActive(index)
              setPlaying(false)
            }}
          >
            <img src={shot.src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  )
}

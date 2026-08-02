import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { shotMedium, workThemeVars, type Work } from '../data/works'

type WorkCardProps = {
  work: Work
  index: number
  cta: string
}

export function WorkCard({ work, index, cta }: WorkCardProps) {
  const cover = work.screenshots[0]

  return (
    <Link
      to={`/products/${work.slug}`}
      className="work-card"
      data-palette={work.palette.id}
      style={workThemeVars(work.palette) as CSSProperties}
    >
      <div className="work-card__media">
        {cover ? (
          <img
            src={shotMedium(cover.src, cover.medium)}
            srcSet={`${shotMedium(cover.src, cover.medium)} 960w, ${cover.src} 1440w`}
            sizes="(max-width: 720px) 92vw, 520px"
            alt=""
            width={960}
            height={600}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        ) : (
          <div className="work-card__placeholder" />
        )}
      </div>
      <div className="work-card__body">
        <p className="work-card__meta">
          <span className="work-card__palette mono">{work.palette.label}</span>
          <span className="work-card__tag">{work.tag}</span>
        </p>
        <h3>{work.name}</h3>
        <p>{work.summary}</p>
        <span className="work-card__cta">{cta}</span>
      </div>
    </Link>
  )
}

import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { shotMedium, workThemeVars, type Work } from '../data/works'

type WorkCardProps = {
  work: Work
  cta: string
  /** 仅首屏可见封面使用；折页以下勿开 */
  priority?: boolean
}

export function WorkCard({ work, priority = false, cta }: WorkCardProps) {
  const cover = work.screenshots[0]
  const medium = cover ? shotMedium(cover.src, cover.medium) : null

  return (
    <Link
      to={`/works/${work.slug}`}
      className={`work-card${work.featured ? ' work-card--featured' : ''}`}
      data-palette={work.palette.id}
      style={workThemeVars(work.palette) as CSSProperties}
    >
      {work.featured ? (
        <span className="work-card__ribbon" aria-label="特别推荐">
          <span className="work-card__seal">推荐</span>
        </span>
      ) : null}
      <div className="work-card__media">
        {medium ? (
          <img
            src={medium}
            alt=""
            width={1280}
            height={800}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
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
        <h3>
          {work.name}
          <span className="work-card__en mono">{work.englishName}</span>
        </h3>
        <p>{work.summary}</p>
        <span className="work-card__cta">{cta}</span>
      </div>
    </Link>
  )
}

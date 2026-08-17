import { Link } from 'react-router-dom'
import { shotMedium, workStatusLabel, type Work } from '../data/works'

type WorkCardProps = {
  work: Work
  cta: string
  /** 仅首屏可见封面使用；折页以下勿开 */
  priority?: boolean
}

export function WorkCard({ work, priority = false, cta }: WorkCardProps) {
  const cover = work.screenshots[0]
  const medium = cover ? shotMedium(cover.src, cover.medium) : null
  const status = workStatusLabel(work)
  const coverAlt = cover ? `${work.name} · ${cover.alt}` : ''

  return (
    <Link
      to={`/works/${work.slug}`}
      className={`work-card${work.featured ? ' work-card--featured' : ''}`}
    >
      {work.featured ? <span className="work-card__badge">推荐</span> : null}
      <div className="work-card__media">
        {medium ? (
          <img
            src={medium}
            alt={coverAlt}
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
          <span className="work-card__status">{status}</span>
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

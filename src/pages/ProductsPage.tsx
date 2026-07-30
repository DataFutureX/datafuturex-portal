import { Link } from 'react-router-dom'
import { works } from '../data/works'

export function ProductsPage() {
  return (
    <div className="page">
      <header className="page-hero">
        <h1>成果作品</h1>
        <p>
          云起：完全开源，可演示与二次开发。万象：开源正在筹备中，当前以演示站展示。均提供系统截图。
        </p>
      </header>
      <ul className="work-cards">
        {works.map((work) => {
          const cover = work.screenshots[0]
          return (
            <li key={work.slug}>
              <Link to={`/products/${work.slug}`} className="work-card">
                <div className="work-card__media">
                  {cover ? (
                    <img src={cover.src} alt="" loading="lazy" />
                  ) : (
                    <div className="work-card__placeholder" />
                  )}
                </div>
                <div className="work-card__body">
                  <p className="work-card__tag">{work.tag}</p>
                  <h3>{work.name}</h3>
                  <p>{work.summary}</p>
                  <span className="work-card__cta">进入详情 →</span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

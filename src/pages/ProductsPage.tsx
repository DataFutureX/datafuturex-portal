import { Link } from 'react-router-dom'
import { works } from '../data/works'

export function ProductsPage() {
  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow mono">Works</p>
        <h1>成果作品</h1>
        <p>
          云起：完全开源，可演示与二次开发。万象：开源正在筹备中，当前以演示站展示。均提供系统截图。
        </p>
      </header>
      <ul className="capability-list">
        {works.map((work, index) => (
          <li key={work.slug}>
            <Link to={`/products/${work.slug}`} className="capability-row">
              <span className="capability-row__index mono">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="capability-row__name">
                {work.name}
                <span className="work-tag">{work.tag}</span>
              </span>
              <span className="capability-row__summary">{work.summary}</span>
              <span className="capability-row__go" aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

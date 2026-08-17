import { Link } from 'react-router-dom'
import { productArchitecture } from '../data/site'

/** 工坊作品架构框图：自下而上四层 */
export function ProductArchitecture() {
  const layers = [...productArchitecture].reverse()
  const total = layers.length

  return (
    <div
      className="arch"
      role="img"
      aria-label="架构框图：云起底座、数智AI工业物联网、万象监测、灵枢行业应用市场"
    >
      <ol className="arch__stack">
        {layers.map((layer, index) => {
          const level = String(total - index).padStart(2, '0')
          return (
            <li key={layer.id} className="arch__item">
              <Link
                to={`/works/${layer.slug}`}
                className="arch-layer entry-row"
              >
                <span className="arch-layer__rail" aria-hidden="true">
                  <span className="arch-layer__index mono">L{level}</span>
                </span>
                <span className="arch-layer__body">
                  <span className="arch-layer__role mono">{layer.role}</span>
                  <strong className="arch-layer__name">
                    {layer.name}
                    <span className="arch-layer__en mono">{layer.englishName}</span>
                  </strong>
                </span>
                <span className="arch-layer__modules">
                  {layer.modules.map((mod) => (
                    <span key={mod} className="arch-layer__mod">
                      {mod}
                    </span>
                  ))}
                </span>
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

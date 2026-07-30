import { Link } from 'react-router-dom'
import { HeroVisual } from '../components/HeroVisual'
import { directions, site } from '../data/site'
import { shotThumb, works } from '../data/works'

export function HomePage() {
  return (
    <>
      <section className="hero">
        <HeroVisual />
        <div className="hero__content">
          <div className="hero__brand-block">
            <h1 className="hero__title">{site.name}</h1>
            <p className="hero__brand mono">{site.englishName}</p>
          </div>
          <p className="hero__lede">{site.tagline}</p>
          <div className="hero__cta">
            <Link className="btn btn--primary" to="/products">
              查看作品
            </Link>
            <a
              className="btn btn--ghost"
              href="https://github.com/DataFutureX"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub 源码
              <span className="ext" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="focus-heading">
        <div className="section__head">
          <h2 id="focus-heading">工坊方向</h2>
          <p>{site.focus}</p>
        </div>
        <ul className="direction-list">
          {directions.map((item) => (
            <li key={item.id} className="direction-item">
              <strong>{item.name}</strong>
              <span>{item.summary}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="works-heading">
        <div className="section__head">
          <h2 id="works-heading">作品</h2>
          <p>
            云起完全开源、可开发复用；万象开源正在筹备中，当前提供演示站。点击进入详情与系统截图。
          </p>
        </div>
        <ul className="work-cards">
          {works.map((work, index) => {
            const cover = work.screenshots[0]
            return (
              <li key={work.slug}>
                <Link to={`/products/${work.slug}`} className="work-card">
                  <div className="work-card__media">
                    {cover ? (
                      <img
                        src={shotThumb(cover.src, cover.thumb)}
                        alt=""
                        width={320}
                        height={200}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        fetchPriority={index === 0 ? 'high' : 'auto'}
                      />
                    ) : (
                      <div className="work-card__placeholder" />
                    )}
                  </div>
                  <div className="work-card__body">
                    <p className="work-card__tag">{work.tag}</p>
                    <h3>{work.name}</h3>
                    <p>{work.summary}</p>
                    <span className="work-card__cta">
                      {work.openSource ? '查看详情与源码' : '查看详情与演示'} →
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="section section--compact" aria-labelledby="start-heading">
        <div className="section__head">
          <h2 id="start-heading">快速体验</h2>
          <p>两条最短路径，分别对应开源工程与演示站。</p>
        </div>
        <ol className="start-steps start-steps--compact">
          <li>
            <a
              href="https://github.com/DataFutureX/yunqi-admin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>云起：源码与演示</strong>
              <span>GitHub 获取源码，或打开 yunqi.datafuturex.cn/portal 在线体验。</span>
            </a>
          </li>
          <li>
            <a
              href="https://wanxiang.datafuturex.cn/portal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>万象：演示站</strong>
              <span>开源筹备中，先通过演示门户了解能力。</span>
            </a>
          </li>
        </ol>
      </section>
    </>
  )
}

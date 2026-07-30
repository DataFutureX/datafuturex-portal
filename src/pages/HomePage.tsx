import { Link } from 'react-router-dom'
import { HeroVisual } from '../components/HeroVisual'
import { directions, site } from '../data/site'
import { works } from '../data/works'

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
              查看成果
            </Link>
            <a
              className="btn btn--ghost"
              href="https://yunqi.datafuturex.cn"
              target="_blank"
              rel="noopener noreferrer"
            >
              云起开源演示
              <span className="ext" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="focus-heading">
        <div className="section__head">
          <p className="eyebrow mono">01 / Focus</p>
          <h2 id="focus-heading">工坊方向</h2>
          <p>{site.focus}</p>
        </div>
        <ul className="capability-list">
          {directions.map((item, index) => (
            <li key={item.id} className="capability-row capability-row--static">
              <span className="capability-row__index mono">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="capability-row__name">{item.name}</span>
              <span className="capability-row__summary">{item.summary}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section capabilities" aria-labelledby="works-heading">
        <div className="section__head">
          <p className="eyebrow mono">02 / Works</p>
          <h2 id="works-heading">成果作品</h2>
          <p>
            云起完全开源、可开发复用；万象未开源，仅提供演示站展示。均配系统截图。
          </p>
        </div>
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
        <p className="section__more">
          <Link to="/products">查看全部成果</Link>
        </p>
      </section>

      <section className="section start" aria-labelledby="start-heading">
        <div className="section__head">
          <p className="eyebrow mono">03 / Start</p>
          <h2 id="start-heading">快速体验</h2>
          <p>开源工程可本地开发；未开源工程请使用演示站。</p>
        </div>
        <ol className="start-steps">
          <li>
            <a
              href="https://yunqi.datafuturex.cn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mono">Step 01</span>
              <strong>体验云起演示</strong>
              <span>完全开源工程在线演示，账号 demo / demo123。</span>
            </a>
          </li>
          <li>
            <Link to="/docs#yunqi">
              <span className="mono">Step 02</span>
              <strong>克隆云起二次开发</strong>
              <span>GitHub / Gitee 获取源码，npm run dev:demo 本地跑通。</span>
            </Link>
          </li>
          <li>
            <a
              href="https://wanxiang.datafuturex.cn/portal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mono">Step 03</span>
              <strong>打开万象演示站</strong>
              <span>未开源，仅展示演示：wanxiang.datafuturex.cn/portal。</span>
            </a>
          </li>
        </ol>
      </section>
    </>
  )
}

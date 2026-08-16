import { Link } from 'react-router-dom'
import { HeroVisual } from '../components/HeroVisual'
import { ProductArchitecture } from '../components/ProductArchitecture'
import { WorkCard } from '../components/WorkCard'
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
              查看作品
            </Link>
            <Link className="btn btn--ghost" to="/docs">
              快速开始
            </Link>
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
            <li key={item.id}>
              <Link to={item.href} className="direction-item entry-row">
                <strong>{item.name}</strong>
                <span>{item.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="works-heading">
        <div className="section__head">
          <h2 id="works-heading">作品</h2>
          <p>
            云起完全开源；数智AI工业物联网与万象监测可打开演示站；灵枢正在开发中。进入详情获取源码或演示。
          </p>
        </div>
        <ul className="work-cards">
          {works.map((work, index) => (
            <li key={work.slug}>
              <WorkCard
                work={work}
                index={index}
                cta={
                  work.openSource
                    ? '详情与源码 →'
                    : work.links.demo
                      ? '详情与演示 →'
                      : '查看详情 →'
                }
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="arch-heading">
        <div className="section__head section__head--row">
          <h2 id="arch-heading">作品架构</h2>
          <span className="arch__badge mono">STACK · BOTTOM → TOP</span>
        </div>
        <ProductArchitecture />
      </section>
    </>
  )
}

import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { HeroVisual } from '../components/HeroVisual'
import { ProductArchitecture } from '../components/ProductArchitecture'
import { WorkCard } from '../components/WorkCard'
import { directions, site } from '../data/site'
import { works } from '../data/works'

function DirectionDeco({ id }: { id: (typeof directions)[number]['id'] }) {
  if (id === 'iot') {
    return (
      <svg className="direction-item__deco" viewBox="0 0 80 80" aria-hidden="true">
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M40 14 L58 24 V44 L40 54 L22 44 V24 Z" />
          <path d="M40 28 L48 33 V43 L40 48 L32 43 V33 Z" />
          <path d="M40 14 V8M58 24 L66 20M58 44 L66 48M40 54 V62M22 44 L14 48M22 24 L14 20" />
        </g>
        <circle cx="40" cy="8" r="2" fill="currentColor" />
        <circle cx="66" cy="20" r="2" fill="currentColor" />
        <circle cx="66" cy="48" r="2" fill="currentColor" />
        <circle cx="40" cy="62" r="2" fill="currentColor" />
        <circle cx="14" cy="48" r="2" fill="currentColor" />
        <circle cx="14" cy="20" r="2" fill="currentColor" />
      </svg>
    )
  }

  if (id === 'digital-twin') {
    return (
      <svg className="direction-item__deco" viewBox="0 0 80 80" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.3">
          <rect x="14" y="18" width="52" height="40" />
          <path d="M14 30 H66M14 42 H66M30 18 V58M46 18 V58" opacity="0.55" />
          <circle cx="38" cy="36" r="5" />
          <path d="M38 41 V52M34 48 H42" />
        </g>
        <circle cx="54" cy="28" r="2.2" fill="currentColor" />
        <circle cx="24" cy="48" r="2.2" fill="currentColor" />
      </svg>
    )
  }

  if (id === 'industry') {
    return (
      <svg className="direction-item__deco" viewBox="0 0 80 80" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.35">
          <rect x="16" y="16" width="20" height="20" />
          <rect x="44" y="16" width="20" height="20" />
          <rect x="16" y="44" width="20" height="20" />
          <rect x="44" y="44" width="20" height="20" />
          <circle cx="40" cy="40" r="4" />
          <path d="M36 40 H26M44 40 H54M40 36 V26M40 44 V54" opacity="0.7" />
        </g>
      </svg>
    )
  }

  return (
    <svg className="direction-item__deco" viewBox="0 0 80 80" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.35">
        <circle cx="40" cy="40" r="10" />
        <circle cx="40" cy="40" r="22" strokeDasharray="4 6" />
        <circle cx="40" cy="40" r="32" opacity="0.55" />
        <path d="M40 8 V18M72 40 H62M40 72 V62M8 40 H18" />
      </g>
      <circle cx="40" cy="18" r="2.2" fill="currentColor" />
      <circle cx="62" cy="40" r="2.2" fill="currentColor" />
      <circle cx="40" cy="62" r="2.2" fill="currentColor" />
      <circle cx="18" cy="40" r="2.2" fill="currentColor" />
    </svg>
  )
}

export function HomePage() {
  return (
    <>
      <div className="home-fold">
        <section className="hero">
          <HeroVisual />
          <div className="hero__content">
            <div className="hero__brand-block">
              <h1 className="hero__title">{site.name}</h1>
              <p className="hero__brand mono">{site.englishName}</p>
            </div>
            <p className="hero__lede">{site.tagline}</p>
            <div className="hero__cta">
              <Link className="btn btn--primary" to="/works">
                查看作品
              </Link>
              <Link className="btn btn--ghost" to="/docs">
                快速开始
              </Link>
            </div>
          </div>
        </section>

        <section className="section section--fold-dirs" aria-labelledby="focus-heading">
          <div className="fold-dirs__inner">
            <div className="section__head section__head--fold">
              <div className="section__head-title">
                <h2 id="focus-heading">工坊方向</h2>
                <span className="section__head-en mono">Directions</span>
              </div>
              <p>{site.focus}</p>
            </div>
            <ul className="direction-list direction-list--fold">
              {directions.map((item, index) => (
                <li
                  key={item.id}
                  className={`direction-list__cell direction-list__cell--${index + 1} direction-list__cell--${item.id}`}
                >
                  <Link
                    to={item.href}
                    className="direction-item entry-row"
                    data-palette={item.palette.id}
                    style={
                      {
                        '--dir-accent': item.palette.hex,
                        '--dir-accent-rgb': item.palette.rgb,
                      } as CSSProperties
                    }
                  >
                    <DirectionDeco id={item.id} />
                    <span className="direction-item__index mono" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <strong>{item.name}</strong>
                    <span>{item.brief}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <div className="home-surface">
        <div className="band">
          <section className="section" aria-labelledby="works-heading">
            <div className="section__head">
              <div className="section__head-title">
                <h2 id="works-heading">作品</h2>
                <span className="section__head-en mono">Works</span>
              </div>
              <p>
                云起完全开源；数智AI工业物联网与万象监测可打开演示站；灵枢正在开发中。进入详情获取源码或演示。
              </p>
            </div>
            <ul className="work-cards">
              {works.map((work) => (
                <li key={work.slug}>
                  <WorkCard
                    work={work}
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
        </div>

        <section className="section" aria-labelledby="arch-heading">
          <div className="section__head">
            <div className="section__head-title">
              <h2 id="arch-heading">作品架构</h2>
              <span className="section__head-en mono">Architecture</span>
            </div>
            <p>自下而上四层：开发底座 → 物联控制面 → 监测与孪生 → 行业应用。</p>
          </div>
          <ProductArchitecture />
        </section>
      </div>
    </>
  )
}

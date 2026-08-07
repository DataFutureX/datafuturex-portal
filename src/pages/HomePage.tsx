import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { HeroVisual } from '../components/HeroVisual'
import { WorkCard } from '../components/WorkCard'
import { designLanguages, directions, site } from '../data/site'
import { works } from '../data/works'

const quickStarts = [
  {
    name: '云起应用平台',
    action: '源码',
    hint: 'Gitee 获取源码，或打开演示站试用。',
    href: 'https://gitee.com/DataFutureX/yunqi-admin',
    external: true,
    palette: 'minimal-white',
    hex: '#171717',
    rgb: '23, 23, 23',
  },
  {
    name: '数智AI工业物联网平台',
    action: '演示',
    hint: 'Mock 演示：设备 → 数据 → 规则 → 应用。',
    href: 'https://iot.datafuturex.cn/portal',
    external: true,
    palette: 'industrial-cyan',
    hex: '#0F766E',
    rgb: '15, 118, 110',
  },
  {
    name: '万象监测平台',
    action: '演示',
    hint: '开源正在筹备中，先通过演示门户了解能力。',
    href: 'https://wanxiang.datafuturex.cn/portal',
    external: true,
    palette: 'tech-blue',
    hex: '#2563EB',
    rgb: '37, 99, 235',
  },
  {
    name: '灵枢行业应用市场',
    action: '进展',
    hint: '正在开发中，进展见作品页。',
    href: '/products/lingshu-market',
    external: false,
    palette: 'lingshu-slate',
    hex: '#475569',
    rgb: '71, 85, 105',
  },
] as const

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
              href="https://gitee.com/DataFutureX"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gitee 源码
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
            <li key={item.id}>
              <Link to={item.href} className="direction-item">
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
            云起：完全开源；数智AI工业物联网平台与万象监测平台提供演示站；灵枢行业应用市场正在开发中。点击进入详情。
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
                    ? '查看详情与源码 →'
                    : work.links.demo
                      ? '查看详情与演示 →'
                      : '查看详情 →'
                }
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="palette-heading">
        <div className="section__head">
          <h2 id="palette-heading">设计语言</h2>
          <p>
            门户用未来紫统一品牌；各作品保留独立主色——云起极简白、万象科技蓝、数智AI工业物联网平台工业青、灵枢石板灰。
          </p>
        </div>
        <ul className="palette-list">
          {designLanguages.map((item) => (
            <li key={item.id}>
              <Link
                to={item.href}
                className="palette-item"
                data-palette={item.id}
                style={
                  {
                    '--swatch': item.hex,
                    '--swatch-rgb': item.rgb,
                  } as CSSProperties
                }
              >
                <span className="palette-item__swatch" aria-hidden="true" />
                <span className="palette-item__body">
                  <span className="palette-item__name">
                    <strong>{item.name}</strong>
                    <span className="mono">{item.subject}</span>
                  </span>
                  <span className="palette-item__summary">{item.summary}</span>
                </span>
                <span className="palette-item__go" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section section--compact" aria-labelledby="start-heading">
        <div className="section__head">
          <h2 id="start-heading">快速体验</h2>
          <p>开源工程与演示站的最短路径。</p>
        </div>
        <ol className="start-steps">
          {quickStarts.map((item, index) => {
            const body = (
              <>
                <span className="start-step__index mono" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="start-step__body">
                  <span className="start-step__title">
                    <strong>{item.name}</strong>
                    <span className="start-step__action">{item.action}</span>
                  </span>
                  <span className="start-step__hint">{item.hint}</span>
                </span>
                <span className="start-step__go" aria-hidden="true">
                  →
                </span>
              </>
            )

            return (
              <li key={item.name}>
                {item.external ? (
                  <a
                    className="start-step"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-palette={item.palette}
                    style={
                      {
                        '--swatch': item.hex,
                        '--swatch-rgb': item.rgb,
                      } as CSSProperties
                    }
                  >
                    {body}
                  </a>
                ) : (
                  <Link
                    className="start-step"
                    to={item.href}
                    data-palette={item.palette}
                    style={
                      {
                        '--swatch': item.hex,
                        '--swatch-rgb': item.rgb,
                      } as CSSProperties
                    }
                  >
                    {body}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </section>
    </>
  )
}

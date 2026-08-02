import type { CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ShotGallery } from '../components/ShotGallery'
import { getWork, workThemeVars } from '../data/works'

export function ProductDetailPage() {
  const { slug = '' } = useParams()
  const work = getWork(slug)

  if (!work) {
    return (
      <div className="page">
        <h1>未找到作品</h1>
        <p>
          <Link to="/products">返回作品列表</Link>
        </p>
      </div>
    )
  }

  return (
    <div
      className="page page--wide work-theme"
      data-palette={work.palette.id}
      style={workThemeVars(work.palette) as CSSProperties}
    >
      <nav className="breadcrumb" aria-label="面包屑">
        <Link to="/">首页</Link>
        <span aria-hidden="true">/</span>
        <Link to="/products">作品</Link>
        <span aria-hidden="true">/</span>
        <span>{work.name}</span>
      </nav>

      <header className="page-hero work-hero">
        {work.logo ? (
          <img className="work-hero__logo" src={work.logo} alt="" width={40} height={40} />
        ) : null}
        <p className="eyebrow">
          <span className="mono">{work.englishName}</span>
          <span className="work-palette-chip mono">{work.palette.label}</span>
          <span className="work-tag">{work.tag}</span>
        </p>
        <h1>{work.name}</h1>
        <p>{work.summary}</p>
        <p className="access-note">{work.accessNote}</p>
        <div className="hero__cta">
          {work.links.demo ? (
            <a
              className="btn btn--primary"
              href={work.links.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {work.openSource ? '在线演示' : '打开演示站'}
              <span className="ext" aria-hidden="true">
                ↗
              </span>
            </a>
          ) : null}
          {work.openSource ? (
            <>
              <Link className="btn btn--ghost" to={work.links.docsAnchor}>
                开发文档
              </Link>
              {work.links.github ? (
                <a
                  className="btn btn--ghost"
                  href={work.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
              ) : null}
              {work.links.gitee ? (
                <a
                  className="btn btn--ghost"
                  href={work.links.gitee}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gitee ↗
                </a>
              ) : null}
            </>
          ) : (
            <Link className="btn btn--ghost" to={work.links.docsAnchor}>
              {work.links.demo ? '演示说明' : '产品说明'}
            </Link>
          )}
        </div>
      </header>

      <section className="prose-block" id="screenshots">
        <h2>系统截图</h2>
        {work.screenshots.length > 0 ? (
          <ShotGallery shots={work.screenshots} />
        ) : (
          <p className="shot-placeholder">截图采集中，请先通过演示站预览界面。</p>
        )}
      </section>

      <div className="work-detail-grid">
        <section className="prose-block">
          <h2>技术栈</h2>
          <ul className="stack-list">
            {work.stack.map((item) => (
              <li key={item}>
                <span className="mono">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="prose-block">
          <h2>核心能力</h2>
          <ul>
            {work.capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="prose-block">
          <h2>适用场景</h2>
          <ul>
            {work.scenarios.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="prose-block">
          <h2>{work.openSource ? '快速开始（开发）' : '如何体验'}</h2>
          <pre className="code-block">
            <code>{work.quickStart.join('\n')}</code>
          </pre>
          <ul>
            {work.accounts.map((account) => (
              <li key={account.label}>
                <strong>{account.label}</strong> — {account.value}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

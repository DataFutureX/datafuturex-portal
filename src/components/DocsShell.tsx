import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { docChapters, getDocPage, getDocPager } from '../data/docs'

export function DocsShell() {
  const location = useLocation()
  const [tocOpen, setTocOpen] = useState(true)
  const slug = location.pathname.replace(/^\/docs\/?/, '').split('/')[0] || 'getting-started'
  const pager = getDocPager(slug)
  const currentDoc = getDocPage(slug)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 860px)')
    const sync = () => {
      if (!mq.matches) setTocOpen(true)
    }
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ block: 'start' })
    }
  }, [location.pathname, location.hash])

  return (
    <div className="docs">
      <aside className="docs__sidebar" aria-label="文档目录">
        <details
          className="docs__toc"
          open={tocOpen}
          onToggle={(e) => {
            const next = e.currentTarget.open
            if (window.matchMedia('(max-width: 860px)').matches) {
              setTocOpen(next)
            } else {
              e.currentTarget.open = true
              setTocOpen(true)
            }
          }}
        >
          <summary className="docs__toc-summary">
            <span className="eyebrow mono">Docs</span>
            <span className="docs__toc-label">文档目录</span>
          </summary>
          <div className="docs__toc-body">
            <p className="docs__toc-brand eyebrow mono">Docs</p>
            {docChapters.map((chapter) => (
              <div key={chapter.slug} className="docs__group">
                <h2>
                  <NavLink
                    to={chapter.href}
                    className={({ isActive }) =>
                      isActive ? 'docs__group-link is-active' : 'docs__group-link'
                    }
                    end
                  >
                    {chapter.title}
                  </NavLink>
                </h2>
                <ul>
                  {chapter.items.map((item) => {
                    const onPage = location.pathname === chapter.href
                    const activeId = location.hash.replace(/^#/, '') || chapter.items[0]?.id
                    const isActive = onPage && activeId === item.id
                    return (
                      <li key={item.id}>
                        <Link to={item.href} className={isActive ? 'is-active' : undefined}>
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </details>
      </aside>

      <div className="docs__article-wrap">
        {currentDoc ? (
          <nav className="breadcrumb" aria-label="面包屑">
            <Link to="/">主页</Link>
            <span aria-hidden="true">/</span>
            <Link to="/docs/getting-started">文档</Link>
            <span aria-hidden="true">/</span>
            <span>{currentDoc.title}</span>
          </nav>
        ) : null}
        <Outlet />
        {(pager.prev || pager.next) && (
          <nav className="docs-pager" aria-label="相邻文档">
            {pager.prev ? (
              <Link className="docs-pager__link docs-pager__link--prev" to={`/docs/${pager.prev.slug}`}>
                <span className="docs-pager__label">上一篇</span>
                <span className="docs-pager__title">{pager.prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {pager.next ? (
              <Link className="docs-pager__link docs-pager__link--next" to={`/docs/${pager.next.slug}`}>
                <span className="docs-pager__label">下一篇</span>
                <span className="docs-pager__title">{pager.next.title}</span>
              </Link>
            ) : null}
          </nav>
        )}
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../data/site'

const navItems = [
  { to: '/products', label: '成果' },
  { to: '/docs', label: '文档' },
  { to: '/examples', label: '示例' },
  { to: '/support', label: '支持' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__text">
            <span className="brand__name">{site.name}</span>
            <span className="brand__en mono">{site.englishName}</span>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? '关闭菜单' : '打开菜单'}</span>
          <span className="nav-toggle__bars" aria-hidden="true" />
        </button>

        <nav id="site-nav" className={`site-nav${open ? ' is-open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'site-nav__link is-active' : 'site-nav__link'
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="site-nav__console"
            href="https://yunqi.datafuturex.cn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            云起演示
            <span className="ext" aria-hidden="true">
              ↗
            </span>
          </a>
        </nav>
      </div>
    </header>
  )
}

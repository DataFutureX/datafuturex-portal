import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../data/site'

const navItems = [
  { to: '/', label: '主页', end: true },
  { to: '/products', label: '作品' },
  { to: '/docs', label: '文档' },
  { to: '/support', label: '支持' },
]

function GitHubIcon() {
  return (
    <svg className="site-nav__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.093.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.467-1.11-1.467-.908-.621.069-.608.069-.608 1.004.071 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.952 0-1.094.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.338c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.688 0 3.848-2.339 4.695-4.566 4.944.359.31.678.921.678 1.856 0 1.339-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.025 10.025 0 0 0 22 12.021C22 6.486 17.523 2 12 2z"
      />
    </svg>
  )
}

function GiteeIcon() {
  return (
    <svg className="site-nav__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.373c.328 0 .593.265.594.593v1.482a.594.594 0 0 1-.593.594H9.747l.002.875h8.327a.593.593 0 0 1 .593.594v7.042a.594.594 0 0 1-.593.593H4.326a.593.593 0 0 1-.593-.593V8.511c0-.328.266-.594.593-.594h4.9V6.56a.594.594 0 0 1 .593-.594z"
      />
    </svg>
  )
}

const sourceLinks = [
  {
    href: 'https://github.com/DataFutureX',
    label: 'GitHub',
    Icon: GitHubIcon,
  },
  {
    href: 'https://gitee.com/datafuturex',
    label: 'Gitee',
    Icon: GiteeIcon,
  },
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
              end={item.end}
              className={({ isActive }) =>
                isActive ? 'site-nav__link is-active' : 'site-nav__link'
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="site-nav__sources">
            {sourceLinks.map(({ href, label, Icon }) => (
              <a
                key={href}
                className="site-nav__source site-nav__source--icon"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} 源码组织`}
                title={label}
                onClick={() => setOpen(false)}
              >
                <Icon />
                <span className="site-nav__source-label">{label}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

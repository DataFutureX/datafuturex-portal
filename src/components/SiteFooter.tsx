import { Link } from 'react-router-dom'
import { site } from '../data/site'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="brand__name">{site.name}</span>
          <p className="brand__en mono">{site.englishName}</p>
          <p>
            {site.domain}
            <br />
            {site.focus}
          </p>
        </div>
        <div className="site-footer__cols">
          <div>
            <h2>探索</h2>
            <Link to="/">主页</Link>
            <Link to="/products">成果</Link>
            <Link to="/docs">文档</Link>
            <Link to="/support">支持</Link>
          </div>
          <div>
            <h2>源码</h2>
            <a
              href="https://github.com/DataFutureX"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://gitee.com/datafuturex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gitee ↗
            </a>
          </div>
        </div>
      </div>
      <p className="site-footer__meta">
        <span>
          © {new Date().getFullYear()} {site.name} · {site.englishName}
        </span>
        <a className="mono" href={site.origin}>
          {site.domain}
        </a>
      </p>
    </footer>
  )
}

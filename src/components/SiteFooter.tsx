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
            <Link to="/products">成果</Link>
            <Link to="/docs">文档</Link>
            <Link to="/examples">示例</Link>
          </div>
          <div>
            <h2>支持</h2>
            <Link to="/support">账号与仓库</Link>
            <a
              href="https://yunqi.datafuturex.cn"
              target="_blank"
              rel="noopener noreferrer"
            >
              云起演示 ↗
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

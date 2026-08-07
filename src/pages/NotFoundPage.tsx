import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="page page--narrow">
      <header className="page-hero">
        <p className="eyebrow mono">404</p>
        <h1>页面未找到</h1>
        <p>该地址不存在或已移动。可以从作品、文档或主页继续浏览。</p>
        <p className="page-hero__actions">
          <Link className="btn btn--primary" to="/products">
            查看作品
          </Link>
          <Link className="btn btn--ghost" to="/docs">
            阅读文档
          </Link>
          <Link className="btn btn--ghost" to="/">
            返回主页
          </Link>
        </p>
      </header>
    </div>
  )
}

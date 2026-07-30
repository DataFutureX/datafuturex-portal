import { Link } from 'react-router-dom'

export function SupportPage() {
  return (
    <div className="page page--narrow">
      <header className="page-hero">
        <p className="eyebrow mono">Support</p>
        <h1>支持</h1>
        <p>开源仓库、演示站与账号说明。万象未开源，请以演示站为准。</p>
      </header>

      <section className="prose-block">
        <h2>云起管理后台（完全开源）</h2>
        <ul>
          <li>
            成果页：<Link to="/products/yunqi-admin">云起管理后台</Link>
          </li>
          <li>
            GitHub：
            <a
              href="https://github.com/DataFutureX/yunqi-admin"
              target="_blank"
              rel="noopener noreferrer"
            >
              DataFutureX/yunqi-admin ↗
            </a>
          </li>
          <li>
            Gitee：
            <a
              href="https://gitee.com/DataFutureX/yunqi-admin"
              target="_blank"
              rel="noopener noreferrer"
            >
              DataFutureX/yunqi-admin ↗
            </a>
          </li>
          <li>
            在线演示：
            <a
              href="https://yunqi.datafuturex.cn"
              target="_blank"
              rel="noopener noreferrer"
            >
              yunqi.datafuturex.cn ↗
            </a>
            （demo / demo123）
          </li>
          <li>前后端联调账号：admin / admin123</li>
        </ul>
      </section>

      <section className="prose-block">
        <h2>万象物联监测平台（未开源 · 仅演示）</h2>
        <ul>
          <li>
            成果页：<Link to="/products/wanxiang-hydro">万象物联监测平台</Link>
          </li>
          <li>
            演示站：
            <a
              href="https://wanxiang.datafuturex.cn/portal"
              target="_blank"
              rel="noopener noreferrer"
            >
              wanxiang.datafuturex.cn/portal ↗
            </a>
          </li>
          <li>不提供源码下载与本地联调公开指引</li>
          <li>演示账号以演示站页面说明为准</li>
        </ul>
      </section>

      <section className="prose-block">
        <h2>常见问题</h2>
        <ul>
          <li>
            <strong>想二次开发哪个项目？</strong> — 请使用完全开源的云起管理后台。
          </li>
          <li>
            <strong>万象能否拿到源码？</strong> — 当前未开源，仅可通过演示站与门户截图了解能力。
          </li>
          <li>
            <strong>云起演示打不开</strong> — 确认可访问 yunqi.datafuturex.cn，或本地{' '}
            <code>npm run dev:demo</code>。
          </li>
        </ul>
      </section>
    </div>
  )
}

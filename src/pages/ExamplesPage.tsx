import { Link } from 'react-router-dom'

const examples = [
  {
    title: '云起在线演示',
    stack: 'yunqi.datafuturex.cn/portal',
    summary: '完全开源工程的在线演示，先进入 portal 再浏览后台能力。',
    href: 'https://yunqi.datafuturex.cn/portal',
    external: true,
  },
  {
    title: '云起本地演示 / 开发',
    stack: 'yunqi-admin',
    summary: '克隆源码：npm run dev:demo 或前后端联调二次开发。',
    href: '/docs#yunqi-demo',
  },
  {
    title: '云起系统截图',
    stack: '门户图集',
    summary: '门户、登录、权限、公告、监控等界面一览。',
    href: '/products/yunqi-admin#screenshots',
  },
  {
    title: '数智AI工业物联网演示站',
    stack: 'iot.datafuturex.cn',
    summary: '开源正在筹备中；设备接入 → 数据中心 → 规则 → 应用市场。',
    href: 'https://iot.datafuturex.cn/portal',
    external: true,
  },
  {
    title: '数智AI工业物联网系统截图',
    stack: '门户图集',
    summary: '产品门户、设备管理、数据中心、规则引擎等界面一览。',
    href: '/products/smart-iot-ai#screenshots',
  },
  {
    title: '万象演示站',
    stack: 'wanxiang.datafuturex.cn',
    summary: '开源正在筹备中，当前演示展示：/portal 入口。',
    href: 'https://wanxiang.datafuturex.cn/portal',
    external: true,
  },
  {
    title: '万象系统截图',
    stack: '门户图集',
    summary: '演示站门户、登录、仪表盘、地图、实时数据截图。',
    href: '/products/wanxiang-hydro#screenshots',
  },
]

export function ExamplesPage() {
  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow mono">Examples</p>
        <h1>示例</h1>
        <p>开源工程可演示与开发；筹备中的工程请走演示站与截图图集。</p>
      </header>
      <ul className="capability-list">
        {examples.map((example, index) => (
          <li key={example.title}>
            {example.external ? (
              <a
                href={example.href}
                className="capability-row"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="capability-row__index mono">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="capability-row__name">{example.title}</span>
                <span className="capability-row__summary">
                  <span className="mono">{example.stack}</span>
                  {' — '}
                  {example.summary}
                </span>
                <span className="capability-row__go" aria-hidden="true">
                  ↗
                </span>
              </a>
            ) : (
              <Link to={example.href} className="capability-row">
                <span className="capability-row__index mono">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="capability-row__name">{example.title}</span>
                <span className="capability-row__summary">
                  <span className="mono">{example.stack}</span>
                  {' — '}
                  {example.summary}
                </span>
                <span className="capability-row__go" aria-hidden="true">
                  →
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

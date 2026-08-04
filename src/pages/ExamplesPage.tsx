import { Link } from 'react-router-dom'

const examples = [
  {
    title: '云起在线演示',
    stack: 'yunqi.datafuturex.cn/portal',
    summary: '云起应用平台（YQAP）在线演示：先进入 portal，再体验权限与运维能力。',
    href: 'https://yunqi.datafuturex.cn/portal',
    external: true,
  },
  {
    title: '云起本地演示 / 开发',
    stack: 'yunqi-admin · YQAP',
    summary: '克隆 monorepo：npm run dev:demo，或根目录一键前后端联调。',
    href: '/docs#yunqi-demo',
  },
  {
    title: '云起系统截图',
    stack: '门户图集',
    summary: '登录、工作台、权限、公告、监控、个人中心等界面一览。',
    href: '/products/yunqi-admin#screenshots',
  },
  {
    title: '数智AI工业物联网演示站',
    stack: 'iot.datafuturex.cn/portal',
    summary: '暂未开源 · 纯前端 Mock；设备管理 · 数据中心 · 规则引擎 · 平台管理 · 应用市场。',
    href: 'https://iot.datafuturex.cn/portal',
    external: true,
  },
  {
    title: '数智AI工业物联网系统截图',
    stack: '门户图集',
    summary: '登录、工作台、应用市场、产品/设备、实时数据、规则与平台管理界面一览。',
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
  {
    title: '灵枢行业应用市场',
    stack: '正在开发中',
    summary: '行业应用枢纽，暂无演示；查看能力规划与进展说明。',
    href: '/products/lingshu-market',
  },
]

export function ExamplesPage() {
  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow mono">Examples</p>
        <h1>示例</h1>
        <p>开源工程可演示与开发；演示站与截图图集；开发中作品见作品页进展。</p>
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

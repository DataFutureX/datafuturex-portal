import { Link } from 'react-router-dom'

const chapters = [
  {
    title: '云起管理后台',
    items: [
      { id: 'yunqi', label: '概述与开源' },
      { id: 'yunqi-demo', label: '本地演示模式' },
      { id: 'yunqi-fullstack', label: '前后端联调开发' },
    ],
  },
  {
    title: '数智AI工业物联网平台',
    items: [
      { id: 'smart-iot', label: '概述与演示站' },
      { id: 'smart-iot-shots', label: '系统截图' },
    ],
  },
  {
    title: '万象物联监测平台',
    items: [
      { id: 'wanxiang', label: '概述与演示站' },
      { id: 'wanxiang-shots', label: '系统截图' },
    ],
  },
  {
    title: '灵枢行业应用市场',
    items: [{ id: 'lingshu', label: '概述与进展' }],
  },
]

export function DocsPage() {
  return (
    <div className="docs">
      <aside className="docs__sidebar" aria-label="文档目录">
        <p className="eyebrow mono">Docs</p>
        {chapters.map((chapter) => (
          <div key={chapter.title} className="docs__group">
            <h2>{chapter.title}</h2>
            <ul>
              {chapter.items.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      <article className="docs__article">
        <header className="page-hero">
          <p className="eyebrow mono">Getting started</p>
          <h1>快速开始</h1>
          <p>
            云起：开源展示与开发；数智AI工业物联网与万象：演示站；灵枢：正在开发中。也可查看{' '}
            <Link to="/examples">示例入口</Link>。
          </p>
        </header>

        <section id="yunqi" className="prose-block">
          <h2>云起管理后台 · 概述与开源</h2>
          <p>
            <strong>完全开源（MIT）</strong>
            。可在线演示、全面查看系统截图，并克隆源码二次开发。仓库：
            <a
              href="https://github.com/DataFutureX/yunqi-admin"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            、
            <a
              href="https://gitee.com/DataFutureX/yunqi-admin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gitee
            </a>
            。在线演示：
            <a
              href="https://yunqi.datafuturex.cn/portal"
              target="_blank"
              rel="noopener noreferrer"
            >
              yunqi.datafuturex.cn/portal
            </a>
            （demo / demo123）。
          </p>
          <p>
            作品页（含系统截图）：
            <Link to="/products/yunqi-admin">云起管理后台</Link>
          </p>
        </section>

        <section id="yunqi-demo" className="prose-block">
          <h2>云起 · 本地演示模式</h2>
          <p>无需后端，纯前端 Mock，适合快速体验界面与权限流程。</p>
          <pre className="code-block">
            <code>{`git clone https://github.com/DataFutureX/yunqi-admin.git
cd yunqi-admin/frontend
npm install
npm run dev:demo`}</code>
          </pre>
          <p>
            打开 http://localhost:3000 。演示账号：<code>demo / demo123</code>。
          </p>
        </section>

        <section id="yunqi-fullstack" className="prose-block">
          <h2>云起 · 前后端联调开发</h2>
          <p>需要 JDK 21+、Maven 3.9+、MySQL 8+。</p>
          <pre className="code-block">
            <code>{`# 后端
cd yunqi-admin/backend
mysql -u root -p < yunqi-admin-core/src/main/resources/db/init.sql
# 配置 application-dev.yml 中 yunqi.datasource.*
start-dev.bat

# 前端
cd yunqi-admin/frontend
npm install && npm run dev`}</code>
          </pre>
          <p>
            后端默认 http://localhost:8080 ，账号 <code>admin / admin123</code>
            。Swagger：<code>/swagger-ui.html</code>。
          </p>
        </section>

        <section id="smart-iot" className="prose-block">
          <h2>数智AI工业物联网平台 · 概述与演示站</h2>
          <p>
            从设备接入到行业应用的 AI 物联控制面。控制台四大业务域：设备管理 · 数据中心 · 规则引擎 ·
            平台管理（另含工作台 / 应用市场）。
            <strong>暂未开源</strong>
            ，当前仅通过演示站展示能力与界面。
          </p>
          <p>
            演示门户：
            <a
              href="https://iot.datafuturex.cn/portal"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://iot.datafuturex.cn/portal
            </a>
            （租户 <code>platform</code>，账号 <code>demo / demo123</code>）。
          </p>
          <p>
            作品页（含系统截图）：
            <Link to="/products/smart-iot-ai">数智AI工业物联网平台</Link>
          </p>
        </section>

        <section id="smart-iot-shots" className="prose-block">
          <h2>数智AI工业物联网 · 系统截图</h2>
          <p>
            门户已收录登录、工作台、应用市场、设备管理、数据中心、规则引擎与平台管理等界面截图。完整交互请打开演示站体验。
          </p>
          <p>
            <Link className="btn btn--primary" to="/products/smart-iot-ai#screenshots">
              查看截图图集
            </Link>
          </p>
        </section>

        <section id="wanxiang" className="prose-block">
          <h2>万象物联监测平台 · 概述与演示站</h2>
          <p>
            水文水资源物联监测平台，覆盖协议接入、监测告警、地图视频与 AI
            问答等能力。
            <strong>开源正在筹备中</strong>
            ，暂不提供源码下载；当前仅通过演示站展示能力与界面。
          </p>
          <p>
            演示门户：
            <a
              href="https://wanxiang.datafuturex.cn/portal"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://wanxiang.datafuturex.cn/portal
            </a>
          </p>
          <p>
            作品页（含系统截图）：
            <Link to="/products/wanxiang-hydro">万象物联监测平台</Link>
          </p>
        </section>

        <section id="wanxiang-shots" className="prose-block">
          <h2>万象 · 系统截图</h2>
          <p>
            门户已收录演示站关键界面截图（门户、登录、仪表盘、地图、实时数据等）。完整交互请直接打开演示站体验。
          </p>
          <p>
            <Link className="btn btn--primary" to="/products/wanxiang-hydro#screenshots">
              查看截图图集
            </Link>
          </p>
        </section>

        <section id="lingshu" className="prose-block">
          <h2>灵枢行业应用市场 · 概述与进展</h2>
          <p>
            行业应用枢纽，面向水利、灌区、农业、地质灾害等场景，规划应用目录、分发启停与场景模板。
            <strong>正在开发中</strong>
            ，暂未提供演示站与源码。
          </p>
          <p>
            作品页：
            <Link to="/products/lingshu-market">灵枢行业应用市场</Link>
          </p>
        </section>

        <p className="section__more">
          下一步：<Link to="/examples">浏览示例入口</Link> ·{' '}
          <Link to="/products">返回作品</Link>
        </p>
      </article>
    </div>
  )
}

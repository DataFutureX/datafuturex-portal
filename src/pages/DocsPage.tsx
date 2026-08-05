import { Link } from 'react-router-dom'

const chapters = [
  {
    title: '云起应用平台',
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
    title: '万象监测平台',
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
            云起：开源展示与开发；数智AI工业物联网与万象监测平台：演示站；灵枢：正在开发中。也可查看{' '}
            <Link to="/examples">示例入口</Link>。
          </p>
        </header>

        <section id="yunqi" className="prose-block">
          <h2>云起应用平台 · 概述与开源</h2>
          <p>
            <strong>YunQi Application Platform（YQAP）</strong>
            ，面向企业数字化应用建设的模块化开发基础平台。
            <strong>完全开源（MIT）</strong>
            。可在线演示、查看系统截图，并克隆 monorepo 二次开发。仓库：
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
            <Link to="/products/yunqi-admin">云起应用平台</Link>
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
            打开 http://localhost:3000 （可先看 <code>/portal</code>
            ）。演示账号：<code>demo / demo123</code>
            （演示态任意账号密码均可登录）。
          </p>
        </section>

        <section id="yunqi-fullstack" className="prose-block">
          <h2>云起 · 前后端联调开发</h2>
          <p>需要 JDK 21+、Maven 3.9+、MySQL 8+。推荐仓库根目录一键启动。</p>
          <pre className="code-block">
            <code>{`# 初始化数据库
cd yunqi-admin/backend
mysql -u root -p < yqap-core/src/main/resources/db/init.sql
# 配置 yqap-core/.../application-dev.yml 中 yunqi.datasource.*

# 根目录一键启动（推荐）
cd yunqi-admin
# Windows: start.bat  或  .\\start.ps1
# Linux / macOS: ./start.sh

# 或分别启动
cd backend && start-dev.bat   # http://localhost:8080
cd frontend && npm install && npm run dev`}</code>
          </pre>
          <p>
            前端 http://localhost:3000 ，后端 http://localhost:8080 ，账号{' '}
            <code>admin / admin123</code>
            。Swagger：<code>/swagger-ui.html</code>。
          </p>
        </section>

        <section id="smart-iot" className="prose-block">
          <h2>数智AI工业物联网平台 · 概述与演示站</h2>
          <p>
            AI 原生工业物联网控制面：设备接入 → 数据采集/治理 → 规则决策 → 行业应用。控制台四大业务域为
            <strong>设备管理 · 数据中心 · 规则引擎 · 平台管理</strong>
            （另含主页工作台 / 应用市场）。MQTT 接入、数据中心双档存储（PostgreSQL / TDengine）、规则引擎与应用市场已落地。
            <strong>暂未开源</strong>
            ；基于开源底座云起应用平台演进。
          </p>
          <p>
            演示门户（纯前端 Mock）：
            <a
              href="https://iot.datafuturex.cn/portal"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://iot.datafuturex.cn/portal
            </a>
            。租户 <code>platform</code>，账号 <code>demo / demo123</code>。
          </p>
          <p>
            作品页（含系统截图）：
            <Link to="/products/smart-iot-ai">数智AI工业物联网平台</Link>
          </p>
        </section>

        <section id="smart-iot-shots" className="prose-block">
          <h2>数智AI工业物联网 · 系统截图</h2>
          <p>
            门户已收录正式站模块截图：登录、工作台、应用市场、产品/设备、实时数据、规则管理、用户/菜单/系统设置。完整交互请打开演示站体验。
          </p>
          <p>
            <Link className="btn btn--primary" to="/products/smart-iot-ai#screenshots">
              查看截图图集
            </Link>
          </p>
        </section>

        <section id="wanxiang" className="prose-block">
          <h2>万象监测平台 · 概述与演示站</h2>
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
            <Link to="/products/wanxiang-hydro">万象监测平台</Link>
          </p>
        </section>

        <section id="wanxiang-shots" className="prose-block">
          <h2>万象监测平台 · 系统截图</h2>
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

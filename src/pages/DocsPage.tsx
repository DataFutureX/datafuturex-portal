import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CodeBlock } from '../components/CodeBlock'
import { docChapters } from '../data/docs'

const tryLinks = [
  {
    title: '云起应用平台',
    hint: 'yunqi.datafuturex.cn/portal · demo / demo123',
    href: 'https://yunqi.datafuturex.cn/portal',
    external: true,
  },
  {
    title: '数智AI工业物联网平台',
    hint: 'iot.datafuturex.cn/portal · 租户 platform',
    href: 'https://iot.datafuturex.cn/portal',
    external: true,
  },
  {
    title: '万象监测平台',
    hint: 'wanxiang.datafuturex.cn/portal · demo / demo123',
    href: 'https://wanxiang.datafuturex.cn/portal',
    external: true,
  },
  {
    title: '灵枢行业应用市场',
    hint: '正在开发中 · 暂无演示站',
    href: '/works/lingshu-market',
    external: false,
  },
] as const

export function DocsPage() {
  const [tocOpen, setTocOpen] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 860px)')
    const sync = () => {
      if (!mq.matches) setTocOpen(true)
    }
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return (
    <div className="docs">
      <aside className="docs__sidebar" aria-label="文档目录">
        <details
          className="docs__toc"
          open={tocOpen}
          onToggle={(e) => {
            const next = e.currentTarget.open
            if (window.matchMedia('(max-width: 860px)').matches) {
              setTocOpen(next)
            } else {
              e.currentTarget.open = true
              setTocOpen(true)
            }
          }}
        >
          <summary className="docs__toc-summary">
            <span className="eyebrow mono">Docs</span>
            <span className="docs__toc-label">文档目录</span>
          </summary>
          <div className="docs__toc-body">
            <p className="docs__toc-brand eyebrow mono">Docs</p>
            {docChapters.map((chapter) => (
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
          </div>
        </details>
      </aside>

      <article className="docs__article">
        <header className="page-hero">
          <p className="eyebrow mono">Docs · Getting started</p>
          <h1>文档</h1>
          <p>
            快速开始：云起可开源开发；数智AI工业物联网与万象监测提供演示站；灵枢正在开发中。先从体验入口进入演示，再按作品阅读说明。
          </p>
        </header>

        <section id="try" className="prose-block">
          <h2>体验入口</h2>
          <p>四个平台的演示站入口；灵枢正在开发中，可先查看作品页进展。</p>
          <ul className="docs-try-list">
            {tryLinks.map((item) => {
              const body = (
                <>
                  <strong>{item.title}</strong>
                  <span className="mono">{item.hint}</span>
                  {item.external ? (
                    <span className="ext" aria-hidden="true">
                      ↗
                    </span>
                  ) : null}
                </>
              )
              return (
                <li key={item.title}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {body}
                    </a>
                  ) : item.href.startsWith('/') ? (
                    <Link to={item.href}>{body}</Link>
                  ) : (
                    <a href={item.href}>{body}</a>
                  )}
                </li>
              )
            })}
          </ul>
        </section>

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
            <Link to="/works/yunqi-admin#screenshots">云起应用平台</Link>
          </p>        </section>

<section id="yunqi-demo" className="prose-block">
          <h2>云起 · 本地演示模式</h2>
          <p>无需后端，纯前端 Mock，适合快速体验界面与权限流程。</p>
          <CodeBlock>{`git clone https://github.com/DataFutureX/yunqi-admin.git
cd yunqi-admin/frontend
npm install
npm run dev:demo`}</CodeBlock>
          <p>
            打开 http://localhost:3000 （可先看 <code>/portal</code>
            ）。演示账号：<code>demo / demo123</code>
            （演示态任意账号密码均可登录）。
          </p>
        </section>

<section id="yunqi-fullstack" className="prose-block">
          <h2>云起 · 前后端联调开发</h2>
          <p>需要 JDK 21+、Maven 3.9+、MySQL 8+。推荐仓库根目录一键启动。</p>
          <CodeBlock>{`# 初始化数据库
cd yunqi-admin/backend
mysql -u root -p < yqap-core/src/main/resources/db/init.sql
# 配置 yqap-core/.../application-dev.yml 中 yunqi.datasource.*

# 根目录一键启动（推荐）
cd yunqi-admin
# Windows: start.bat  或  .\\start.ps1
# Linux / macOS: ./start.sh

# 或分别启动
cd backend && start-dev.bat   # http://localhost:8080
cd frontend && npm install && npm run dev`}</CodeBlock>
          <p>
            前端 http://localhost:3000 ，后端 http://localhost:8080 ，账号{' '}
            <code>admin / admin123</code>
            。Swagger：<code>/swagger-ui.html</code>。
          </p>
        </section>

        <section id="yunqi-shots" className="prose-block">
          <h2>云起应用平台 · 系统截图</h2>
          <p>
            门户已收录登录、工作台、用户/单位/角色/菜单、系统设置、公告、操作日志、系统监控、接口文档与个人中心等界面截图。完整交互请打开演示站或本地演示体验。
          </p>
          <p>
            <Link className="btn btn--primary" to="/works/yunqi-admin#screenshots">
              查看截图图集
            </Link>
          </p>
        </section>

<section id="smart-iot" className="prose-block">
          <h2>数智AI工业物联网平台 · 概述与演示站</h2>
          <p>
            <strong>Smart AI Industrial IoT Platform（v1.0.0）</strong>
            ，从设备接入到行业应用的 AI 物联控制面。控制台四大业务域为
            <strong>设备管理 · 数据中心 · 规则引擎 · 平台设置</strong>
            （另含主页工作台 / 应用市场）。已落地：MQTT 主接入、数据中心双档存储（PostgreSQL
            默认 / TDengine 可选）、规则告警与通道转发、OTA、应用市场、多租户 RBAC。
            <strong>AI 分析与数据孪生为规划能力</strong>
            ，不在当前交付范围。
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
            。租户 <code>platform</code>，账号 <code>demo / demo123</code>
            。技术栈：Vue 3 · Java 21 · Spring Boot 4 · PostgreSQL 16 · MQTT / EMQX。
          </p>
          <p>
            作品页（含系统截图）：
            <Link to="/works/smart-iot-ai">数智AI工业物联网平台</Link>
            。设备侧约定见{' '}
            <a href="#smart-iot-access">设备接入（MQTT）</a>。
          </p>
        </section>

<section id="smart-iot-access" className="prose-block">
          <h2>数智AI工业物联网平台 · 设备接入（MQTT）</h2>
          <p>
            控制台按「型号 → 实例」纳管：
            <strong>协议 → 产品（物模型 + Topic）→ 设备</strong>
            。主接入为 MQTT；HTTP 接入已实现但默认关闭；Modbus 为 stub
            模拟读；TCP / CUSTOM 为占位。无独立语言 SDK，联调可用控制台密钥 + MQTT
            客户端，或仓库内 <code>iot-simulator</code>（需本地联调环境）。
          </p>
          <p>推荐顺序（演示站可点开各菜单对照）：</p>
          <ol>
            <li>
              <strong>协议</strong>：设备管理 → 协议，确认 MQTT 等协议已启用。
            </li>
            <li>
              <strong>产品</strong>：新建产品并绑定协议；产品编码会写入通信 Topic。
            </li>
            <li>
              <strong>物模型与 Topic</strong>
              ：配置属性 / 事件 / 服务；接入 Topic 可先用系统默认 6 条。
            </li>
            <li>
              <strong>注册设备</strong>
              ：保存一次性设备密钥（关闭后只能重置）。MQTT 用户名 = 设备编码，密码 =
              设备密钥。
            </li>
            <li>
              <strong>联调验证</strong>
              ：上报心跳与属性后看设备在线；再验影子 / 指令，并到数据中心、规则引擎确认。
            </li>
          </ol>
          <p>默认 Topic（将产品编码、设备编码代入）：</p>
          <CodeBlock>{`心跳：     iot/{产品编码}/{设备编码}/sys/heartbeat
属性上报： iot/{产品编码}/{设备编码}/thing/property/post
事件上报： iot/{产品编码}/{设备编码}/thing/event/{事件标识}/post
影子上报： iot/{产品编码}/{设备编码}/shadow/update
影子下发： iot/{产品编码}/{设备编码}/shadow/delta          ← 设备需订阅
服务下发： iot/{产品编码}/{设备编码}/service/{服务标识}/invoke  ← 设备需订阅`}</CodeBlock>
          <p>属性上报报文示例：</p>
          <CodeBlock>{`{"temperature": 25.3, "humidity": 61.2}`}</CodeBlock>
          <p>
            Broker 默认示例：<code>tcp://127.0.0.1:1883</code>
            （以实际部署为准）。产品 Topic
            变更后接入层支持热更新，无需重启。完整交互请打开演示站体验。
          </p>
        </section>

<section id="smart-iot-shots" className="prose-block">
          <h2>数智AI工业物联网平台 · 系统截图</h2>
          <p>
            门户已收录正式站模块截图：登录、工作台、应用市场、产品/设备、实时数据、规则管理、用户/菜单/系统设置。完整交互请打开演示站体验。
          </p>
          <p>
            <Link className="btn btn--primary" to="/works/smart-iot-ai#screenshots">
              查看截图图集
            </Link>
          </p>
        </section>

<section id="wanxiang" className="prose-block">
          <h2>万象监测平台 · 概述与演示站</h2>
          <p>
            <strong>WanXiang Monitor Platform</strong>
            ，面向遥测站的数据采集、存储、分析与可视化平台。基于云起后台管理系统迭代：双规约接入（SL 651 /
            SL/T 427）、实时监测与阈值告警、二维 / 三维一张图与视频专题、巡检管理，以及
            <strong>数智中枢</strong>
            （Agent 会话 / 中心与 Graph 编排、知识库 RAG、NL2SQL、AI 简报）。
            <strong>开源正在筹备中</strong>
            ，暂不提供源码下载；当前通过演示站（纯前端 Mock）展示能力与界面。
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
            ；数智中枢介绍：
            <a
              href="https://wanxiang.datafuturex.cn/portal/ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              /portal/ai
            </a>
            。账号 <code>demo / demo123</code>。
          </p>
          <p>
            作品页（含系统截图）：
            <Link to="/works/wanxiang-hydro">万象监测平台</Link>
          </p>
        </section>

        <section id="wanxiang-ai" className="prose-block">
          <h2>万象 · 数智中枢与 Agent</h2>
          <p>
            数智中枢提供可配置 Agent、知识库 RAG、NL2SQL、Tool Calling、Graph 编排与 AI
            简报定时投递，面向值班问数、知识检索与研判辅助。
          </p>
          <p>
            介绍页：
            <a
              href="https://wanxiang.datafuturex.cn/portal/ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              wanxiang.datafuturex.cn/portal/ai ↗
            </a>
          </p>
          <p>
            作品页截图含 Agent / 知识库 / 简报等界面：
            <Link to="/works/wanxiang-hydro#screenshots">万象监测平台</Link>
          </p>
        </section>

<section id="wanxiang-shots" className="prose-block">
          <h2>万象监测平台 · 系统截图</h2>
          <p>
            门户已收录演示站关键界面截图（产品门户、仪表盘、AI 简报、Agent / 知识库、巡检、地图、实时数据、系统管理等，共
            34 张）。完整交互请直接打开演示站体验。
          </p>
          <p>
            <Link className="btn btn--primary" to="/works/wanxiang-hydro#screenshots">
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
            <Link to="/works/lingshu-market">灵枢行业应用市场</Link>
          </p>
        </section>

        <p className="section__more">
          下一步：<Link to="/works">浏览作品</Link> · <Link to="/support">获取支持</Link>
        </p>
      </article>
    </div>
  )
}

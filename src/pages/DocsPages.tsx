import { Link, Navigate, useLocation } from 'react-router-dom'
import { CodeBlock } from '../components/CodeBlock'
import { docsTryLinks, getDocPage, legacyDocHashRedirects } from '../data/docs'
import { site } from '../data/site'

export function DocsIndexRedirect() {
  const location = useLocation()
  const hash = location.hash.replace(/^#/, '')
  if (hash && legacyDocHashRedirects[hash]) {
    return <Navigate to={legacyDocHashRedirects[hash]} replace />
  }
  return <Navigate to="/docs/getting-started" replace />
}

export function GettingStartedDoc() {
  const meta = getDocPage('getting-started')!
  return (
    <article className="docs__article">
      <header className="page-hero">
        <p className="eyebrow mono">{meta.eyebrow}</p>
        <h1>{meta.title}</h1>
        <p>{meta.summary}</p>
      </header>

      <section id="run" className="prose-block">
        <h2>本地跑通云起</h2>
        <p>目标：在浏览器打开云起工作台。需要 Git 与 Node.js 18+。</p>
        <ol>
          <li>克隆仓库并进入前端目录。</li>
          <li>安装依赖并启动纯前端演示。</li>
          <li>
            打开 <code>http://localhost:3000</code>，账号 <code>demo / demo123</code>
            。出现登录页即成功。
          </li>
        </ol>
        <CodeBlock>{`git clone https://github.com/DataFutureX/yunqi-application-platform.git
cd yunqi-application-platform/frontend
npm install
npm run dev:demo`}</CodeBlock>
        <p>
          下一步：
          <Link to="/docs/yunqi">云起文档</Link>
          （联调、权限与截图）·
          <Link to="/works/yunqi-application-platform">作品页</Link>
        </p>
      </section>

      <section id="try" className="prose-block">
        <h2>体验入口</h2>
        <ul className="docs-try-list">
          {docsTryLinks.map((item) => {
            const body = (
              <>
                <strong>{item.title}</strong>
                <span className="docs-try-list__meta">
                  <span className="mono">{item.url}</span>
                  {item.external ? (
                    <span className="ext" aria-hidden="true">
                      ↗
                    </span>
                  ) : null}
                </span>
              </>
            )
            return (
              <li key={item.title}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {body}
                  </a>
                ) : (
                  <Link to={item.href}>{body}</Link>
                )}
              </li>
            )
          })}
        </ul>
        <p className="section__more">
          按作品深入：
          <Link to="/docs/yunqi">云起应用平台</Link>
          <span aria-hidden="true"> · </span>
          <Link to="/docs/smart-iot">数智AI工业物联网平台</Link>
          <span aria-hidden="true"> · </span>
          <Link to="/docs/wanxiang">万象监测平台</Link>
          <span aria-hidden="true"> · </span>
          <Link to="/docs/lingshu">灵枢行业应用市场</Link>
        </p>
      </section>

      <section id="api" className="prose-block">
        <h2>API 参考</h2>
        <p>
          各作品暂无对外公开的稳定 API。云起本地联调可在{' '}
          <code>/swagger-ui.html</code> 查看内嵌接口文档。问题与建议请到{' '}
          <a
            href={site.contact.issues}
            target="_blank"
            rel="noopener noreferrer"
          >
            Gitee Issues ↗
          </a>
          。
        </p>
      </section>
    </article>
  )
}

export function YunqiDoc() {
  const meta = getDocPage('yunqi')!
  return (
    <article className="docs__article">
      <header className="page-hero">
        <p className="eyebrow mono">{meta.eyebrow}</p>
        <h1>{meta.title}</h1>
        <p>{meta.summary}</p>
      </header>

      <section id="yunqi" className="prose-block">
        <h2>概述与开源</h2>
        <dl className="docs-fact-list">
          <div className="docs-fact">
            <dt>定位</dt>
            <dd>
              <strong>YunQi Application Platform（YQAP）</strong>
              ：面向企业数字化应用建设的模块化开发基础平台。
            </dd>
          </div>
          <div className="docs-fact">
            <dt>开源</dt>
            <dd>
              完全开源，许可证 <strong>MIT</strong>，可商用与二次开发。
            </dd>
          </div>
          <div className="docs-fact">
            <dt>源码</dt>
            <dd>
              <a
                href="https://github.com/DataFutureX/yunqi-application-platform"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <span aria-hidden="true"> · </span>
              <a
                href="https://gitee.com/DataFutureX/yunqi-application-platform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gitee ↗
              </a>
            </dd>
          </div>
          <div className="docs-fact">
            <dt>演示</dt>
            <dd>
              <a
                href="https://yunqi.datafuturex.cn/portal"
                target="_blank"
                rel="noopener noreferrer"
              >
                yunqi.datafuturex.cn/portal ↗
              </a>
              <span className="mono"> · demo / demo123</span>
            </dd>
          </div>
          <div className="docs-fact">
            <dt>作品页</dt>
            <dd>
              <Link to="/works/yunqi-application-platform#screenshots">云起应用平台 · 系统截图</Link>
            </dd>
          </div>
        </dl>
      </section>

      <section id="yunqi-demo" className="prose-block">
        <h2>本地演示模式</h2>
        <p>无需后端，纯前端 Mock，适合快速体验界面与权限流程。</p>
        <CodeBlock>{`git clone https://github.com/DataFutureX/yunqi-application-platform.git
cd yunqi-application-platform/frontend
npm install
npm run dev:demo`}</CodeBlock>
        <p>
          打开 http://localhost:3000 （可先看 <code>/portal</code>
          ）。演示账号：<code>demo / demo123</code>
          （演示态任意账号密码均可登录）。
        </p>
      </section>

      <section id="yunqi-fullstack" className="prose-block">
        <h2>前后端联调开发</h2>
        <p>需要 JDK 21+、Maven 3.9+、MySQL 8+。推荐仓库根目录一键启动。</p>
        <CodeBlock>{`# 初始化数据库
cd yunqi-application-platform/backend
mysql -u root -p < yqap-core/src/main/resources/db/init.sql
# 配置 yqap-core/.../application-dev.yml 中 yunqi.datasource.*

# 根目录一键启动（推荐）
cd yunqi-application-platform
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
        <h2>系统截图</h2>
        <p>
          门户已收录登录、工作台、用户/单位/角色/菜单、系统设置、公告、操作日志、系统监控、接口文档与个人中心等界面截图。完整交互请打开演示站或本地演示体验。
        </p>
        <p>
          <Link className="btn btn--primary" to="/works/yunqi-application-platform#screenshots">
            查看截图图集
          </Link>
        </p>
      </section>

      <p className="section__more">
        下一步：<Link to="/works/yunqi-application-platform">作品页</Link> ·{' '}
        <Link to="/docs/smart-iot">数智AI工业物联网平台文档</Link> ·{' '}
        <Link to="/support">获取支持</Link>
      </p>
    </article>
  )
}

export function SmartIotDoc() {
  const meta = getDocPage('smart-iot')!
  return (
    <article className="docs__article">
      <header className="page-hero">
        <p className="eyebrow mono">{meta.eyebrow}</p>
        <h1>{meta.title}</h1>
        <p>{meta.summary}</p>
      </header>

      <section id="smart-iot" className="prose-block">
        <h2>概述与演示站</h2>
        <dl className="docs-fact-list">
          <div className="docs-fact">
            <dt>定位</dt>
            <dd>
              <strong>Smart AI Industrial IoT Platform（v1.0.0）</strong>
              ：从设备接入到行业应用的 AI 物联控制面。
            </dd>
          </div>
          <div className="docs-fact">
            <dt>业务域</dt>
            <dd>
              控制台四大域：
              <strong>设备管理 · 数据中心 · 规则引擎 · 平台设置</strong>
              （另含主页工作台 / 应用市场）。
            </dd>
          </div>
          <div className="docs-fact">
            <dt>已落地</dt>
            <dd>
              MQTT 主接入、数据中心双档存储（PostgreSQL 默认 / TDengine 可选）、规则告警与通道转发、OTA、应用市场、多租户 RBAC。
            </dd>
          </div>
          <div className="docs-fact">
            <dt>开源</dt>
            <dd>
              <strong>暂未开源</strong>
              ；基于开源底座
              <Link to="/docs/yunqi">云起应用平台</Link>
              演进。
            </dd>
          </div>
          <div className="docs-fact">
            <dt>演示</dt>
            <dd>
              <a
                href="https://iot.datafuturex.cn/portal"
                target="_blank"
                rel="noopener noreferrer"
              >
                iot.datafuturex.cn/portal ↗
              </a>
              <span className="mono"> · 租户 platform · demo / demo123</span>
              （纯前端 Mock）
            </dd>
          </div>
          <div className="docs-fact">
            <dt>技术栈</dt>
            <dd className="mono">Vue 3 · Java 21 · Spring Boot 4 · PostgreSQL 16 · MQTT / EMQX</dd>
          </div>
          <div className="docs-fact">
            <dt>作品页</dt>
            <dd>
              <Link to="/works/smart-iot-ai">数智AI工业物联网平台</Link>
              <span aria-hidden="true"> · </span>
              <a href="#smart-iot-access">设备接入（MQTT）</a>
            </dd>
          </div>
        </dl>
      </section>

      <section id="smart-iot-access" className="prose-block">
        <h2>设备接入（MQTT）</h2>
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
        <h2>系统截图</h2>
        <p>
          门户已收录正式站模块截图：登录、工作台、应用市场、产品/设备、实时数据、规则管理、用户/菜单/系统设置。完整交互请打开演示站体验。
        </p>
        <p>
          <Link className="btn btn--primary" to="/works/smart-iot-ai#screenshots">
            查看截图图集
          </Link>
        </p>
      </section>

      <p className="section__more">
        下一步：<Link to="/works/smart-iot-ai">作品页</Link> ·{' '}
        <Link to="/docs/wanxiang">万象监测平台文档</Link> ·{' '}
        <Link to="/support">获取支持</Link>
      </p>
    </article>
  )
}

export function WanxiangDoc() {
  const meta = getDocPage('wanxiang')!
  return (
    <article className="docs__article">
      <header className="page-hero">
        <p className="eyebrow mono">{meta.eyebrow}</p>
        <h1>{meta.title}</h1>
        <p>{meta.summary}</p>
      </header>

      <section id="wanxiang" className="prose-block">
        <h2>概述与演示站</h2>
        <dl className="docs-fact-list">
          <div className="docs-fact">
            <dt>定位</dt>
            <dd>
              <strong>WanXiang Monitor Platform</strong>
              ：面向遥测站的数据采集、存储、分析与可视化平台；基于云起后台管理系统迭代。
            </dd>
          </div>
          <div className="docs-fact">
            <dt>能力</dt>
            <dd>
              双规约接入（SL 651 / SL/T 427）、实时监测与阈值告警、二维 / 三维一张图与视频专题、巡检管理。
            </dd>
          </div>
          <div className="docs-fact">
            <dt>数智中枢</dt>
            <dd>Agent 会话 / 中心与 Graph 编排、知识库 RAG、图谱、NL2SQL、AI 简报。</dd>
          </div>
          <div className="docs-fact">
            <dt>开源</dt>
            <dd>
              <strong>开源正在筹备中</strong>
              ，暂不提供源码下载；当前通过演示站（纯前端 Mock）展示能力与界面。
            </dd>
          </div>
          <div className="docs-fact">
            <dt>演示</dt>
            <dd>
              <a
                href="https://wanxiang.datafuturex.cn/portal"
                target="_blank"
                rel="noopener noreferrer"
              >
                wanxiang.datafuturex.cn/portal ↗
              </a>
              <span className="mono"> · demo / demo123</span>
            </dd>
          </div>
          <div className="docs-fact">
            <dt>数智入口</dt>
            <dd>
              <a
                href="https://wanxiang.datafuturex.cn/portal/ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                wanxiang.datafuturex.cn/portal/ai ↗
              </a>
            </dd>
          </div>
          <div className="docs-fact">
            <dt>作品页</dt>
            <dd>
              <Link to="/works/wanxiang-hydro">万象监测平台</Link>
              <span aria-hidden="true"> · </span>
              <a href="#wanxiang-ai">数智中枢说明</a>
            </dd>
          </div>
        </dl>
      </section>

      <section id="wanxiang-ai" className="prose-block">
        <h2>数智中枢与 Agent</h2>
        <p>
          数智中枢提供可配置 Agent、知识库 RAG、图谱、NL2SQL、Tool Calling、Graph 编排与 AI
          简报定时投递，面向值班问数、知识检索、图谱研判与辅助决策。
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
          作品页截图含 Agent / 知识库 / 图谱 / 简报等界面：
          <Link to="/works/wanxiang-hydro#screenshots">万象监测平台</Link>
        </p>
      </section>

      <section id="wanxiang-shots" className="prose-block">
        <h2>系统截图</h2>
        <p>
          门户已收录演示站关键界面截图（产品门户、仪表盘、AI 简报、Agent / 知识库 / 图谱、巡检、地图、实时数据、系统管理等，共
          35 张）。完整交互请直接打开演示站体验。
        </p>
        <p>
          <Link className="btn btn--primary" to="/works/wanxiang-hydro#screenshots">
            查看截图图集
          </Link>
        </p>
      </section>

      <p className="section__more">
        下一步：<Link to="/works/wanxiang-hydro">作品页</Link> ·{' '}
        <Link to="/docs/lingshu">灵枢行业应用市场文档</Link> ·{' '}
        <Link to="/support">获取支持</Link>
      </p>
    </article>
  )
}

export function LingshuDoc() {
  const meta = getDocPage('lingshu')!
  return (
    <article className="docs__article">
      <header className="page-hero">
        <p className="eyebrow mono">{meta.eyebrow}</p>
        <h1>{meta.title}</h1>
        <p>{meta.summary}</p>
      </header>

      <section id="lingshu" className="prose-block">
        <h2>概述与进展</h2>
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
  )
}

import { Link } from 'react-router-dom'
import { site } from '../data/site'

export function SupportPage() {
  return (
    <div className="page page--narrow">
      <header className="page-hero">
        <p className="eyebrow mono">Support</p>
        <h1>支持</h1>
        <p>开源仓库、演示站、账号说明与联系方式。</p>
        <p className="page-hero__actions">
          <a
            className="btn btn--primary"
            href={site.contact.issues}
            target="_blank"
            rel="noopener noreferrer"
          >
            我要提问
            <span className="ext" aria-hidden="true">
              ↗
            </span>
          </a>
          <a className="btn btn--ghost" href="#contact">
            联系方式
          </a>
        </p>
      </header>

      <section className="prose-block" id="contact">
        <h2>联系与提问</h2>
        <p>
          门户相关问题、建议或缺陷反馈，请优先在{' '}
          <a href={site.contact.issues} target="_blank" rel="noopener noreferrer">
            Gitee Issues ↗
          </a>{' '}
          提交，便于跟踪与回复。
        </p>
        <p>
          微信：<strong>{site.contact.wechatName}</strong>
          。扫码添加，咨询作品演示、开源协作或合作事宜。
        </p>
        <p>
          邮箱：
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
        </p>
        <figure className="contact-qr">
          <img
            src={site.contact.wechatQr}
            alt={`微信二维码 · ${site.contact.wechatName}`}
            width={280}
            height={360}
            loading="lazy"
            decoding="async"
          />
          <figcaption>{site.contact.wechatHint}</figcaption>
        </figure>
      </section>

      <section className="prose-block" id="license">
        <h2>许可证</h2>
        <p>
          本门户站点源码采用 <strong>{site.license.name}</strong> 授权开源，详见{' '}
          <a href={site.license.url} target="_blank" rel="noopener noreferrer">
            LICENSE ↗
          </a>
          。
        </p>
      </section>

      <section className="prose-block">
        <h2>云起应用平台（完全开源）</h2>
        <ul>
          <li>
            作品页：<Link to="/products/yunqi-admin">云起应用平台</Link>
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
              href="https://yunqi.datafuturex.cn/portal"
              target="_blank"
              rel="noopener noreferrer"
            >
              yunqi.datafuturex.cn/portal ↗
            </a>
            （demo / demo123）
          </li>
          <li>前后端联调账号：admin / admin123</li>
        </ul>
      </section>

      <section className="prose-block">
        <h2>数智AI工业物联网平台（暂未开源）</h2>
        <ul>
          <li>
            作品页：<Link to="/products/smart-iot-ai">数智AI工业物联网平台</Link>
          </li>
          <li>
            演示站（纯前端 Mock）：
            <a
              href="https://iot.datafuturex.cn/portal"
              target="_blank"
              rel="noopener noreferrer"
            >
              iot.datafuturex.cn/portal ↗
            </a>
          </li>
          <li>暂未开源；基于云起应用平台（yunqi-admin / YQAP）演进，源码不对外托管</li>
          <li>演示账号：租户 platform · demo / demo123</li>
          <li>本地联调账号：租户 platform · admin / admin123</li>
        </ul>
      </section>

      <section className="prose-block">
        <h2>万象监测平台（开源正在筹备中）</h2>
        <ul>
          <li>
            作品页：<Link to="/products/wanxiang-hydro">万象监测平台</Link>
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
          <li>开源正在筹备中，暂不提供源码下载</li>
          <li>演示账号以演示站页面说明为准</li>
        </ul>
      </section>

      <section className="prose-block">
        <h2>灵枢行业应用市场（正在开发中）</h2>
        <ul>
          <li>
            作品页：<Link to="/products/lingshu-market">灵枢行业应用市场</Link>
          </li>
          <li>正在开发中，暂无演示站与源码</li>
          <li>
            文档：<Link to="/docs#lingshu">概述与进展</Link>
          </li>
        </ul>
      </section>

      <section className="prose-block">
        <h2>常见问题</h2>
        <ul>
          <li>
            <strong>想二次开发哪个项目？</strong> — 请使用完全开源的云起应用平台（YQAP）。
          </li>
          <li>
            <strong>数智AI工业物联网平台 / 万象监测平台 / 灵枢能否拿到源码？</strong> —
            数智AI工业物联网平台暂未开源（演示为纯前端 Mock）；万象监测平台开源正在筹备中；灵枢行业应用市场正在开发中。前两者可通过演示站了解能力。
          </li>
          <li>
            <strong>云起演示打不开</strong> — 确认可访问 yunqi.datafuturex.cn/portal，或本地{' '}
            <code>npm run dev:demo</code>。
          </li>
          <li>
            <strong>还有其他问题？</strong> — 见上方{' '}
            <a href="#contact">联系与提问</a>。
          </li>
        </ul>
      </section>
    </div>
  )
}

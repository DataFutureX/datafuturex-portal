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
        </p>
      </header>

      <section className="prose-block" id="ask">
        <h2>我要提问</h2>
        <p>
          门户相关问题、建议或缺陷反馈，请在 Gitee Issues 提交，便于跟踪与回复。
        </p>
        <p>
          <a
            className="btn btn--ghost"
            href={site.contact.issues}
            target="_blank"
            rel="noopener noreferrer"
          >
            前往 Issues 提问
            <span className="ext" aria-hidden="true">
              ↗
            </span>
          </a>
        </p>
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

      <section className="prose-block" id="contact">
        <h2>联系方式</h2>
        <p>
          微信：<strong>{site.contact.wechatName}</strong>
          。扫码添加，咨询作品演示、开源协作或合作事宜。
        </p>
        <p>
          邮箱：
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
        </p>
        <p>
          在线提问：
          <a href={site.contact.issues} target="_blank" rel="noopener noreferrer">
            Gitee Issues ↗
          </a>
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

      <section className="prose-block">
        <h2>云起管理后台（完全开源）</h2>
        <ul>
          <li>
            作品页：<Link to="/products/yunqi-admin">云起管理后台</Link>
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
        <h2>数智AI工业物联网平台（开源正在筹备中）</h2>
        <ul>
          <li>
            作品页：<Link to="/products/smart-iot-ai">数智AI工业物联网平台</Link>
          </li>
          <li>
            演示站：
            <a
              href="https://iot.datafuturex.cn/portal"
              target="_blank"
              rel="noopener noreferrer"
            >
              iot.datafuturex.cn/portal ↗
            </a>
          </li>
          <li>开源正在筹备中，暂不提供源码下载</li>
          <li>演示账号：租户 platform · demo / demo123</li>
        </ul>
      </section>

      <section className="prose-block">
        <h2>万象物联监测平台（开源正在筹备中）</h2>
        <ul>
          <li>
            作品页：<Link to="/products/wanxiang-hydro">万象物联监测平台</Link>
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
        <h2>常见问题</h2>
        <ul>
          <li>
            <strong>想二次开发哪个项目？</strong> — 请使用完全开源的云起管理后台。
          </li>
          <li>
            <strong>工业物联网 / 万象能否拿到源码？</strong> —
            开源正在筹备中，当前可通过演示站与门户截图了解能力。
          </li>
          <li>
            <strong>云起演示打不开</strong> — 确认可访问 yunqi.datafuturex.cn/portal，或本地{' '}
            <code>npm run dev:demo</code>。
          </li>
          <li>
            <strong>还有其他问题？</strong> — 前往{' '}
            <a href={site.contact.issues} target="_blank" rel="noopener noreferrer">
              我要提问（Gitee Issues）↗
            </a>
            。
          </li>
        </ul>
      </section>
    </div>
  )
}

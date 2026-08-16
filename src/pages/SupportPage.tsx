import { Link } from 'react-router-dom'
import { site } from '../data/site'

export function SupportPage() {
  return (
    <div className="page page--narrow">
      <header className="page-hero">
        <p className="eyebrow mono">Support</p>
        <h1>支持</h1>
        <p>联系方式、许可证与常见问题。演示与账号说明见作品页与文档。</p>
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
          。各作品开源状态以作品页为准。
        </p>
      </section>

      <section className="prose-block" id="faq">
        <h2>常见问题</h2>
        <ul>
          <li>
            <strong>想二次开发哪个项目？</strong> — 请使用完全开源的{' '}
            <Link to="/works/yunqi-admin">云起应用平台</Link>，快速开始见{' '}
            <Link to="/docs#yunqi-demo">文档</Link>。
          </li>
          <li>
            <strong>数智AI工业物联网 / 万象 / 灵枢能否拿到源码？</strong> —
            数智AI暂未开源；万象开源筹备中；灵枢开发中。可通过各作品页演示站了解能力。
          </li>
          <li>
            <strong>演示账号在哪看？</strong> — 见对应{' '}
            <Link to="/works">作品页</Link> 与{' '}
            <Link to="/docs#try">文档 · 体验入口</Link>。
          </li>
          <li>
            <strong>云起演示打不开</strong> — 确认可访问 yunqi.datafuturex.cn/portal，或本地按{' '}
            <Link to="/docs#yunqi-demo">本地演示</Link> 启动。
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

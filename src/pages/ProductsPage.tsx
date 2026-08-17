import { WorkCard } from '../components/WorkCard'
import { works } from '../data/works'

export function ProductsPage() {
  return (
    <div className="page">
      <header className="page-hero">
        <h1>
          作品
          <span className="page-hero__en mono">Works</span>
        </h1>
        <p>
          云起完全开源；数智AI工业物联网与万象监测可打开演示站；灵枢正在开发中。进入详情获取源码或演示。
        </p>
      </header>
      <ul className="work-cards">
        {works.map((work, index) => (
          <li key={work.slug}>
            <WorkCard
              work={work}
              priority={index === 0}
              cta="进入详情 →"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

import { WorkCard } from '../components/WorkCard'
import { works } from '../data/works'

export function ProductsPage() {
  return (
    <div className="page">
      <header className="page-hero">
        <h1>作品</h1>
        <p>
          云起：完全开源。数智AI工业物联网：暂未开源；万象：开源筹备中；灵枢：正在开发中。卡片色条对应各作品主色（极简白
          / 工业青 / 科技蓝 / 松柏绿）。
        </p>
      </header>
      <ul className="work-cards">
        {works.map((work, index) => (
          <li key={work.slug}>
            <WorkCard work={work} index={index} cta="进入详情 →" />
          </li>
        ))}
      </ul>
    </div>
  )
}

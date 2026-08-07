import { docChapters } from './docs'
import { works } from './works'

export type SearchItem = {
  id: string
  title: string
  description: string
  href: string
  group: '作品' | '文档' | '页面'
  keywords: string[]
}

const pageItems: SearchItem[] = [
  {
    id: 'page-home',
    title: '主页',
    description: '工坊品牌入口、方向、作品与快速体验',
    href: '/',
    group: '页面',
    keywords: ['首页', '主页', 'home', '门户'],
  },
  {
    id: 'page-products',
    title: '作品',
    description: '浏览全部工坊作品',
    href: '/products',
    group: '页面',
    keywords: ['产品', '作品列表', 'products'],
  },
  {
    id: 'page-docs',
    title: '文档',
    description: '快速开始：演示、源码与联调说明',
    href: '/docs',
    group: '页面',
    keywords: ['文档', '快速开始', 'docs', '教程'],
  },
  {
    id: 'page-examples',
    title: '示例',
    description: '演示站、本地开发与截图入口',
    href: '/examples',
    group: '页面',
    keywords: ['示例', 'examples', '演示入口'],
  },
  {
    id: 'page-support',
    title: '支持',
    description: '许可证、账号说明与联系方式',
    href: '/support',
    group: '页面',
    keywords: ['支持', '联系', '微信', '提问', 'Issues'],
  },
]

function buildIndex(): SearchItem[] {
  const workItems: SearchItem[] = works.map((work) => ({
    id: `work-${work.slug}`,
    title: work.name,
    description: work.summary,
    href: `/products/${work.slug}`,
    group: '作品',
    keywords: [
      work.name,
      work.englishName,
      work.tag,
      work.slug,
      work.palette.label,
      ...work.stack.slice(0, 6),
      ...work.capabilities.slice(0, 4),
    ],
  }))

  const docItems: SearchItem[] = docChapters.flatMap((chapter) =>
    chapter.items.map((item) => ({
      id: `doc-${item.id}`,
      title: `${chapter.title} · ${item.label}`,
      description: `${chapter.title}文档：${item.label}`,
      href: `/docs#${item.id}`,
      group: '文档' as const,
      keywords: [chapter.title, item.label, ...item.keywords],
    })),
  )

  return [...workItems, ...docItems, ...pageItems]
}

export const searchIndex = buildIndex()

export function searchSite(query: string, limit = 8): SearchItem[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const scored = searchIndex
    .map((item) => {
      const haystack = [item.title, item.description, ...item.keywords]
        .join(' ')
        .toLowerCase()
      if (!haystack.includes(q)) return null
      let score = 0
      if (item.title.toLowerCase().includes(q)) score += 40
      if (item.keywords.some((k) => k.toLowerCase() === q)) score += 30
      if (item.keywords.some((k) => k.toLowerCase().includes(q))) score += 15
      if (item.description.toLowerCase().includes(q)) score += 5
      score += item.group === '作品' ? 3 : item.group === '文档' ? 2 : 1
      return { item, score }
    })
    .filter((row): row is { item: SearchItem; score: number } => row !== null)
    .sort((a, b) => b.score - a.score)

  return scored.slice(0, limit).map((row) => row.item)
}

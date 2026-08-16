import { docChapters } from './docs'

export type SearchItem = {
  id: string
  title: string
  description: string
  href: string
  group: '作品' | '文档' | '页面'
  keywords: string[]
}

/** 作品搜索条目：仅保留可检索字段，避免把截图等全量 works 打进壳层 */
const workItems: SearchItem[] = [
  {
    id: 'work-yunqi-admin',
    title: '云起应用平台',
    description:
      '面向企业数字化应用建设的模块化开发基础平台（YQAP）：统一技术架构、业务组件与权限体系，MIT 开源，可演示与二次开发。',
    href: '/works/yunqi-admin',
    group: '作品',
    keywords: [
      '云起',
      'YunQi',
      'YQAP',
      'yunqi-admin',
      '极简白',
      '开源',
      'MIT',
      'Vue 3',
      'Spring Boot',
      '权限',
      'RBAC',
    ],
  },
  {
    id: 'work-smart-iot-ai',
    title: '数智AI工业物联网平台',
    description:
      '从设备接入到行业应用的 AI 物联控制面：设备管理 · 数据中心 · 规则引擎 · 平台设置。',
    href: '/works/smart-iot-ai',
    group: '作品',
    keywords: [
      '物联网',
      'IoT',
      'MQTT',
      'smart-iot',
      '工业青',
      '设备管理',
      '规则引擎',
      'OTA',
      '物模型',
    ],
  },
  {
    id: 'work-wanxiang-hydro',
    title: '万象监测平台',
    description:
      '水文水资源物联监测：协议接入、实时监测与告警、地图视频、巡检，以及数智中枢（Agent / 知识库 / NL2SQL）。',
    href: '/works/wanxiang-hydro',
    group: '作品',
    keywords: [
      '万象',
      'WanXiang',
      '水文',
      '监测',
      '数字孪生',
      '科技蓝',
      'Agent',
      '知识库',
      'NL2SQL',
      'Cesium',
      '巡检',
    ],
  },
  {
    id: 'work-lingshu-market',
    title: '灵枢行业应用市场',
    description: '行业应用枢纽：水利、灌区、农业、地质灾害等场景应用的发现与分发。',
    href: '/works/lingshu-market',
    group: '作品',
    keywords: ['灵枢', 'Lingshu', '行业应用', '市场', '水利', '灌区', '石板灰'],
  },
]

const pageItems: SearchItem[] = [
  {
    id: 'page-home',
    title: '主页',
    description: '工坊品牌入口、方向、作品与架构',
    href: '/',
    group: '页面',
    keywords: ['首页', '主页', 'home', '门户', '架构'],
  },
  {
    id: 'page-works',
    title: '作品',
    description: '浏览全部工坊作品',
    href: '/works',
    group: '页面',
    keywords: ['作品', '作品列表', 'works', 'products'],
  },
  {
    id: 'page-docs',
    title: '文档',
    description: '快速开始：演示、源码与联调说明',
    href: '/docs',
    group: '页面',
    keywords: ['文档', '快速开始', 'docs', '教程', 'clone', 'MQTT'],
  },
  {
    id: 'page-support',
    title: '支持',
    description: '联系方式、许可证与常见问题',
    href: '/support',
    group: '页面',
    keywords: ['支持', '联系', '微信', '提问', 'Issues', 'FAQ'],
  },
]

function buildIndex(): SearchItem[] {
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

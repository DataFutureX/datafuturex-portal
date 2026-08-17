/** 文档页与侧栏 / 搜索共用目录 */

export type DocSection = {
  id: string
  label: string
  keywords: string[]
}

export type DocPageMeta = {
  slug: string
  title: string
  eyebrow: string
  summary: string
  sections: DocSection[]
}

export const docPages: DocPageMeta[] = [
  {
    slug: 'getting-started',
    title: '快速开始',
    eyebrow: 'Docs · Getting started',
    summary:
      '先从体验入口进入各作品演示，再按作品阅读说明。云起可开源开发；数智AI工业物联网与万象监测提供演示站；灵枢正在开发中。',
    sections: [
      {
        id: 'try',
        label: '体验入口',
        keywords: ['演示', '体验', '示例', 'examples', '快速开始', 'clone', 'MQTT'],
      },
    ],
  },
  {
    slug: 'yunqi',
    title: '云起应用平台',
    eyebrow: 'Docs · YunQi',
    summary:
      '面向企业数字化应用建设的模块化开发基础平台（YQAP）。完全开源（MIT），可本地演示或前后端联调。',
    sections: [
      { id: 'yunqi', label: '概述与开源', keywords: ['云起', 'YQAP', 'yunqi', '开源', 'MIT'] },
      {
        id: 'yunqi-demo',
        label: '本地演示模式',
        keywords: ['演示', 'dev:demo', 'Mock', '本地'],
      },
      {
        id: 'yunqi-fullstack',
        label: '前后端联调开发',
        keywords: ['联调', 'JDK', 'MySQL', 'start', '开发'],
      },
      {
        id: 'yunqi-shots',
        label: '系统截图',
        keywords: ['截图', '图集', '工作台', '权限', '监控'],
      },
    ],
  },
  {
    slug: 'smart-iot',
    title: '数智AI工业物联网平台',
    eyebrow: 'Docs · Smart IoT',
    summary:
      '从设备接入到行业应用的 AI 物联控制面。当前通过演示站体验；设备接入以 MQTT 为主。',
    sections: [
      {
        id: 'smart-iot',
        label: '概述与演示站',
        keywords: [
          '物联网',
          'IoT',
          'MQTT',
          '演示',
          'iot',
          '设备管理',
          '数据中心',
          '规则引擎',
          '平台设置',
          '应用市场',
        ],
      },
      {
        id: 'smart-iot-access',
        label: '设备接入（MQTT）',
        keywords: [
          '物模型',
          'Topic',
          '设备',
          '产品',
          '协议',
          '影子',
          'OTA',
          'EMQX',
          '接入',
          '模拟器',
        ],
      },
      {
        id: 'smart-iot-shots',
        label: '系统截图',
        keywords: ['截图', '图集', '工作台', '规则'],
      },
    ],
  },
  {
    slug: 'wanxiang',
    title: '万象监测平台',
    eyebrow: 'Docs · WanXiang',
    summary:
      '面向遥测站的数据采集、存储、分析与可视化；含数智中枢（Agent / 知识库 / 简报）。开源筹备中，可先体验演示站。',
    sections: [
      {
        id: 'wanxiang',
        label: '概述与演示站',
        keywords: [
          '万象',
          '水文',
          '监测',
          'wanxiang',
          '一张图',
          '数字孪生',
          '巡检',
          '演示',
        ],
      },
      {
        id: 'wanxiang-ai',
        label: '数智中枢与 Agent',
        keywords: [
          '数智中枢',
          'Agent',
          '智能体',
          'RAG',
          'NL2SQL',
          '简报',
          'Graph',
          'AI',
        ],
      },
      {
        id: 'wanxiang-shots',
        label: '系统截图',
        keywords: ['截图', '地图', '图集', 'Agent', '巡检'],
      },
    ],
  },
  {
    slug: 'lingshu',
    title: '灵枢行业应用市场',
    eyebrow: 'Docs · Lingshu',
    summary:
      '行业应用枢纽，面向水利、灌区、农业、地质灾害等场景。正在开发中，暂未提供演示站与源码。',
    sections: [
      {
        id: 'lingshu',
        label: '概述与进展',
        keywords: ['灵枢', '行业应用', '市场', 'lingshu'],
      },
    ],
  },
]

/** 侧栏分组（兼容旧引用名） */
export const docChapters = docPages.map((page) => ({
  title: page.title,
  slug: page.slug,
  href: `/docs/${page.slug}`,
  items: page.sections.map((item) => ({
    ...item,
    href: `/docs/${page.slug}#${item.id}`,
  })),
}))

export function getDocPage(slug: string): DocPageMeta | undefined {
  return docPages.find((page) => page.slug === slug)
}

export function getDocPager(slug: string) {
  const index = docPages.findIndex((page) => page.slug === slug)
  if (index < 0) return { prev: null, next: null }
  return {
    prev: index > 0 ? docPages[index - 1] : null,
    next: index < docPages.length - 1 ? docPages[index + 1] : null,
  }
}

/** 旧单页锚点 → 新独立文档路径 */
export const legacyDocHashRedirects: Record<string, string> = {
  try: '/docs/getting-started#try',
  yunqi: '/docs/yunqi#yunqi',
  'yunqi-demo': '/docs/yunqi#yunqi-demo',
  'yunqi-fullstack': '/docs/yunqi#yunqi-fullstack',
  'yunqi-shots': '/docs/yunqi#yunqi-shots',
  'smart-iot': '/docs/smart-iot#smart-iot',
  'smart-iot-access': '/docs/smart-iot#smart-iot-access',
  'smart-iot-shots': '/docs/smart-iot#smart-iot-shots',
  wanxiang: '/docs/wanxiang#wanxiang',
  'wanxiang-ai': '/docs/wanxiang#wanxiang-ai',
  'wanxiang-shots': '/docs/wanxiang#wanxiang-shots',
  lingshu: '/docs/lingshu#lingshu',
}

export const docsTryLinks = [
  {
    title: '云起应用平台',
    url: 'yunqi.datafuturex.cn/portal',
    href: 'https://yunqi.datafuturex.cn/portal',
    external: true,
  },
  {
    title: '数智AI工业物联网平台',
    url: 'iot.datafuturex.cn/portal',
    href: 'https://iot.datafuturex.cn/portal',
    external: true,
  },
  {
    title: '万象监测平台',
    url: 'wanxiang.datafuturex.cn/portal',
    href: 'https://wanxiang.datafuturex.cn/portal',
    external: true,
  },
  {
    title: '灵枢行业应用市场',
    url: '暂无演示站',
    href: '/works/lingshu-market',
    external: false,
  },
] as const

/** 站点品牌、定位与研究方向 */
export const site = {
  name: '数智未来AI工坊',
  englishName: 'DataFutureX',
  domain: 'www.datafuturex.cn',
  origin: 'https://www.datafuturex.cn',
  /** 首屏主标题旁的一句定位 */
  tagline: '宣传展示工坊成果：物联网、数字孪生、行业应用与 AI 智能体。',
  description:
    '数智未来AI工坊（DataFutureX）— 物联网、数字孪生、行业应用与 AI 智能体成果展示 · www.datafuturex.cn',
  focus:
    '本站用于宣传与展示工坊交付成果，帮助访客了解方向、浏览作品并体验演示。',
} as const

/** 工坊主要方向（首页展示） */
export const directions = [
  {
    id: 'iot',
    name: '物联网 IoT',
    summary: '设备接入、协议采集、监测告警与多端协同。',
  },
  {
    id: 'digital-twin',
    name: '数字孪生',
    summary: '二维/三维一张图、站网态势与场景可视化。',
  },
  {
    id: 'industry',
    name: '行业应用',
    summary: '水利、灌区、农业、水库、地质灾害等场景落地。',
  },
  {
    id: 'ai-agent',
    name: 'AI 智能体开发',
    summary: '面向业务的智能问答、工具调用与 Agent 编排。',
  },
] as const

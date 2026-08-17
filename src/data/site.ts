import { workPalettes } from './palettes'

/** 站点品牌、定位与研究方向 */
export const site = {
  name: '数智未来·AI工坊',
  englishName: 'DataFutureX',
  domain: 'www.datafuturex.cn',
  origin: 'https://www.datafuturex.cn',
  tagline:
    '将复杂的数据采集、设备接入、业务流程、人工智能和行业知识，沉淀为人人可用的数字化能力。',
  /** 首页 Hero Banner */
  hero: {
    brand: 'DataFutureX',
    slogan: '化繁为简，让智能触手可及',
    stack: ['AI', 'IoT', 'Digital Twin', 'Agent'] as const,
    positioning: '构建下一代行业数字化与智能化平台',
  },
  description:
    '数智未来·AI工坊（DataFutureX）— 物联网、数字孪生、行业应用与 AI 智能体作品展示 · www.datafuturex.cn',
  focus:
    '本站用于展示工坊交付作品，帮助访客了解方向、浏览作品并体验演示。',
  license: {
    name: 'MIT',
    spdx: 'MIT',
    url: 'https://gitee.com/DataFutureX/datafuturex-portal/blob/main/LICENSE',
  },
  contact: {
    wechatName: 'DataFutureX',
    wechatQr: '/contact/wechat-qrcode.webp',
    wechatQrOnly: '/contact/wechat-qrcode-only.webp',
    wechatHint: '扫二维码，添加我为朋友。',
    email: 'datafuturex@163.com',
    /** 门户 Issues：提问、建议与问题反馈 */
    issues: 'https://gitee.com/DataFutureX/datafuturex-portal/issues',
  },
} as const

/** 工坊主要方向（主页展示）；点击锚定到对应作品卡片 */
export const directions = [
  {
    id: 'iot',
    name: '物联网 IoT',
    brief: '设备管理 · 数据中心 · 规则引擎 · MQTT/OTA',
    summary:
      'AI 物联控制面：设备管理 · 数据中心 · 规则引擎 · 平台设置；MQTT/OTA、规则告警与应用市场已落地。',
    workSlug: 'smart-iot-ai',
    palette: workPalettes['industrial-cyan'],
  },
  {
    id: 'digital-twin',
    name: '数字孪生',
    brief: '一张图 · 站网态势 · 场景可视化',
    summary: '二维/三维一张图、站网态势与场景可视化——见万象监测平台。',
    workSlug: 'wanxiang-hydro',
    palette: workPalettes['tech-blue'],
  },
  {
    id: 'industry',
    name: '行业应用',
    brief: '水利 · 灌区 · 农业 · 地质灾害',
    summary: '水利、灌区、农业、水库、地质灾害等场景落地。',
    workSlug: 'lingshu-market',
    palette: workPalettes['lingshu-slate'],
  },
  {
    id: 'ai-agent',
    name: 'AI 智能体开发',
    brief: 'Agent · 知识库 · NL2SQL · 工具编排',
    summary: '面向业务的智能问答、工具调用与 Agent 编排——见万象·数智中枢。',
    workSlug: 'wanxiang-hydro',
    palette: workPalettes['tech-blue'],
  },
] as const

/**
 * 作品架构栈（自下而上）：云起底座 → 物联控制面 → 监测场景 → 行业应用市场
 * 展示时倒序渲染为框图
 */
export const productArchitecture = [
  {
    id: 'yunqi',
    slug: 'yunqi-admin',
    name: '云起应用平台',
    englishName: 'YunQi Application Platform',
    role: '开发底座',
    modules: ['统一架构', '业务组件', '权限安全', '运维观测', '开箱开发'],
    palette: workPalettes['minimal-white'],
  },
  {
    id: 'smart-iot',
    slug: 'smart-iot-ai',
    name: '数智AI工业物联网平台',
    englishName: 'Smart AI Industrial IoT Platform',
    role: '物联控制面',
    modules: ['设备管理', '数据中心', '规则引擎', '平台设置', '应用市场'],
    palette: workPalettes['industrial-cyan'],
  },
  {
    id: 'wanxiang',
    slug: 'wanxiang-hydro',
    name: '万象监测平台',
    englishName: 'WanXiang Monitor Platform',
    role: '监测与孪生',
    modules: ['双规约接入', '监测告警', '一张图', '巡检管理', '数智中枢'],
    palette: workPalettes['tech-blue'],
  },
  {
    id: 'lingshu',
    slug: 'lingshu-market',
    name: '灵枢行业应用市场',
    englishName: 'Lingshu Industry App Market',
    role: '行业应用层',
    modules: ['应用目录', '分发启停', '场景模板', 'AI Agent 应用', '控制面联动'],
    palette: workPalettes['lingshu-slate'],
  },
] as const

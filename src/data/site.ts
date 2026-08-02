/** 站点品牌、定位与研究方向 */
export const site = {
  name: '数智未来·AI工坊',
  englishName: 'DataFutureX',
  domain: 'www.datafuturex.cn',
  origin: 'https://www.datafuturex.cn',
  /** 首屏主标题旁的一句定位 */
  tagline: '展示工坊作品：物联网、数字孪生、行业应用与 AI 智能体。',
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

/** 工坊主要方向（首页展示） */
export const directions = [
  {
    id: 'iot',
    name: '物联网 IoT',
    summary:
      'AI 原生物联控制面：设备接入、数据采集/治理、规则决策与行业应用；MQTT/OTA 与应用市场已落地。',
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

/** 门户与作品色系：品牌层统一，产品层各有主色 */
export const designLanguages = [
  {
    id: 'future-purple',
    name: '未来紫',
    subject: '门户',
    summary: '品牌入口与导航壳层：统一识别数智未来·AI工坊。',
    hex: '#5B21B6',
    rgb: '91, 33, 182',
    href: '/',
  },
  {
    id: 'minimal-white',
    name: '极简白',
    subject: '云起',
    summary: '脚手架产品：留白、墨色与清晰层级，突出可开发性。',
    hex: '#171717',
    rgb: '23, 23, 23',
    href: '/products/yunqi-admin',
  },
  {
    id: 'tech-blue',
    name: '科技蓝',
    subject: '万象',
    summary: '监测与一张图：冷静信息密度，服务态势与告警阅读。',
    hex: '#2563EB',
    rgb: '37, 99, 235',
    href: '/products/wanxiang-hydro',
  },
  {
    id: 'industrial-cyan',
    name: '工业青',
    subject: 'AI IoT',
    summary: '工业物联控制面：设备—数据—规则—应用，工业澄明浅色控制台。',
    hex: '#0F766E',
    rgb: '15, 118, 110',
    href: '/products/smart-iot-ai',
  },
  {
    id: 'lingshu-slate',
    name: '石板灰',
    subject: '灵枢',
    summary: '行业应用市场：中性石板色，偏通用、稳妥的产品主色。',
    hex: '#475569',
    rgb: '71, 85, 105',
    href: '/products/lingshu-market',
  },
] as const

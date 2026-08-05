export type WorkLinks = {
  demo?: string
  github?: string
  gitee?: string
  docsAnchor: string
}

/** 作品产品层主色（门户品牌层为未来紫，见 site.designLanguages） */
export type WorkPalette = {
  id: 'minimal-white' | 'tech-blue' | 'industrial-cyan' | 'lingshu-slate'
  label: string
  hex: string
  rgb: string
}

export type Work = {
  slug: string
  name: string
  englishName: string
  tag: string
  summary: string
  /** 已开源可二次开发；筹备中则仅演示展示 */
  openSource: boolean
  accessNote: string
  palette: WorkPalette
  stack: string[]
  capabilities: string[]
  scenarios: string[]
  quickStart: string[]
  links: WorkLinks
  screenshots: { src: string; medium?: string; thumb?: string; alt: string }[]
  logo?: string
  accounts: { label: string; value: string }[]
}

/** 作品主题 CSS 变量，供卡片 / 详情页局部换色 */
export function workThemeVars(palette: WorkPalette): Record<string, string> {
  return {
    '--work-accent': palette.hex,
    '--work-accent-rgb': palette.rgb,
  }
}

/** Derive variant path: /works/x/foo.webp -> /works/x/{dir}/foo.webp */
function shotVariant(src: string, dir: string) {
  const i = src.lastIndexOf('/')
  if (i < 0) return src
  return `${src.slice(0, i)}/${dir}/${src.slice(i + 1)}`
}

/** Thumbnail for gallery strip */
export function shotThumb(src: string, thumb?: string) {
  return thumb ?? shotVariant(src, 'thumbs')
}

/** Medium for list covers (~960w) */
export function shotMedium(src: string, medium?: string) {
  return medium ?? shotVariant(src, 'medium')
}

export const works: Work[] = [
  {
    slug: 'yunqi-admin',
    name: '云起应用平台',
    englishName: 'YunQi Application Platform',
    tag: '完全开源 · MIT · YQAP',
    summary:
      '面向企业数字化应用建设的模块化开发基础平台（YQAP）：统一技术架构、业务组件与权限体系，MIT 开源，可演示与二次开发。',
    openSource: true,
    accessNote:
      'MIT 开源。可在线演示、本地纯前端演示（dev:demo），或克隆 monorepo 前后端联调（根目录一键启动）。',
    palette: {
      id: 'minimal-white',
      label: '极简白',
      hex: '#171717',
      rgb: '23, 23, 23',
    },
    stack: [
      'Vue 3',
      'TypeScript',
      'Vite',
      'Element Plus',
      'Pinia',
      'Java 21',
      'Spring Boot 4.1',
      'Spring Security 7',
      'Spring Modulith',
      'MyBatis-Plus',
      'MySQL 8',
      'JWT / RSA',
    ],
    capabilities: [
      '统一技术架构：Vue 3 + Spring Boot 4.1 前后端一体，yqap-api / security / biz / core 分层',
      '业务组件开箱：用户、角色、菜单、单位、系统配置、公告与操作日志',
      '权限安全体系：RBAC + JWT，菜单驱动路由；滑动验证码、RSA 传输与登录锁定',
      '运维观测闭环：公告 SSE、操作日志月分表、系统监控（JVM / DB / Web）',
      '开箱可开发：MIT 可商用、纯前端演示模式与根目录一键联调',
    ],
    scenarios: [
      '以模块化底座快速搭建企业数字化应用或内部管理系统',
      '无后端环境下做产品演示与 UI/权限联调预览',
      '学习中后台权限、审计与运维监控实现',
    ],
    quickStart: [
      'git clone https://github.com/DataFutureX/yunqi-admin.git',
      'cd yunqi-admin/frontend && npm install && npm run dev:demo',
      '打开 http://localhost:3000 ，账号 demo / demo123',
    ],
    links: {
      demo: 'https://yunqi.datafuturex.cn/portal',
      github: 'https://github.com/DataFutureX/yunqi-admin',
      gitee: 'https://gitee.com/DataFutureX/yunqi-admin',
      docsAnchor: '/docs#yunqi',
    },
    screenshots: [
      { src: '/works/yunqi-admin/02-login.webp', alt: '登录页' },
      { src: '/works/yunqi-admin/03-dashboard.webp', alt: '工作台仪表盘' },
      { src: '/works/yunqi-admin/04-user.webp', alt: '用户管理' },
      { src: '/works/yunqi-admin/05-unit.webp', alt: '单位管理' },
      { src: '/works/yunqi-admin/06-role.webp', alt: '角色授权' },
      { src: '/works/yunqi-admin/07-menu.webp', alt: '菜单配置' },
      { src: '/works/yunqi-admin/08-system-config.webp', alt: '系统设置' },
      { src: '/works/yunqi-admin/09-announcement.webp', alt: '公告管理' },
      { src: '/works/yunqi-admin/10-operation-log.webp', alt: '操作日志' },
      { src: '/works/yunqi-admin/11-monitor.webp', alt: '系统监控' },
      { src: '/works/yunqi-admin/12-api-docs.webp', alt: '接口文档' },
      { src: '/works/yunqi-admin/13-profile.webp', alt: '个人信息' },
      { src: '/works/yunqi-admin/14-change-password.webp', alt: '修改密码' },
    ],
    logo: '/works/yunqi-admin/logo.svg',
    accounts: [
      { label: '在线/演示', value: 'demo / demo123' },
      { label: '前后端联调', value: 'admin / admin123' },
    ],
  },
  {
    slug: 'smart-iot-ai',
    name: '数智AI工业物联网平台',
    englishName: 'Smart AI Industrial IoT Platform',
    tag: '暂未开源',
    summary:
      'AI 原生工业物联网控制面：设备接入 → 数据采集/治理 → 规则决策 → 行业应用；控制台四大业务域为设备管理 · 数据中心 · 规则引擎 · 平台管理。',
    openSource: false,
    accessNote:
      '暂未开源。在线演示为纯前端 Mock：https://iot.datafuturex.cn/portal 。基于开源底座云起应用平台（yunqi-admin / YQAP）演进。',
    palette: {
      id: 'industrial-cyan',
      label: '工业青',
      hex: '#0F766E',
      rgb: '15, 118, 110',
    },
    stack: [
      'Vue 3',
      'TypeScript',
      'Element Plus',
      'Vite',
      'Pinia',
      'Java 21',
      'Spring Boot 3',
      'Spring Security 6',
      'MyBatis-Plus',
      'Spring Modulith',
      'PostgreSQL 16',
      'TDengine',
      'MQTT',
      'EMQX',
    ],
    capabilities: [
      '设备管理：协议 · 产品 · 物模型 · Topic · 设备 · 影子 · 指令 · Modbus · OTA；MQTT 已落地（TCP/HTTP 等为骨架）',
      '数据中心：历史 / 事件 / 实时 / 保留策略；默认 PostgreSQL，可切 TDengine',
      '规则引擎：属性/事件/在离线规则，告警中心，通道转发（JDBC/Redis/Kafka/HTTP/MQTT）',
      '主页：工作台概览；应用市场孵化行业应用并支持启停',
      '平台管理：多租户 RBAC（租户编码登录）、应用配置、公告 SSE、操作日志、系统监控',
      '产品门户 /portal 与设备模拟器（iot-simulator）已落地',
    ],
    scenarios: [
      '工业现场设备纳管、MQTT 联调、批量运维与 OTA 升级',
      '时序/事件统一查询、规则告警与多通道数据转发',
      '多租户 SaaS 控制台；制造 / 能源等行业应用经应用市场启停',
    ],
    quickStart: [
      '打开演示门户：https://iot.datafuturex.cn/portal',
      '点击「立即体验」进入登录页（纯前端 Mock）',
      '租户编码 platform，账号 demo / demo123',
    ],
    links: {
      demo: 'https://iot.datafuturex.cn/portal',
      docsAnchor: '/docs#smart-iot',
    },
    screenshots: [
      { src: '/works/smart-iot-ai/01-login.webp', alt: '登录页' },
      { src: '/works/smart-iot-ai/02-dashboard.webp', alt: '工作台' },
      { src: '/works/smart-iot-ai/03-app-center.webp', alt: '应用市场' },
      { src: '/works/smart-iot-ai/04-device-product.webp', alt: '产品管理' },
      { src: '/works/smart-iot-ai/05-device-list.webp', alt: '设备列表' },
      { src: '/works/smart-iot-ai/06-data-realtime.webp', alt: '实时数据' },
      { src: '/works/smart-iot-ai/07-rule-list.webp', alt: '规则管理' },
      { src: '/works/smart-iot-ai/08-platform-user.webp', alt: '用户管理' },
      { src: '/works/smart-iot-ai/09-platform-menu.webp', alt: '菜单管理' },
      { src: '/works/smart-iot-ai/10-system-config.webp', alt: '系统设置' },
    ],
    logo: '/works/smart-iot-ai/logo.svg',
    accounts: [
      { label: '演示站（Mock）', value: '租户 platform · demo / demo123' },
      { label: '本地联调', value: '租户 platform · admin / admin123' },
    ],
  },
  {
    slug: 'wanxiang-hydro',
    name: '万象监测平台',
    englishName: 'WanXiang Monitor Platform',
    tag: '开源正在筹备中',
    summary: '水文水资源物联监测平台。开源正在筹备中，当前可通过演示站体验能力与界面。',
    openSource: false,
    accessNote:
      '开源正在筹备中，暂不提供源码下载。请通过演示站体验：https://wanxiang.datafuturex.cn/portal',
    palette: {
      id: 'tech-blue',
      label: '科技蓝',
      hex: '#2563EB',
      rgb: '37, 99, 235',
    },
    stack: [
      'Vue 3',
      'TypeScript',
      'Vite',
      'Element Plus',
      'Pinia',
      'ECharts',
      'Cesium',
      'Java 21',
      'Spring Boot 4.1',
      'Netty',
      'MyBatis-Plus',
      'PostgreSQL',
      'Spring Security',
      'Spring AI 2',
      'Kotlin / Jetpack Compose',
      '微信小程序',
    ],
    capabilities: [
      '双协议接入：SL 651-2014 / SL/T 427-2021 TCP 采集与远程配置',
      '实时监测与告警：定时报、历史查询、阈值告警与 SSE 推送',
      '一张图可视化：二维/三维站网地图与海康视频监控',
      '多端协同：管理后台 + Android + 微信小程序',
      '智能问答：文档 RAG 与遥测数据工具调用',
    ],
    scenarios: [
      '流域遥测站集中监控与超限告警处置',
      '水利 / 灌区 / 水库等行业一张图运维',
      '外业巡检：手机/小程序查看站点状态、告警与视频',
    ],
    quickStart: [
      '打开演示门户：https://wanxiang.datafuturex.cn/portal',
      '进入系统登录页体验业务界面',
      '账号以演示站页面说明为准',
    ],
    links: {
      demo: 'https://wanxiang.datafuturex.cn/portal',
      docsAnchor: '/docs#wanxiang',
    },
    screenshots: [
      { src: '/works/wanxiang-hydro/login.webp', alt: '登录页' },
      { src: '/works/wanxiang-hydro/portal.webp', alt: '产品门户' },
      { src: '/works/wanxiang-hydro/home-dashboard.webp', alt: '仪表盘' },
      { src: '/works/wanxiang-hydro/ai-chat.webp', alt: '智能问答' },
      { src: '/works/wanxiang-hydro/ai-documents.webp', alt: '知识管理' },
      { src: '/works/wanxiang-hydro/ai-document-qa.webp', alt: '知识问答' },
      { src: '/works/wanxiang-hydro/map-overview-2d.webp', alt: '二维地图' },
      { src: '/works/wanxiang-hydro/map-overview-3d.webp', alt: '三维地图' },
      { src: '/works/wanxiang-hydro/data-realtime.webp', alt: '实时数据' },
      { src: '/works/wanxiang-hydro/data-alerts.webp', alt: '阈值告警' },
      { src: '/works/wanxiang-hydro/data-video-monitor.webp', alt: '视频监控' },
      { src: '/works/wanxiang-hydro/terminal-list.webp', alt: '遥测站管理' },
      { src: '/works/wanxiang-hydro/terminal-video-station.webp', alt: '视频站管理' },
      { src: '/works/wanxiang-hydro/terminal-element-config.webp', alt: '物模型管理' },
      { src: '/works/wanxiang-hydro/project-ledger-manage.webp', alt: '工程管理' },
      { src: '/works/wanxiang-hydro/project-ledger-view.webp', alt: '工程查看' },
      { src: '/works/wanxiang-hydro/system-user.webp', alt: '用户管理' },
      { src: '/works/wanxiang-hydro/system-role.webp', alt: '角色管理' },
      { src: '/works/wanxiang-hydro/system-menu.webp', alt: '菜单管理' },
      { src: '/works/wanxiang-hydro/system-unit.webp', alt: '单位管理' },
      { src: '/works/wanxiang-hydro/system-config.webp', alt: '系统设置' },
      { src: '/works/wanxiang-hydro/system-monitor.webp', alt: '系统监控' },
      { src: '/works/wanxiang-hydro/system-operation-log.webp', alt: '操作日志' },
      { src: '/works/wanxiang-hydro/system-announcement.webp', alt: '公告管理' },
      { src: '/works/wanxiang-hydro/profile-info.webp', alt: '个人信息' },
      { src: '/works/wanxiang-hydro/profile-password.webp', alt: '修改密码' },
      { src: '/works/wanxiang-hydro/video-monitor-live.webp', alt: '监控专题' },
      { src: '/works/wanxiang-hydro/devtools-backend-api.webp', alt: '后端接口' },
    ],
    logo: '/works/wanxiang-hydro/logo.svg',
    accounts: [{ label: '演示站', value: '以 https://wanxiang.datafuturex.cn 页面说明为准' }],
  },
  {
    slug: 'lingshu-market',
    name: '灵枢行业应用市场',
    englishName: 'Lingshu Industry App Market',
    tag: '正在开发中',
    summary:
      '行业应用枢纽：汇聚水利、灌区、农业、地质灾害等场景应用，支持发现、分发与启停。正在开发中。',
    openSource: false,
    accessNote: '正在开发中，暂未提供演示站与源码。进展与能力说明见作品页与文档入口。',
    palette: {
      id: 'lingshu-slate',
      label: '石板灰',
      hex: '#475569',
      rgb: '71, 85, 105',
    },
    stack: [
      'Vue 3',
      'TypeScript',
      'Element Plus',
      'Vite',
      'Java 21',
      'Spring Boot 3',
      'PostgreSQL',
    ],
    capabilities: [
      '应用目录：按行业与场景浏览、检索与收藏行业应用',
      '分发启停：应用安装、版本与启停管理（规划中）',
      '场景模板：水利、灌区、农业、地灾等行业模板（规划中）',
      '与物联控制面联动：承接设备与规则能力，形成应用层入口（规划中）',
    ],
    scenarios: [
      '行业客户按场景快速选型与试用应用',
      '集成商组装多行业应用组合交付',
      '与数智AI工业物联网等控制面协同运营',
    ],
    quickStart: [
      '作品正在开发中，暂无演示站',
      '可先浏览本页能力规划与工坊其他作品演示',
      '进展更新将同步到门户文档与作品页',
    ],
    links: {
      docsAnchor: '/docs#lingshu',
    },
    screenshots: [
      { src: '/works/lingshu-market/00-cover.webp', alt: '封面预览（开发中）' },
    ],
    logo: '/works/lingshu-market/logo.svg',
    accounts: [{ label: '状态', value: '正在开发中 · 暂无演示账号' }],
  },
]

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug)
}

/** @deprecated Use works / getWork */
export const products = works
export const getProduct = getWork

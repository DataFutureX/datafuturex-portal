export type WorkLinks = {
  demo?: string
  github?: string
  gitee?: string
  docsAnchor: string
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
  stack: string[]
  capabilities: string[]
  scenarios: string[]
  quickStart: string[]
  links: WorkLinks
  screenshots: { src: string; alt: string }[]
  logo?: string
  accounts: { label: string; value: string }[]
}

export const works: Work[] = [
  {
    slug: 'yunqi-admin',
    name: '云起管理后台',
    englishName: 'Yunqi Admin',
    tag: '完全开源 · MIT',
    summary: '完全开源的中后台脚手架：全面展示能力，并支持克隆源码二次开发。',
    openSource: true,
    accessNote: 'MIT 开源。可在线演示、本地演示模式，或克隆仓库前后端联调开发。',
    stack: [
      'Vue 3',
      'TypeScript',
      'Vite',
      'Element Plus',
      'Spring Boot 3',
      'Java 21',
      'MyBatis-Plus',
      'MySQL 8',
    ],
    capabilities: [
      '动态 RBAC：菜单驱动路由，按钮与页面权限双重兜底',
      '安全登录：滑动验证码 + RSA + JWT 黑名单',
      '组织与权限：用户、单位树、角色授权、菜单配置',
      '运维闭环：公告 SSE、操作日志月分表、系统监控',
      '开箱可开发：源码、文档、演示模式与联调路径齐全',
    ],
    scenarios: [
      '团队以脚手架快速搭建企业内部管理系统',
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
      { src: '/works/yunqi-admin/02-login.png', alt: '登录页' },
      { src: '/works/yunqi-admin/03-dashboard.png', alt: '工作台仪表盘' },
      { src: '/works/yunqi-admin/04-user.png', alt: '用户管理' },
      { src: '/works/yunqi-admin/05-unit.png', alt: '单位管理' },
      { src: '/works/yunqi-admin/06-role.png', alt: '角色授权' },
      { src: '/works/yunqi-admin/07-menu.png', alt: '菜单配置' },
      { src: '/works/yunqi-admin/08-system-config.png', alt: '系统设置' },
      { src: '/works/yunqi-admin/09-announcement.png', alt: '公告管理' },
      { src: '/works/yunqi-admin/10-operation-log.png', alt: '操作日志' },
      { src: '/works/yunqi-admin/11-monitor.png', alt: '系统监控' },
      { src: '/works/yunqi-admin/12-api-docs.png', alt: '接口文档' },
    ],
    logo: '/works/yunqi-admin/logo.svg',
    accounts: [
      { label: '在线/演示', value: 'demo / demo123' },
      { label: '前后端联调', value: 'admin / admin123' },
    ],
  },
  {
    slug: 'wanxiang-hydro',
    name: '万象物联监测平台',
    englishName: 'Wanxiang Hydro Monitor',
    tag: '开源正在筹备中',
    summary: '水文水资源物联监测平台。开源正在筹备中，当前可通过演示站体验能力与界面。',
    openSource: false,
    accessNote:
      '开源正在筹备中，暂不提供源码下载。请通过演示站体验：https://wanxiang.datafuturex.cn/portal',
    stack: [
      'Vue 3',
      'TypeScript',
      'Element Plus',
      'ECharts',
      'Cesium',
      'Spring Boot 3',
      'Netty',
      'MySQL 8',
      'Android',
      '微信小程序',
      'Spring AI',
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
      { src: '/works/wanxiang-hydro/login.png', alt: '登录页' },
      { src: '/works/wanxiang-hydro/home-dashboard.png', alt: '仪表盘' },
      { src: '/works/wanxiang-hydro/ai-chat.png', alt: '智能问答' },
      { src: '/works/wanxiang-hydro/ai-documents.png', alt: '知识管理' },
      { src: '/works/wanxiang-hydro/ai-document-qa.png', alt: '知识问答' },
      { src: '/works/wanxiang-hydro/map-overview-2d.png', alt: '二维地图' },
      { src: '/works/wanxiang-hydro/map-overview-3d.png', alt: '三维地图' },
      { src: '/works/wanxiang-hydro/data-realtime.png', alt: '实时数据' },
      { src: '/works/wanxiang-hydro/data-alerts.png', alt: '阈值告警' },
      { src: '/works/wanxiang-hydro/data-video-monitor.png', alt: '视频监控' },
      { src: '/works/wanxiang-hydro/terminal-list.png', alt: '遥测站管理' },
      { src: '/works/wanxiang-hydro/terminal-video-station.png', alt: '视频站管理' },
      { src: '/works/wanxiang-hydro/terminal-element-config.png', alt: '物模型管理' },
      { src: '/works/wanxiang-hydro/project-ledger-manage.png', alt: '工程管理' },
      { src: '/works/wanxiang-hydro/project-ledger-view.png', alt: '工程查看' },
      { src: '/works/wanxiang-hydro/system-user.png', alt: '用户管理' },
      { src: '/works/wanxiang-hydro/system-role.png', alt: '角色管理' },
      { src: '/works/wanxiang-hydro/system-menu.png', alt: '菜单管理' },
      { src: '/works/wanxiang-hydro/system-unit.png', alt: '单位管理' },
      { src: '/works/wanxiang-hydro/system-config.png', alt: '系统设置' },
      { src: '/works/wanxiang-hydro/system-monitor.png', alt: '系统监控' },
      { src: '/works/wanxiang-hydro/system-operation-log.png', alt: '操作日志' },
      { src: '/works/wanxiang-hydro/system-announcement.png', alt: '公告管理' },
      { src: '/works/wanxiang-hydro/profile-info.png', alt: '个人信息' },
      { src: '/works/wanxiang-hydro/profile-password.png', alt: '修改密码' },
      { src: '/works/wanxiang-hydro/video-monitor-live.png', alt: '监控专题' },
      { src: '/works/wanxiang-hydro/devtools-backend-api.png', alt: '后端接口' },
    ],
    logo: '/works/wanxiang-hydro/logo.svg',
    accounts: [{ label: '演示站', value: '以 https://wanxiang.datafuturex.cn 页面说明为准' }],
  },
]

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug)
}

/** @deprecated Use works / getWork */
export const products = works
export const getProduct = getWork

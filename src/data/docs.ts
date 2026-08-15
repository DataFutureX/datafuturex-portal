/** 文档侧栏与站内搜索共用目录 */
export const docChapters = [
  {
    title: '云起应用平台',
    items: [
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
    ],
  },
  {
    title: '数智AI工业物联网平台',
    items: [
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
    title: '万象监测平台',
    items: [
      {
        id: 'wanxiang',
        label: '概述与演示站',
        keywords: [
          '万象',
          '水文',
          '监测',
          'wanxiang',
          '数智中枢',
          'Agent',
          '巡检',
          '简报',
          'NL2SQL',
          '演示',
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
    title: '灵枢行业应用市场',
    items: [
      {
        id: 'lingshu',
        label: '概述与进展',
        keywords: ['灵枢', '行业应用', '市场', 'lingshu'],
      },
    ],
  },
] as const

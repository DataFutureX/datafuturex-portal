# 数智未来·AI工坊 · DataFutureX Portal

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB.svg)](https://react.dev/)

官网：[www.datafuturex.cn](https://www.datafuturex.cn)

数智未来·AI工坊（DataFutureX）作品展示门户：介绍工坊方向、浏览作品详情与系统截图，并跳转演示站与开源仓库。

## 工坊方向

- 物联网 IoT
- 数字孪生
- 行业应用（水利、灌区、农业、水库、地灾）
- AI 智能体开发

## 当前作品

| 作品 | 状态 | 演示 | 源码 |
|---|---|---|---|
| [云起应用平台](https://www.datafuturex.cn/works/yunqi-admin) | 完全开源 · MIT · YQAP | [yunqi.datafuturex.cn/portal](https://yunqi.datafuturex.cn/portal) | [GitHub](https://github.com/DataFutureX/yunqi-admin) / [Gitee](https://gitee.com/DataFutureX/yunqi-admin) |
| [数智AI工业物联网平台](https://www.datafuturex.cn/works/smart-iot-ai) | 暂未开源 | [iot.datafuturex.cn/portal](https://iot.datafuturex.cn/portal) | — |
| [万象监测平台](https://www.datafuturex.cn/works/wanxiang-hydro) | 开源正在筹备中 | [wanxiang.datafuturex.cn/portal](https://wanxiang.datafuturex.cn/portal) | — |
| [灵枢行业应用市场](https://www.datafuturex.cn/works/lingshu-market) | 正在开发中 | — | — |

## 技术栈

- Vite 7 + React 19 + TypeScript
- React Router 7
- 静态资源：WebP 截图（全图 / 中图 / 缩略图）

## 前置条件

- Node.js 20+（建议 LTS）
- npm 10+

## 快速开始

1. 克隆仓库

```bash
git clone https://gitee.com/DataFutureX/datafuturex-portal.git
cd datafuturex-portal
```

2. 安装依赖并启动开发服务

```bash
npm install
npm run dev
```

3. 浏览器打开终端提示的本地地址（默认 `http://localhost:5173`）

4. 生产构建与预览

```bash
npm run build
npm run preview
```

## 脚本

| 命令 | 说明 |
|---|---|
| `npm run dev` | 启动开发服务 |
| `npm run build` | 类型检查 + 生产构建 |
| `npm run preview` | 预览构建产物 |
| `npm run optimize:images` | 将 `public` 下 PNG/JPEG 转为 WebP（全图 / medium / thumbs） |
| `npm run reimport:screenshots` | 从源项目截图目录重新导入并压缩 |
| `npm run import:smart-iot` | 从 datafuturex-iot 导入工业物联网截图并压缩 |
| `npm run capture:wanxiang` | 用 Playwright 抓取万象监测平台演示站截图（需本机浏览器依赖） |

## 目录结构

```text
src/
  components/     # 布局、图集等 UI 组件
  data/           # 站点文案与作品元数据（site.ts / works.ts）
  pages/          # 路由页面
  styles/         # 全局样式
public/
  works/          # 作品截图与 logo
  contact/        # 联系方式二维码
scripts/          # 截图采集与图片优化
```

修改作品介绍、链接或截图列表时，优先编辑 `src/data/works.ts` 与 `src/data/site.ts`。

## 主要路由

| 路径 | 说明 |
|---|---|
| `/` | 首页 |
| `/works` | 作品列表 |
| `/works/:slug` | 作品详情（含截图图集） |
| `/docs` | 快速开始文档 |
| `/examples` | 示例入口（文档内链，不在主导航） |
| `/support` | 支持、联系方式与提问入口 |

## 反馈与贡献

- 提问与缺陷：[Gitee Issues](https://gitee.com/DataFutureX/datafuturex-portal/issues)
- 镜像仓库：[GitHub](https://github.com/DataFutureX/datafuturex-portal) · [Gitee](https://gitee.com/DataFutureX/datafuturex-portal)
- 联系方式见官网 [支持页](https://www.datafuturex.cn/support)

欢迎提交 Issue；若提交 PR，请说明改动目的与验证步骤。

## 许可证

本仓库源码采用 [MIT License](./LICENSE) 开源。

作品本身的开源状态以各作品仓库为准：云起应用平台为 MIT；数智AI工业物联网暂未开源；万象监测平台开源正在筹备中；灵枢正在开发中。

# 侧边栏与 Frontmatter 示例

## Frontmatter

```yaml
---
title: 快速开始
description: 5 分钟创建密钥并调用第一个 API
sidebar_position: 1
---
```

## sidebar.json 片段

```json
{
  "getting-started": {
    "label": "开始",
    "items": [
      "getting-started/index",
      "getting-started/authentication"
    ]
  },
  "guides": {
    "label": "指南",
    "items": [
      "guides/upload-data",
      "guides/query-api"
    ]
  },
  "api": {
    "label": "API 参考",
    "link": "/docs/api"
  }
}
```

## 文档页组件检查

- `DocsLayout`：侧栏 + 正文 + 可选 TOC
- `Pager`：prev/next 来自侧栏顺序，勿手写死链
- `Callout`：仅用于警告/版本提示，不滥用

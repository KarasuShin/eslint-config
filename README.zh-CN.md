# @karasushin/eslint-config

[![npm package](https://img.shields.io/npm/v/@karasushin/eslint-config.svg)](https://www.npmjs.com/package/@karasushin/eslint-config)

[English](./README.md) / 简体中文

## 用法

### 安装

```bash
pnpm add -D eslint @karasushin/eslint-config
```

### 配置

在你的项目下创建一个 `eslint.config.js`


```js
import { karasu } from '@karasushin/eslint'

export default karasu()
```

你也可以进行一些自定义配置
```js
export default karasu({
  typescript: true, // default true
  react: true, // default false
  markdown: true, // default false
})
```

### 添加 lint 脚本

添加以下内容到 `package.json`
```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### 配置 VSCode
编辑 `settings.json`
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": "never"
  },
  "eslint.experimental.useFlatConfig": true,
  "eslint.format.enable": true,
  "eslint.validate": [
    "html",
    "javascript",
    "javascriptreact",
    "json",
    "jsonc"
    "markdown",
    "typescript",
    "typescriptreact",
  ]
}
```

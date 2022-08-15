# @karasushin/eslint-config

[![npm package](https://img.shields.io/npm/v/@karasushin/eslint-config.svg)](https://www.npmjs.com/package/@karasushin/eslint-config)

[English](./README.md) / 简体中文

**TIPS: @karasushin/eslint-config 面向现代浏览器, 其中一部分规则可能会与ie或其它低版本浏览器产生冲突** 
---

## 用法

### 安装

```bash
pnpm add -D eslint @karasushin/eslint-config
```

在你的项目下创建一个 eslint 配置文件, 复制以下内容到文件中:

```json
{
  "extends": "@karasushin"
}
```

### 添加检查脚本

添加以下内容到 `package.json`
```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### 配置 WebStorm 自动修复
1. `偏好设置` > `语言和框架` > `JavaScript` > `代码质量工具` > `ESLint`
2. 勾选 `保存时运行 eslint --fix`

### 配置 VSCode 自动修复
编辑 `settings.json`
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.format.enable": true
}
```

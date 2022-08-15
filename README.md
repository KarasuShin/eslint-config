# @karasushin/eslint-config

[![npm package](https://img.shields.io/npm/v/@karasushin/eslint-config.svg)](https://www.npmjs.com/package/@karasushin/eslint-config)

English / [简体中文](./README.zh-CN.md)

**TIPS: @karasushin/eslint-config is for modern browsers, some rules will conflict with ie or other lower versions browsers** 
---

## Usage

### Install

```bash
pnpm add -D eslint @karasushin/eslint-config
```

Create an eslint config file in your project, then copy the following content into it:

```json
{
  "extends": "@karasushin"
}
```

### Add lint script

add the following content into `package.json`
```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config WebStorm auto fix
1. `Preferences` > `Languages & Frameworks` > `JavaScript` > `Code Quality Tools` > `ESLint`
2. check the `Run eslint --fix on save`

### Config VSCode auto fix
edit the `settings.json`
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.format.enable": true
}
```

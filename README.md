# @karasushin/eslint-config

[![npm package](https://img.shields.io/npm/v/@karasushin/eslint-config.svg)](https://www.npmjs.com/package/@karasushin/eslint-config)

English / [简体中文](./README.zh-CN.md)

## Usage

### Install

```bash
pnpm add -D eslint @karasushin/eslint-config
```

### Config

Create `eslint.config.js` in your project

```js
import { karasu } from '@karasushin/eslint'

export default karasu()
```

You can also do some configuration
```js
export default karasu({
  typescript: true, // default true
  react: true, // default false
  markdown: true, // default false
})
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

### Config VSCode
edit the `settings.json`
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

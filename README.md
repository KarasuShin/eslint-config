# @karasushin/eslint-config

[![npm package](https://img.shields.io/npm/v/@karasushin/eslint-config.svg)](https://www.npmjs.com/package/@karasushin/eslint-config)

English / [简体中文](./README.zh-CN.md)

## Usage

### Install

```bash
pnpm add -D eslint @karasushin/eslint-config
```

Create `eslint.config.js` in your project, then copy the following content into it:

```js
import { baseConfig, reactConfig, vueConfig } from '@karasushin/eslint

export default [
  ...baseConfig,
  ...reactConfig,
  ...vueConfig
]
```

you can add config for React or Vue.


```js
import { baseConfig, reactConfig, vueConfig } from '@karasushin/eslint

export default [
  ...baseConfig,
  ...reactConfig,
  ...vueConfig
]
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
  "eslint.format.enable": true,
  "eslint.experimental.useFlatConfig": true,
}
```

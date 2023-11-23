import { jsConfig } from './js.js'
import { tsConfig } from './typescript.js'
import { mdConfig } from './md.js'
import { jsonConfig, pkgConfig } from './json.js'
import { nodeConfig } from './nodejs.js'
import { importConfig } from './import.js'
import { reactConfig } from './react.js'
import { vueConfig } from './vue.js'
import { baseConfig } from './base.js'
import { FlatESLintConfigItem } from 'eslint-define-config'

export const eslintConfig = (...options: (FlatESLintConfigItem|FlatESLintConfigItem[])[]) => {
  return options.flat()
}

export {
  jsConfig,
  tsConfig,
  mdConfig,
  importConfig,
  jsonConfig,
  pkgConfig,
  nodeConfig,
  baseConfig,
  reactConfig,
  vueConfig
}
import { jsConfig } from './js.js'
import { tsConfig } from './typescript.js'
import { mdConfig } from './md.js'
import { jsonConfig, pkgConfig } from './json.js'
import { nodeConfig } from './nodejs.js'

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const baseConfig = [
  ...jsConfig,
  ...tsConfig,
  mdConfig,
  jsonConfig,
  pkgConfig,
  ...nodeConfig,
]

export {
  jsConfig,
  tsConfig,
  mdConfig,
  jsonConfig,
  pkgConfig,
  nodeConfig,
}

export { reactConfig } from './react.js'
export { vueConfig } from './vue.js'

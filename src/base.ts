import { jsConfig } from './js.js'
import { tsConfig } from './typescript.js'
import { mdConfig } from './md.js'
import { jsonConfig, pkgConfig } from './json.js'
import { nodeConfig } from './nodejs.js'
import { importConfig } from './import.js'
import { FlatESLintConfigItem } from 'eslint-define-config'

export const baseConfig: FlatESLintConfigItem[] = [
  ...jsConfig,
  ...tsConfig,
  mdConfig,
  jsonConfig,
  pkgConfig,
  importConfig,
  ...nodeConfig,
]
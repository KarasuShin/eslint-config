import type { FlatESLintConfig } from 'eslint-define-config'
import { ignores } from './configs/ignores'
import { javascript } from './configs/javascript'
import { comments } from './configs/comments'
import { imports } from './configs/imports'
import { unicorn } from './configs/unicorn'
import { typescriptConfig } from './configs/typescript'
import { jsoncConfig } from './configs/jsonc'
import { reactConfig } from './configs/react'
import { markdownConfig } from './configs/markdown'
import { sortPackageJson } from './configs/sort'

const baseConfigs: FlatESLintConfig[] = [
  ...comments,
  ...ignores,
  ...imports,
  ...javascript,
  ...unicorn,
  ...jsoncConfig,
  ...sortPackageJson,
]

export function karasu(options?: {
  typescript?: boolean
  react?: boolean
  markdown?: boolean
}) {
  const configs = [
    ...baseConfigs,
  ]
  if (options?.typescript !== false) {
    configs.push(...typescriptConfig)
  }
  if (options?.react) {
    configs.push(...reactConfig)
  }
  if (options?.markdown) {
    configs.push(...markdownConfig)
  }
  return configs
}

export * from './globs'
export {
  baseConfigs,
  typescriptConfig,
  reactConfig,
  jsoncConfig,
  markdownConfig,
}

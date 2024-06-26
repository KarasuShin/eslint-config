import type { FlatESLintConfig, Rules } from 'eslint-define-config'
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

interface Options {
  typescript?: boolean
  react?: boolean
  markdown?: boolean
  rules?: Partial<Rules>
}

const baseConfigs: FlatESLintConfig[] = [
  ...comments,
  ...ignores,
  ...imports,
  ...javascript,
  ...unicorn,
  ...jsoncConfig,
  ...sortPackageJson,
]

export function karasu({
  typescript = true,
  react = false,
  markdown = false,
}: Options) {
  const configs = [
    ...baseConfigs,
  ]
  if (typescript) {
    configs.push(...typescriptConfig)
  }
  if (react) {
    configs.push(...reactConfig)
  }
  if (markdown) {
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

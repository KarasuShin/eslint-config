// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as _pluginMarkdown from 'eslint-plugin-markdown'
import * as _pluginComments from 'eslint-plugin-eslint-comments'
import * as _pluginTypeScript from '@typescript-eslint/eslint-plugin'
import * as _pluginUnicorn from 'eslint-plugin-unicorn'
import * as _pluginStylisticJS from '@stylistic/eslint-plugin-js'
import * as _pluginStylisticJSX from '@stylistic/eslint-plugin-jsx'
import * as _pluginStylisticPlus from '@stylistic/eslint-plugin-plus'
import * as _pluginStylisticTS from '@stylistic/eslint-plugin-ts'
import * as _pluginReact from 'eslint-plugin-react'
import * as _pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import { interopDefault } from './utils'

export const pluginComments = interopDefault(_pluginComments)
export * as pluginImport from 'eslint-plugin-i'
export * as pluginJsonc from 'eslint-plugin-jsonc'
export const pluginMarkdown = interopDefault(_pluginMarkdown)
export * as parserTypeScript from '@typescript-eslint/parser'
export const pluginReact = interopDefault(_pluginReact)
export const pluginReactHooks = interopDefault(_pluginReactHooks)
export const pluginStylisticJS = interopDefault(_pluginStylisticJS)
export const pluginStylisticJSX = interopDefault(_pluginStylisticJSX)
export const pluginStylisticPlus = interopDefault(_pluginStylisticPlus)
export const pluginStylisticTS = interopDefault(_pluginStylisticTS)
export const pluginTypeScript = interopDefault(_pluginTypeScript)
export const pluginUnicorn = interopDefault(_pluginUnicorn)
export { pluginReactRefresh }

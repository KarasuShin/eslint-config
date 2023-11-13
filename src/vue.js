import vuePlugin from 'eslint-plugin-vue'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import vueParser from 'vue-eslint-parser'
import { tsConfig } from './typescript.js'

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const vueConfig = [{
  files: ['**/*.vue'],
  plugins: {
    'vue': vuePlugin,
    '@typescript-eslint': tsPlugin,
  },
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
      extraFileExtensions: ['.vue'],
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  processor: vuePlugin.processors['.vue'],
  rules: {
    ...tsConfig[0].rules,
    ...vuePlugin.configs.base.rules,
    ...vuePlugin.configs['vue3-essential'].rules,
    ...vuePlugin.configs['vue3-strongly-recommended'].rules,
    ...vuePlugin.configs['vue3-recommended'].rules,
    'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
    'vue/eqeqeq': ['error', 'smart'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
  },
}]

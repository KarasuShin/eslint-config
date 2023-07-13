import mdPlugin from 'eslint-plugin-markdown'
import tsPlugin from '@typescript-eslint/eslint-plugin'

/** @type {import('eslint-define-config').FlatESLintConfigItem} */
export const mdConfig = {
  files: ['**/*.md/*.*'],
  plugins: {
    'markdown': mdPlugin,
    '@typescript-eslint': tsPlugin,
  },
  processor: 'markdown/markdown',
  rules: {
    ...mdPlugin.configs.recommended.rules,
    'no-alert': 'off',
    'no-console': 'off',
    'no-unused-expressions': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/comma-dangle': 'off',
  },
}

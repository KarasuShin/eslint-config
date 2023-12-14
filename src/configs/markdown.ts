import type { FlatESLintConfig } from 'eslint-define-config'
import { GLOB_MARKDOWN, GLOB_SRC } from '../globs'
import { pluginMarkdown } from '../plugins'

export const markdownConfig: FlatESLintConfig[] = [{
  files: [GLOB_MARKDOWN],
  plugins: {
    markdown: pluginMarkdown,
  },
  processor: 'markdown/markdown',
}, {
  files: [`${GLOB_MARKDOWN}/${GLOB_SRC}`],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        impliedStrict: true,
      },
    },
  },
  rules: {
    'eol-last': 'off',
    'no-alert': 'off',
    'no-console': 'off',
    'no-restricted-imports': 'off',
    'no-undef': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'padded-blocks': 'off',
    'strict': 'off',
    'unicode-bom': 'off',
    'unused-imports/no-unused-imports': 'off',
    'unused-imports/no-unused-vars': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
}]

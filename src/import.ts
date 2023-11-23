import { FlatESLintConfig, FlatESLintConfigItem, Rules } from 'eslint-define-config'
// @ts-ignore
import importPlugin from 'eslint-plugin-import'
// @ts-ignore
import unusedImportsPlugin from 'eslint-plugin-unused-imports'

const importRules: Rules = {
  'import/first': 'error',
  'import/named': 'error',
  'import/newline-after-import': ['error', { considerComments: true, count: 1 }],
  'import/no-duplicates': 'error', 
  'import/no-mutable-exports': 'error',
  'import/no-named-default': 'error',
  'import/no-self-import': 'error', 
  'import/order': 'error',
}

const unusedImportsRules: Rules = {
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': [
    'error',
    { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
  ],
}

export const importConfig: FlatESLintConfigItem = {
  languageOptions: {
    sourceType: 'module',
  },
  plugins: {
    'import': importPlugin,
    'unused-imports': unusedImportsPlugin,
  },
  rules: {
    ...importRules,
    ...unusedImportsRules,
  },
}

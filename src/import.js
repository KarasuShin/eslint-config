import importPlugin from 'eslint-plugin-import'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'

/** @type {import('eslint-define-config').Rules} */
const importRules = {
  'import/first': 'error',
  'import/named': 'error',
  'import/newline-after-import': ['error', { considerComments: true, count: 1 }],
  'import/no-duplicates': 'error',
  'import/no-mutable-exports': 'error',
  'import/no-named-default': 'error',
  'import/no-self-import': 'error',
  'import/order': 'error',
}

/** @type {import('eslint-define-config').Rules} */
const unusedImportsRules = {
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': [
    'error',
    { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
  ],
}

/** @type {import('eslint-define-config').FlatESLintConfigItem} */
export const importConfig = {
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

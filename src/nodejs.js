/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const nodeConfig = [{
  files: ['**/scripts/*', '**/cli.*'],
  rules: {
    'no-console': 'off',
  },
},
{
  files: ['**/*.test.js', '**/*.spec.js'],
  rules: {
    'no-unused-expression': 'off',
  },
}]

import { FlatESLintConfigItem } from "eslint-define-config";

export const nodeConfig: FlatESLintConfigItem[] = [{
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

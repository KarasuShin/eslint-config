// @ts-ignore
import reactPlugin from 'eslint-plugin-react'
// @ts-ignore
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import { tsConfig } from './typescript.js'
import { FlatESLintConfigItem } from 'eslint-define-config'
import { baseConfig } from './base.js'

export const reactConfig: FlatESLintConfigItem[] = [
  ...baseConfig,
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...tsConfig[0].rules,
      ...reactPlugin.configs.recommended.rules,
      'jsx-quotes': [
        'error',
        'prefer-double',
      ],
      'react/button-has-type': 'error',
      'react/display-name': ['off', { ignoreTranspilerName: false }],
      'react/jsx-no-bind': ['error', {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      }],
      'react/no-array-index-key': 'error',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
    },
  }
]
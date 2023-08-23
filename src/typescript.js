import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'

/** @type {import('eslint-define-config').FlatESLintConfigItem} */
export const tsConfig = [{
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      sourceType: 'module',
    },
  },
  plugins: {
    '@typescript-eslint': tsPlugin,
  },
  rules: {
    ...tsPlugin.configs['eslint-recommended'].overrides[0].rules,
    ...tsPlugin.configs.strict.rules,
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
      },
    }],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    'no-useless-constructor': 'off',
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      MemberExpression: 0,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      ignoredNodes: [
        'PropertyDefinition[decorators]',
      ],
    }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: true }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': ['error', 'always'],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'error',
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error', 'functions'],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/parameter-properties': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
  },
}, {
  files: ['**/*.{test,spec}.ts?(x)'],
  rules: {
    'no-unused-expressions': 'off',
  },
}]

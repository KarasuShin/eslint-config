import type { FlatESLintConfig, Rules } from 'eslint-define-config'
import { GLOB_TS, GLOB_TSX } from '../globs'
import { parserTypeScript, pluginStylisticJS, pluginStylisticPlus, pluginStylisticTS, pluginTypeScript } from '../plugins'
import { sortTsconfig } from './sort'

const stylisticRules: Partial<Rules> = {
  '@stylistic/js/block-spacing': 'off',
  '@stylistic/ts/block-spacing': ['error', 'always'],
  '@stylistic/js/brace-style': 'off',
  '@stylistic/ts/brace-style': ['error', '1tbs', { allowSingleLine: true }],
  '@stylistic/js/comma-dangle': 'off',
  '@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/js/comma-spacing': 'off',
  '@stylistic/ts/comma-spacing': ['error', { before: false, after: true }],
  '@stylistic/js/func-call-spacing': 'off',
  '@stylistic/ts/func-call-spacing': ['error', 'never'],
  '@stylistic/js/indent': 'off',
  '@stylistic/ts/indent': ['error', 2, {
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
  '@stylistic/js/key-spacing': 'off',
  '@stylistic/ts/key-spacing': ['error', { beforeColon: false, afterColon: true }],
  '@stylistic/js/keyword-spacing': 'off',
  '@stylistic/ts/keyword-spacing': ['error', { before: true, after: true }],
  '@stylistic/ts/member-delimiter-style': ['error', {
    multiline: {
      delimiter: 'none',
    },
  }],
  '@stylistic/js/no-extra-parens': 'off',
  '@stylistic/ts/no-extra-parens': ['error', 'functions'],
  '@stylistic/js/object-curly-spacing': 'off',
  '@stylistic/ts/object-curly-spacing': ['error', 'always'],
  '@stylistic/js/quotes': 'off',
  '@stylistic/ts/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  '@stylistic/js/semi': 'off',
  '@stylistic/ts/semi': ['error', 'never'],
  '@stylistic/js/space-before-blocks': 'off',
  '@stylistic/ts/space-before-blocks': ['error', 'always'],
  '@stylistic/js/space-before-function-paren': 'off',
  '@stylistic/ts/space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  '@stylistic/js/space-infix-ops': 'off',
  '@stylistic/ts/space-infix-ops': 'error',
  '@stylistic/ts/type-annotation-spacing': 'error',
  '@stylistic/plus/type-generic-spacing': 'error',
  '@stylistic/plus/type-named-tuple-spacing': 'error',
}

export const typescriptConfig: FlatESLintConfig[] = [{
  files: [GLOB_TS, GLOB_TSX],
  languageOptions: {
    parser: parserTypeScript,
    parserOptions: {
      sourceType: 'module',
    },
  },
  plugins: {
    '@typescript-eslint': pluginTypeScript,
    '@stylistic/ts': pluginStylisticTS,
    '@stylistic/js': pluginStylisticJS,
    '@stylistic/plus': pluginStylisticPlus,
  },
  rules: {
    'constructor-super': 'off', // ts(2335) & ts(2377)
    'getter-return': 'off', // ts(2378)
    'no-array-constructor': 'off',
    'no-const-assign': 'off', // ts(2588)
    'no-dupe-args': 'off', // ts(2300)
    'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
    'no-dupe-keys': 'off', // ts(1117)
    'no-func-assign': 'off', // ts(2630)
    'no-import-assign': 'off', // ts(2632) & ts(2540)
    'no-new-symbol': 'off', // ts(7009)
    'no-obj-calls': 'off', // ts(2349)
    'no-redeclare': 'off', // ts(2451)
    'no-setter-return': 'off', // ts(2408)
    'no-this-before-super': 'off', // ts(2376) & ts(17009)
    'no-undef': 'off', // ts(2304) & ts(2552)
    'no-unreachable': 'off', // ts(7027)
    'no-unsafe-negation': 'off', // ts(2365) & ts(2322) & ts(2358)
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: true }],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    ...stylisticRules,
  },
}, {
  files: ['**/*.d.ts'],
  rules: {
    'eslint-comments/no-unlimited-disable': 'off',
    'import/no-duplicates': 'off',
    'unused-imports/no-unused-vars': 'off',
  },
}, {
  files: ['**/*.{test,spec}.ts?(x)'],
  rules: {
    'no-unused-expressions': 'off',
  },
}, {
  files: ['**/*.js', '**/*.cjs'],
  rules: {
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
}, ...sortTsconfig]

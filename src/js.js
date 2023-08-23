import globals from 'globals'
import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import unicornPlugin from 'eslint-plugin-unicorn'
import nPlugin from 'eslint-plugin-n'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'

/** @type {import('eslint-define-config').Rules} */
const baseRules = {
  'accessor-pairs': ['error', { setWithoutGet: true, enforceForClassMembers: true }],
  'arrow-body-style': ['error', 'as-needed'],
  'array-bracket-newline': ['error', 'consistent'],
  'array-bracket-spacing': ['error', 'never'],
  'array-callback-return': ['error', { allowImplicit: true }],
  'arrow-parens': ['error', 'as-needed'],
  'arrow-spacing': ['error', { before: true, after: true }],
  'block-spacing': ['error', 'always'],
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],
  'camelcase': [
    'error', {
      allow: ['^UNSAFE_'],
      properties: 'never',
      ignoreGlobals: true,
    },
  ],
  'comma-dangle': ['error', 'always-multiline'],
  'comma-spacing': ['error', { before: false, after: true }],
  'comma-style': ['error', 'last'],
  'computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
  'curly': ['error', 'all'],
  'default-case': 'error',
  'default-case-last': 'error',
  'default-param-last': 'error',
  'dot-location': ['error', 'property'],
  'dot-notation': ['error', { allowKeywords: true }],
  'eol-last': 'error',
  'eqeqeq': ['error', 'always', { null: 'ignore' }],
  'func-call-spacing': ['error', 'never'],
  'implicit-arrow-linebreak': 'error',
  'indent': [
    'error',
    2,
    {
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
    },
  ],
  'key-spacing': ['error', { beforeColon: false, afterColon: true }],
  'keyword-spacing': ['error', { before: true, after: true }],
  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
  'multiline-ternary': ['error', 'always-multiline'],
  'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
  'new-parens': 'error',
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-await-in-loop': 'error',
  'no-caller': 'error',
  'no-console': ['error', { allow: ['warn', 'error'] }],
  'no-constant-binary-expression': 'error',
  'no-constructor-return': 'error',
  'no-else-return': 'error',
  'no-empty': ['error', { allowEmptyCatch: true }],
  'no-empty-function': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-parens': ['error', 'functions'],
  'no-implied-eval': 'error',
  'no-iterator': 'error',
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-mixed-operators': [
    'error', {
      groups: [
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: true,
    },
  ],
  'no-multi-spaces': 'error',
  'no-multi-str': 'error',
  'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-object': 'error',
  'no-new-wrappers': 'error',
  'no-octal-escape': 'error',
  'no-proto': 'error',
  'no-redeclare': ['error', { builtinGlobals: true }],
  'no-return-assign': ['error', 'except-parens'],
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-tabs': 'error',
  'no-template-curly-in-string': 'error',
  'no-throw-literal': 'error',
  'no-trailing-spaces': 'error',
  'no-undef-init': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'no-unreachable-loop': 'error',
  'no-unused-expressions': [
    'error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    },
  ],
  'no-unused-vars': 'off',
  'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
  'no-useless-call': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'warn',
  'no-void': 'error',
  'no-whitespace-before-property': 'error',
  'object-curly-newline': ['error', { multiline: true, consistent: true }],
  'object-curly-spacing': ['error', 'always'],
  'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
  'object-shorthand': ['error', 'properties'],
  'one-var': ['error', { initialized: 'never' }],
  'operator-linebreak': ['error', 'before'],
  'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
  'prefer-arrow-callback': 'error',
  'prefer-const': ['error', { destructuring: 'any' }],
  'prefer-exponentiation-operator': 'error',
  'prefer-promise-reject-errors': 'error',
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'quote-props': ['error', 'consistent-as-needed'],
  'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  'rest-spread-spacing': ['error', 'never'],
  'semi': ['error', 'never'],
  'semi-spacing': ['error', { before: false, after: true }],
  'sort-imports': [
    'error', {
      ignoreCase: false,
      ignoreMemberSort: false,
      ignoreDeclarationSort: true,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    },
  ],
  'space-before-blocks': ['error', 'always'],
  'space-before-function-paren': [
    'error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  'space-in-parens': ['error', 'never'],
  'space-infix-ops': 'error',
  'space-unary-ops': ['error', { words: true, nonwords: false }],
  'spaced-comment': [
    'error', 'always', {
      line: { markers: ['*package', '!', '/', ',', '='] },
      block: { balanced: true, markers: ['*package', '!', ',', ':', '::', 'flow-include'], exceptions: ['*'] },
    },
  ],
  'switch-colon-spacing': 'error',
  'symbol-description': 'error',
  'template-curly-spacing': ['error', 'never'],
  'template-tag-spacing': ['error', 'never'],
  'unicode-bom': ['error', 'never'],
  'use-isnan': [
    'error', {
      enforceForSwitchCase: true,
      enforceForIndexOf: true,
    },
  ],
  'valid-typeof': ['error', { requireStringLiterals: true }],
  'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
  'yield-star-spacing': ['error', 'both'],
  'yoda': ['error', 'never'],
}

/** @type {import('eslint-define-config').Rules} */
const importRules = {
  'import/default': 'error',
  'import/named': 'error',
}

/** @type {import('eslint-define-config').Rules} */
const nRules = {
  'n/handle-callback-err': ['error', '^(err|error)'],
  'n/no-callback-literal': 'off',
}

/** @type {import('eslint-define-config').Rules} */
const unicornRules = {
  'unicorn/better-regex': ['error', { sortCharacterClasses: true }],
  'unicorn/catch-error-name': 'error',
  'unicorn/error-message': 'error',
  'unicorn/escape-case': 'error',
  'unicorn/no-array-for-each': 'error',
  'unicorn/no-array-push-push': 'error',
  'unicorn/no-instanceof-array': 'error',
  'unicorn/no-new-buffer': 'error',
  'unicorn/number-literal-case': 'error',
  'unicorn/prefer-array-find': 'error',
  'unicorn/prefer-array-flat': 'error',
  'unicorn/prefer-array-some': 'error',
  'unicorn/prefer-dom-node-remove': 'error',
  'unicorn/prefer-dom-node-text-content': 'error',
  'unicorn/prefer-includes': 'error',
  'unicorn/prefer-keyboard-event-key': 'error',
  'unicorn/prefer-logical-operator-over-ternary': 'error',
  'unicorn/prefer-modern-dom-apis': 'error',
  'unicorn/prefer-set-has': 'error',
  'unicorn/prefer-string-starts-ends-with': 'error',
  'unicorn/prefer-switch': 'error',
  'unicorn/prefer-type-error': 'error',
  'unicorn/throw-new-error': 'error',
}

/** @type {import('eslint-define-config').Rules} */
const unusedImportsRules = {
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': [
    'error',
    { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
  ],
}

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const jsConfig = [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      sourceType: 'module',
    },
    plugins: {
      'import': importPlugin,
      'n': nPlugin,
      'unicorn': unicornPlugin,
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      ...baseRules,
      ...importRules,
      ...unusedImportsRules,
      ...unicornRules,
      ...nRules,
    },
  },
]

module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:markdown/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    './standard',
  ],
  ignorePatterns: [
    '*.min.*', 'dist',
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml',
    'public',
    'temp',
    'CHANGELOG.md',
    'LICENSE*',
    '!.github',
    '!.vscode',
    'output',
    'coverage',
  ],
  overrides: [{
    files: ['*.json', '*.json5'],
    parser: 'jsonc-eslint-parser',
    rules: {
      'jsonc/array-bracket-spacing': ['error', 'never'],
      'jsonc/comma-dangle': ['error', 'never'],
      'jsonc/comma-style': ['error', 'last'],
      'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'jsonc/no-octal-escape': 'error',
      'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
      'jsonc/object-curly-spacing': ['error', 'always'],
      'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    },
  }, {
    files: ['package.json'],
    parser: 'jsonc-eslint-parser',
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          pathPattern: '^$',
          order: [
            'publisher',
            'name',
            'displayName',
            'type',
            'version',
            'private',
            'packageManager',
            'description',
            'author',
            'license',
            'funding',
            'homepage',
            'repository',
            'bugs',
            'keywords',
            'categories',
            'sideEffects',
            'exports',
            'main',
            'module',
            'unpkg',
            'jsdelivr',
            'types',
            'typesVersions',
            'bin',
            'icon',
            'files',
            'engines',
            'activationEvents',
            'contributes',
            'scripts',
            'peerDependencies',
            'peerDependenciesMeta',
            'dependencies',
            'optionalDependencies',
            'devDependencies',
            'pnpm',
            'overrides',
            'resolutions',
            'husky',
            'simple-git-hooks',
            'lint-staged',
            'eslintConfig',
          ],
        },
        {
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
          order: { type: 'asc' },
        },
        {
          pathPattern: '^exports.*$',
          order: [
            'types',
            'require',
            'import',
          ],
        },
      ],
    },
  }, {
    files: ['*.js'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  }, {
    files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
    rules: {
      'constructor-super': 'off', // ts(2335) & ts(2377)
      'getter-return': 'off', // ts(2378)
      'no-const-assign': 'off', // ts(2588)
      'no-dupe-args': 'off', // ts(2300)
      'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
      'no-dupe-keys': 'off', // ts(1117)
      'no-func-assign': 'off', // ts(2539)
      'no-import-assign': 'off', // ts(2539) & ts(2540)
      'no-new-symbol': 'off', // ts(2588)
      'no-obj-calls': 'off', // ts(2349)
      'no-redeclare': 'off', // ts(2451)
      'no-setter-return': 'off', // ts(2408)
      'no-this-before-super': 'off', // ts(2376)
      'no-undef': 'off', // ts(2304)
      'no-unreachable': 'off', // ts(7027)
      'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
      'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
      'prefer-const': 'error', // ts provides better types with const
      'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
      'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
      'valid-typeof': 'off', // ts(2367)
    },
  }, {
    files: ['*.d.ts'],
    rules: {
      'import/no-duplicates': 'off',
    },
  }, {
    files: ['scripts/**/*.*', 'cli.*'],
    rules: {
      'no-console': 'off',
    },
  }, {
    files: ['*.test.js', '*.spec.js'],
    rules: {
      'no-unused-expression': 'off',
    },
  }, {
    files: ['**/*.md/*.*'],
    rules: {
      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      'no-alert': 'off',
      'no-console': 'off',
      'no-undef': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'import/no-unresolved': 'off',
    },
  }],
  plugins: ['html', 'unicorn'],
  reportUnusedDisableDirectives: true,
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'array-callback-return': ['error', { allowImplicit: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'curly': ['error', 'all'],
    'default-case': 'error',
    'default-param-last': 'error',
    'for-direction': 'error',
    'generator-star-spacing': 'off',
    'getter-return': 'error',
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
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
    'no-alert': 'error',
    'no-await-in-loop': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    'no-dupe-else-if': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-floating-decimal': 'off',
    'no-lonely-if': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
    'no-nonoctal-decimal-escape': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': ['error', { builtinGlobals: true }],
    'no-unused-labels': 'error',
    'no-useless-concat': 'error',
    'object-shorthand': ['error', 'properties'],
    'operator-linebreak': ['error', 'before'],
    'prefer-arrow-callback': 'error',
    'prefer-const': ['error', { destructuring: 'any' }],
    'prefer-exponentiation-operator': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'sort-imports': [
      'error', {
        ignoreCase: false,
        ignoreMemberSort: false,
        ignoreDeclarationSort: true,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'space-before-function-paren': [
      'error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'switch-colon-spacing': 'error',

    'promise/prefer-await-to-then': 'error',
    'import/default': 'error',
    'import/named': 'error',
    'import/no-unresolved': 'off',

    'n/handle-callback-err': ['error', '^(err|error)'],
    'n/no-callback-literal': 'off',

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
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
}


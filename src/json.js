import jsonParser from 'jsonc-eslint-parser'
import jsonPlugin from 'eslint-plugin-jsonc'

/** @type {import('eslint-define-config').FlatESLintConfigItem} */
export const jsonConfig = {
  files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
  plugins: {
    jsonc: jsonPlugin,
  },
  languageOptions: {
    parser: jsonParser,
  },
  rules: {
    ...jsonPlugin.configs['recommended-with-jsonc'],
    'jsonc/array-bracket-spacing': ['error', 'never'],
    'jsonc/comma-dangle': ['error', 'never'],
    'jsonc/comma-style': ['error', 'last'],
    'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'jsonc/no-octal-escape': 'error',
    'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
    'jsonc/object-curly-spacing': ['error', 'always'],
    'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
  },
}

/** @type {import('eslint-define-config').FlatESLintConfigItem} */
export const pkgConfig = {
  files: ['**/package.json'],
  plugins: {
    jsonc: jsonPlugin,
  },
  languageOptions: {
    parser: jsonParser,
  },
  rules: {
    'jsonc/sort-keys': [
      'error',
      {
        pathPattern: '^$',
        order: [
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
          'publishConfig',
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
}

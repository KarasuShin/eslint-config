module.exports = {
  extends: [
    'plugin:react/recommended',
    '@karasushin/eslint-config-typescript',
  ],
  plugins: [
    'react-hooks',
  ],
  settings: {
    react: {
      version: '18.0',
    },
  },
  rules: {
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

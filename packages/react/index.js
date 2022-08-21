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
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'error',
    'react/require-default-props': 'error',
    'react/no-array-index-key': 'error',
    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    }],
    'react-hooks/rules-of-hooks': 'error',
  },
}

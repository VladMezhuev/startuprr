// http://eslint.org/docs/user-guide/configuring
// Date of last rules check: 2020-08-25

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    require.resolve('@operarius/vue-eslint-config'),
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack/base.js'
      }
    }
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};

module.exports = {
  env: {
    browser: false,
  },
  extends: [
    'eslint-config-airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'no-console': 0,
  },
};

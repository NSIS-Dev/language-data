/* eslint-disable */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:json/recommended'
  ],
  parserOptions: {
    sourceType: "module"
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
  }
};

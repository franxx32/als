const OFF = 0,
  WARN = 1,
  ERROR = 2

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ERROR,
    eqeqeq: ERROR,
    'no-console': OFF,
    '@typescript-eslint/no-namespace': OFF,
    '@typescript-eslint/member-delimiter-style': [
      WARN,
      {
        multiline: { delimiter: 'none' },
        singleline: { delimiter: 'semi' },
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      ERROR,
      {
        ignoreRestArgs: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': WARN,
  },
}

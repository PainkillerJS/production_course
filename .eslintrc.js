module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:i18n-json/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react'],
  ignorePatterns: ['*eslint*'],
  rules: {
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/explicit-function-return-type': 1,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/return-await': 0,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/space-before-function-paren': 0,
  },
};

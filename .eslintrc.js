module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:i18n-json/recommended',
    'prettier'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['react', 'simple-import-sort', 'prettier', 'react-hooks', 'painkillerjs-plugin'],
  ignorePatterns: ['*eslint*', '*prettier*'],
  rules: {
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/explicit-function-return-type': 1,
    'react/react-in-jsx-scope': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/display-name': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/return-await': 0,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/consistent-type-assertions': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-dynamic-delete': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'import/no-extraneous-dependencies': [0, { devDependencies: true }],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-invalid-void-type': 0,
    'painkillerjs-plugin/path-checker': 2,
    'import/order': 0,
    'import/no-cycle': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'simple-import-sort/exports': 1,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          // react
          ['^react$'],
          // next
          ['^next'],
          ['^', '^@'],

          // FSD
          ['^@/app'],
          ['^@/pages'],
          ['^@/widgets'],
          ['^@/features'],
          ['^@/entities'],
          ['^@/shared'],

          // Side effect imports.
          ['^\\u0000'],
          // Parent imports.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$']
        ]
      }
    ]
  }
};

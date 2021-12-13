module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest', 'react-hooks', 'formatjs'],
  extends: [
    'eslint:recommended',
    'next',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'node_modules/',
    'build/',
    'public/build/',
    '.cache/',
    'src/lib/juiceplus/atd/sdk.ts',
  ],
  rules: {
    '@next/next/no-document-import-in-page': 'off', // Doesn't work correctly on windows after next update. See: https://github.com/vercel/next.js/issues/28596
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {prefer: 'type-imports'},
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          FC: 'Define a more specific type. See [Kent C. Dodds][https://kentcdodds.com/blog/how-to-write-a-react-component-in-typescript] and [Harry Mumford-Turner](https://www.harrymt.com/blog/2020/05/20/react-typescript-react-fc.html)',
        },
      },
    ],

    'prefer-const': 'off',

    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {order: 'asc'},
        groups: [
          'builtin',
          'external',
          ['parent', 'sibling', 'index'],
          'internal',
          'object',
        ],
      },
    ],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'formatjs/enforce-description': ['error', 'literal'],
    'formatjs/enforce-default-message': 'error',
    'formatjs/enforce-placeholders': 'error',
    'formatjs/enforce-plural-rules': 'error',
    'formatjs/no-multiple-whitespaces': 'error',
    'formatjs/no-multiple-plurals': 'error',
    'formatjs/enforce-id': [
      'error',
      {idInterpolationPattern: '[sha512:contenthash:12]'},
    ],
    'formatjs/no-offset': 'error',
  },
  overrides: [
    {
      parser: 'espree',
      files: [
        '.eslintrc.js',
        'jest.config.js',
        'jest.e2e.config.js',
        'jest-platywright.config.js',
        'pm2.config.js',
        'prettier.config.js',
        'postcss.config.js',
        'next.config.js',
        'tailwind.config.js',
      ],
      env: {node: true},
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx'],
      env: {
        'jest/globals': true,
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': 'error',
      },
    },
  ],
}

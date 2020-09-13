const { rules: baseES6Rules } = require('eslint-config-airbnb-base/rules/es6');
const {
  rules: baseStyleRules,
} = require('eslint-config-airbnb-base/rules/style');
const { modifyRules } = require('./util');

const airbnbOverrides = {
  'import/order': [
    'error',
    {
      'newlines-between': 'never',
      alphabetize: { order: 'asc', caseInsensitive: true },
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    },
  ],
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-use-before-define': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/lines-between-class-members': 'off',
  'no-plusplus': 'off',
  'no-shadow': 'off',
  'no-void': 'off',
  'consistent-return': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/prop-types': 'off',
  'react/require-default-props': 'off',
  'no-restricted-globals': ['error', 'event', 'name', 'isFinite', 'isNaN'],

  ...modifyRules(baseStyleRules, {
    'lines-between-class-members'([level, when, config]) {
      return [level, when, { ...config, exceptAfterSingleLine: true }];
    },
  }),
  ...modifyRules(baseES6Rules, {
    'object-shorthand'([level, when, config]) {
      return [level, when, { ...config, avoidQuotes: false }];
    },
  }),
};

const additions = {
  '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: 'const', next: 'expression' },
    { blankLine: 'always', prev: 'let', next: 'expression' },
    { blankLine: 'always', prev: 'var', next: 'expression' },
    { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
    { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
    { blankLine: 'always', prev: '*', next: 'return' },
  ],
  'sort-imports': [
    'error',
    {
      ignoreCase: true,
      // `import/order` controls declaration sorting and group spacing; this
      // rule is only used to sort members.
      ignoreDeclarationSort: true,
      allowSeparatedGroups: true,
    },
  ],
};

const miscOverrides = {
  'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
};

const disableBuggedRules = {
  // https://github.com/benmosher/eslint-plugin-import/issues/1453
  'import/no-cycle': 'off',
};

// Enabling type-aware rules incurs a performance hit.
// TODO: avoid disabling these is a separate config.
const disableTypeAwareRules = {
  '@typescript-eslint/no-implied-eval': 'off',
  '@typescript-eslint/no-throw-literal': 'off',
  '@typescript-eslint/no-floating-promises': 'off',
  '@typescript-eslint/dot-notation': 'off',
};

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ['node_modules/', 'dist/', '.*cache/'],
  reportUnusedDisableDirectives: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:eslint-comments/recommended',
  ],
  settings: {
    'import/internal-regex': '^[~/]',
  },
  rules: {
    ...airbnbOverrides,
    ...additions,
    ...miscOverrides,
    ...disableBuggedRules,
    ...disableTypeAwareRules,
  },
  overrides: [
    {
      files: ['*.test.js', '*.test.jsx', '*.test.ts', '*.test.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};

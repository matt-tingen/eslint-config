const { rules: baseES6Rules } = require('eslint-config-airbnb-base/rules/es6');
const {
  rules: baseStyleRules,
} = require('eslint-config-airbnb-base/rules/style');
const {
  rules: baseReactA11yRules,
} = require('eslint-config-airbnb/rules/react-a11y');

const modifyRule = (rule, modify) => modify(rule);

const modifyRules = (ruleSet, modifiers) =>
  Object.fromEntries(
    Object.entries(modifiers).map(([name, modify]) => [
      name,
      modifyRule(ruleSet[name], modify),
    ]),
  );

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
  'no-plusplus': 'off',
  'no-shadow': 'off',
  'no-void': 'off',
  'consistent-return': 'off',
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
  ...modifyRules(baseReactA11yRules, {
    'jsx-a11y/label-has-associated-control'([level, config]) {
      return [level, { ...config, assert: 'either' }];
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
};

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ['node_modules/', 'dist/', '.*cache/'],
  reportUnusedDisableDirectives: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  settings: {
    'import/internal-regex': '^[~/]',
  },
  rules: {
    ...airbnbOverrides,
    ...additions,
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

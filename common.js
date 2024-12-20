const {
  rules: baseBestPracticesRules,
} = require('eslint-config-airbnb-base/rules/best-practices');
const { rules: baseES6Rules } = require('eslint-config-airbnb-base/rules/es6');
const {
  rules: baseImportRules,
} = require('eslint-config-airbnb-base/rules/imports');
const {
  rules: baseStyleRules,
} = require('eslint-config-airbnb-base/rules/style');
const { modifyRules, testFiles, configFiles, storyFiles } = require('./util');

const airbnbOverrides = {
  'import/named': 'off',
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
  '@typescript-eslint/no-shadow': 'off',
  // Doesn't work well with e.g. zod and is handled by TS anyway
  // https://github.com/typescript-eslint/typescript-eslint/issues/2585#issuecomment-696269611
  '@typescript-eslint/no-redeclare': 'off',
  'no-plusplus': 'off',
  'no-void': 'off',
  'func-names': 'off',
  'consistent-return': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/prop-types': 'off',
  'react/require-default-props': 'off',
  'import/prefer-default-export': 'off',
  // Handled by TypeScript; can trigger false-positives
  'array-callback-return': 'off',
  'no-restricted-globals': ['error', 'event', 'name', 'isFinite', 'isNaN'],
  // Redundent to @typescript-eslint/naming-convention
  'no-underscore-dangle': 'off',

  ...modifyRules(baseStyleRules, {
    'lines-between-class-members'([level, when, config]) {
      return [level, when, { ...config, exceptAfterSingleLine: true }];
    },
    'no-restricted-syntax'([level, ...featureConfigs]) {
      return [
        level,
        ...featureConfigs.filter(
          // `for...of` is prohibited because it incurs the cost of
          // `regenerator-runtime`, but only for older targets.
          (config) => config.selector !== 'ForOfStatement',
        ),
      ];
    },
  }),
  ...modifyRules(baseES6Rules, {
    'object-shorthand'([level, when, config]) {
      return [level, when, { ...config, avoidQuotes: false }];
    },
  }),
  ...modifyRules(baseImportRules, {
    'import/no-extraneous-dependencies'([level, config]) {
      return [
        level,
        {
          ...config,
          devDependencies: [
            ...config.devDependencies,
            ...configFiles.map((glob) => `**/${glob}`),
            ...testFiles.map((glob) => `**/${glob}`),
            ...storyFiles.map((glob) => `**/${glob}`),
          ],
        },
      ];
    },
  }),
  ...modifyRules(baseBestPracticesRules, {
    'no-param-reassign'([level, config]) {
      return [
        level,
        {
          ...config,
          ignorePropertyModificationsFor: [
            ...config.ignorePropertyModificationsFor,
            'draft', // for immer
          ],
        },
      ];
    },
  }),
};

const additions = {
  'quotes': ['error', 'single', { 'avoidEscape': true }],
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
  'no-implicit-coercion': ['error', { boolean: true }],
  'import/no-default-export': ['error'],
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
  '@typescript-eslint/return-await': 'off',
  '@typescript-eslint/await-thenable': 'off',
  '@typescript-eslint/no-for-in-array': 'off',
  '@typescript-eslint/no-misused-promises': 'off',
  '@typescript-eslint/no-unnecessary-type-assertion': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-return': 'off',
  '@typescript-eslint/prefer-regexp-exec': 'off',
  '@typescript-eslint/restrict-plus-operands': 'off',
  '@typescript-eslint/restrict-template-expressions': 'off',
  '@typescript-eslint/unbound-method': 'off',
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
    'prettier',
    'plugin:eslint-comments/recommended',
  ],
  settings: {
    'import/resolver': 'typescript',
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
      files: testFiles,
      extends: ['plugin:jest/recommended'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: storyFiles,
      extends: ['plugin:storybook/recommended'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: configFiles,
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: '*.d.ts',
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};

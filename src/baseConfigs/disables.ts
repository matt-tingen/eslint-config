import { Config } from '../types';

export const disables: Config = {
  name: 'disables',
  rules: {
    '@typescript-eslint/unbound-method': 'off',
    'react/display-name': 'off',
    'unicorn/explicit-length-check': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/import-style': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-await-expression-member': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/switch-case-braces': 'off',
    // Good in theory, but doesn't work well with typescript.
    'unicorn/no-magic-array-flat-depth': 'off',
  },
};

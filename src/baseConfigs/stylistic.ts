import stylistic_ from '@stylistic/eslint-plugin';
import { Config } from '../types';

export const stylistic: Config[] = [
  stylistic_.configs['disable-legacy'],
  stylistic_.configs.recommended,
  {
    name: 'custom-stylistic',
    rules: {
      // FIXME: not working?
      // Change template strings without interpolations to normal string literals.
      '@stylistic/quotes': [
        'error',
        'single',
        { ignoreStringLiterals: true, allowTemplateLiterals: 'avoidEscape' },
      ],

      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'const', next: 'expression' },
        { blankLine: 'always', prev: 'let', next: 'expression' },
        { blankLine: 'always', prev: 'var', next: 'expression' },
        { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
        { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
        { blankLine: 'always', prev: '*', next: 'return' },
      ],

      '@stylistic/lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: true },
      ],

      // https://github.com/eslint-stylistic/eslint-stylistic/issues/573
      'object-shorthand': [
        'error',
        'always',
        {
          ignoreConstructors: false,
          avoidQuotes: false,
        },
      ],

      'import/order': [
        'error',
        {
          'newlines-between': 'never',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
        },
      ],
      // FIXME: @stylistic?
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
      'import/newline-after-import': 'error',
    },
  },
];

import { flatConfigs as importX } from 'eslint-plugin-import-x';
import tseslint, { InfiniteDepthConfigWithExtends } from 'typescript-eslint';

export const typescript = (root: string): InfiniteDepthConfigWithExtends[] => [
  {
    name: 'tseslint-options',
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: root,
        projectService: true,
      },
    },
  },
  ...tseslint.configs.recommendedTypeChecked,
  {
    name: 'tseslint-overrides',
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ],
    },
  },
  {
    name: 'disable-type-rules-for-js',
    files: ['**/*.js', '**/*.mjs'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  importX.typescript,
];

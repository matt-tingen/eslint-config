import js from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import { flatConfigs as import_ } from 'eslint-plugin-import';
import importTypeOnly from 'eslint-plugin-import-type-only';
import react from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';
import { cleanup } from './baseConfigs/cleanup';
import { comments } from './baseConfigs/comments';
import { dependencies } from './baseConfigs/dependencies';
import { disables } from './baseConfigs/disables';
import { gitignore } from './baseConfigs/gitignore';
import { noDefaultExport } from './baseConfigs/noDefaultExport';
import { obsoletedByTs } from './baseConfigs/obsoletedByTs';
import { options } from './baseConfigs/options';
import { preferArrowFunc } from './baseConfigs/preferArrowFunc';
import { safety } from './baseConfigs/safety';
import { stylistic } from './baseConfigs/stylistic';
import { typescript } from './baseConfigs/typescript';

const baseConfigs = {
  options,
  js: js.configs.recommended,
  typescript,
  import: import_.recommended,
  unicorn: unicorn.configs.recommended,
  react: [
    react.configs.flat.recommended,
    react.configs.flat['jsx-runtime'],
    hooks.configs['recommended-latest'],
  ],
  comments,
  stylistic,
  importTypeOnly: importTypeOnly.configs.recommended,
  disables,
  obsoletedByTs,
  noDefaultExport,
  preferArrowFunc,
  cleanup,
  safety,
  dependencies,
  prettier,
} as const;

const recommended = tseslint.config(Object.values(baseConfigs).flat());

// eslint-disable-next-line import/no-default-export
export default {
  configs: {
    ...baseConfigs,
    gitignore,
    recommended,
  },
};

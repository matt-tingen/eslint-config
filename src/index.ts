import js from '@eslint/js';
import { typedEntries } from '@matt-tingen/util';
import prettier from 'eslint-config-prettier/flat';
import { flatConfigs as import_ } from 'eslint-plugin-import';
import importTypeOnly from 'eslint-plugin-import-type-only';
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
import { react } from './baseConfigs/react';
import { safety } from './baseConfigs/safety';
import { stylistic } from './baseConfigs/stylistic';
import { typescript } from './baseConfigs/typescript';

const baseConfigs = {
  options,
  gitignore,
  js: js.configs.recommended,
  typescript,
  import: import_.recommended,
  unicorn: unicorn.configs.recommended,
  react,
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

interface Options {
  root?: string;
}

const customize = ({ root = process.cwd() }: Options) => {
  const combined = typedEntries(baseConfigs).map(([, config]) =>
    typeof config === 'function' ? config(root) : config,
  );

  return tseslint.config(combined);
};

const recommended = customize({});

// eslint-disable-next-line import/no-default-export
export default {
  configs: {
    recommended,
    customize,
  },
};

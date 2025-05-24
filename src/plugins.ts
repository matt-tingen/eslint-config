import js from '@eslint/js';
import eslintCommentsConfigs from '@eslint-community/eslint-plugin-eslint-comments/configs';
import stylistic from '@stylistic/eslint-plugin';
import importTypeOnly from 'eslint-plugin-import-type-only';
import importX from 'eslint-plugin-import-x';
import jest from 'eslint-plugin-jest';
import jestDom from 'eslint-plugin-jest-dom';
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import testingLibrary from 'eslint-plugin-testing-library';
import unicorn from 'eslint-plugin-unicorn';
import { plugin as tseslint } from 'typescript-eslint';
import { Plugin } from './types';

// https://github.com/eslint-community/eslint-plugin-eslint-comments/issues/215
const eslintComments =
  eslintCommentsConfigs.recommended.plugins![
    '@eslint-community/eslint-comments'
  ];

export const plugins = {
  /* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
  js: js as Plugin,
  importTypeOnly: importTypeOnly as Plugin,
  importX: importX as Plugin,
  unicorn: unicorn as Plugin,
  tseslint: tseslint as Plugin,
  stylistic: stylistic as Plugin,
  jest: jest as Plugin,
  jestDom: jestDom as Plugin,
  preferArrowFunctions: preferArrowFunctions as Plugin,
  react: react as Plugin,
  reactHooks: reactHooks as Plugin,
  testingLibrary: testingLibrary as Plugin,
  eslintComments: eslintComments as Plugin,
  /* eslint-enable */
} satisfies Record<string, Plugin>;

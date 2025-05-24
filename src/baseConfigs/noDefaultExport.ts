import { configFiles, storyFiles } from '../globs';
import { Config } from '../types';

export const noDefaultExport: Config = {
  name: 'no-default-export',
  ignores: [...storyFiles, ...configFiles, '**/*.d.ts'],
  rules: {
    'import-x/no-default-export': ['error'],
  },
};

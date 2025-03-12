import { Config } from '../types';

export const options: Config = {
  name: 'options',
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
};

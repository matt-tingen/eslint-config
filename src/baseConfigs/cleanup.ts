import { Config } from '../types';

export const cleanup: Config = {
  name: 'cleanup',
  rules: {
    'no-console': 'error',
    'react/jsx-no-useless-fragment': 'error',
  },
};

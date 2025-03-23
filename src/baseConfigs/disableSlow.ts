import { Config } from '../types';

export const disableSlow: Config = {
  name: 'disable-slow',
  rules: {
    '@typescript-eslint/no-misused-promises': 'off',
  },
};

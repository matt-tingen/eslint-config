import { Config } from '../types';

export const safety: Config = {
  name: 'safety',
  rules: {
    'no-restricted-globals': ['error', 'event', 'name', 'isFinite', 'isNaN'],
    'no-await-in-loop': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'ctx',
          'context',
          'draft',
          'req',
          'request',
          'res',
          'response',
        ],
      },
    ],
    'react/no-array-index-key': 'error',
  },
};

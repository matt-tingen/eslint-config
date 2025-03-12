import eslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import { Config } from '../types';

export const comments: Config[] = [
  eslintComments.recommended,
  {
    name: 'comments-override',
    rules: {
      '@eslint-community/eslint-comments/disable-enable-pair': [
        'error',
        { allowWholeFile: true },
      ],
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
  },
];

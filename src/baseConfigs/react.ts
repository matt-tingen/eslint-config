import react_ from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';
import { Config } from '../types';

export const react: Config[] = [
  {
    name: 'react-settings',
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  react_.configs.flat.recommended,
  react_.configs.flat['jsx-runtime'],
  hooks.configs['recommended-latest'],
  {
    rules: {
      'react/jsx-key': [
        'error',
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
        },
      ],
    },
  },
];

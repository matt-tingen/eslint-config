import arrow from 'eslint-plugin-prefer-arrow-functions';
import { Config } from '../types';

export const preferArrowFunc: Config = {
  name: 'prefer-arrow-func',
  plugins: {
    'prefer-arrow-functions': arrow,
  },
  rules: {
    'prefer-arrow-functions/prefer-arrow-functions': [
      'error',
      {
        allowedNames: [],
        allowNamedFunctions: false,
        allowObjectProperties: true,
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'unchanged',
        singleReturnOnly: false,
      },
    ],
  },
};

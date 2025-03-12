import { Config } from '../types';

export const obsoletedByTs: Config = {
  name: 'obsoleted-by-typescript',
  rules: {
    // https://github.com/import-js/eslint-plugin-import/issues/3135
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'off',

    'no-undef': 'off',
    'react/prop-types': 'off',
  },
};

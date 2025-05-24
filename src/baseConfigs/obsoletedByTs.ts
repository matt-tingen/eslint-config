import { Config } from '../types';

export const obsoletedByTs: Config = {
  name: 'obsoleted-by-typescript',
  rules: {
    // https://github.com/import-js/eslint-plugin-import/issues/3135
    'import-x/named': 'off',
    'import-x/namespace': 'off',
    'import-x/default': 'off',
    'import-x/no-named-as-default-member': 'off',
    'import-x/no-unresolved': 'off',

    'no-undef': 'off',
    'react/prop-types': 'off',
  },
};

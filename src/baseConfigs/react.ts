import react_ from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';

export const react = [
  react_.configs.flat.recommended,
  react_.configs.flat['jsx-runtime'],
  hooks.configs['recommended-latest'],
];

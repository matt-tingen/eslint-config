declare module 'eslint-plugin-import' {
  import type { TSESLint } from '@typescript-eslint/utils';

  type Config = TSESLint.FlatConfig.Config;

  export const flatConfigs: {
    recommended: Config;
    errors: Config;
    warnings: Config;
    react: Config;
    'react-native': Config;
    electron: Config;
    typescript: Config;
  };
}

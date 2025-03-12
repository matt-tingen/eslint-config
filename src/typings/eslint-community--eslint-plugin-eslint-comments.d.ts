declare module '@eslint-community/eslint-plugin-eslint-comments/configs' {
  import type { TSESLint } from '@typescript-eslint/utils';

  type Config = TSESLint.FlatConfig.Config;

  const configs: {
    recommended: Config;
  };

  export default configs;
}

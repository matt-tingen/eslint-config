import type { TSESLint } from '@typescript-eslint/utils';

export type Config = TSESLint.FlatConfig.Config;

export type Plugin = NonNullable<Config['plugins']>[number];

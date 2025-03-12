import { configFiles, developmentFiles, storyFiles, testFiles } from '../globs';
import { Config } from '../types';

const devDependencies = [
  ...developmentFiles,
  ...testFiles,
  ...storyFiles,
  ...configFiles,
];

export const dependencies: Config = {
  name: 'dependencies',
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies, optionalDependencies: false },
    ],
  },
};

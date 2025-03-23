import gitignore_ from 'eslint-config-flat-gitignore';
import { findGitignores } from '../findGitignores';
import { ignores } from '../gitignoreWorkaround';
import { Config } from '../types';

export const gitignore = (root: string): Config[] => [
  gitignore_({ files: findGitignores(root), cwd: root }),
  { ignores },
];

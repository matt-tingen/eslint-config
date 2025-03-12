import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { isTruthy } from './isTruthy';

const getGlobalGitignore = () => {
  try {
    const globalGitignore = execSync('git config --get core.excludesfile')
      .toString()
      .trim();

    return globalGitignore || null;
  } catch {
    return null;
  }
};

const getRepoGitignores = (root: string) => {
  // Look for all .gitignore files in the repo. This doesn't find `.gitignore`
  // files which cause themselves to be ignored (such as `.husky/_/.gitignore`),
  // but that's acceptable.
  return execSync('git ls-files .gitignore "**/.gitignore"', {
    cwd: root,
  })
    .toString()
    .split('\n')
    .filter(Boolean)
    .map((repoPath) => path.join(root, repoPath));
};

const getInfoExclude = (root: string) => {
  const excludeFilePath = path.join(root, '.git', 'info', 'exclude');

  return fs.existsSync(excludeFilePath) ? path.resolve(excludeFilePath) : null;
};

export const findGitignores = (root: string) =>
  [getGlobalGitignore(), ...getRepoGitignores(root), getInfoExclude(root)]
    .filter(isTruthy)
    .map((absolutePath) => path.relative(root, absolutePath));

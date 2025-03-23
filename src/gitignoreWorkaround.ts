// Hacky workaround for
// https://github.com/antfu/eslint-config-flat-gitignore/issues/18

export const isAllowed = (file: string) => {
  return !file.includes('.gitignore_global');
};

export const ignores = ['**/.ignore'];

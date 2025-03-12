```sh
pnpm add -D eslint@^9 @matt-tingen/eslint-config
```

`eslint.config.mjs`

```js
import mt from '@matt-tingen/eslint-config';

export default [
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        projectService: true,
        // OR:
        // projectService: {
        //   allowDefaultProject: ['client/*.config.mts'],
        //   defaultProject: 'tsconfig-base.json',
        // },
      },
    },
  },
  mt.configs.gitignore(import.meta.dirname),
  ...mt.configs.recommended,
];
```

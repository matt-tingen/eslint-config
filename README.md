```sh
pnpm add -D eslint@^9 @matt-tingen/eslint-config
```

`eslint.config.mjs`

```js
import mt from '@matt-tingen/eslint-config';

export default mt.configs.recommended;
```

Or if additional configuration is needed:

```js
import mt from '@matt-tingen/eslint-config';

export default [
  ...mt.configs.customize({ root: import.meta.dir }),
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['client/*.config.mts'],
          defaultProject: 'tsconfig-base.json',
      },
    },
  },
];
```

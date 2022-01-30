```sh
yarn add -D eslint @matt-tingen/eslint-config
```

`.eslintrc.js`

```js
require('@matt-tingen/eslint-config/patch');

module.exports = {
  root: true,
  extends: [
    '@matt-tingen/eslint-config',
    'plugin:react/jsx-runtime', // If using JSX transform from react 17
  ],
};
```

The `@matt-tingen/eslint-config/base` is also available for projects not using
react.

`package.json`

```json
"resolutions": {
  "eslint-config-airbnb-typescript/@typescript-eslint/parser": "^4.24.0"
}
```

```sh
yarn add -D eslint @matt-tingen/eslint-config
```

`.eslintrc.js`

```js
require('@matt-tingen/eslint-config/patch');

module.exports = {
  root: true,
  extends: ['@matt-tingen/eslint-config'],
};
```

The `@matt-tingen/eslint-config/base` is also available for projects not using
react.

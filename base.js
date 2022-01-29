const path = require('path');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'airbnb/base',
    'airbnb-typescript/base',
    path.resolve(__dirname, './common'),
  ],
};

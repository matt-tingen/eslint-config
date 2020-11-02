const path = require('path');
const {
  rules: baseReactA11yRules,
} = require('eslint-config-airbnb/rules/react-a11y');
const { modifyRules, testFiles } = require('./util');

const airbnbOverrides = {
  ...modifyRules(baseReactA11yRules, {
    'jsx-a11y/label-has-associated-control'([level, config]) {
      return [level, { ...config, assert: 'either' }];
    },
  }),
};

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',

    path.resolve(__dirname, './common'),
  ],
  rules: {
    ...airbnbOverrides,
  },
  overrides: [
    {
      files: testFiles,
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
    },
  ],
};

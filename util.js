const testFiles = [
  '*.test.*',
  '__mock__/**',
];
const storyFiles = [
  '*.stories.*',
  'stories/**/*',
];

const configFiles = ['*.config.*', '.*rc.*'];

const modifyRule = (rule, modify) => modify(rule);

const modifyRules = (ruleSet, modifiers) =>
  Object.fromEntries(
    Object.entries(modifiers).map(([name, modify]) => [
      name,
      modifyRule(ruleSet[name], modify),
    ]),
  );

module.exports = {
  testFiles,
  storyFiles,
  configFiles,
  modifyRules,
};

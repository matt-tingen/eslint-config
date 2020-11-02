const testFiles = [
  '*.test.js',
  '*.test.jsx',
  '*.test.ts',
  '*.test.tsx',
  '__mock__/**',
];

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
  modifyRules,
};

import jest from 'eslint-plugin-jest';
import jestDom from 'eslint-plugin-jest-dom';
import testingLibrary from 'eslint-plugin-testing-library';
import { testFiles } from '../globs';
import { Config } from '../types';

export const tests: Config[] = [
  {
    files: [testFiles],
    ...jest.configs['flat/recommended'],
  },
  {
    files: [testFiles],
    ...jestDom.configs['flat/recommended'],
  },
  {
    files: [testFiles],
    ...testingLibrary.configs['flat/react'],
  },
];

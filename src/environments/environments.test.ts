import { SERVICE } from 'environments';

const initialEnv = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = initialEnv;
});

test('SERVICE.TRANSACTIONS should return correct endpoint', () => {
  expect(SERVICE.CHARACTERS()).toEqual('/characters');
});

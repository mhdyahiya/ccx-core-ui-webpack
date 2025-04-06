import '@testing-library/jest-dom/extend-expect';

global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn()
};

jest.spyOn(global.console, 'log').mockImplementation(jest.fn());
jest.spyOn(global.console, 'debug').mockImplementation(jest.fn());

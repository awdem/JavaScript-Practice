const multiply = require('./multiply');

describe('multiply', () => {
  it('multiplies 2 and 5', () => {
    expect(multiply(2, 5)).toBe(10);
  });

  it('multiplies 10 and 4', () => {
    expect(multiply(10, 4)).toBe(40);
  });

  it('returns 0 when one number is 0', () => {
    expect(multiply(0, 4)).toBe(0);
  });
});
const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
  it("returns 'Fizz' if passed 3", () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it("returns 'Buzz' if passed 5", () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it("returns 8 if passed 8", () => {
    expect(fizzBuzz(8)).toBe(8);
  });
 
  it("returns 'FizzBuzz' if passed 15", () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
});


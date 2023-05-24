const Candy = require('./Candy');


describe('Candy', () => {
  it('constructs', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy).toHaveProperty('name', 'Mars');
    expect(candy).toHaveProperty('price', 4.99);
  });

  it('returns its name', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toBe('Mars');
  });

  it('returns its price', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getPrice()).toBe(4.99);
  });

});
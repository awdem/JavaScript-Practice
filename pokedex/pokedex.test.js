const Pokedex = require('./pokedex')

describe('Pokedex', () => {
  it('constructs', () => {
    const pokedex = new Pokedex();
    expect(pokedex).toHaveProperty('pokedex', [])
  });

  it('returns an empty array if no pokemon caught', () => {
    const pokedex = new Pokedex();
    expect(pokedex.all()).toEqual([]);
  });

  it('adds a caught pikachu to the pokedex', async () => {
    const pokedex = new Pokedex();
    const pokemon = await pokedex.catch('pikachu');
    expect(pokedex.all()[0].name).toEqual('pikachu')

  })
});
const Pokedex = require('./pokedex')


// how to mock api call?

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


  it('adds a multiple pokemon to the pokedex', async () => {
    const pokedex = new Pokedex();
    const pokemon1 = await pokedex.catch('pikachu');
    const pokemon2 = await pokedex.catch('jigglypuff');
    expect(pokedex.all()[0].name).toEqual('pikachu')
    expect(pokedex.all()[1].name).toEqual('jigglypuff')

  })
});
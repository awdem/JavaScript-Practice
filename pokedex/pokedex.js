const fetchPokemon = require('./api');

class Pokedex {
  constructor() {
    this.pokedex = []
  }

  all() {
    return this.pokedex;
  }

  async catch(pokemon) {
    const fetchedpokemon = await fetchPokemon(pokemon);
    this.pokedex.push(fetchedpokemon);
  }
};

module.exports = Pokedex;


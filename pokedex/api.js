const fetchPokemon = (pokemonname) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
    .then((response) => response.json())
    .then((data) => {
      let types = [];
      data.types.forEach((type_object) => {
        types.push(type_object.type.name);
      });

      const pokemon = {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: types
      }
      return pokemon;
    });
};

module.exports = fetchPokemon;

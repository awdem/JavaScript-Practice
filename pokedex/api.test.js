const fetchPokemon = require('./api')


describe('fetchPokemon', () => {
  // the done being passed in the argument here tells the test to wait until it recieves the done function
  it.skip('fetches charizards info and assigns it to a charizard object', (done) => {
    fetchPokemon('charizard')
      .then((charizard) => {
        expect(charizard.id).toEqual(6);
        expect(charizard.name).toEqual('charizard');
        expect(charizard.height).toEqual(17);
        expect(charizard.weight).toEqual(905);
        expect(charizard.types).toEqual(['fire', 'flying']);
        // this done() functions tells the test to finish once all these expects are met
        done()
      });
  });

  // Alternate way (test returns a promise):

  // it('fetches charizards info and assigns it to a charizard object', () => {
  //   // the return below makes jest wait for the promise to be completed before finishing so therefore it has to pass all the expects
  //   return fetchPokemon('charizard')
  //     .then((charizard) => {
  //       expect(charizard.id).toEqual(6);
  //       expect(charizard.name).toEqual('charizard');
  //       expect(charizard.height).toEqual(17);
  //       expect(charizard.weight).toEqual(905);
  //       expect(charizard.types).toEqual(['fire', 'flying']);
  //     });
  // });

  // Alternate way (async and await):
// the async keyword below tells hides the usage of then to make it easier to read
  // it('fetches charizards info and assigns it to a charizard object', async () => {
  //   // await tells the test to wait till this promise is done
  //   const charizard = await fetchPokemon('charizard');
  //   // note that the expects happen after the promise returns
  //   expect(charizard.id).toEqual(6);
  //   expect(charizard.name).toEqual('charizard');
  //   expect(charizard.height).toEqual(17);
  //   expect(charizard.weight).toEqual(905);
  //   expect(charizard.types).toEqual(['fire', 'flying']);
  // });

});

const searchCandies = require('./searchCandies')


// > searchCandies('Ma', 10);
// [ 'Mars', 'Maltesers' ]

// > searchCandies('Ma', 2); // Maltesers excluded: it's more than 2
// [ 'Mars' ]

// > searchCandies('S', 10); 
// [ 'Skitties', 'Skittles', 'Starburst' ]

// > searchCandies('S', 4); 
// [ 'Skitties', 'Skittles' ] // Starbust excluded: it's more than 4


describe( "searchCandies", () => {
  it('finds candies that start with Ma with a price under 10', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);  
  });

  it('finds candies that start with Ma with a price under 2', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);  
  });

  it('finds candies that start with S with a price under 10', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);  
  });

  it('finds candies that start with S with a price under 4', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);  
  });
  it('still finds candies when case of the search string is different', () => {
    expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);  
  });
});
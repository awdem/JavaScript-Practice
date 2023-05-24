const ShoppingBasket = require('./ShoppingBasket')

describe ('ShoppingBasket', () => {
  it( 'constructs', () => {
    const Basket = new ShoppingBasket();
    expect(Basket).toHaveProperty('basket', []);
  });

  it('adds an item to the basket', () => {
    const Basket = new ShoppingBasket();
    const candydouble = {}
    Basket.addItem(candydouble)
    expect(Basket).toHaveProperty('basket', [candydouble]);

  });

  it('adds multiple items to the basket', () => {
    const Basket = new ShoppingBasket();
    const candydouble1 = {}
    const candydouble2 = {}
    Basket.addItem(candydouble1)
    Basket.addItem(candydouble2)
    expect(Basket).toHaveProperty('basket', [candydouble1, candydouble2]);

  });

  it('returns 0 for total price when the basket is empty', () => {
    const Basket = new ShoppingBasket();
    // const candydouble = {getPrice: () => 4.99};
    // Basket.addItem(candydouble);
    expect(Basket.getTotalPrice()).toBe(0)
  })

  it('returns the total price of a one item basket', () => {
    const Basket = new ShoppingBasket();
    const candydouble = {getPrice: () => 4.99};
    Basket.addItem(candydouble);
    expect(Basket.getTotalPrice()).toBe(4.99)
  })
  it('returns the total price of a basket with multiple items', () => {
    const Basket = new ShoppingBasket();
    const candydouble1 = {getPrice: () => 4.99};
    const candydouble2 = {getPrice: () => 8.00};
    Basket.addItem(candydouble1);
    Basket.addItem(candydouble2);
    expect(Basket.getTotalPrice()).toBe(12.99);
  })

  it('applies a discount', () => {
    const Basket = new ShoppingBasket();
    const candydouble = {getPrice: () => 50};
    Basket.addItem(candydouble);
    Basket.applyDiscount(10);
    expect(Basket.getTotalPrice()).toBe(40);
  })
});
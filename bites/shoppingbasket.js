
class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(item) {
    this.basket.push(item);
  }

  getTotalPrice() {
    let sum = 0;
    this.basket.forEach((item) => {
      sum += item.getPrice();
    });
    return sum;
  }
};

module.exports = ShoppingBasket;

// const Candy = require('./candy');
// const ShoppingBasket = require('./shoppingbasket');

// const candy = new Candy('Mars', 4.99);
// candy.getName();
// candy.getPrice();
// const basket = new ShoppingBasket();
// basket.getTotalPrice();
// basket.addItem(candy);
// basket.getTotalPrice();
// basket.addItem(new Candy('Skittle', 3.99));
// basket.addItem(new Candy('Skittle', 3.99));
// basket.getTotalPrice();

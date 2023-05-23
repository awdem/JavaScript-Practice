class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

};


module.exports = Candy;

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


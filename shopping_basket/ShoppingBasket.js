const candy = require('./candy')

class ShoppingBasket {
  constructor() {
    this.basket = [];
    this.discount = 0;
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  addItem(candy) {
    return this.basket.push(candy);
  }

  getTotalPrice() {
    let sum = 0
    this.basket.forEach(item => {
      sum  += item.getPrice();
    });
    return sum - this.discount;
  }
}


module.exports = ShoppingBasket;


const candy = require('./candy')

class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(candy) {
    return this.basket.push(candy);
  }

  getTotalPrice() {
    let sum = 0
    this.basket.forEach(item => {
      sum  += item.getPrice();
    })
    return sum
  }
}


module.exports = ShoppingBasket;

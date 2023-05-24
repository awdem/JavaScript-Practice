## Objectives

 * Test-drive a program made of different classes.
 * Mock a class in unit tests.

You will now test-drive and implement the two classes `Candy` and `ShoppingBasket` so the
following code works:

```javascript
> const candy = new Candy('Mars', 4.99);

> candy.getName();
'Mars'
> candy.getPrice();
4.99

> const basket = new ShoppingBasket();
> basket.getTotalPrice();
0

> basket.addItem(candy);

> basket.getTotalPrice();
4.99

> basket.addItem(new Candy('Skittle', 3.99));
> basket.addItem(new Candy('Skittle', 3.99));

> basket.getTotalPrice();
12.97
```
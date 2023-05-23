# Javascript

First steps

- Install Node.js
  - Nod is a JS runtime - it reads JS code and executes it as a program, very similar to ruby and irb
  - nvm is Node's version manager
    - installation instructions here: https://github.com/nvm-sh/nvm#installing-and-updating
    - troubleshooting:: https://github.com/nvm-sh/nvm#troubleshooting-on-macos

- Run node by typing node into terminal

Basics:

in node you can use

``` Javascript
  .load filename.js
```

to load a JS file and use all the defined stuff in it

otherwise

node filename.js

in the terminal will simply run the file and output the result


```Javascript
console.log('Hello')
const returnValue = console.log("Hello)
```

 This program uses console.log to print messages to the console



## Arrays

common array functions

```JavaScript
const numbers = [1, 2, 3, 4];

const newNumbers = numbers.concat(5); // adds one element and return a new array

// We can access elements with []
console.log(numbers[0]); // 1

console.log(numbers); // [1, 2, 3, 4]

console.log(newNumbers) // [1, 2, 3, 4, 5]

console.log(numbers.length) // 4

console.log(newNumbers.length) // 5

// Loop through the array and execute code for each element
numbers.forEach((number) => {
  console.log(number);
})
```


## Objects

in JavaScript, "object" usually refers to a type of key-value structure, similar to a Ruby hash. Here's an example of a JavaScript object:

There are two ways of declaring objects in JavaScript. Here is one:

```JavaScript
const person = {
  name: 'Maxine',
  age: 32,
  address: 'London, E1 123'
};

// both ways can be used to access an object's property:
console.log(person.name);
console.log(person['name']);
```

 Here is another example:

```JavaScript
const bankAccount = {
  // simple value attributes
  accountNumber: 376782676,
  accountSortCode: 999999,

  // we can attach functions too (so they act like 'methods'):
  getBalance: () => {
    return 100;
  }
};

bankAccount.getBalance();
```

One more, with more complex key-value pairs:

```JavaScript
const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

// 'london can be accessed by person.address.city
// the second hobby can be printed by console.log(person.hobbies[1])
```

This way is useful as a key-value data structure (similar to hashes or maps in other languages), or when you need a single, placeholder object (you'll see this later when you'll need to mock in your unit tests).


The other way is to create objects from a class so they all have the same "blueprint" of attributes and methods. You'll learn about how to create JavaScript classes soon.
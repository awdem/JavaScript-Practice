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

### common array functions

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


### Array operations

``` JavaScript

// filter:
const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];

// xUsing a predicate function and `filter` to get only names shorter than 3 letters.
const isShorterThanThree = (name) => {
  if (name.length < 3) {
    return true;
  } else {
    return false;
  }
}

const namesShorterThanThreeLetters = names.filter(isShorterThanThree);

// map:
// Create a new array of all names uppercased by applying
// the `getUppercased` function to all elements in the `names` array.

const getUppercased = (name) => {
  return name.toUpperCase();
}

const uppercasedNames = names.map(getUppercased);
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


The other way is to create objects from a class so they all have the same "blueprint" of attributes and methods. 

## Classes

Classes in JS work in a similar way to other languages, they are declared with methods — and perhaps attributes — and can be instantiated when creating instances.

Here is how we can define a class:

```JavaScript
// file: rectangle.js

class Rectangle {

  // A constructor, to give initial arguments.
  constructor(height, width) {

    // We can define attributes stored on the instance with `this`
    this.height = height;
    this.width = width;
  }

  // A method.
  getArea() {
    return this.height * this.width;
  }
}

// Export the class
module.exports = Rectangle;
```

In the REPL (node):

const Rectangle = require('./rectangle');

Now we can make instances of the class by doing this:

const rect = new Rectangle(4, 10);

rect.getArea(); // 40


## Project Setup

 In JavaScript, libraries are called packages and are listed in a file called package.json

 to create the file, run:

 ```
 $ npm init -y 
 ```

 in an empty directory (The -y option skills all the questions we don't need to answer about the info contained in package.json).

 Jest is a package for writing and running unit tests for JS code.

 ```
 # Add the jest package to our project
# (this will update package.json and package-lock.json)
$ npm add jest
 ```

We also need to run npm install -g jest. The -g option installs Jest "globally", so we can later run tests in a given project using the command jest.


This folder can get very big, so if you are planning on committing this project, 
you should add node_modules to your .gitignore file before you do. 
It also allows us to use the jest command when we are in this folder.

To make everything worked, run jest in the terminal and it should say:

```
"No tests found, exiting with code 1"
```


## .ToBe and .ToEqual

.toBe checks for strict equality, .toEqual checks for deep equality

Strict equality means that the objects have the same value, type and memory reference
it uses the '===' operator.


```JavaScript
const obj1 = { name: 'John', age: 30 };
const obj2 = { name: 'John', age: 30 };
const obj3 = obj1;

console.log(obj1 === obj2); // false - different memory references
console.log(obj1 === obj3); // true - same memory reference

expect(obj1).not.toBe(obj2); // Passes - different memory references
expect(obj1).toBe(obj3); // Passes - same memory reference

expect(obj1).toEqual(obj2); // Passes - deep equality check
expect(obj1).toEqual(obj3); // Passes - deep equality check

```

.toBe is useful for comparing primitive values or checking if two objects are the same instance (same memory reference). If you want to perform a deep equality check on objects or arrays, you should use the .toEqual matcher.


## array method chaining
map and filter can be chain as long as you don't put ; until the last method being chained. Watch out for what you're returning with each method because it can be tricky. forEach can't be chained

## OOP desing and java script ()

similar to Ruby so far:
- think about what the classes are
- think about how they link
- think about what data they will keep

this.variable is like an instance variable
this also goes in front of methods within a class when they are called by other class methods

instance variables can be set to private, and then they won't be accessible using dot notation (i.e. instance.variablename = variable_value)


CamelCase for functions

getter methods - get instance variables
setter methods - set instance variables
callback function - functions that are passed to other functions as arguments 

You can put functions in your constructor methods to have a class  call that function when it constructs

if it's a method within the class, you have to put this.methodname, 
but you can also but functions from outside the class, without the this. in front of their name




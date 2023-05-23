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
````
class User {
  constructor(name) {
    this.name = name;
    };

    getName() {
      return this.name;
    };
    
    getIntroduction() {
      return `Hello, my name is ${this.name}`
    }

};


module.exports = User;

// Node output:

// > const User = require('./user');
// undefined
// > const Uma = new User('Uma');
// undefined
// > Uma
// User { name: 'Uma' }
// > Uma.getName;
// [Function: getName]
// > Uma.getName();
// 'Uma'
// > Uma.getIntroduction();
// 'Hello, my name is Uma'

// This input also returns the attribute:

// > Uma.name
// 'Uma'\\
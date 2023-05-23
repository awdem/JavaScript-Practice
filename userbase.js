const User = require('./user');

class UserBase {

  constructor(users) {
    this.users = users;
  }

  getNames() {
    return this.users.map((user) => user.getName());
  }

  getIntroductions() {
    return this.users.map((user) => user.getIntroduction());
  }

  count() {
    return this.users.length;
  }
};

module.exports = UserBase;

// const UserBase = require('./userbase')
// const User = require('./user');
// const users = [
//    new User('Uma'),
//    new User('Josh'),
//    new User('Ollie')
// ];
// const base = new UserBase(users);
// 1. Declare a function checkLength that takes a phone number (as a string) as argument,
// and returns true if this phone number contains 10 characters or less.

// 2. Now declare a function filterLongNumbers that takes an array of phone numbers. 
// This function should return only numbers that contain 10 characters or less. 
// It should make use of the function checkLength written previously.


const checkLength = (string) => {
    if ( string.length <= 10 ) return true;
    return false; 
};

const filterLongNumbers = (array) => {
  return array.filter(checkLength);
}

module.exports = { checkLength, filterLongNumbers};

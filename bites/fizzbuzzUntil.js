const FizzBuzz = require('./FizzBuzz')

const fizzbuzzUntil = (x) => {
    let i = 1;
    while (i <= x) {
        console.log(FizzBuzz(i));
        i += 1;
    }
};

// const fizzbuzzUntil = (x) => {
//     for (let i = 1 ; i <= x ; i++) {
//         console.log(FizzBuzz(i));
//     }
// };

module.exports = fizzbuzzUntil;
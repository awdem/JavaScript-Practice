// to test the whole program, uncomment and copy everything between this comment 
// and the exports into node, but make sure to recomment the bits after the import before u paste!:

const apiKey = require('./apiKey');
const WeatherClient = require('./WeatherClient');
const Weather = require('./Weather');


// const client = new WeatherClient();
// const weather = new Weather(client);

// weather.load('Bristol');
// const test = weather.getWeatherData();

// console.log(test);


module.exports = { apiKey, WeatherClient, Weather };

const apiKey = require('./apiKey');
const WeatherClient = require('./weatherClient');

// let weatherData = null;

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((weatherData) => {
//     console.log(weatherData)
//   });

//   console.log('Requesting weather data');


module.exports = { apiKey, WeatherClient };
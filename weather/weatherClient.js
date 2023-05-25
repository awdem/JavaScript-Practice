// Implement the class WeatherClient, with a method fetchWeatherData that 
// fetches the current weather for a given city using fetch.
//  It should also return a promise, so that we can use the data once it has been received and parsed 
//  into an object.
const { apiKey } = require('./index');
 

class WeatherClient {
  constructor() {
    
  }

  async fetchWeatherData() {
    const key = apiKey;
    const city = 'London'
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${key}`;

    const response = await fetch(apiUrl);
    const weatherData = await response.json();
    return weatherData;
  };
};

module.exports = WeatherClient;
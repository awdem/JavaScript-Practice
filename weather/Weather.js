// Test-drive the class Weather, which uses the class WeatherClient to 
// get the weather for a given city.
//  Make sure the dependency on WeatherClient is mocked. 

class Weather {
  constructor(client) {
    this.client = client;
    this.city = null;
  }

  load(city) {
    this.city = city
  }
 // note that this still returns a promise (because fetchWeatherData returns a promise)
 // to make it return am object i'd need to use a .then in which i would create the new object
 // and then assign it attributes that are pulled from the promise
  getWeatherData() {
    const data =  this.client.fetchWeatherData(this.city)
    return data
  }
}

module.exports = Weather;
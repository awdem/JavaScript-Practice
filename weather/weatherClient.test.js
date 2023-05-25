const jestFetchMock = require("jest-fetch-mock").enableMocks();

const { WeatherClient } = require('./index');

describe('weatherClient', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('fetches the current weather for London and returns a promise of that data', async () =>  {
    // tells the test to mock the next response to a fetch request with this object: 
    fetch.mockResponseOnce(JSON.stringify({
      main: { 
        name: 'London',
      },  
      weather: [
        { 
          main: 'Clouds',
        }
      ]
    }
    ));
    
    const client = new WeatherClient();
    const response = await client.fetchWeatherData('London');
    // these check that a fetch was made and that it was made to the correct URl
    // Notice that the apiKey is undefined in the url string
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual("http://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=undefined");
    // these check that the promise is resolving to the fake object correctly
    expect(response.main.name).toBe('London')
    expect(response.weather[0].main).toBe('Clouds')
  });

  it('fetches the current weather for Pittsburgh and returns a promise of that data', async () =>  {
    // tells the test to mock the next response to a fetch request with this object: 
    fetch.mockResponseOnce(JSON.stringify({
      main: { 
        name: 'Pittsburgh',
      },  
      weather: [
        { 
          main: 'Clouds',
        }
      ]
    }
    ));
    
    const client = new WeatherClient();
    const response = await client.fetchWeatherData('Pittsburgh');
    // these check that a fetch was made and that it was made to the correct URl
    // Notice that the apiKey is undefined in the url string
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual("http://api.openweathermap.org/data/2.5/weather?units=metric&q=Pittsburgh&appid=undefined");
    // these check that the promise is resolving to the fake object correctly
    expect(response.main.name).toBe('Pittsburgh')
    expect(response.weather[0].main).toBe('Clouds')
  });

});
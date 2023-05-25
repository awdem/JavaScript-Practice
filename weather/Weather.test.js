const { Weather } = require('./index')


describe('Weather', () => {
  it('constructs', () => {
    const mockWeatherClient = {

    }
    const weather = new Weather(mockWeatherClient)
    expect(weather).toBeTruthy();
    expect(weather).toHaveProperty('client', mockWeatherClient);
    expect(weather).toHaveProperty('city', null);
  });

  it("loads a given city", () => {
    const mockWeatherClient = {

    }

    const weather = new Weather(mockWeatherClient)
    weather.load('Bristol');

    expect(weather).toHaveProperty('city', 'Bristol')

  });


  it("returns a given city's weather data", async () => {
    const mockWeatherClient = {
      fetchWeatherData: jest.fn() // this defines a mock jest function (a stub)
    };
    // Set the resolved value of the mock function.
    // We use `mockResolvedValue` and not `mockReturnValue` because this
    // is mocking an asynchronous method, which returns a promise.
    mockWeatherClient.fetchWeatherData.mockResolvedValueOnce({
      main: { 
        name: 'Bristol',
      },  
      weather: [
        { 
          main: 'Sunny',
        }
      ]
    })

    const weather = new Weather(mockWeatherClient)
    weather.load('Bristol');
  
    // also note we still need async/await in this test to make it pass, because the mock function is asynchronous
    // as we declared above with 'mockResolvedValue'
    const data = await weather.getWeatherData();
    expect(data.main.name).toBe('Bristol')
    expect(data.weather[0].main).toBe('Sunny')
  });

});
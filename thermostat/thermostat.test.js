const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  it('constructs with an initial temp of 20 and PSM is on', () => {
    const thermostat = new Thermostat();
    expect(thermostat).toHaveProperty('temp', 20);
    expect(thermostat).toHaveProperty('Maxtemp', 25);
    expect(thermostat).toHaveProperty('PSM', true);
  });

  it('returns the current temperature', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('has a method up that increases the temperature by 1', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it('has a method down that decreases the temperature by 1', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
  });

  it('has a minimum temperature of 10', () => {
    const thermostat = new Thermostat();
    // lowers the temp 10 times
    for (let i = 1 ; i <=10 ; i++) {
      thermostat.down()
    }
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(10);
  });

  it('PSM can be turned off', () => {
    const thermostat = new Thermostat();
    returnMessage = thermostat.setPowerSavingMode(false);
    expect(returnMessage).toBe('PSM is now off, max temperature is no more 25')
    expect(thermostat).toHaveProperty('PSM', false);
  });

  it('PSM can be turned on', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    returnMessage = thermostat.setPowerSavingMode(true);
    expect(returnMessage).toBe('PSM is now on, max temperature is now 25')
    expect(thermostat).toHaveProperty('PSM', true);
  });

  it('PSM limits the the max temperature to 25', () => {
    const thermostat = new Thermostat();
    // set temp to 25
    for (let i = 1 ; i <=5 ; i++) {
      thermostat.up()
    }
    thermostat.up()
    expect(thermostat.getTemperature()).toBe(25);
  });

  it('if PSM is off, it has a max temperature of 32', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    // raises the temp 12 times
    for (let i = 1 ; i <=12 ; i++) {
      thermostat.up()
    }
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(32);
  });

  it('resets the temp to 20 with reset method', () => {
    const thermostat = new Thermostat();

    for (let i = 1 ; i <=5 ; i++) {
      thermostat.up()
    };
    expect(thermostat.getTemperature()).toBe(25);
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it ('displays low usage when under 18 degrees', () => {
    const thermostat = new Thermostat();

    for (let i = 1 ; i <=5 ; i++) {
      thermostat.down();
    };
    const returnMessage = thermostat.currentEnergyUsage();
    expect(returnMessage).toBe('low');
  });

  it ('displays medium usage when between 18 and 25 degrees', () => {
    const thermostat = new Thermostat();

    const returnMessage = thermostat.currentEnergyUsage();
    expect(returnMessage).toBe('medium');
  });

  it ('displays high usage when between 18 and 25 degrees', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 1 ; i <=10 ; i++) {
      thermostat.up()
    };
    const returnMessage = thermostat.currentEnergyUsage();
    expect(returnMessage).toBe('high');
  });

});
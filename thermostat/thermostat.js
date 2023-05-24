class Thermostat {

  constructor() {
    this.temp = 20;
    this.PSM = true;
    this.Maxtemp = 25;
  }

  getTemperature() {
    return this.temp;
  }

  up() {
      if (this.temp < this.Maxtemp) {
        this.temp += 1;
      };
  }

  down() {
    if (this.temp === 10) return 10;
    this.temp -= 1;
  }

  setPowerSavingMode(mode) {
    if (mode === false) {
      this.PSM = false;
      this.Maxtemp = 32
      return 'PSM is now off, max temperature is no more 25';
    } else {
      this.PSM = true;
      this.Maxtemp = 32;
      return 'PSM is now on, max temperature is now 25'      
    }  
  }

  reset() {
    this.temp = 20;
  }

  currentEnergyUsage() {
    if (this.temp < 18) {
      return 'low';
    } else if (this.temp <= 25) {
      return 'medium';
    } else {
      return 'high';
    }
  }

};


module.exports = Thermostat;


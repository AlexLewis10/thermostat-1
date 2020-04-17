function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.HIGH_USAGE = 25;
  this.MEDIUM_USAGE = 18
  this.MAX_TEMP = 32
  this.MIN_TEMP = 10
  this.SAVING_MAX_TEMP = 25
  this.temp = this.DEFAULT_TEMP;
  this.savingOn = true;
}

Thermostat.prototype.increase = function(degrees) {
  this.temp += degrees
  if (this.temp > this.SAVING_MAX_TEMP && this.savingOn == true) {
    this.temp = this.SAVING_MAX_TEMP;
  } else if (this.temp > this.MAX_TEMP) {
    this.temp = this.MAX_TEMP
  }
}

Thermostat.prototype.decrease = function(degrees) {
  this.temp -= degrees
  if (this.temp < this.MIN_TEMP) {
    this.temp = this.MIN_TEMP;
  }
}

Thermostat.prototype.powerSavingOn = function() {
  this.savingOn = true;
  if (this.temp > this.SAVING_MAX_TEMP) {
    this.temp = this.SAVING_MAX_TEMP
  }
}

Thermostat.prototype.powerSavingOff = function() {
  this.savingOn = false;
}

Thermostat.prototype.reset = function() {
  this.temp = this.DEFAULT_TEMP;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temp >= this.HIGH_USAGE) {
    return 'high-usage'
  } 
  if (this.temp >= this.MEDIUM_USAGE) {
    return "medium-usage"
  }
    return "low-usage"
}
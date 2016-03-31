'use strict';

function Player(alias) {
  this.alias = alias || '';
  this.numCities = 10;
  this.numNukes = 1;
  this.countermeasureEffectiveness = 1;
  this.hasUsedCountermeasures = false;

  this.stockpile = function() {
    this.numNukes++;
    this.countermeasureEffectiveness = 1;
    this.hasUsedCountermeasures = false;

    return true;
  };

  this.launch = function() {
    var result;
    if(this.numNukes > 0){
      this.numNukes = 0;
      this.countermeasureEffectiveness = 1;
      this.hasUsedCountermeasures = false;
      result = true;
    } else {
      result = false;
    }

    return result;
  };

  this.deployCountermeasures = function() {
    this.hasUsedCountermeasures = true;
    this.countermeasureEffectiveness *= 0.5;
    return true;
  };

  this.destroyCities = function(cnt) {
    this.numCities -= cnt;
    return true;
  };

  this.hasLost = function() {
    return this.numCities <= 0;
  };

  this.getState = function() {
    return {
      alias: this.alias,
      numCities: this.numCities,
      numNukes: this.numNukes,
      countermeasureEffectiveness: this.countermeasureEffectiveness,
      hasUsedCountermeasures: this.hasUsedCountermeasures
    };
  };

}

module.exports = Player;

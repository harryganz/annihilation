'use strict';

function Player(alias) {
  this.alias = alias || '';
  this.numCities = 1;
  this.numNukes = 1;
  this.nukesLaunched = 0;
  this.countermeasureEffectiveness = 1;
  this.hasUsedCountermeasures = false;
  this.lastAction = ''; // Store the action for the last turn

  this.stockpile = function() {
    this.numNukes++;
    this.countermeasureEffectiveness = 1;
    this.hasUsedCountermeasures = false;
    this.lastAction = 'stockpile';


    return true;
  };

  this.launch = function() {
    this.nukesLaunched = this.numNukes;
    this.numNukes = 0;
    this.countermeasureEffectiveness = 1;
    this.hasUsedCountermeasures = false;
    this.lastAction = 'launch';

    return true;
  };

  this.deployCountermeasures = function() {
    this.hasUsedCountermeasures = true;
    this.countermeasureEffectiveness *= 0.5;
    this.lastAction = 'deployCountermeasures';

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
      hasUsedCountermeasures: this.hasUsedCountermeasures,
      hasLost: this.hasLost()
    };
  };

}

module.exports = Player;

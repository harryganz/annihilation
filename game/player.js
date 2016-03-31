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
  };

  this.launch = function() {
    this.numNukes = 0;
    this.countermeasureEffectiveness = 1;
    this.hasUsedCountermeasures = false;
  };

  this.deployCountermeasures = function() {
    this.hasUsedCountermeasures = true;
    this.countermeasureEffectiveness *= 0.5;
  };

  this.destroyCity = function() {
    this.numCities--;
  };

  this.hasLost = function() {
    return this.numCities <= 0;
  };
}

module.exports = Player;

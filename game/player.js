'use strict';

function Player(alias) {
  this.alias = alias || '';
  this.numCities = 10;
  this.numNukes = 1;
  this.countermeasureEffectiveness = 1;
  this.hasUsedCountermeasures = false;

  this.stockpile = function() {
    this.numNukes++;
  };

  this.launch = function() {
    this.numNukes = 0;
  };
}

module.exports = Player;

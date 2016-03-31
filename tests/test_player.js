'use strict';

const mocha = require('mocha');
const should = require('should');
const Player = require('../game/player');

describe('Player constructor', function(){
  var player;

  beforeEach(function(){
    player = new Player('hyg');
  });

  it('should have a property alias with value "hyg"', function(){
    player.alias.should.be.exactly('hyg');
  });

  it('should have a property numCities with a value of 10', function(){
    player.numCities.should.be.exactly(10);
  });

  it('should have a property numNukes with a value of 1', function(){
    player.numNukes.should.be.exactly(1);
  });

  it('should have a property countermeasureEffectiveness with value of 1', function(){
    player.countermeasureEffectiveness.should.be.exactly(1);
  });

  it('should have a property hasUsedCountermeasures with value of false', function(){
    player.hasUsedCountermeasures.should.be.false();
  });

  describe('stockpile function', function(){
    beforeEach(function(){
      player.countermeasureEffectiveness = 0.5;
      player.hasUsedCountermeasures = true;
      player.stockpile();
    });

    it('should add one nuke to numNukes', function(){
      player.numNukes.should.be.exactly(2);
    });

    it('should set hasUsedCountermeasures to false', function(){
      player.hasUsedCountermeasures.should.be.false();
    });

    it('should set countermeasureEffectiveness to 1', function(){
      player.countermeasureEffectiveness.should.be.exactly(1);
    });
  });

  describe('launch function', function(){
    beforeEach(function(){
      player.countermeasureEffectiveness = 0.125;
      player.hasUsedCountermeasures = true;
      player.launch();
    });

    it('should set numNukes to 0', function(){
      player.numNukes.should.be.exactly(0);
    });

    it('should set hasUsedCountermeasures to false', function(){
      player.hasUsedCountermeasures.should.be.false();
    });

    it('should set countermeasureEffectiveness to 1', function(){
      player.countermeasureEffectiveness.should.be.exactly(1);
    });
  });

  describe('deployCountermeasures function', function(){
    beforeEach(function() {
      player.hasUsedCountermeasures = false;
      player.countermeasureEffectiveness = 1;
      player.deployCountermeasures();
    });

    it('should set hasUsedCountermeasures to true', function(){
      player.hasUsedCountermeasures.should.be.true();
    });

    it('should halve countermeasureEffectiveness', function(){
      player.countermeasureEffectiveness.should.be.exactly(0.5);
    });
  });

  describe('destroyCity function', function(){
    beforeEach(function() {
      player.numCities = 5;
      player.destroyCity();
    });

    it('should decrement numCities by 1', function(){
      player.numCities.should.be.exactly(4);
    });
  });

  describe('hasLost function', function(){
    it('should return false if player has > 0 cities', function(){
      player.hasLost().should.be.false();
    });

    it('should return true if player has 0 cities', function(){
      player.numCities = 0;
      player.hasLost().should.be.true();
    });
  });
});

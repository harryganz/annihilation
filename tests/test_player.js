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
      player.stockpile();
    });

    it('should add one nuke to numNukes', function(){
      player.numNukes.should.be.exactly(2);
    });
  });

  describe('launch function', function(){
    beforeEach(function(){
      player.launch();
    });

    it('should set numNukes to 0', function(){
      player.numNukes.should.be.exactly(0);
    });
  });
});

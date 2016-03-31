'use strict';

const mocha = require('mocha');
const should = require('should');
const Game = require('../game/game');
const Player = require('../game/player');

describe('Game constructor', function(){
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('should have a players property which is an array', function(){
    game.should.have.property('players').which.is.an.Array();
  });

  it('should have a isOver property with a default value of false', function(){
    game.should.have.property('isOver').which.is.false();
  });

  describe('addPlayer function', function(){
    beforeEach(function() {
      var player = new Player();

      game.addPlayer(player);
    });

    it('should add a player to the players array', function(){
      game.players.length.should.be.exactly(1);
    });
  });

});

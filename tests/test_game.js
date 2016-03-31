'use strict';

const mocha = require('mocha');
const should = require('should');
const Player = require('../game/player');
const Game = require('../game/game');

describe('Game constructor', function(){
  var game;
  beforeEach(function() {
    game = new Game();
  });

  it('should have a players array', function(){
    game.should.have.property('players').which.is.Array();
  });

  it('should have a property isOver with a default value of false', function() {
    game.isOver.should.be.false();
  });

  it('should have a property winner with a default value of ""', function(){
    game.winner.should.be.exactly('');
  });

  it('should have no players', function(){
    game.players.length.should.be.exactly(0);
  });

  describe('addPlayer function', function(){
    beforeEach(function() {
      var p1 = new Player('player 1');
      var p2 = new Player('player 2');
      game.addPlayer(p1);
      game.addPlayer(p2);
    });

    it('should add a players', function(){
      game.players.length.should.be.exactly(2);
    });
  });

  describe('findPlayerByIndex function', function(){
    var p1;
    var p2;
    beforeEach(function() {
      p1 = new Player('player 1');
      p2 = new Player('player 2');
      game.addPlayer(p1);
      game.addPlayer(p2);
    });

    it('should return player the player with the appropriate number', function(){
      game.findPlayerByIndex(1).should.be.exactly(p1);
    });

    it('should return undefined if player not found', function(){
      (typeof game.findPlayerByIndex(-1) === 'undefined').should.be.true();
    });
  });

  describe('findPlayerByAlias function', function(){
    var p1;
    var p2;
    beforeEach(function() {
      p1 = new Player('player 1');
      p2 = new Player('player 2');
      game.addPlayer(p1);
      game.addPlayer(p2);
    });

    it('should return player the player with the appropriate alias', function(){
      game.findPlayerByAlias('player 2').should.be.exactly(p2);
    });

    it('should return undefined if player not found', function(){
      (typeof game.findPlayerByAlias('') === 'undefined').should.be.true();
    });
  });

  describe('takeTurn function', function(){
    var p1;
    var p2;
    beforeEach(function() {
      p1 = new Player('player 1');
      p2 = new Player('player 2');
      game.addPlayer(p1);
      game.addPlayer(p2);
    });
  });

});

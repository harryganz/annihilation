'use strict';

function Game() {
  this.players = [];
  this.isOver = false;

  this.addPlayer = function(newPlayer) {
    this.players.push(newPlayer);
  };
}

module.exports = Game;

'use strict';

const rl = require('readline-sync');
const Game = require('./game');
const Player = require('./player');

var game = new Game();
var name1 = rl.question('Please enter a name: ');
var name2 = rl.question('Please enter another name: ');
var player1 = new Player(name1);
var player2 = new Player(name2);
game.addPlayer(player1);
game.addPlayer(player2);

var actions = ['launch', 'stockpile', 'deployCountermeasures'];

while(!game.isOver) {
  var in1 = rl.keyInSelect(actions, `${player1.alias} please choose an action`);
  var in2 = rl.keyInSelect(actions, `${player2.alias} please choose an action`);
  game.takeTurn(actions[in1], actions[in2]);

  console.log(game.getState());
}

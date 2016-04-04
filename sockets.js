const io = require('socket.io')();
const Game = require('./game/game');
const Player = require('./game/player');

var game = new Game(1);
io.on('connection', (socket) => {
  // console.log("Congratulations you are using sockets");
  // socket.on('new-player', (data) => {
  //   var newPlayer = Player(data.alias);
  //   game.addPlayer(newPlayer);
  //   socket.emit('game-state', game.getState);
  // });
  socket.emit('game-state', game.getState());
});

module.exports = io;

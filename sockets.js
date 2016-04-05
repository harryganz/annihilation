const io = require('socket.io')();
const Game = require('./game/game');
const Player = require('./game/player');

var game = new Game(1);
var gameFull = false;
io.on('connection', (socket) => {
  socket.on('new-player', function(data){
    console.log('new player event received');
    if(!gameFull){
      var newPlayer = new Player(data.alias);
      game.addPlayer(newPlayer);
    }
    if(game.players.length > 1){
      gameFull = true;
    }
    if(gameFull) {
      socket.broadcast.emit('start-game', {});
    }
    socket.broadcast.emit('game-state', game.getState());
  });
});

module.exports = io;

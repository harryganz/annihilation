const io = require('socket.io')();
const Game = require('./game/game');
const Player = require('./game/player');

var game = new Game(1);
io.on('connection', (socket) => {
  socket.emit('game-state', game.getState());
  socket.on('new-player', function(data){
    console.log('new player event received');
    var newPlayer = new Player(data.alias);
    game.addPlayer(newPlayer);
    socket.broadcast.emit('game-state', game.getState());
  });
});

module.exports = io;

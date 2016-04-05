import io from 'socket.io-client';

var socket;
module.exports = {
  getGameState: function(cb){
    socket = io();
    socket.on('game-state', cb);
  },
  addPlayer: function(alias){
    socket = io();
    socket.emit('new-player', {alias: alias});
  },
  startGame: function(cb){
    socket = io();
    socket.on('start-game', cb);
  }
};

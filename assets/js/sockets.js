import io from 'socket.io-client';

var socket;
module.exports = {
  socket: {},
  connect: function() {
    this.socket = io();
    console.log('connect called');
  },
  addPlayer: function(player) {
    this.socket.emit('new-player', {alias: player});
  },
  newGame: function(cb) {
    this.socket.on('new-game', cb);
  },
  startGame: function(cb) {
    this.socket.on('start-game', cb);
  }
};

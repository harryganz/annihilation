import io from 'socket.io-client';

var socket;
module.exports = {
  socket: {},
  connect: function() {
    this.socket = io.connect({forceNew: true});
  },
  addPlayer: function(player) {
    this.socket.emit('new-player', {alias: player});
  },
  newGame: function(cb) {
    this.socket.on('new-game', cb);
  },
  startGame: function(cb) {
    this.socket.on('start-game', cb);
  },
  takeTurn: function(alias, action) {
    this.socket.emit('take-turn', {alias: alias, action: action});
  },
  gameOver: function(cb) {
    this.socket.on('game-over', cb);
  },
  nextTurn: function(cb) {
    this.socket.on('next-turn', cb);
  },
  waiting: function(cb) {
    this.socket.on('waiting', cb);
  },
  invalidAction: function(cb) {
    this.socket.on('invalid-action', cb);
  }
};

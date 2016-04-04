import io from 'socket.io-client';

var socket;
function addPlayer(alias){
  socket = io();
  socket.emit('new-player', {alias: alias});
}

function getGameState(cb){
  socket = io();
  socket.on('game-state', (data) => {
    cb(data);
  });
}

module.exports = {
  addPlayer: addPlayer,
  getGameState: getGameState
};

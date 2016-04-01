import io from 'socket.io-client';

var socket;
function connect(){
  socket = io();
}

module.exports = {
  connect: connect
};

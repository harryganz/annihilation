import io from 'socket.io-client';

var socket;
function connect(){
  socket = io('http://localhost:3000');
  socket.emit('add-user', {});
}

module.exports = {
  connect: connect
};

const io = require('socket.io')();

io.on('connection', (socket) => {
  console.log("Congratulations you are using sockets");
});

module.exports = io;

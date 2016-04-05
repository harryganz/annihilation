const io = require('socket.io')();
const Game = require('./game/game');
const Player = require('./game/player');

var gamesArray = [];

io.on('connection', (socket) => {
  socket.on('new-player', (data) => {
    console.log('new player received');
    // Create a new player with the provided alias
    var newPlayer = new Player(data.alias);
    // If no games or lastGame full create a new game, add player,
    // and emit new-game with game data
    // else add player and emit start-game with game data
    var lastGame = gamesArray[gamesArray.length - 1];
    if(gamesArray.length === 0 || lastGame.numPlayers === 2){
      lastGame = new Game(gamesArray.length+1);
      gamesArray.push(lastGame);
      console.log('new game created');
      lastGame.addPlayer(newPlayer);
      socket.join(lastGame.id, (err) => {
        if(err) throw err;
        console.log('socket joined room');
      });
      socket.emit('new-game', lastGame.getState());
      console.log('first player added');
    } else {
      lastGame.addPlayer(newPlayer);
      socket.join(lastGame.id);
      console.log('socket rooms', socket.rooms);
      socket.to(lastGame.id).emit('start-game', lastGame.getState());
      console.log('second player added');
    }
  });
});

module.exports = io;

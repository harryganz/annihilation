const io = require('socket.io')();
const Game = require('./game/game');
const Player = require('./game/player');

var gamesArray = [];

io.on('connection', (socket) => {
  socket.on('new-player', (data) => {
    // Create a new player with the provided alias
    var newPlayer = new Player(data.alias);

    var lastGame = gamesArray[gamesArray.length - 1];
    if(gamesArray.length === 0 || lastGame.numPlayers === 2){
      // If no games or lastGame full create a new game, add player,
      // have socket join room corresponding to the new game
      // and emit new-game with game data
      lastGame = new Game(gamesArray.length+1);
      gamesArray.push(lastGame);
      lastGame.addPlayer(newPlayer);
      socket.join(lastGame.id);
      socket.emit('new-game', lastGame.getState());
    } else {
      // else add player to last game, join room, and emit start-game with game data
      lastGame.addPlayer(newPlayer);
      socket.join(lastGame.id);
      io.to(lastGame.id).emit('start-game', lastGame.getState());
    }
  });
});

module.exports = io;

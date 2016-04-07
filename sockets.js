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
      socket.game_id = lastGame.id;
      socket.emit('new-game', lastGame.getState());
    } else {
      // else add player to last game, join room, and emit start-game with game data
      lastGame.addPlayer(newPlayer);
      socket.join(lastGame.id);
      socket.game_id = lastGame.id;
      io.to(lastGame.id).emit('start-game', lastGame.getState());
    }
  });

  socket.on('take-turn', (data) => {
    var game = gamesArray.find(el => socket.game_id);
    var success = game.takeTurn(data.alias, data.action);
    if(success) {
      if(game.isOver) {
        // Emit game over to room
        io.to(socket.game_id).emit('game-over', game.getState());
        // Remove game from active games
        gamesArray.splice(gamesArray.findIndex(el => el === game),1);
      } else {
        if(game.turnNumber % 2 === 0) {
          io.to(socket.game_id).emit('next-turn', game.getState());
        } else {
          socket.emit('waiting', {});
        }
      }
    } else {
      socket.emit('invalid-action', {message: 'Must stockpile nukes before launching'});
    }
  });
});

module.exports = io;

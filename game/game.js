'use strict';

function Game() {
  this.players = [];
  this.isOver = false;
  this.winner = '';
  this.random = Math.random; // allow stubbing of random in testing

  this.addPlayer = function(newPlayer) {
    this.players.push(newPlayer);
  };

  this.findPlayerByIndex = function(num){
    return this.players[num-1];
  };

  this.findPlayerByAlias = function(alias) {
    return this.players.find((pl) => pl.alias === alias);
  };


  this.takeTurn = function(player1Action, player2Action) {
    // Get each player from the players array
    var player1 = this.getPlayerByIndex(1);
    var player2 = this.getPlayerByIndex(2);

    // Have them take their corresponding actions
    playerTakeAction(player1, player1Action);
    playerTakeAction(player2, player2Action);

    // If player 1 launched nukes
    // check to see if a city was destroyed
    if(player1Action === 'launch') {
      checkLaunchEffect(player2, player2Action);
    }

    // If player 2 launched nukes
    // check to see if a city was destroyed
    if(player2Action === 'launch') {
      checkLaunchEffect(player1, player1Action);
    }

    // Set the state of isOver
    if(player1.hasLost() || player2.hasLost()){
      this.isOver = true;
    }
  };

  // Has the player do the action in params
  // @param player - A player object
  // @param action - A string indicating the action to take
  var playerTakeAction = function(player, action) {
    switch(action) {
      case 'stockpile':
        player.stockpile();
        break;
      case 'launch':
        player.launch();
        break;
      case 'deployCountermeasures':
        player.deployCountermeasures();
        break;
      default:
        throw 'Invalid action';
    }
  };

  var checkLaunchEffect = function(otherPlayer, action) {
    // If otherPlayer didn't launch countermeasures,
    // destroy one of player2's cities
    if(action !== 'deployCountermeasures') {
      otherPlayer.destroyCity();
    } else {
      // Destroy player 2 cities if effectiveness if less than
      // a random number between 0-1
      if(otherPlayer.countermeasureEffectiveness < this.random) {
        otherPlayer.destroyCity();
      }
    }
  };

}

module.exports = Game;

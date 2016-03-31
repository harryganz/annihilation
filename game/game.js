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

  this.playerCanTakeAction = function(player, action) {
    if(action == 'launch' && player.numNukes < 1) {
      return false;
    } else {
      return true;
    }
  };

  this.takeTurn = function(player1Action, player2Action) {
    // Get each player from the players array
    var player1 = this.findPlayerByIndex(1);
    var player2 = this.findPlayerByIndex(2);

    // Make sure both players can take the actions
    // if not, break out of function
    if(!this.playerCanTakeAction(player1, player1Action) ||
      !this.playerCanTakeAction(player2, player2Action)) {
        return ;
      }

    // Have them take their corresponding actions
    playerTakeAction(player1, player1Action);
    playerTakeAction(player2, player2Action);

    // If player 1 launched nukes
    // check to see if a city was destroyed
    if(player1Action === 'launch') {
      checkLaunchEffect(player1, player2, player2Action);
    }

    // If player 2 launched nukes
    // check to see if a city was destroyed
    if(player2Action === 'launch') {
      checkLaunchEffect(player2, player1, player1Action);
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

  var checkLaunchEffect = function(player, otherPlayer, action) {
    // If otherPlayer didn't launch countermeasures,
    // destroy player2's cities
    if(action !== 'deployCountermeasures') {
      otherPlayer.destroyCity();
    } else {
      // Destroy player 2 cities if effectiveness if less than
      // a random number between 0-1
      if(otherPlayer.countermeasureEffectiveness < this.random) {
        otherPlayer.destroyCity();
      }
    }
  }.bind(this);

}

module.exports = Game;

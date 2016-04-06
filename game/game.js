'use strict';

function Game(id) {
  this.id = id || '';
  this.numPlayers = 0;
  this.isOver = false;
  this.players = [];
  this.winner = '';
  this.random = Math.random; // Allow stubbing of randgen
  this.turnNumber = 0;
  this.turnMessages = [];

  this.addPlayer = function(newPlayer) {
    var result = false;
    this.players.push(newPlayer);
    this.numPlayers++;
    return true;
  };

  this.findPlayerByIndex = function(index) {
    return this.players[index-1];
  };

  this.findPlayerByAlias = function(alias) {
    return this.players.find(el => el.alias === alias);
  };

  this.takeTurn = function(playerAlias, action) {
    var result = false;
    var player = this.findPlayerByAlias(playerAlias);
    if(player){
      // Determine if action is valid
      if(action !== 'launch' || player.numNukes > 0) {
        // If so take the action
        player[action]();
        // Increment the turn number and determine whether to
        // complete the turn
        if(++this.turnNumber % 2 === 0) {
          this.completeTurn();
        }
        result = true;
      }
    }

    return result;
  };

  this.completeTurn = function() {
    // Get the players by index
    var player1 = this.findPlayerByIndex(1);
    var player2 = this.findPlayerByIndex(2);

    // Start building the message for this turn
    this.turnMessages = this.players.map(actionMessage);

    // Check if cities should have been detroyed
    if(player1.lastAction === 'launch' && nukeLaunchIsEffective(player2)){
      player2.destroyCities(player1.nukesLaunched);
      this.turnMessages.push(player1.alias + ' destroyed ' + player1.nukesLaunched +
      ' of ' + player2.alias + '\'s cities');
    }
    if(player2.lastAction === 'launch' && nukeLaunchIsEffective(player1)){
      player1.destroyCities(player2.nukesLaunched);
      this.turnMessages.push(player2.alias + ' destroyed ' + player2.nukesLaunched +
      ' of ' + player1.alias + '\'s cities');
    }

    // Check if game is over
    if(player1.hasLost() || player2.hasLost()) {
      this.isOver = true;
      if(player1.hasLost() && player2.hasLost()){
        this.winner = 'nobody';
      } else if(player1.hasLost()) {
        this.winner = player2.alias;
      } else {
        this.winner = player1.alias;
      }
    }
  };

  this.getState = function() {
    return {
      id: this.id,
      isOver: this.isOver,
      winner: this.winner,
      players: this.players.map(el => el.getState()),
      turnMessages: this.turnMessages
    };
  };

  var nukeLaunchIsEffective = function(player) {
    var random = this.random();
    console.log('random number ', random);
    return ((player.lastAction !== 'deployCountermeasures') ||
    player.countermeasureEffectiveness*2 < random);
  }.bind(this);

  var actionMessage = function(player) {
    var msg = '';

    switch(player.lastAction) {
      case 'launch':
        msg = player.alias + ' launched ' + player.nukesLaunched + ' nukes';
        break;
      case 'stockpile':
        msg = player.alias + ' stockpiled nukes';
        break;
      case 'deployCountermeasures':
        msg = player.alias + ' deployed countermeasures';
        break;
      default:
        msg = 'invalid action';
    }

    return msg;
  };

}

module.exports = Game;

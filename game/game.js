'use strict';

function Game(id) {
  this.id = id || '';
  this.isOver = false;
  this.players = [];
  this.random = Math.random(); // Allow stubbing of randgen

  this.addPlayer = function(newPlayer) {
    this.players.push(newPlayer);
    return true;
  };

  this.findPlayerByIndex = function(index) {
    return this.players[index-1];
  };

  this.findPlayersByAlias = function(alias) {
    return this.players.find(el => el.alias === alias);
  };

  this.takeTurn = function(action1, action2) {
    var player1 = this.findPlayerByIndex(1);
    var player2 = this.findPlayerByIndex(2);

    // Get the number of nukes per player
    var player1Nukes = player1.numNukes;
    var player2Nukes = player2.numNukes;

    // Each player takes an action
    var player1ActionIsValid = player1[action1]();
    var player2ActionIsValid = player2[action2]();

    // Determine the outcome of a turn
    if (player1ActionIsValid && player2ActionIsValid) {
      // If player 1 launches nukes
      // And player 2 doesn't launch countermeasures or they are not effective,
      // player 2 loses as many cities as nukes were launched by player 1
      if (action1 === 'launch' && nukeLaunchIsEffective(player2, action2)) {
          player2.destroyCities(player1Nukes);
      }

      // Opposite of above for other player
      if(action2 === 'launch' && nukeLaunchIsEffective(player1, action1)) {
        player1.destroyCities(player2Nukes);
      }

      // If player 1 or 2 has lost set isOver to true
      if(player1.hasLost() || player2.hasLost()) {
        this.isOver = true;
      }

      return true;
    } else {
      return false;
    }
  };

  var nukeLaunchIsEffective = function(player, action) {
    return (action !== ('deployCountermeasures' ||
    player.countermeasureEffectiveness < this.random));
  }.bind(this);

}

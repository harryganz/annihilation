import React from 'react';
import io from 'socket.io-client';


const StartGame = React.createClass({
  addPlayer: function() {
    var newPlayer = this.refs.alias.value;
    var socket = io();
    socket.emit('new-player', {alias: newPlayer});
    console.log('new player event emmitted');
  },
  render: function() {
    return(
      <div className="start-game">
        <div className="panel">
          <p>Please enter an alias</p>
          <input type="text" ref="alias" placeholder="Enter name here ..."/>
          <button onClick={this.addPlayer} className="btn btn-green btn-large">OK</button>
        </div>
      </div>
    );
  }
});

module.exports = StartGame;

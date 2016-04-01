import React from 'react';
import addUser from './add-user';


const StartGame = React.createClass({
  connect: function(){
    console.log('Connect hit');
    addUser.connect();
  },
  render: function() {
    return(
      <div className="start-game">
        <div className="panel">
          <p>Please enter an alias</p>
          <input type="text" placeholder="Enter name here ..."/>
          <button onClick={this.connect} className="btn btn-green btn-large">OK</button>
        </div>
      </div>
    );
  }
});

module.exports = StartGame;

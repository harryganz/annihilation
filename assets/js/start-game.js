import React from 'react';


const StartGame = React.createClass({
  render: function() {
    return(
      <div className="start-game">
        <div className="panel">
          <p>Please enter an alias</p>
          <input type="text" placeholder="Enter name here ..."/>
          <button className="btn btn-green btn-large">OK</button>
        </div>
      </div>
    );
  }
});

module.exports = StartGame;

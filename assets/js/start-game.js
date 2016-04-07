import React from 'react';
import sockets from './sockets';


const StartGame = React.createClass({
  contextTypes: {
    setAlias: React.PropTypes.func
  },
  addPlayerHandler: function(event) {
    event.preventDefault();
    var playerForm = this.refs.playerForm;
    var newPlayer = this.refs.alias.value;
    this.context.setAlias(newPlayer)
    sockets.addPlayer(newPlayer);
    playerForm.reset();
  },
  render: function() {
    return(
      <div className="start-game">
        <div className="panel text-center">
          <form onSubmit={this.addPlayerHandler} ref="playerForm">
            <div className="form-group">
              <label htmlFor="alias">Please Enter An Alias</label>
            </div>
            <div className="form-group">
              <input type="text" name="alias" ref="alias" placeholder="Enter name here ..."/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-green btn-large">OK</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = StartGame;

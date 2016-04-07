import React from 'react';

const GameOver = React.createClass({
  contextTypes: {
    resetState: React.PropTypes.func,
    router: React.PropTypes.object,
    game: React.PropTypes.object
  },
  playAgainHandler: function() {
    this.context.router.push('/');
    this.context.resetState();
  },
  render: function() {
    var message = this.context.game.turnMessages.map((el, index) =>
                  <p key={index}>{el}</p>);
    var winner = this.context.game.winner;

    return (
      <div className="game-over">
        <div className="panel">
          {message}
          <h3>{winner} is the winner!</h3>
          <button className="btn btn-green btn-large" onClick={this.playAgainHandler}>Play Again</button>
        </div>
      </div>
    );
  }
});

module.exports = GameOver;

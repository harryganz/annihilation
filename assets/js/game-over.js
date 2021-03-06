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
  componentWillMount: function() {
    if(!this.context.game.id) {
      this.context.router.replace('/');
    }
  },
  render: function() {
    var message = this.context.game.turnMessages.map((el, index) =>
                  <p key={index}>{el}</p>);
    var winner = this.context.game.winner;

    return (
      <div className="game-over">
        <div className="panel">
          <div className="section">
            <h3> Last Turn </h3>
            {message}
          </div>
          <div className="section">
            <h1>{winner} is the winner!</h1>
          </div>

            <button className="btn btn-green btn-large" onClick={this.playAgainHandler}>Play Again</button>
        </div>
      </div>
    );
  }
});

module.exports = GameOver;

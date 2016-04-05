import React from 'react';

import Waiting from './waiting';

const GameScreen = React.createClass({
  contextTypes: {
    waiting: React.PropTypes.bool,
    game: React.PropTypes.object
  },
  render: function() {
    return (
      <div className="game-screen">
        <div className="panel">
          <h1> Yarr, here be the game screen </h1>
        </div>
        {this.context.waiting ? <Waiting /> : ''} 
      </div>
    );
  }
});

module.exports = GameScreen;

import React from 'react';

import Waiting from './waiting';
import Buttons from './buttons';
import UserPanel from './user-panel';

const GameScreen = React.createClass({
  contextTypes: {
    router: React.PropTypes.object,
    waiting: React.PropTypes.bool,
    game: React.PropTypes.object,
    alias: React.PropTypes.string
  },
  componentWillMount: function() {
    if(!this.context.game.id){
      this.context.router.replace('/');
    }
  },
  render: function() {
    return (
      <div className="game-screen">
        <div className="user-panels">
          <UserPanel game={this.context.game} id={0} key={0} />
          <UserPanel game={this.context.game} id={1} key={1} />
        </div>
        {this.context.waiting ? <Waiting /> : <Buttons alias={this.context.alias}/>}
      </div>
    );
  }
});

module.exports = GameScreen;

import React from 'react';
import $ from 'jquery';

import Waiting from './waiting';
import Buttons from './buttons';
import UserPanel from './user-panel';

const GameScreen = React.createClass({
  getInitialState: function() {
    return {
      firstTurn: true
    };
  },
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
  startCount: function() {
    if(this.state.firstTurn){
      var count = 2;
      var $countdown = $('.countdown');
      $countdown.show();
      var intId;
      intId = setInterval(() => {
        if(count > 0){
          $countdown.text(count);
          count--;
        } else if(count === 0) {
          $countdown.text("GO!");
          count--;
        } else {
          $countdown.hide();
          clearInterval(intId);
        }
      }, 1000);
      this.setState({firstTurn: false});
    }
  },
  render: function() {
    return (
      <div className="game-screen">
        <div className="user-panels">
          <UserPanel game={this.context.game} id={0} key={0} />
          <UserPanel game={this.context.game} id={1} key={1} />
        </div>
        <div className="countdown panel">
            3
        </div>
        {this.context.waiting ? <Waiting /> : <Buttons alias={this.context.alias}
          ref={this.startCount}/>}
      </div>
    );
  }
});

module.exports = GameScreen;

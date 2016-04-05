// 3rd party modules
import React from 'react';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import {render} from 'react-dom';

// Components
import Home from './home';
import Rules from './rules';
import StartGame from './start-game';

// Helpers
import sockets from './sockets';

const App = React.createClass({
  getInitialState: function() {
    return {
      game: {}
    }
  },
  componentDidMount: function() {
    sockets.getGameState(this.setGameState);
  },
  setGameState: function(data){
    this.setState({game: data});
    console.log('game state set');
  },
  render: function() {
    return (
      <div className="main">
        <header>
          <h1> Annihilation </h1>
        </header>
        <h3 className="bhead"> "Nuclear war without the fallout" </h3>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
});

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/rules" component={Rules} />
    <Route path="/start" component={StartGame} />
    </Route>
  </Router>,
  document.getElementById('container')
);

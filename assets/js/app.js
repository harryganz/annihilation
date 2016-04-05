// 3rd party modules
import React from 'react';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import {render} from 'react-dom';

// Components
import Home from './home';
import Rules from './rules';
import StartGame from './start-game';
import GameScreen from './gamescreen';

// Helpers
import sockets from './sockets';

const App = React.createClass({
  getInitialState: function() {
    return {
      game: {},
      waiting: false
    }
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  childContextTypes: {
    game: React.PropTypes.object,
    waiting: React.PropTypes.bool
  },
  getChildContext: function() {
    return {
      game: this.state.game,
      waiting: this.state.waiting
    };
  },
  componentDidMount: function() {
    sockets.connect();
    sockets.newGame(this.createGame);
    sockets.startGame(this.startGame);
  },
  startGame: function(data) {
    this.setState({game: data, waiting: false});
    this.context.router.replace('/game');
  },
  createGame: function(data) {
    this.setState({game: data, waiting: true});
    this.context.router.replace('/game');
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
      <Route path="/game" component={GameScreen} />
    </Route>
  </Router>,
  document.getElementById('container')
);

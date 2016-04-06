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
      waiting: false,
      alias: '',
      error: ''
    }
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  childContextTypes: {
    game: React.PropTypes.object,
    waiting: React.PropTypes.bool,
    alias: React.PropTypes.string,
    setAlias: React.PropTypes.func
  },
  getChildContext: function() {
    return {
      game: this.state.game,
      waiting: this.state.waiting,
      alias: this.state.alias,
      setAlias: this.setAlias
    };
  },
  componentDidMount: function() {
    sockets.connect();
    sockets.newGame(this.createGame);
    sockets.startGame(this.startGame);
    sockets.gameOver(this.gameOver);
    sockets.nextTurn(this.nextTurn);
    sockets.waiting(this.waiting);
    sockets.invalidAction(this.invalidAction);
  },
  gameOver: function(data) {
    this.setState({waiting: true, game: data});
    console.log('game is over');
  },
  nextTurn: function(data) {
    this.setState({waiting: false, game: data});
  },
  waiting: function() {
    this.setState({waiting: true});
  },
  invalidAction: function(data) {
    this.setState({error: data});
    console.log('error detected');
  },
  startGame: function(data) {
    this.setState({game: data, waiting: false});
    this.context.router.push('/game');
  },
  createGame: function(data) {
    this.setState({game: data, waiting: true});
    this.context.router.push('/game');
  },
  setAlias: function(alias) {
    this.setState({alias: alias});
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

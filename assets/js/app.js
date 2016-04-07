// 3rd party modules
import React from 'react';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import {render} from 'react-dom';
import $ from 'jquery';

// Components
import Home from './home';
import Rules from './rules';
import StartGame from './start-game';
import GameScreen from './gamescreen';
import InfoScreen from './infoscreen';
import Error from './error';
import GameOver from './game-over';

// Helpers
import sockets from './sockets';

const App = React.createClass({
  getInitialState: function() {
    return {
      game: {},
      waiting: false,
      alias: '',
      error: '',
      showInfo: false
    }
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  childContextTypes: {
    game: React.PropTypes.object,
    waiting: React.PropTypes.bool,
    alias: React.PropTypes.string,
    setAlias: React.PropTypes.func,
    resetState: React.PropTypes.func
  },
  getChildContext: function() {
    return {
      game: this.state.game,
      waiting: this.state.waiting,
      alias: this.state.alias,
      setAlias: this.setAlias,
      resetState: this.resetState
    };
  },
  resetState: function() {
    this.setState(this.getInitialState());
    this.componentDidMount(); // Reset socket
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
    this.context.router.push('/gameover');
  },
  nextTurn: function(data) {
    this.setState({waiting: false, game: data, showInfo: true});
    $('.info-screen').show().hide(3000, () => {
      this.setState({showInfo: false});
    });
  },
  waiting: function() {
    this.setState({waiting: true});
  },
  invalidAction: function(data) {
    this.setState({error: data.message});
    $('.error').show().hide(3000, () => {
      this.setState({error: ''});
    });
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
          {this.state.error ? <Error error={this.state.error} /> : ''}
          {this.state.showInfo ? <InfoScreen game={this.state.game} /> : '' }
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
      <Route path="/gameover" component={GameOver} />
    </Route>
  </Router>,
  document.getElementById('container')
);

import React from 'react';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import {render} from 'react-dom';

// Components
import Home from './home';
import Rules from './rules';

const App = React.createClass({
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
    </Route>
  </Router>,
  document.getElementById('container')
);

import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';
import {render} from 'react-dom';

const App = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          <h1> Annihilation </h1>
        </header>
        {this.props.children}
      </div>
    );
  }
});

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>,
  document.getElementById('container')
);

import React from 'react';
import {Link} from 'react-router';

const Home = React.createClass({
  render: function() {
    return (
      <div className="home">
        <div className="home-panel">
        <div className="panel">
          <Link to="/start" className="btn btn-red btn-very-large">Start</Link>
        </div>
        <Link to="/rules" className="btn btn-green rules-btn">Rules</Link>
        </div>
      </div>
    );
  }
});

module.exports = Home;

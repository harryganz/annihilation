import React from 'react';
import {Link} from 'react-router';

const Home = React.createClass({
  render: function() {
    return (
      <div className="home">
        <div className="panel">
          <Link to="/start" className="btn btn-large btn-gray">Random Opponent</Link>
        </div>
        <Link to="/rules" className="btn btn-green">Rules</Link>
      </div>
    );
  }
});

module.exports = Home;

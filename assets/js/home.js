import React from 'react';
import {Link} from 'react-router';

const Home = React.createClass({
  render: function() {
    return (
      <div className="home">
        <div className="panel">
          <button className="btn btn-large btn-red"> Challenge A Friend </button>
          <button className="btn btn-large btn-gray"><Link to="/start">Random Opponent</Link></button>
        </div>
        <button className="btn btn-green"><Link to="/rules">Rules</Link></button>
      </div>
    );
  }
});

module.exports = Home;

import React from 'react';

const Home = React.createClass({
  render: function() {
    return (
      <div className="home">
        <div className="panel">
          <button className="btn btn-large btn-red"> Challenge A Friend </button>
          <button className="btn btn-large btn-gray"> Random Opponent </button>
        </div>
        <button className="btn btn-green">Rules</button>
      </div>
    );
  }
});

module.exports = Home;

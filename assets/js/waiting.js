import React from 'react';

const Waiting = React.createClass({
  render: function() {
    return (
      <div className="waiting">
        <p> Waiting For Opponent <span className="loading">...</span></p>
      </div>
    );
  }
});

module.exports = Waiting;

import React from 'react';

const Buttons = React.createClass({
  render: function() {
    return (
      <div className="button-group">
        <button>Defend</button>
        <button>Launch</button>
        <button>Stockpile</button>
      </div>
    );
  }
});

module.exports = Buttons;

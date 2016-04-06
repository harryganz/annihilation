import React from 'react';

import sockets from './sockets';

const Buttons = React.createClass({
  takeTurn: function(event) {
    event.stopPropagation();
    var action = event.target.getAttribute("data-value");
    sockets.takeTurn(this.props.alias, action);
  },
  render: function() {
    return (
      <div className="button-group">
        <button data-value="deployCountermeasures" onClick={this.takeTurn}>Defend</button>
        <button data-value="launch" onClick={this.takeTurn}>Launch</button>
        <button data-value="stockpile" onClick={this.takeTurn}>Stockpile</button>
      </div>
    );
  }
});

module.exports = Buttons;

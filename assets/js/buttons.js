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
        <button className="btn btn-large btn-blue"
        data-value="deployCountermeasures" onClick={this.takeTurn}>Defend</button>
        <button className="btn btn-large btn-red"
        data-value="launch" onClick={this.takeTurn}>Launch All</button>
        <button className="btn btn-large btn-green"
        data-value="stockpile" onClick={this.takeTurn}>Stockpile</button>
      </div>
    );
  }
});

module.exports = Buttons;

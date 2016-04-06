import React from 'react';

const InfoScreen = React.createClass({
  render: function() {
    var messages = this.props.game.turnMessages.map((msg, index) =>
    <p key={index} > {msg} </p>)
    return (
      <div className="info-screen">
        <div className="panel">
          {messages}
        </div>
      </div>
    );
  }
});

module.exports = InfoScreen;

import React from 'react';
import $ from 'jquery';

const InfoScreen = React.createClass({
  hideInfo: function() {
    $('.info-screen').hide();
  },
  render: function() {
    var messages = this.props.game.turnMessages.map((msg, index) =>
    <p key={index} > {msg} </p>)
    return (
      <div className="info-screen">
        <div className="panel">
          {messages}
          <button className="btn btn-large btn-green" onClick={this.hideInfo}> OK </button>
        </div>
      </div>
    );
  }
});

module.exports = InfoScreen;

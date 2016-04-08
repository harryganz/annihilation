import React from 'react';
import $ from 'jquery';

const Error = React.createClass({
  hideError: function() {
    $('.error').hide();
  },
  render: function() {
    return (
      <div className="error">
        <div className="panel">
          <p>{this.props.error}</p>
          <button className="btn btn-large btn-green" onClick={this.hideError}> OK </button>
        </div>
      </div>
    );
  }
});

module.exports = Error;

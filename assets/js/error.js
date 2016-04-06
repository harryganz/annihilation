import React from 'react';

const Error = React.createClass({
  render: function() {
    return (
      <div className="error">
        <div className="panel">
          <p>{this.props.error}</p>
        </div>
      </div>
    );
  }
});

module.exports = Error;

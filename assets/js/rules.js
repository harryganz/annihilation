import React from 'react';
import {Link} from 'react-router';

const Rules = React.createClass({
  render: function() {
    return (
      <div className="rules">
        <div className="panel">
          <p>
            <span className="lead">Objective:</span> Be the first to destroy
            all of the other player&#39;s cities
          </p>
          <p>
            <span className="lead">GamePlay:</span> Each player begins with
            one nuke in their stockpile. Every turn they can stockpile more
            nukes, launch all of their nukes, or deploy countermeasures.
          </p>
          <ul className="actions-list">
            <li><span className="lead">Launch Nukes:</span> Launches all of the
            nukes in a player&#39;s stockpile. Each nuke can destroy one of their
            opponent&#39;s cities.</li>
            <li><span className="lead">Stockpile Nukes:</span> Adds one nuke to the
            player&#39;s stockpile.</li>
            <li><span className="lead">Deploy Countermeasures</span> Blocks all nukes launched
            by an opponent for one turn. Beware! Every consecutive turn this is used reduces its
            effectiveness by one turn.</li>
          </ul>
          <Link to="/" className="btn btn-large btn-green">OK</Link>
        </div>
      </div>
    );
  }
});

module.exports = Rules;

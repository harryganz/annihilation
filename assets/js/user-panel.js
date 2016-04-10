import React from 'react';

const UserPanel = React.createClass({
  render: function() {
    var player = this.props.game.players[this.props.id];
    var cities = [];
    if(player){
      for (var i = 0; i < player.numCities; i++) {
        cities.push(<img src="/img/city.png" alt="city" key={i} className="graphic"/>);
      }
    }

    return (
      <div className="user-panel">
        <h3>{player ? player.alias : 'NA'}</h3>
        <div className="panel">
          <p>Cities left: {player ? cities : 'NA'}</p>
          <p>Nukes Stockpiled: {player ? player.numNukes : 'NA'}</p>
          <p>Countermeasure Effectiveness: {player ? player.countermeasureEffectiveness : 'NA'}</p>
        </div>
      </div>
    );
  }
});

module.exports = UserPanel;

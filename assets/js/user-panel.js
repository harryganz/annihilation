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
    var nukes = [];
    if(player) {
      for(var i = 0; i < player.numNukes; i++) {
        nukes.push(<img src="/img/nuke.png" alt="nuke" key={i} className="graphic" />);
      }
    }

    var counterMeasureWidth = 100;
    if(player) {
      counterMeasureWidth = player.countermeasureEffectiveness * 100;
    }

    return (
      <div className="user-panel">
        <h3>{player ? player.alias : 'NA'}</h3>
        <div className="panel">
          <p className="lead">Cities left: {player ? cities : 'NA'}</p>
          <p>Nukes Stockpiled: {player ? nukes : 'NA'}</p>
          <p>Countermeasure Effectiveness:</p>
          <div className="meter">
            <span style={{width: counterMeasureWidth+"%"}}></span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UserPanel;

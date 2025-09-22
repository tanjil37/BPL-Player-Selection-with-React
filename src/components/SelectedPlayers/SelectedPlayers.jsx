import React from "react";

import SelectedCard from "../SlectedCard/SelectedCard";

const SelectedPlayers = ({ purchesedPlayer, removePlayer }) => {
  return (
    <div className="w-11/12 mx-auto">
     {
        purchesedPlayer.map(player=><SelectedCard player={player} removePlayer={removePlayer}></SelectedCard>)
     }
    </div>
  );
};

export default SelectedPlayers;

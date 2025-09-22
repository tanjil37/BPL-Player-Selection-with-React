import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({availableBlance, playerPromise, SetAvailableBlance, purchesedPlayer, setPurchesedPlayer }) => {
  const playersData = use(playerPromise);
  //console.log(playersData);

  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
       


      {playersData.map(player => (
        <PlayerCard availableBlance={availableBlance} player={player} SetAvailableBlance={SetAvailableBlance} purchesedPlayer={purchesedPlayer} setPurchesedPlayer={setPurchesedPlayer}></PlayerCard>
       
      ))}
    </div>
  );
};

export default AvailablePlayers;

import React, { useState } from "react";
import userImg from "../../assets/user.png";
import flag from "../../assets/flag.png";

const PlayerCard = ({availableBlance, player, SetAvailableBlance}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData.price)
    if(availableBlance<playerPrice){
        alert("Not enough coins!!")
        return
    }
   
    setIsSelected(true);
    SetAvailableBlance(
      availableBlance - playerPrice
    ); 
   
  };

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img src={player.player_img} alt="Player Image" />
      </figure>
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <img className="w-5 h-5" src={userImg} alt="" />
          <h2 className="card-title">{player.player_name}</h2>
        </div>

        <div className="flex justify-between mt-4 border-b-1 border-gray-400 pb-2">
          <div className="flex gap-2 items-center">
            <img
              className="w-5
                 h-5"
              src={flag}
              alt=""
            />
            <span>{player.player_country}</span>
          </div>
          <button className="btn">{player.playing_role}</button>
        </div>
        <div className="flex justify-between font-bold mt-3">
          <span>Rating</span>
          <span>{player.rating}</span>
        </div>
        <div className="flex justify-between  mt-3">
          <span className="font-bold">Left-Hand-Bat</span>
          <span>Left-Hand-Bat</span>
        </div>

        <div className="card-actions mt-3 flex justify-between items-center">
          <p className="font-bold">
            Price: $<span>{player.price}</span>
          </p>

          <button
            disabled={isSelected}
            onClick={() =>  handleSelected(player)}
            className="btn"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;

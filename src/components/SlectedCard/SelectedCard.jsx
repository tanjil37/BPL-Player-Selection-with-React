import React from 'react';
import deleteIcon from "../../assets/frame.png";

const SelectedCard = ({player, removePlayer}) => {
  const handleRemove = ()=>{
    removePlayer(player)
  }
    return (
         <div className="flex justify-between items-center border-1 border-gray-200 rounded-2xl p-3 mt-5 shadow-gray-200 shadow">
        <div className="flex">
          <img
            className="w-[50px] h-[50px] rounded-2xl"
            src={player.player_img}
            alt=""
          />
          <div className="ml-2">
            <h2 className="font-semibold textarea-xl">{player.player_name}</h2>
            <p className="">{player.playing_role}</p>
          </div>
        </div>

        <div onClick={handleRemove} className="mr-3">
          <img src={deleteIcon} alt="" />
        </div>
      </div>
    );
};

export default SelectedCard;
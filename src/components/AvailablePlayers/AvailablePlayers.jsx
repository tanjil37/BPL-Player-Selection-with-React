import React, { use } from "react";
import userImg from "../../assets/user.png";
import flag from "../../assets/flag.png";

const AvailablePlayers = ({ playerPromise }) => {
  const playersData = use(playerPromise);
  console.log(playersData);

  return (
    <div className="w-11/12 mx-auto">
      <div className="card bg-base-100 w-96 shadow-sm p-4">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <img className="w-5 h-5" src={userImg} alt="" />
            <h2 className="card-title">Virat Koholi</h2>
          </div>

          <div className="flex justify-between mt-4 border-b-1 border-gray-400 pb-2">
            <div className="flex gap-2 items-center">
              <img
                className="w-5
                 h-5"
                src={flag}
                alt=""
              />
              <span>India</span>
            </div>
            <button className="btn">All-Rounder</button>
          </div>
          <div className="flex justify-between font-bold mt-3">
            <span>Rating</span>
            <span>5.5</span>
          </div>
          <div className="flex justify-between  mt-3">
            <span className="font-bold">Left-Hand-Bat</span>
            <span>Left-Hand-Bat</span>
            
          </div>

          <div className="card-actions mt-3 flex justify-between items-center">
            <p className="font-bold">Price: $<span>500</span></p>

            <button className="btn">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;

import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBlance, SetAvailableBlance] = useState(600000000);
  const [purchesedPlayer, setPurchesedPlayer] = useState([]);
  const removePlayer = (p) => {
    const fileteredData = purchesedPlayer.filter(
      (ply) => ply.player_id !== p.player_id
    );
    setPurchesedPlayer(fileteredData);
    SetAvailableBlance(availableBlance + parseInt(p.price));
  };

  return (
    <>
      <Navbar availableBlance={availableBlance}></Navbar>

      <div className="w-11/12 mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">
          {toggle
            ? "Available Players"
            : `Selected Player (${purchesedPlayer.length}/6)`}
        </h1>
        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`px-4 py-3 border-1 ${
              toggle === true ? "bg-[#E7FE29]" : " "
            } border-gray-300 border-r-0 rounded-l-2xl`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`px-4 py-3 border-1 border-gray-300 border-l-0 rounded-r-2xl
            ${toggle === false ? "bg-[#E7FE29]" : " "}`}
          >
            Selected({purchesedPlayer.length})
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner text-neutral"></span>
          }
        >
          <AvailablePlayers
            availableBlance={availableBlance}
            SetAvailableBlance={SetAvailableBlance}
            playerPromise={playerPromise}
            purchesedPlayer={purchesedPlayer}
            setPurchesedPlayer={setPurchesedPlayer}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          purchesedPlayer={purchesedPlayer}
          removePlayer={removePlayer}
        ></SelectedPlayers>
      )}
      
        <ToastContainer></ToastContainer>
     
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { Suspense, useState } from "react";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
  
};
const playerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBlance, SetAvailableBlance] = useState(600000)

  
  return (
    <>
      <Navbar availableBlance={availableBlance}></Navbar>

      <div className="w-11/12 mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">Available Player</h1>
        <div className="font-bold">
          <button onClick={()=>setToggle(true)} className={`px-4 py-3 border-1 ${toggle===true?"bg-[#E7FE29]":" " } border-gray-300 border-r-0 rounded-l-2xl`}>
            Available
          </button>
          <button onClick={()=>setToggle(false)} className={`px-4 py-3 border-1 border-gray-300 border-l-0 rounded-r-2xl
            ${toggle===false?"bg-[#E7FE29]":" "}`}>
            Selected(0)
          </button>
        </div>
      </div>
      {
        toggle === true? <Suspense
        fallback={
          <span className="loading loading-spinner text-neutral"></span>
        }
      >
        <AvailablePlayers availableBlance={availableBlance} SetAvailableBlance={SetAvailableBlance} playerPromise={playerPromise} ></AvailablePlayers>
      </Suspense>: <SelectedPlayers></SelectedPlayers>
      }

      
     
    </>
  );
}

export default App;

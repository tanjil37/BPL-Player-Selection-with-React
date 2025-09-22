import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import { Suspense } from "react";

const fetchPlayers = async () =>{
  const res = await fetch("/players.json")
  return res.json();
}


function App() {
  const playerPromise = fetchPlayers();
  return (
    <>
    <Navbar></Navbar>
   <Suspense fallback={<span className="loading loading-spinner text-neutral"></span>}>
     <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
   </Suspense>

      
    </>
  );
}

export default App;

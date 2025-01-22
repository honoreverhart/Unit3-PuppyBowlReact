import { useState, useEffect } from "react";
import AllPlayers from "./components/AllPlayers";
import "./App.css";
import SinglePlayer from "./components/SInglePlayer";
import Form from "./components/Form";


function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  
  

  return (
    <>
      <Form/>
      {selectedPlayer ? (
        <SinglePlayer
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        />
      ) : (
        <AllPlayers
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        />
      )}
    </>
  );
}

export default App;

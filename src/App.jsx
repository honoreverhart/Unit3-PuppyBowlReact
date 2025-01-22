import { useState, useEffect } from "react";
import AllPlayers from "./components/AllPlayers";
import "./App.css";
import SinglePlayer from "./components/SInglePlayer";
import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";


function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  
  

  return (
    <>
      <Form/>
      {/* {selectedPlayer ? (
        <SinglePlayer
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        />
      ) : (
        <AllPlayers
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        />
      )} */}
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/:id" element={<PlayerDetails />} />
      </Routes>
    </>
  );
}

export default App;

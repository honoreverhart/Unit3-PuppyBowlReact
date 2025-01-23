import React from 'react'
import { useState, useEffect } from "react";
import AllPlayers from "./components/AllPlayers";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerDetails from "./components/PlayerDetails";

export default function App() {
  // const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <>
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/:id" element={<PlayerDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

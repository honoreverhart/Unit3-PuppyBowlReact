import React from 'react'
import { useState, useEffect } from "react";
import AllPlayers from "./components/AllPlayers";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerDetails from "./components/PlayerDetails";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/:id" element={<PlayerDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

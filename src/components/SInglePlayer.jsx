import { deletePlayer } from "../api";
import { useEffect, useState } from "react";

export default function SinglePlayer({
  player,
  selectedPlayer,
  setSelectedPlayer,
}) {
  async function handleDelete() {
    await deletePlayer(player.id);
  }


  
  

  return (
    <>
    {selectedPlayer ?  (
        <div className="playerCard">
        <img src={selectedPlayer.imageUrl} />
        <h1>Name: {selectedPlayer.name}</h1>
        <h2>Breed: {selectedPlayer.breed}</h2>
        <h2>Status: {selectedPlayer.status}</h2>
        <button onClick={() => setSelectedPlayer(null)}>Go Back</button>
      </div>) : 
      (<div className="playerCard">
      <img src={player.imageUrl} />
      <h1>Name: {player.name}</h1>
      <h2>Breed: {player.breed}</h2>
      <h2>Status: {player.status}</h2>
      <button onClick={() => setSelectedPlayer(player)}>See Details :)</button>
      <button onClick={() => handleDelete()}>Delete :( </button>
    </div>)}
    </>
  );
}

import { deletePlayer } from "../api";
import { useNavigate } from "react-router-dom";

export default function SinglePlayer({ player }) {
  const navigate = useNavigate();

  async function handleDelete() {
    await deletePlayer(player.id);
  }

  function showDetails() {
    navigate(`/${player.id}`);
  }

  return (
    <>
      <div className="playerCard">
        <img src={player.imageUrl} />
        <h1>Name: {player.name}</h1>
        <button id="details" onClick={showDetails}> See Details :) </button>
        <button id="delete" onClick={handleDelete}> Delete :( </button>
      </div>
    </>
  );
}

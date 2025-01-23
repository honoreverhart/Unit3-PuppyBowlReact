import { deletePlayer } from "../api";
// import { useNavigate } from "react-router-dom";

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
        <button id="details" onClick={showDetails}>
          Details
        </button>
        <button id="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>

      {/* {selectedPlayer ? (
        <div className="playerCard">
          <img src={selectedPlayer.imageUrl} />
          <h1>Name: {selectedPlayer.name}</h1>
          <h2>Breed: {selectedPlayer.breed}</h2>
          <h2>Status: {selectedPlayer.status}</h2>
          <button onClick={() => setSelectedPlayer(null)}>Go Back</button>
        </div>
      ) : (
        <div className="playerCard">
          <img src={player.imageUrl} />
          <h1>Name: {player.name}</h1>
          <h2>Breed: {player.breed}</h2>
          <h2>Status: {player.status}</h2>
          <button onClick={() => setSelectedPlayer(player)}>
            See Details :)
          </button>
          <button onClick={() => handleDelete()}>Delete :( </button>
        </div>
      )} */}
    </>
  );
}

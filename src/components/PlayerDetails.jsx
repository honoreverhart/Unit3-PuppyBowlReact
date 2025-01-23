import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPlayerDetails } from "../api";

export default function PlayerDetails() {
  const { id } = useParams();
  const [playerDetails, setPlayerDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function selectSinglePlayer(id) {
      setPlayerDetails(await getPlayerDetails(id));
    }
    selectSinglePlayer(id);
  }, []);

  return (
    <>
      <img src={playerDetails.imageUrl} />
      <h1>{playerDetails.name}</h1>
      <h2>Breed: {playerDetails.breed}</h2>
      <h2>Status: {playerDetails.status}</h2>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
    </>
  );
}

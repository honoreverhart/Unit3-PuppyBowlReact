import SinglePlayer from "./SInglePlayer";
import { useEffect, useState } from "react";
import { getPlayers } from "../api";
import Form from "./Form";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  async function getData() {
    const playersData = await getPlayers();
    setPlayers(playersData);
  }
  getData();

  const displayPlayer = searchParam
    ? players.filter((player) =>
        player.name.toLowerCase().startWith(searchParam)
      )
    : players;

  useEffect(() => {
    getData();
  }, []);

  
  return(
    <div>
      <h1> Add a Player</h1>
      <Form getData={getData} />
      <h1>Players</h1>
      <div>
        <label>
          Search:{" "}
          <input type="text" placeholder="search" onChange={(e) => setSearchParam(e.target.value.toLowerCase())} />
        </label>
      </div>
      {displayPlayer.map((player) => {
        return(
          <SinglePlayer key={player.id} player={player} getData={getData} />
        )
      })}
    </div>
  )
}

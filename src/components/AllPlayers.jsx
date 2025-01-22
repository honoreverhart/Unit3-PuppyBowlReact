import SinglePlayer from "./SInglePlayer";
import { useEffect, useState } from "react";
import { getPlayers } from "../api";
import Form from "./Form";


export default function AllPlayers({selectedPlayer, setSelectedPlayer}) {
  
const [players, setPlayers] = useState([]);
  
  
    useEffect(() => {
      async function getData() {
        const playersData = await getPlayers();
        setPlayers(playersData);
      }
      getData();
    }, []);
  
  return (
    players.map(player =>{
      return(
        <SinglePlayer key={player.id} player={player} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}/>
      )
    })
  )
}





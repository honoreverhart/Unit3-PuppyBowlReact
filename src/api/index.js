const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2409-GHP-ET-WEB-PT";

export async function getPlayers() {
  try {
    const response = await fetch(BASE_URL + "/players");
    const json = await response.json();
    if (!json.success) {
      throw json.error;
    }

    const result = json.data;
    return result.players;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
}

export async function getPlayerDetails(id) {
  try {
    const response = await fetch(BASE_URI + `/players/${id}`);
    const json = await response.json();
    const result = json.data;
    return result.player;
  } catch (error) {
    console.log(error);
  }
}


export async function addPlayer(newPlayer) {
  try {
    const response = await fetch(`${BASE_URL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    });
    if (!response.ok) {
      throw new Error(`Failed to add event: ${response.status}`);
    }
    const result = await response.json();
    window.location.reload()
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
}
export async function deletePlayer(playerId) {
  try {
    const response = await fetch(`${BASE_URL}/players/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
    window.location.reload()

    if (!response.ok) {
      throw new Error(
        "Unable to delete puppy due to Http error: " + response.status
      );
    }
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
}


// const response = await fetch(API_URL + "/players", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newPlayer),
//     });
//     const result = await response.json();
//     return result
// await fetch(API_URL + "/players/" + playerId, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

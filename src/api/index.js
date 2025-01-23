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
  } catch (error) {
    console.log(error);
  }
}

export async function getPlayerDetails(id) {
  try {
    const response = await fetch(BASE_URL + `/players/${id}`);
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
    console.log(response);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}
export async function deletePlayer(playerId) {
  try {
    const response = await fetch(`${BASE_URL}/players/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
    window.location.reload();

    if (!response.ok) {
      throw new Error(
        "Unable to delete puppy due to Http error: " + response.status
      );
    }
  } catch (err) {
    console.error(err);
  }
}

export async function getTeams() {
  try {
    const response = await fetch(`${BASE_URL}/teams`);
    const json = await response.json();
    const result = json.data;
    return result.teams;
  } catch (error) {
    console.log(error);
  }
}

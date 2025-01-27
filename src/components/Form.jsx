import { addPlayer, getTeams } from "../api";
import { useState, useEffect } from "react";

export default function Form({ getData }) {
  const [teams, setTeams] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    imageUrl: "",
    teamId: "",
  });

  useEffect(() => {
    async function getTeamData() {
      setTeams(await getTeams());
    }
    getTeamData();
  }, []);

  function handleChange(e) {
    {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await addPlayer(formData);
      getData();
      setFormData({
        name: "",
        breed: "",
        imageUrl: "",
        teamId: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="label">
          Puppy Name:{""}
          <input
            type="text"
            placeholder="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          Breed:{""}
          <input
            type="text"
            placeholder="breed"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          Image:{""}
          <input
            type="text"
            placeholder="image url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          <select name="teamId" value={formData.teamId} onChange={handleChange}>
            <option value=" ">Select Team</option>
            {teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </label>
        <button className="button">Enter!</button>
      </form>
    </div>
  );
}

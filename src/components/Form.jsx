import { addPlayer } from "../api";
import { useState} from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    imageUrl: "",
  });

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
      addPlayer(formData);
    } catch (error) {
      setFormData(error.message);
    }
  }
  return (
    <div>
      <h2 className="h2">Enter a Puppy!</h2>
      <form onSubmit={handleSubmit}>
        <label className="label">
          Name:{""}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          Breed:{""}
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          Image Url:{""}
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </label>
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

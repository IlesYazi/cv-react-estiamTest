import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiEndPoint = "http://localhost:3005/Formation";
//const apiEndPointExperience = "http://localhost:3004/Experience";

const Create = () => {
  //Formation
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  //Experience
  const [title_exp, setTitleExp] = useState("");
  const [date_exp, setDateExp] = useState("");
  const [location_exp, setLocationExp] = useState("");
  const [text_exp, setTextExp] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTitle = { title };
    await axios.post(apiEndPoint, newTitle);
    navigate("/");
  };

  return (
    <div>
      <h1>Ajouter ici les nouvelles formations : </h1>
      <form onSubmit={handleSubmit}>
        <label></label>
        {"Nom de la formation : "}
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {"Date : "}
        <input
          type="text"
          required
          value={date}
          onChange={(e) => setTitle(e.target.value)}
        />
        {"Lieux : "}
        <input
          type="text"
          required
          value={location}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Ajouter</button>
      </form>
      <h1>Ajouter ici les nouvelles Experiences : </h1>
      <form onSubmit={handleSubmit}>
        <label></label>
        {"Experience : "}
        <input
          type="text"
          required
          value={title_exp}
          onChange={(e) => setTitle(e.target.value)}
        />
        {"Date : "}
        <input
          type="text"
          required
          value={date_exp}
          onChange={(e) => setTitle(e.target.value)}
        />
        {"Lieux : "}
        <input
          type="text"
          required
          value={location_exp}
          onChange={(e) => setTitle(e.target.value)}
        />{"Description : "}
        <input
          type="text"
          required
          value={text_exp}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Ajouter</button>
      </form>
    </div>
  );
};

export default Create;

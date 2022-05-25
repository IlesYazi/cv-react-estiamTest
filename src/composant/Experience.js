import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const apiEndPoint = "http://localhost:3004/Experience";
//json-server --watch experience.json --port 3004

const Experience = () => {

  const [experience, setExperience] = useState([]);

  //// Base de donnée des Experience
  useEffect(() => {
    const updateData = async () => {
      const newExperience = await axios.get(apiEndPoint);
      setExperience(newExperience.data);
    };
    updateData();
  }, []);

  return (
    <div className="cursus">
      <h2>Expériences professionelles et projet Git Hub</h2>
      {experience.map((item) => (
        <div className="grid__row" key={item.id}>
          <div className="grid__item">
            <p className="grid__date">{item.date}</p>
          </div>
          <div className="grid__item">
            <h3 className="grid__title">{item.title}</h3>
            <p className="grid__location">{item.location}</p>
            <p className="grid__text">{item.text}</p>
            <ul className="grid__missions">
              {item.missions.map((mission) => (
                <li className="grid__mission" key={mission.id}>
                  {mission.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const apiEndPoint = "http://localhost:3005/Formation";
//json-server --watch formation.json --port 3005

const Formation = () => {
  const [formation, setFormation] = useState([]);

  //// Base de donnée des formations
  useEffect(() => {
    const updateData = async () => {
      const newFormation = await axios.get(apiEndPoint);
      setFormation(newFormation.data);
    };
    updateData();
  }, []);

  return (
    <div className="cursus mb3">
      <h2>Formations</h2>
      {formation.map((item) => (
        <div className="grid__row" key={item.id}>
          <div className="grid__item">
            <p className="grid__date">{item.date}</p>
          </div>
          <div className="grid__item">
            <h3 className="grid__title">{item.title}</h3>
            <p className="grid__location">{item.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Formation;

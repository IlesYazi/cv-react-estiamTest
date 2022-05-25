import React from "react";
import "./User.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const apiEndPoint = "http://localhost:3006/Profil";

const User = () => {

  const [profil, setProfil] = useState([]);

  //// Base de donnée des formations
  useEffect(() => {
    const updateData = async () => {
      const newProfil = await axios.get(apiEndPoint);
      setProfil(newProfil.data);
    };
    updateData();
  }, []);


  return (
    <div className="user">
      <img src="./images/iles_profil.jpg" className="user__avatar" />
      <img src="./images/qrcode_linkedin_iles.jpg" className="user__linkedin" />
      <h1 className="user__name">Iles YAZI</h1>
      <p className="user__profession">Développeur Web</p>
      <div className="user__infos">
        <p className="user__info">12 rue Frederick Lemaitre 75020 Paris</p>
        <p className="user__info">0751408491</p>
        <p className="user__info">iles.yazi@hotmail.fr</p>
        <p className="user__info">Date de naissance: 2 juin 2001</p>
        <p className="user__info">Lieu de naissance: Paris</p>
      </div>
    </div>
  );
}

export default User;

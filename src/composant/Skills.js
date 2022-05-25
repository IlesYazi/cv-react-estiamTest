import React from "react";
import "./Skills.css";
import Skill from "./Skill";

const Skills = () =>{
  return (
    <>
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title="PYTHON" rating="5" />
        <Skill title="REACT" rating="4" />
        <Skill title="HTML / CSS" rating="4" />
        <Skill title="JAVA" rating="4" />
        <Skill title="PHP" rating="3" />
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Français" rating="5" />
        <Skill title="Anglais" rating="4" />
        <Skill title="Allemand" rating="2" />
      </div>
      <div className="skills">
        <h2 className="h2">Centres d'intérêts</h2>
        <ul>
          <li>Informatique</li>
          <li>Sports</li>
          <li>Musique</li>
          <li>Lire</li>
        </ul>
      </div>
    </>
  );
}

export default Skills;

import { useState } from "react";

import scripter from "../assets/img/scripter-rbg.png";
import BttP from "../assets/img/logo_BttP.png";
import monkee from "../assets/img/monkeyShroom.png";
import starLov from "../assets/img/starLove.png";
import labo from "../assets/img/leLabo.png";

const MyProjet = () => {
  const [isScripterExpand, setIsScripterExpand] = useState(false);
  const [isBttPExpand, setIsBttPExpand] = useState(false);
  const [isMonkeeExpand, setIsMonkeeExpand] = useState(false);
  const [isStarLoveExpand, setIsStarLoveExpand] = useState(false);
  const [isLeLaboExpand, setIsLeLaboExpand] = useState(false);

  const handleScripterClick = () => {
    setIsScripterExpand(!isScripterExpand);
  };

  const handleBttPClick = () => {
    setIsBttPExpand(!isBttPExpand);
  };

  const handleMonkeeClick = () => {
    setIsMonkeeExpand(!isMonkeeExpand);
  };

  const handleStarLoveClick = () => {
    setIsStarLoveExpand(!isStarLoveExpand);
  };

  const handleLeLaboClick = () => {
    setIsLeLaboExpand(!isLeLaboExpand);
  };

  return (
    <div className="globalContainer">
      <div className="titleProject">
        <h1>Mes réalisations</h1>
      </div>
      <div className="projectsContainer">
        <div className={`cardScripter ${isScripterExpand ? "cardExpand" : "hiddenCard"}`} onClick={handleScripterClick}>
        <div>
            <img src={scripter} alt="logo scripter" />
          </div>
          {isScripterExpand ? (
            <div>
              <div>
                <p>
                  <strong>Sujet :</strong> Projet de groupe
                  <br />
                  <strong>Objectifs :</strong> Création d’une application web
                  pensée mobile first destinée aux rôlistes dans le but de
                  trouver un scénario ou une campagne pour leur soirée (8 semaines).
                  <br />
                  <strong>Technologies utilisées :</strong> React, SCSS, Figma,
                  MySQL, NodeJS, Express
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`cardScripter ${isScripterExpand ? "cardExpand" : "hiddenCard"}`} onClick={handleScripterClick}>
        <div>
            <img src={scripter} alt="logo scripter" />
          </div>
          {isScripterExpand ? (
            <div>
              <div>
                <p>
                  <strong>Sujet :</strong> Projet de groupe
                  <br />
                  <strong>Objectifs :</strong> Création d’une application web
                  pensée mobile first destinée aux rôlistes dans le but de
                  trouver un scénario ou une campagne pour leur soirée (8 semaines).
                  <br />
                  <strong>Technologies utilisées :</strong> React, SCSS, Figma,
                  MySQL, NodeJS, Express
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div> 
      </div>
    </div>
  )
}

export default MyProjet;


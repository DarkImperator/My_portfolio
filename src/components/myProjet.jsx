import { useState } from "react";

import scripter from "../assets/img/scripter-rbg-s.png";
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
        <div className={`card ${isScripterExpand ? "cardExpand" : "hiddenCard"}`} onClick={handleScripterClick}>
        <div>
            <img src={scripter} alt="logo scripter" />
          </div>
          {isScripterExpand ? (
            <div>
              <div>
                <p>
                  <strong>Sujet :</strong> Projet de groupe.
                  <br />
                  <strong>Objectifs :</strong> Création d’une application web
                  pensée mobile first destinée aux rôlistes dans le but de
                  trouver un scénario ou une campagne pour leur soirée (8 semaines).
                  <br />
                  <strong>Technologies utilisées :</strong> React, SCSS, Figma,
                  MySQL, NodeJS, Express.
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`card ${isMonkeeExpand ? "cardExpand" : "hiddenCard"}`} onClick={handleMonkeeClick}>
        <div>
            <img src={monkee} alt="logo monkee" />
          </div>
          {isMonkeeExpand ? (
            <div>
              <div>
                <p>
                  <strong>Sujet :</strong> Projet de groupe.
                  <br />
                  <strong>Objectifs :</strong> Création d’un jeu de type «
                  runner » et d’un site dynamique (5 semaines).
                  <br />
                  <strong>Technologies utilisées :</strong> React, SCSS, Figma,
                  MySQL, NodeJS.
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`card ${isLeLaboExpand ? "cardExpand" : "hiddenCard"}`} onClick={handleLeLaboClick}>
        <div>
            <img src={labo} alt="logo labo" />
          </div>
          {isLeLaboExpand ? (
            <div>
              <div>
                <p>
                  <strong>Sujet :</strong> Projet de groupe.
                  <br />
                  <strong>Objectifs :</strong> Réalisation d’un site vitrine
                  d’une clinique (2 semaines).
                  <br />
                  <strong>Technologies utilisées :</strong> JavaScript, HTML,
                  CSS, Figma.
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`card ${isBttPExpand ? "cardExpand" : "hiddenCard"}`} onClick={handleBttPClick}>
        <div>
            <img src={BttP} alt="logo BttP" />
          </div>
          {isBttPExpand ? (
            <div>
              <div>
                <p>
                  <strong>Sujet :</strong> Hackaton sur 24H.
                  <br />
                  <strong>Objectifs :</strong> Création d’une application type
                  google map.
                  <br />
                  <strong>Technologies utilisées :</strong> React, SCSS, NodeJS,
                  Figma.
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`card ${isStarLoveExpand ? "cardExpand" : "hiddenCard"}`} onClick={handleStarLoveClick}>
        <div>
            <img src={starLov} alt="logo starLove" />
          </div>
          {isStarLoveExpand ? (
            <div>
              <div>
                <p>
                  <strong>Sujet :</strong> Hackaton sur 24H.
                  <br />
                  <strong>Objectifs :</strong> Création d’une app de rencontre
                  sur l’univers de Star Wars.
                  <br />
                  <strong>Technologies utilisées :</strong> React, SCSS, Figma,
                  Vite, NodeJS.
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


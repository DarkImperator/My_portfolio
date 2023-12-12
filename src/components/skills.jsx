import { useState } from "react";

import Formation from "../assets/img/formation-rbg.png";
import Experience from "../assets/img/exp-rbg.png";
import Competences from "../assets/img/comp-rbg.png";
import CSS from "../assets/img/1_CSS.png";
import HTML from "../assets/img/1_Html.png";
import JS from "../assets/img/1_JS.png";
import Express from "../assets/img/1_Express.png";
import Node from "../assets/img/1_Node.png";
import React from "../assets/img/1_React.png";
import SQL from "../assets/img/1_Sql.png";
import Figma from "../assets/img/2_figma.png";
import GitHub from "../assets/img/2_GitHub.png";
import MySWork from "../assets/img/2_MySQLWorkbench.png";
import Postman from "../assets/img/2_postman.png";
import Trello from "../assets/img/2_trello.png";
import VSkod from "../assets/img/2_vsCode.png";
// import __ from "../assets/img/__.png";

const Skills = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [containerExpanded, setContainerExpanded] = useState(false); // Ajout de l'état pour le conteneur

  const handleExpand = (cardNumber) => {
    if (expandedCard === cardNumber) {
      setExpandedCard(null);
      setContainerExpanded(false); // Si on reclique sur la carte ouverte, on ferme toutes les cartes
    } else {
      setExpandedCard(cardNumber);
      setContainerExpanded(true); // Passer en mode colonne pour toutes les cartes
    }
  };

  return (
    <section className={`container ${containerExpanded ? "expanded" : ""}`}>
      <div
        className={`cards ${expandedCard === 1 ? "expanded" : ""}`}
        onClick={() => handleExpand(1)}
      >
        <div className="titleExperience">
          <h1 id="titleExperience">EXPÉRIENCE</h1>
        </div>
        <div className="imgExperience">
          <img src={Experience} alt="" />
        </div>
        {expandedCard === 1 && (
          <div className="additionalContent">
            <div className="experienceContainer">
              <div>
                <span>Opérateur Traitement Polyvalent</span>
                <p>CA-Chèques (Aout 2018 - Septembre 2022)</p>
              </div>
              <div>
                <span>Assistant d’éducation</span>
                <p>Lycée La Martinière-Monplaisir (Janvier 2015 - Juillet 2018)</p>
              </div>
              <div>
                <span>Technicien eau potable</span>
                <p>Grand Lyon (Novembre 2011 - Décembre 2013)</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`cards ${expandedCard === 2 ? "expanded" : ""}`}
        onClick={() => handleExpand(2)}
      >
        <div className="titleExperience">
          <h1 id="titleExperience">FORMATIONS</h1>
        </div>
        <div className="imgExperience">
          <img src={Formation} alt="" />
        </div>
        {expandedCard === 2 && (
          <div className="additionalContent">
            <div className="experienceContainer">
              <div>
                <span>Wild Code School - Mai 2023 à Octobre 2023</span>
                <p>
                  <strong>Formation développeur Web et Web mobile</strong>
                  <br />
                  HTML, CSS, JavaScript, DOM, React, Express (NodeJS), SQL
                </p>
              </div>
              <div>
                <span>Licence géologie - 2011</span>
              </div>
              <div>
                <span>Bac Option Scientifique - 2007</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`cards ${expandedCard === 3 ? "expanded" : ""}`}
        onClick={() => handleExpand(3)}
      >
        <div className="titleExperience">
          <h1 id="titleExperience">COMPÉTENCES</h1>
        </div>
        <div className="imgExperience">
          <img src={Competences} alt="" />
        </div>
        {expandedCard === 3 && (
          <div className="additionalContent">
            <div className="logoMajorContainer">
              <div className="titleContainerExperience">
                <h2>Languages / Frameworks & Logiciels et outils</h2>
              </div>
              <div className="logoContainer">
                <div className="divLeft">
                  <img src={HTML} alt="logo HTML" />
                  <span>HTML</span>
                  <img src={CSS} alt="logo CSS" />
                  <span>CSS</span>
                  <img src={JS} alt="logo JS" />
                  <span>JavaScript</span>
                  <img src={Node} alt="logo Node" />
                  <span>Node</span>
                  <img src={React} alt="logo React" />
                  <span>React</span>
                  <img src={Express} alt="logo Express" />
                  <span>Express</span>
                  <img src={SQL} alt="logo SQL" />
                  <span>Sql</span>
                  <img src={MySWork} alt="logo MySQLWorkbench" />
                  <span>MySQLWorkbench</span>
                </div>
                <div className="divRight">
                  <img src={VSkod} alt="logo VSCode" />
                  <span>Vs Code</span>
                  <img src={Postman} alt="logo Postman" />
                  <span>Postman</span>
                  <img src={Figma} alt="logo Figma" />
                  <span>Figma</span>
                  <img src={Trello} alt="logo Trello" />
                  <span>Trello</span>
                  <img src={GitHub} alt="logo GitHub" />
                  <span>GitHub</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills

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
    <section className={`globalContainerSkills ${containerExpanded ? "expanded" : ""}`}>
      <div
        className={`cardsSkills ${expandedCard === 1 ? "expanded" : ""}`}
        onClick={() => handleExpand(1)}
      >
        <div>
          <h1 id="titleH1">EXPÉRIENCE</h1>
        </div>
        <div className="imgExperience">
          <img src={Experience} alt="image experience" />
        </div>
        {expandedCard === 1 && (
          <div className="expandedContent">
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
        className={`cardsSkills ${expandedCard === 2 ? "expanded" : ""}`}
        onClick={() => handleExpand(2)}
      >
        <div>
          <h1 id="titleH1">FORMATIONS</h1>
        </div>
        <div className="imgExperience">
          <img src={Formation} alt="image formation" />
        </div>
        {expandedCard === 2 && (
          <div className="expandedContent">
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
                <p></p>
              </div>
              <div>
                <span>Bac Option Scientifique - 2007</span>
                <p></p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`cardsSkills ${expandedCard === 3 ? "expanded" : ""}`}
        onClick={() => handleExpand(3)}
      >
        <div>
          <h1 id="titleH1">COMPÉTENCES</h1>
        </div>
        <div className="imgExperience">
          <img src={Competences} alt="image competences" />
        </div>
        {expandedCard === 3 && (
          <div className="expandedContent">
            <div className="logoExperienceContainer">
              <div className="titleContainerExperience">
                <h2>Languages / Frameworks & Logiciels et outils</h2>
              </div>
              <div className="logoContainer">
                <div className="divLeft">
                  <div className="logo">
                    <img src={HTML} alt="logo HTML" />
                    <span>HTML</span>
                    <img src={CSS} alt="logo CSS" />
                    <span>CSS</span>
                    <img src={JS} alt="logo JS" />
                    <span>JavaScript</span>
                  </div>
                  <div className="logo">
                    <img src={React} alt="logo React" />
                    <span>React</span>
                    <img src={Node} alt="logo Node" />
                    <span>Node</span>
                    <img src={Express} alt="logo Express" />
                    <span>Express</span>
                  </div >
                  <div className="logo">
                    <img src={SQL} alt="logo SQL" />
                    <span>Sql</span>
                    <img src={MySWork} alt="logo MySQLWorkbench" />
                    <span>MySQLWorkbench</span>
                  </div >
                </div>
                <div className="divRight">
                  <div className="logo">
                    <img src={GitHub} alt="logo GitHub" />
                    <span>GitHub</span>
                    <img src={VSkod} alt="logo VSCode" />
                    <span>Vs Code</span>
                  </div>
                  <div className="logo">
                    <img src={Figma} alt="logo Figma" />
                    <span>Figma</span>
                    <img src={Trello} alt="logo Trello" />
                    <span>Trello</span>
                  </div>
                  <div className="logo">
                    <img src={Postman} alt="logo Postman" />
                    <span>Postman</span>
                  </div>
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

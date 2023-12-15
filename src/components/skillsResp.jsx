import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./skillsResp.scss";

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

const skillsResp = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      emulateTouch={true}
      infiniteLoop={true}
      selectedItem={0}
    >
      {/* Diapositive 1 */}
      <div className="generalContainerCarousel">
        <div className="insideContainerCarousel">
          <div className="imgCarouselContainer">
            <img id="imgCarousel" src={Formation} alt="Formation" />
            <h1>FORMATIONS</h1>
          </div>
          <div className="contentCarouselContainer">
            <div>
              <span>Wild Code School - Mai 2023 à Octobre 2023</span>
              <p>
                <strong>Formation développeur Web et Web mobile</strong>
                <br />
                HTML, CSS, JavaScript, DOM, React, Express (NodeJS), SQL, Méthode agile
              </p>
                <strong>Certification obtenue en décembre 2023</strong>
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
      </div>

      {/* Diapositive 2 */}
      <div className="generalContainerCarousel">
        <div className="insideContainerCarousel">
          <div className="imgCarouselContainer">
            <img id="imgCarousel" src={Experience} alt="Expérience" />
            <h1>EXPÉRIENCE</h1>
          </div>
          <div className="contentCarouselContainer">
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
      </div>

      {/* Diapositive 3 */}
      <div className="generalContainerCarousel">
        <div className="insideContainerCarousel">
          <div className="imgCarouselContainer">
            <img id="imgCarousel" src={Competences} alt="Compétences" />
            <h1>COMPÉTENCES</h1>
          </div>
          <div className="logoMajorContainerCarousel">
            <div className="titleContainerExperienceCarousel">
              <h1>Languages / Frameworks</h1>
            </div>
            <div className="logoContainerCarousel">
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
              </div>
              <div className="logo">
                <img src={SQL} alt="logo SQL" />
                <span>SQL</span>
                <img src={MySWork} alt="logo MySQLWorkbench" />
                <span>MySQLWorkbench</span>
              </div>
            </div>
          </div>
          <div className="logoMajorContainerCarousel">
            <div className="titleContainerExperienceCarousel">
              <h1>Logiciels et outils</h1>
            </div>
            <div className="logoContainerCarousel">
              <div className="logo">
                <img src={GitHub} alt="logo GitHub" />
                <span>GitHub</span>
                <img src={VSkod} alt="logo VSCode" />
                <span>Visual Studio Code</span>
              </div>
              <div className="logo">
                <img src={Figma} alt="Figma" />
                <span>Figma</span>
                <img src={Trello} alt="Trello" />
                <span>Trello</span>
              </div>
              <div className="logo">
                <img src={Postman} alt="Postman" />
                <span>Postman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  )
}

export default skillsResp

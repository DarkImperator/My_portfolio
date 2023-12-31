import tyranozaure from "/src/assets/img/tyr_kod_2.jpeg"

const main = () => {
  return (
    <div className="globalContainerHome">
      <div className="dino">
        <img src={tyranozaure} alt="dino_travail_javascript" />
      </div>
      <div className="textContainer">
        <div className="prenomContainer">
          <span className="span1">
            <span>Denis</span>
            <br />
            <span>Calamand</span>
          </span>
        </div>
        <div className="metierContainer">
          <div id="span2">Développeur web </div>
        </div>
      </div>
    </div>
  )
}

export default main;

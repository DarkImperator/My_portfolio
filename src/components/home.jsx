import tyranozaure from "/src/assets/img/tyr_kod_2.jpeg"

const main = () => {
  return (
    <div className="container">
      <div className="dino">
        <img src={tyranozaure} alt="dino_travail_javascript" />
      </div>
      <div className="prenomContainer">
        <div className="denisC">
          <span className="span1">
            <span id="word_Denis">Denis</span>
            <br />
            <span id="word_Cal">Calamand</span>
          </span>
        </div>
        <div id="line"></div>
        <div className="metierContainer">
          <div id="span2">Développeur web </div>
        </div>
      </div>
    </div>
  )
}

export default main;

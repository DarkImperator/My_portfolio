import dca from "../assets/img/DC_ph.jpg"

const presentation = () => {
  return (
    <div className="globalContainerPresentation">
      <div className="photo_pres">
        <img src={dca} alt="photo du developpeur" />
      </div>
      <div className="description_pres">
        {/* <p>Après plusieurs expériences professionnelles dans plusieurs domaines, j'ai décidé de me reconvertir dans le développement web et je reviens vers un des mes centres d'intérêts de ma jeunesse pour en faire ma profession. Créatif et curieux, j'ai toujours aimé comprendre et résoudre les problèmes.</p> */}
        <p>
          {
            "Après plusieurs expériences professionnelles dans plusieurs domaines, j'ai décidé de me reconvertir dans le développement web et je reviens vers un des mes centres d'intérêts de ma jeunesse pour en faire ma profession. Créatif et curieux, j'ai toujours aimé comprendre et résoudre les problèmes."
          }
        </p>
      </div>
    </div>
  )
}

export default presentation

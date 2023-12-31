// import gitHub from "../assets/img/2_GitHub_blue.png";
import gitHub_1 from "../assets/img/2_GitHub.png";
import linkedIn from "../assets/img/LinkedIn_icon.png";
// import oldTelBl from "../assets/img/logo_old_tel-bl.png";
import oldTelWh from "../assets/img/logo_old_tel-wh.png";
import mail from "../assets/img/parchemin.png";

const footer = () => {
  return (
    <>
    <div className="globalContainerFooter">
      <div className="divLeft">
        {/* Lien vers Telephone */}
        <a href="tel:+33676036608" target="_blank" rel="noopener noreferrer">
          <img src={oldTelWh} alt="Appel téléphonique" />
        </a>

        {/* Lien vers l'adresse e-mail */}
        <a href="mailto:calamanddenis@gmail.com">
          <img src={mail} alt="E-mail" />
        </a>
      </div>
      
      <div className="divCenter">        
        {/* Texte du footer */}
        <span className="footName">Denis CALAMAND 2023</span>
      </div>

      <div className="divRight">
      {/* Lien vers LinkedIn */}
        <a
          href="https://www.linkedin.com/in/calamand-denis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedIn} alt="LinkedIn" />
        </a>

        {/* Lien vers GitHub */}
        <a
          href="https://github.com/DarkImperator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitHub_1} alt="GitHub" />
        </a>        
      </div>
    </div>
    <div className="footerResp">
      <span className="footName">Denis CALAMAND 2023</span>
  </div>
  </>
  )
}

export default footer

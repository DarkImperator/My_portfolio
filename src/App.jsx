import './App.scss'
import "./index.scss";
import { useMediaQuery } from "react-responsive";

// import Navbar from './components/Navbar'
import Home from './components/home'
import Presentation from './components/presentation'
import Skills from './components/skills'
import SkillsResp from './components/skillsResp'
import MyProjet from './components/myProjet';
import Footer from './components/footer';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 780 });
  
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <Home />
        <Presentation />
        {/* <Skills />
        <SkillsResp /> */}
        <div>
          {isMobile ? <SkillsResp /> : <Skills />}
        </div>
        <MyProjet />
        <Footer />
      </div>
    </>
  )
}

export default App

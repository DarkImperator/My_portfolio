import './App.scss'

// import Navbar from './components/Navbar'
import Home from './components/home'
import Presentation from './components/presentation'
import Skills from './components/skills'
import SkillsResp from './components/skillsResp'

function App() {
  
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <Home />
        <Presentation />
        <Skills />
        <SkillsResp />
      </div>
    </>
  )
}

export default App

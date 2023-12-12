import './App.scss'

// import Navbar from './components/Navbar'
import Home from './components/home'
import Presentation from './components/presentation'
import Skills from './components/skills'

function App() {
  
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <Home />
        <Presentation />
        <Skills />
      </div>
    </>
  )
}

export default App

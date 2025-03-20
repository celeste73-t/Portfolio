import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/home.jsx"
import Projects from "./Pages/Projects.jsx"
import About from "./Pages/About.jsx"

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App

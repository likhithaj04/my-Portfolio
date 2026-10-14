import { useState } from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
    </>
  )
}

export default App

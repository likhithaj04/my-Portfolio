import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './Home'
import About from './About'
import Projects from './Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
     <About/>
     <Projects/>
    </>
  )
}

export default App

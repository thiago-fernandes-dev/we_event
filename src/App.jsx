//import { useState } from 'react'
//import viteLogo from '/vite.svg'
import './App.css'
import {Hamburger} from "./components/Hamburger.jsx";
import {LinhasAcessibilidade} from "./components/LinhasAcessibilidade.jsx";
import {ContainerBanner} from "./components/ContainerBanner.jsx";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <header>
      <Hamburger/>
      <LinhasAcessibilidade/>
      <ContainerBanner/>
    </header>
  )
}

export default App

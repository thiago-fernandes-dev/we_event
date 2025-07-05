import './App.css'
import {Hamburger} from "./components/Hamburger.jsx";
import {LinhasAcessibilidade} from "./components/LinhasAcessibilidade.jsx";
import {ContainerBanner} from "./components/ContainerBanner.jsx";
import {ContainerMenu} from "./components/ContainerMenu.jsx";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <header>
      <Hamburger/>
      <LinhasAcessibilidade/>
      <ContainerBanner/>
      <ContainerMenu />
    </header>
  )
}

export default App

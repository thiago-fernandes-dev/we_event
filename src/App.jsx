//App.jsx
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {EventosPage} from "./EventosPage.jsx";
import { Hamburger } from "./components/Hamburger.jsx";
import { LinhasAcessibilidade } from "./components/LinhasAcessibilidade.jsx";
import { ContainerBanner } from "./components/ContainerBanner.jsx";
import { ContainerMenu } from "./components/ContainerMenu.jsx";
import { EventosPrincipais } from "./components/EventosPrincipais.jsx";
import { ContainerCategorias } from "./components/ContainerCategorias.jsx";

function HomePage() {
  return (
    <>
      <Hamburger />
      <LinhasAcessibilidade />
      <ContainerBanner />
      <ContainerMenu />
      <EventosPrincipais />
      <ContainerCategorias />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/eventos" element={<EventosPage />} />
    </Routes>
  );
}

export default App;

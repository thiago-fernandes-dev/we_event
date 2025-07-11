import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CriarConta from "./pages/CriarConta";
import './App.css'
import { Hamburger } from "./components/Hamburger.jsx";
import { LinhasAcessibilidade } from "./components/LinhasAcessibilidade.jsx";
import { ContainerBanner } from "./components/ContainerBanner.jsx";
import { ContainerMenu } from "./components/ContainerMenu.jsx";
import { EventosPrincipais } from "./components/EventosPrincipais.jsx";
import { ContainerCategorias } from "./components/ContainerCategorias.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-4 bg-gray-100">
        <Link
          to="/"
          className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Início
        </Link>
        <Link
          to="/login"
          className="px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          Login
        </Link>
        <Link
          to="/criar-conta"
          className="px-4 py-2 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
        >
          Criar Conta
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <header>
                <Hamburger />
                <LinhasAcessibilidade />
                <ContainerBanner />
              </header>
              <Home />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/criar-conta" element={<CriarConta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

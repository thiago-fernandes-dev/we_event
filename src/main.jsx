import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./components/Login.jsx";
import Cadastro from "./components/Cadastro.jsx";
import {LinhasAcessibilidade} from "./components/LinhasAcessibilidade.jsx";
import {EventosPrincipais} from "./components/EventosPrincipais.jsx";
import {ContainerCategorias} from "./components/ContainerCategorias.jsx";
import {NovosEventos} from "./components/NovosEventos.jsx";
import {RefreshPrincipais} from "./components/RefreshPrincipais.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/cadastro" element={<Cadastro/>}></Route>
              <Route path="/acessibilidade" element={<LinhasAcessibilidade/>}></Route>
              <Route path="/eventos" element={
                  <>
                      <EventosPrincipais />
                      <ContainerCategorias />
                      <NovosEventos />
                  </>
              }></Route>
              <Route path="/novos" element={<RefreshPrincipais/>}></Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)

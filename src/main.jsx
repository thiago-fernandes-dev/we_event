import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import {BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {RouterPage} from "./components/RouterPage.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  </StrictMode>,
)

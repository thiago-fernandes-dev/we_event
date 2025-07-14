import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {MainBody} from "./components/MainBody.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import {Footers} from "./components/Footers.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider>
          <App />
          <MainBody />
          <Footers/>
      </ThemeProvider>
  </StrictMode>,
)

import {MainBody} from "./components/MainBody.jsx";
import {Footers} from "./components/Footers.jsx";
import {ThemeProvider} from "@material-tailwind/react";
import React from "react";
import Header from "./components/Header.jsx";

function App() {

  return (
      <ThemeProvider>
          <Header />
          <MainBody />
          <Footers/>
      </ThemeProvider>
  )
}

export default App

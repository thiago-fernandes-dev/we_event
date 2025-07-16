import React, {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import App from "../App.jsx";
import Cadastro from "./Cadastro.jsx";
import {Login} from "./Login.jsx";
import {LinhasAcessibilidade} from "./LinhasAcessibilidade.jsx";

export function RouterPage(){
    return(
        <Fragment>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/cadastro" element={<Cadastro/>}></Route>
                <Route path="/acessibilidade" element={<LinhasAcessibilidade/>}></Route>
            </Routes>
        </Fragment>
    )
}
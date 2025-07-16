import React, {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import Cadastro from "./Cadastro.jsx";
import {Login} from "./Login.jsx";
import {LinhasAcessibilidade} from "./LinhasAcessibilidade.jsx";

export function LoginBar(){
    return(
        <fragment>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/cadastro" element={<Cadastro/>}></Route>
                <Route path="/acessibilidade" element={<LinhasAcessibilidade/>}></Route>
            </Routes>
        </fragment>
    )
}
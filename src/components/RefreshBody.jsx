import React, {Fragment} from "react";
import {NavLink, Route, Routes,} from "react-router-dom";
import {RefreshPrincipais} from "./RefreshPrincipais.jsx";
import {EventosPrincipais} from "./EventosPrincipais.jsx";
import {ContainerCategorias} from "./ContainerCategorias.jsx";
import {NovosEventos} from "./NovosEventos.jsx";
import {LinhasAcessibilidade} from "./LinhasAcessibilidade.jsx";

export function RefreshBody(){

    return(
        <>
            <Routes>
                <Route path="/eventos" element={
                        <>
                            <EventosPrincipais />
                            <ContainerCategorias />
                            <NovosEventos />
                        </>
                }></Route>
                <Route path="/novos" element={<RefreshPrincipais/>}></Route>
            </Routes>
        </>
    )
}
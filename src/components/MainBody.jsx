import React from "react";
import {ContainerMenu} from "./ContainerMenu.jsx";
import {RefreshBody} from "./RefreshBody.jsx";
import {EventosPrincipais} from "./EventosPrincipais.jsx";
import {ContainerCategorias} from "./ContainerCategorias.jsx";
import {NovosEventos} from "./NovosEventos.jsx";

export function MainBody(){
    return(
        <main>
            <ContainerMenu />
            <EventosPrincipais />
            <ContainerCategorias />
            <NovosEventos />
            {/*<RefreshBody />*/}
        </main>
    )
}